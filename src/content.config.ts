import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file in src/content/projects/ = one project card + one project page.
// If a required field is missing or misspelled, the build stops with an error
// instead of publishing a broken page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one line, shown on cards
    category: z.enum(['Operations', 'Media', 'Tech']),
    status: z.enum(['Live', 'Active', 'In development', 'Paused', 'Planned', 'Idea', 'Completed']),
    role: z.string(),
    period: z.string(), // e.g. "2026 – present"
    tools: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    featured: z.boolean().default(false), // show on the homepage
    order: z.number().default(100), // lower numbers appear first
    hidden: z.boolean().default(false), // true = keep the file but leave it off the site
  }),
});

export const collections = { projects };
