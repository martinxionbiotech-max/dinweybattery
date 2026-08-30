import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dinweybattery.com',
  output: 'static',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
