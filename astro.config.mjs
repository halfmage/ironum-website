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
      if (item.url.includes('/blog/') && item.url !== 'https://www.ironum.com/resources/blog/') {
        item.changefreq = 'monthly';
        item.priority = 0.7;
      } else if (item.url === 'https://www.ironum.com/' || item.url === 'https://www.ironum.com/de/') {
        item.changefreq = 'weekly';
        item.priority = 1.0;
      } else {
        item.changefreq = 'monthly';
        item.priority = 0.8;
      }
      return item;
    }
  }), mdx()]
});