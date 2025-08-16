import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
});

export const collections = { games };
