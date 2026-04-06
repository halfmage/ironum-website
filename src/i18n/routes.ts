/** Bidirectional route mapping between EN and DE slugs */

export const enToDe: Record<string, string> = {
  '/': '/de/',
  '/services': '/de/dienstleistungen/',
  '/services/ai-consulting': '/de/dienstleistungen/ki-beratung/',
  '/services/workflow-automation': '/de/dienstleistungen/workflow-automatisierung/',
  '/services/enterprise-rag': '/de/dienstleistungen/enterprise-rag/',
  '/services/chatbot-interfaces': '/de/dienstleistungen/chatbot-schnittstellen/',
  '/services/llm-fine-tuning': '/de/dienstleistungen/llm-feinabstimmung/',
  '/services/geo-optimization': '/de/dienstleistungen/geo-optimierung/',
  '/industries': '/de/branchen/',
  '/industries/legal': '/de/branchen/recht/',
  '/industries/manufacturing': '/de/branchen/fertigung/',
  '/industries/financial-services': '/de/branchen/finanzdienstleistungen/',
  '/industries/education': '/de/branchen/bildung/',
  '/industries/healthcare': '/de/branchen/gesundheitswesen/',
  '/industries/public-sector': '/de/branchen/oeffentlicher-sektor/',
  '/platform': '/de/plattform/',
  '/platform/compliance': '/de/plattform/compliance/',
  '/platform/deployment': '/de/plattform/bereitstellung/',
  '/about': '/de/ueber-uns/',
  '/contact': '/de/kontakt/',
  '/imprint': '/de/impressum/',
  '/privacy': '/de/datenschutz/',
  '/resources': '/de/ressourcen/',
  '/resources/blog': '/de/ressourcen/blog/',
};

/** Reverse mapping: DE paths → EN paths */
export const deToEn: Record<string, string> = Object.fromEntries(
  Object.entries(enToDe).map(([en, de]) => {
    const deClean = de.replace(/\/$/, '') || '/de';
    const enWithSlash = en === '/' ? '/' : en + '/';
    return [deClean, enWithSlash];
  })
);

/** Get the alternate language path for a given URL */
export function getAlternateUrl(pathname: string, currentLocale: 'en' | 'de'): string {
  const clean = pathname.replace(/\/$/, '') || '/';

  if (currentLocale === 'en') {
    return enToDe[clean] || `/de${pathname}`;
  }
  return deToEn[clean] || pathname.replace(/^\/de/, '') || '/';
}
