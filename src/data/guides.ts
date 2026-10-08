// PDF guides behind a light, soft gate: the path appears in the page script and the no-JS
// download page by design. The content hash in the filename is for cache-busting: rebuild →
// new hash → browsers and CDNs never serve a stale PDF. /guides/* is noindex via netlify.toml.
// Page counts, titles and notes are read from here everywhere; keep them in sync with the PDF.
export interface Guide {
  id: 'pm' | 'po';
  title: string;
  /** Plural reader noun, e.g. "product owners". */
  audience: string;
  pages: string;
  file: string;
  /** Where to start reading, shown after the download unlocks. Check against the PDF. */
  startNote: string;
  landing: string;
}

export const GUIDES: Record<Guide['id'], Guide> = {
  pm: {
    id: 'pm',
    title: 'AI for product managers',
    audience: 'product managers',
    pages: '26 pages',
    file: '/guides/ai-for-product-managers-856e36e0f7399ea9.pdf',
    startNote: 'The twenty-minute path starts on page three.',
    landing: '/resources/guides/ai-for-product-managers/',
  },
  po: {
    id: 'po',
    title: 'AI for product owners',
    audience: 'product owners',
    pages: '21 pages',
    file: '/guides/ai-for-product-owners-61db895d9cc31da3.pdf',
    startNote: 'Part 0, six things nobody told you, starts on page four. The prompt pack is on page fifteen.',
    landing: '/resources/guides/ai-for-product-owners/',
  },
};

/** No-JS fallback: the form posts natively and Netlify redirects here. */
export const downloadPath = (id: Guide['id']) => `/resources/guides/download/${id}/`;
