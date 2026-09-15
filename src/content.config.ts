import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaDescription: z.string(),
    icon: z.string(),
    order: z.number(),
    features: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = { servicios };