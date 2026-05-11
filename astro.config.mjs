// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const SITE = 'https://ironum.com';

// EN path → DE path. Listed without trailing slash; trailing slash added at lookup time.
const EN_TO_DE = {
  '/': '/de/',
  '/about': '/de/ueber-uns',
  '/contact': '/de/kontakt',
  '/imprint': '/de/impressum',
  '/privacy': '/de/datenschutz',
  '/industries': '/de/branchen',
  '/industries/education': '/de/branchen/bildung',
  '/industries/financial-services': '/de/branchen/finanzdienstleistungen',
  '/industries/healthcare': '/de/branchen/gesundheitswesen',
  '/industries/legal': '/de/branchen/recht',
  '/industries/manufacturing': '/de/branchen/fertigung',
  '/industries/public-sector': '/de/branchen/oeffentlicher-sektor',
  '/platform': '/de/plattform',
  '/platform/compliance': '/de/plattform/compliance',
  '/platform/deployment': '/de/plattform/bereitstellung',
  '/services': '/de/dienstleistungen',
  '/services/ai-consulting': '/de/dienstleistungen/ki-beratung',
  '/services/chatbot-interfaces': '/de/dienstleistungen/chatbot-schnittstellen',
  '/services/enterprise-rag': '/de/dienstleistungen/enterprise-rag',
  '/services/geo-optimization': '/de/dienstleistungen/geo-optimierung',
  '/services/llm-fine-tuning': '/de/dienstleistungen/llm-feinabstimmung',
  '/services/workflow-automation': '/de/dienstleistungen/workflow-automatisierung',
  '/resources': '/de/ressourcen',
  '/resources/blog': '/de/ressourcen/blog',
  // Blog post pairs (only true 1:1 translations)
  '/resources/blog/chatbot-own-data-gdpr-sme': '/de/ressourcen/blog/chatbot-eigene-daten-dsgvo-mittelstand',
};

// Build reverse lookup and normalized URL pair table once.
const PAIRS = Object.entries(EN_TO_DE).map(([en, de]) => {
  const enUrl = SITE + (en === '/' ? '/' : `${en}/`);
  const deUrl = SITE + (de.endsWith('/') ? de : `${de}/`);
  return { enUrl, deUrl };
});
const URL_TO_PAIR = new Map();
for (const pair of PAIRS) {
  URL_TO_PAIR.set(pair.enUrl, pair);
  URL_TO_PAIR.set(pair.deUrl, pair);
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
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
      if (item.url.includes('/blog/') && item.url !== 'https://ironum.com/resources/blog/') {
        item.changefreq = 'monthly';
        item.priority = 0.7;
      } else if (item.url === 'https://ironum.com/' || item.url === 'https://ironum.com/de/') {
        item.changefreq = 'weekly';
        item.priority = 1.0;
      } else {
        item.changefreq = 'monthly';
        item.priority = 0.8;
      }

      const pair = URL_TO_PAIR.get(item.url);
      if (pair) {
        item.links = [
          { lang: 'en', url: pair.enUrl },
          { lang: 'de', url: pair.deUrl },
          { lang: 'x-default', url: pair.enUrl },
        ];
      }

      return item;
    }
  }), mdx()]
});
