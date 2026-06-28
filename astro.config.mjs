// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import sentry from '@sentry/astro';

// Source-map upload to Sentry runs ONLY when SENTRY_AUTH_TOKEN is present
// (e.g. CI with the secret set). Without it, `sourcemaps.disable` is true, so
// `npm run build` never requires any Sentry env var and never fails on a
// missing token — upload is simply skipped.
const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN;

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for the sitemap and absolute links.
  site: 'https://portlandcareercenter.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap(),
    sentry({
      org: 'therafi-llc',
      project: 'portlandcareercenter',
      authToken: SENTRY_AUTH_TOKEN,
      telemetry: false,
      sourcemaps: {
        // Best-effort: disabled (no upload, no failure) unless a token is set.
        disable: !SENTRY_AUTH_TOKEN,
      },
    }),
  ]
});