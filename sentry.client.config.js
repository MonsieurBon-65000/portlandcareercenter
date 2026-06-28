import * as Sentry from '@sentry/astro';

// DSN is public/inline by design (it's safe to expose client-side).
// This is a STATIC Astro build (no SSR adapter), so only client-side
// (browser) JS errors are captured — there is no server runtime.
Sentry.init({
  dsn: 'https://99ed1132423bbc006fa9f0e634e4cbae@o4511640465440768.ingest.us.sentry.io/4511640789188608',
  tracesSampleRate: 0.1,
  // Session replay is intentionally NOT enabled (no replayIntegration,
  // replaysSessionSampleRate left at its default of 0).
});
