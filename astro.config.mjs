import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://manuelmendieta21.github.io',
  base: 'PorfolioMM',
  output: 'server',
  adapter: cloudflare(),
});