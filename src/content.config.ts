import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The migrated WordPress posts will land in src/content/blog/*.md.
// Frontmatter matches what parse-wxr.mjs emits (title, slug, date, categories).
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    categories: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
