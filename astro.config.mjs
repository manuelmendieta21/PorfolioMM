import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';



import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://manuelmendieta21.github.io',
  base: 'PorfolioMM',
  output: 'server',
  adapter: cloudflare(),
});