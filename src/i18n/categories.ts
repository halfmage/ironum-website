/** Display labels for blog categories (the slugs in the content schema). */
const CATEGORY_LABELS: Record<'en' | 'de', Record<string, string>> = {
  en: {
    compliance: 'Compliance',
    implementation: 'Implementation',
    industry: 'Industry',
    'thought-leadership': 'Thought Leadership',
  },
  de: {
    compliance: 'Compliance',
    implementation: 'Umsetzung',
    industry: 'Branchen',
    'thought-leadership': 'Perspektiven',
  },
};

export function categoryLabel(category: string, locale: 'en' | 'de'): string {
  return CATEGORY_LABELS[locale][category] ?? category;
}
