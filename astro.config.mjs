// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ironum.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: { en: 'en', de: 'de' },
    },
    serialize(item) {
      item.lastmod = new Date().toISOString();
      return item;
    }
  }), mdx()]
});