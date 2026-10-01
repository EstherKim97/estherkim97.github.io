import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { groupNames, trackNames } from './lib/settings';

const groups = groupNames() as [string, ...string[]];
const tracks = trackNames() as [string, ...string[]];

const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    group: z.enum(groups, { errorMap: () => ({ message: `"group" must be one of: ${groups.join(' | ')}` }) }),
    tracks: z.array(z.enum(tracks, { errorMap: () => ({ message: `"tracks" can only use: ${tracks.join(' | ')}` }) })).default([]),
    tags: z.array(z.string()).default([]),
    award: z.string().nullish(),
    year: z.coerce.string().default(''),
    period: z.string().nullish(),
    context: z.string().nullish(),
    team: z.string().nullish(),
    role: z.string().nullish(),
    stack: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    featured: z.number().nullish(),
    order: z.number().default(99),
    hidden: z.boolean().default(false),
    experience: z.boolean().default(false),
    stats: z.array(z.object({ value: z.coerce.string(), label: z.string() })).default([]),
    stages: z.array(z.object({ name: z.string(), text: z.string(), by: z.string() })).default([]),
    screenshots: z.array(z.object({ src: z.string(), caption: z.string().default('') })).default([]),
    cover: z.string().nullish(),
  }),
});

export const collections = { projects };
