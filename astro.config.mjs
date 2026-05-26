// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for the sitemap and absolute links.
  site: 'https://portlandcareercenter.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});