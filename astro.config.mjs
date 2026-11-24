// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.2m-arquitectos.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
