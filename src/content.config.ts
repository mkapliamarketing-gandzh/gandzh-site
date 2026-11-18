import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    who: z.string(),
    problem: z.string(),
    did: z.string(),
    found: z.string().optional(),
    decision: z.string(),
    metric: z.string().optional(),
    limit: z.string().optional(),
    order: z.number().default(100),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, cases };
