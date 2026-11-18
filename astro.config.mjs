// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Адреса сайту для sitemap і канонічних посилань.
// Коли з'явиться свій домен, додай у Vercel змінну SITE_URL=https://твійдомен.
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
