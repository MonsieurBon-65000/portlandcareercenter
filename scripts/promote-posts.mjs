// Promote the next N queued posts into the live blog.
//
// Run by the scheduled GitHub Action (see .github/workflows/publish.yml), and runnable
// by hand: `node scripts/promote-posts.mjs [count]` (default 1).
//
// Picks the oldest-dated posts in queue/posts first, copies their images into
// public/images, moves the markdown into src/content/blog, and removes them from the
// queue. Committing + pushing the result is what triggers a Cloudflare deploy.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const Q_POSTS = path.join(root, "queue/posts");
const Q_IMAGES = path.join(root, "queue/images");
const BLOG = path.join(root, "src/content/blog");
const PUB_IMAGES = path.join(root, "public/images");

const count = Math.max(1, parseInt(process.argv[2] || process.env.PROMOTE_COUNT || "1", 10));

if (!fs.existsSync(Q_POSTS)) {
  console.log("No queue/posts directory — nothing to promote.");
  process.exit(0);
}

const dateOf = (raw) => ((raw.match(/date:\s*"?(.*?)"?\s*$/m) || [])[1] || "").slice(0, 10);

const queued = fs
  .readdirSync(Q_POSTS)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const raw = fs.readFileSync(path.join(Q_POSTS, f), "utf8");
    return { file: f, raw, date: dateOf(raw) };
  })
  .sort((a, b) => a.date.localeCompare(b.date)); // oldest first

if (queued.length === 0) {
  console.log("Queue is empty — nothing to promote. 🎉");
  process.exit(0);
}

const toPromote = queued.slice(0, count);
fs.mkdirSync(BLOG, { recursive: true });
fs.mkdirSync(PUB_IMAGES, { recursive: true });

const promoted = [];
for (const { file, raw } of toPromote) {
  // copy referenced images
  for (const m of raw.matchAll(/\/images\/([A-Za-z0-9._-]+)/g)) {
    const name = m[1];
    const src = path.join(Q_IMAGES, name);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(PUB_IMAGES, name));
  }
  // move markdown into the live blog
  fs.writeFileSync(path.join(BLOG, file), raw);
  fs.rmSync(path.join(Q_POSTS, file));
  promoted.push(file.replace(/\.md$/, ""));
}

const remaining = queued.length - promoted.length;
console.log(`Promoted ${promoted.length} post(s): ${promoted.join(", ")}`);
console.log(`Queue remaining: ${remaining}`);

// Expose for the workflow's commit message
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    `promoted=${promoted.join(", ")}\ncount=${promoted.length}\nremaining=${remaining}\n`,
  );
}
