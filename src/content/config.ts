import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Ironum Team'),
    category: z.enum(['compliance', 'implementation', 'industry', 'thought-leadership']),
    tags: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    downloadUrl: z.string().optional(),
  }),
});

export const collections = { blog, guides };
