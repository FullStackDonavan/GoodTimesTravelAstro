import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

import { imagetools } from 'vite-imagetools';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [vue(), tailwind()],
  content: {
    collections: {
      posts: './src/content/posts/*.md',
    },
  },
  vite: {
    plugins: [imagetools()],
  },
});