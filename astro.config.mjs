import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://2022victtorsilva-debug.github.io',
  base: '/Fallen-Tatoo-',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
