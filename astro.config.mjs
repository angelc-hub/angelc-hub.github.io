import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia `site` por tu dominio real (Vercel, Netlify o GitHub Pages).
export default defineConfig({
  site: 'https://angelc-hub.github.io',
  integrations: [sitemap()],
});
