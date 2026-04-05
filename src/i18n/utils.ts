import { en } from './translations/en';
import { de } from './translations/de';
import { getAlternateUrl } from './routes';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if ((locales as readonly string[]).includes(lang)) return lang as Locale;
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

const translations = { en, de } as const;

export function useTranslations(locale: Locale) {
  return translations[locale];
}

export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  const currentLocale: Locale = targetLocale === 'de' ? 'en' : 'de';
  return getAlternateUrl(currentPath, currentLocale);
}
