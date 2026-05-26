# Portland Career Center — Owner's Manual

A plain-language guide to running this site. No coding experience required for the common tasks.

## The big picture

- The site is built with **Astro** (a static-site tool) and lives in this folder (`site/`).
- The source of truth is the **GitHub repo**: `github.com/MonsieurBon-65000/portlandcareercenter`.
- **Publishing is automatic.** Whenever changes are pushed to the `main` branch on GitHub,
  **Cloudflare Pages** rebuilds and deploys the live site at **portlandcareercenter.com** within
  a minute or two. You never deploy by hand.

So the whole workflow is: **edit a file → commit → push → it's live.**

```bash
cd site
# (make your edits)
npm run dev          # optional: preview locally at http://localhost:4321
git add -A
git commit -m "describe what you changed"
git push             # this publishes it
```

If you'd rather not touch the command line, you can edit any file directly on
github.com (click the file → pencil icon → "Commit changes") and Cloudflare deploys it the same way.

---

## Common tasks

### Add a new blog article

Articles live in `src/content/blog/`. Each is a Markdown file. The fastest way is to copy the
shape of an existing one. A file looks like:

```markdown
---
title: "Your Article Title"
slug: your-article-title
date: "2026-05-26"
categories: ["job-search", "networking"]
---

Your article body in **Markdown**. Headings use `##`, lists use `-`, links use [text](https://...).
```

- **`title`** — shown as the headline.
- **`slug`** — the URL (`/blog/your-article-title`). Use lowercase-with-hyphens.
- **`date`** — not shown on the page (dates are hidden site-wide), but used for ordering and the
  sitemap. Use today's date for new posts.
- **`categories`** — drive the topic tags. Use the slugs from the **Topic list** below.

Save the file, commit, push. Done.

### Publish more articles from the original archive (the 160 not yet live)

All 195 migrated posts are parsed and waiting in
`../CCPP/import/out/posts/`. To see the full list grouped by topic (with ✅ marking what's
already live), open **`../CCPP/import/out/ALL-POSTS.md`**.

To publish more of them:

1. Open `../CCPP/import/import-selected.mjs` and add the post's `slug` to the `SLUGS` list.
2. Run it: `cd ../CCPP/import && node import-selected.mjs`
3. Back in `site/`, commit and push.

This copies the article and any images automatically.

### Edit the team / add or remove a counselor

The team is one file: **`src/data/team.ts`**. Each person is a block with name, credentials,
photo, practice, website, email, phone, an optional `note` (like "Retired"), and a `bio`.
Edit the text, add a new block, or delete one. To change a photo, drop the image in
`public/images/` and point `photo` at it (e.g. `/images/janedoe.jpg`).

The team automatically appears on both the **home page** and **Our Team** page — edit once.

### Edit a page (About, Choosing a Counselor)

These are Markdown files in `src/pages/`:
- `about.md` — the About page
- `choosing-a-counselor.md` — the "Find a Counselor" guide

Edit the text below the `---` block and push.

### Add an image

Put image files in `public/images/`. Reference them in Markdown as `![description](/images/file.jpg)`
or in the team file as `/images/file.jpg`. Keep filenames lowercase-with-hyphens.

### Change the menu, header, or footer

These live in `src/layouts/Layout.astro`. The menu is the `nav` list near the top — add or remove
`{ href: "/path", label: "Menu Text" }` entries.

---

## Topics

Articles are tagged by topic via the `categories` field. Topics show as tags at the top of each
article and power the **Topics** browse pages. The available topic slugs (left) and how they
display (right) are defined in `src/lib/topics.ts`:

| use this slug | shows as |
|---|---|
| `career-transition-strategies` | Career Transition |
| `job-search` | Job Search |
| `career-exploration` | Career Exploration |
| `self-assessment` | Self-Assessment |
| `career-development-in-place` | Growing in Your Role |
| `personal-growth-and-healing` | Personal Growth |
| `networking` | Networking |
| `support-systems` | Support Systems |
| `self-employment` | Self-Employment |
| `personal-branding` | Personal Branding |
| `ages-and-stages` | Ages & Stages |
| `performance-on-the-job` | On the Job |
| `career-job-market-exploration` | Job Market |
| `spirituality` | Meaning & Purpose |
| `work-life-balance` | Work–Life Balance |
| `training-continuing-education` | Education |

To rename a topic or add a new one, edit `src/lib/topics.ts`.

---

## Automatic publishing (the drip schedule)

The site publishes archived articles for you on a schedule — no action needed. Here's how it works:

- The 160 not-yet-live articles (and their images) sit in the repo's **`queue/`** folder. Astro
  ignores this folder, so queued posts are *not* on the live site until they're promoted.
- A **GitHub Action** (`.github/workflows/publish.yml`) runs automatically on the **1st and 15th of
  every month** (~6–7am Pacific). Each run promotes the **oldest** queued post into the live blog,
  commits, and pushes — which triggers a Cloudflare deploy. That's **2 posts per month**, spaced out.
- At this rate the queue lasts about **6–7 years**. When the queue empties, the Action simply does
  nothing.

### Publish one (or several) right now

You don't have to wait for the schedule. On GitHub:

1. Go to the repo → **Actions** tab → **"Publish queued posts"** (left sidebar).
2. Click **"Run workflow"**, optionally set how many to publish (default 1), and confirm.

Or from the command line: `cd site && node scripts/promote-posts.mjs 3` then commit and push.

### Change the cadence

Edit the `cron` line in `.github/workflows/publish.yml`:
- One per month (1st only): `cron: "0 14 1 * *"`
- Weekly (every Monday): `cron: "0 14 * * 1"`
- To publish **more than one per run**, change the default `count` and/or the number passed to
  `promote-posts.mjs` in the workflow.

### Choose what publishes next / reorder the queue

Posts are promoted **oldest-date-first**. To bump a specific article to the front, open its file in
`queue/posts/` and change the `date:` in its frontmatter to an earlier date. To skip one entirely,
delete it from `queue/posts/`. To preview everything in the queue, see
`../CCPP/import/out/ALL-POSTS.md`.

## Dates & SEO

- Visible dates are **hidden** everywhere, so content reads as evergreen.
- For search engines, each page is listed in the **sitemap** (`/sitemap-index.xml`) with its date,
  generated automatically on every build.
- The drip schedule above is itself an SEO strategy: a steady stream of fresh, indexable pages
  signals an active site to Google and grows your search footprint over time.

---

## If something breaks

- A bad edit won't take the live site down instantly — Cloudflare only deploys a build that
  succeeds. If a build fails, the previous version stays live.
- To check a build before pushing: run `npm run build` in `site/`. If it completes without errors,
  you're good.
- Cloudflare keeps a history of deployments; you can roll back to a previous one from the Cloudflare
  Pages dashboard if needed.

---

## Quick reference

| I want to… | Edit this |
|---|---|
| Add/edit an article | `src/content/blog/*.md` |
| Publish queued posts now | Actions tab → "Publish queued posts" → Run workflow |
| Change publish cadence | `.github/workflows/publish.yml` (the `cron` line) |
| Reorder/skip the queue | `queue/posts/*.md` (edit `date:` or delete) |
| Edit the team | `src/data/team.ts` |
| Edit About / Find a Counselor | `src/pages/about.md`, `src/pages/choosing-a-counselor.md` |
| Add an image | `public/images/` |
| Change menu / footer | `src/layouts/Layout.astro` |
| Rename/add a topic | `src/lib/topics.ts` |
| See all archived posts | `../CCPP/import/out/ALL-POSTS.md` |
