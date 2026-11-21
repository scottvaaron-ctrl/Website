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
    category: z.enum(['Operations', 'Media', 'Tech', 'Research']),
    status: z.enum(['Live', 'Active', 'In development', 'Paused', 'Planned', 'Idea', 'Completed']),
    statusNote: z.string().optional(), // e.g. 'Version 4'
    role: z.string(),
    period: z.coerce.string(), // e.g. "2026 – present"
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]), // used by the filter on the Projects page
    flow: z.array(z.string()).default([]), // "How it works" steps, drawn as a row of boxes
    image: z.string().optional(), // file in public/images/, e.g. 'images/shift-boss-room.jpg'
    imageAlt: z.string().optional(),
    quote: z.string().optional(), // a line in your own words, shown large
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    featured: z.boolean().default(false), // show on the homepage
    order: z.number().default(100), // lower numbers appear first
    hidden: z.boolean().default(false), // true = keep the file but leave it off the site
    placeholder: z.boolean().default(false), // true = only shown while SHOW_PLACEHOLDERS is on
    placeholderLink: z.string().optional(), // button label shown as "coming soon" until links are added
  }),
});

export const collections = { projects };
