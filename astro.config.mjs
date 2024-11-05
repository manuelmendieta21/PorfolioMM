import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://manuelmendieta21.github.io',
  base: '/PorfolioMM', // Asegúrate de que haya una barra al principio
  output: 'server',
  adapter: node({ mode: 'standalone' }), // Especifica el modo aquí
});