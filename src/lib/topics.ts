// Maps the legacy WordPress category slugs to a clean, consolidated topic taxonomy.
// Some legacy categories are merged (e.g. the two self-employment ones) and the
// "uncategorized" bucket is dropped.

const LABELS: Record<string, { slug: string; label: string }> = {
  "career-transition-strategies": { slug: "career-transition", label: "Career Transition" },
  "job-search": { slug: "job-search", label: "Job Search" },
  "career-exploration": { slug: "career-exploration", label: "Career Exploration" },
  "self-assessment": { slug: "self-assessment", label: "Self-Assessment" },
  "career-development-in-place": { slug: "growing-in-your-role", label: "Growing in Your Role" },
  "personal-growth-and-healing": { slug: "personal-growth", label: "Personal Growth" },
  "networking": { slug: "networking", label: "Networking" },
  "support-systems": { slug: "support-systems", label: "Support Systems" },
  "self-employment": { slug: "self-employment", label: "Self-Employment" },
  "the-self-employment-option": { slug: "self-employment", label: "Self-Employment" },
  "personal-branding": { slug: "personal-branding", label: "Personal Branding" },
  "ages-and-stages": { slug: "ages-and-stages", label: "Ages & Stages" },
  "performance-on-the-job": { slug: "on-the-job", label: "On the Job" },
  "career-job-market-exploration": { slug: "job-market", label: "Job Market" },
  "spirituality": { slug: "meaning-and-purpose", label: "Meaning & Purpose" },
  "work-life-balance": { slug: "work-life-balance", label: "Work–Life Balance" },
  "training-continuing-education": { slug: "education", label: "Education" },
  // dropped: uncategorized
};

export type Topic = { slug: string; label: string };

/** Resolve a post's raw categories into a de-duplicated, ordered list of topics. */
export function topicsFor(categories: string[] | undefined): Topic[] {
  if (!categories) return [];
  const seen = new Map<string, Topic>();
  for (const c of categories) {
    const t = LABELS[c];
    if (t && !seen.has(t.slug)) seen.set(t.slug, t);
  }
  return [...seen.values()];
}

/** All topics that have at least one post, with counts — for the topics index. */
export function allTopics(): Topic[] {
  const seen = new Map<string, Topic>();
  for (const t of Object.values(LABELS)) if (!seen.has(t.slug)) seen.set(t.slug, t);
  return [...seen.values()].sort((a, b) => a.label.localeCompare(b.label));
}

export function labelForSlug(slug: string): string {
  return Object.values(LABELS).find((t) => t.slug === slug)?.label ?? slug;
}
