// Gated PDF guides. Filenames carry a content hash so they are not guessable; /guides/*
// is noindex via netlify.toml. Re-hash the filename whenever a PDF is rebuilt.
export interface Guide {
  id: 'pm' | 'po';
  title: string;
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
    pages: '26 pages',
    file: '/guides/ai-for-product-managers-856e36e0f7399ea9.pdf',
    startNote: 'The twenty-minute path starts on page three.',
    landing: '/resources/guides/ai-for-product-managers/',
  },
  po: {
    id: 'po',
    title: 'AI for product owners',
    pages: '21 pages',
    file: '/guides/ai-for-product-owners-61db895d9cc31da3.pdf',
    startNote: 'Part 0, six things nobody told you, starts on page four. The prompt pack is on page fifteen.',
    landing: '/resources/guides/ai-for-product-owners/',
  },
};

/** No-JS fallback: the form posts natively and Netlify redirects here. */
export const downloadPath = (id: Guide['id']) => `/resources/guides/download/${id}/`;
