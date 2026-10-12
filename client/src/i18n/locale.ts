import type { LocaleCode } from '@brand';

/**
 * LANGUAGE AND URL
 *
 * The URL decides the language: English lives at the root ("/fleet") and Arabic
 * under "/ar" ("/ar/fleet"). That gives each language its own indexable address
 * and makes every page shareable in the language it was read in.
 */
export type Locale = LocaleCode;

export const LOCALES: readonly Locale[] = ['en', 'ar'];
export const DEFAULT_LOCALE: Locale = 'en';

/** Each language's own name, shown in the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = { en: 'English', ar: 'العربية' };

const AR_PREFIX = '/ar';

export function localeFromPath(pathname: string): Locale {
  return pathname === AR_PREFIX || pathname.startsWith(`${AR_PREFIX}/`) ? 'ar' : 'en';
}

/** Removes the language prefix: "/ar/fleet" becomes "/fleet", "/ar" becomes "/". */
export function stripLocale(pathname: string): string {
  if (localeFromPath(pathname) === DEFAULT_LOCALE) return pathname || '/';
  return pathname.slice(AR_PREFIX.length) || '/';
}

/** Rewrites a path for the given language: ("/fleet", "ar") becomes "/ar/fleet". */
export function localizePath(path: string, locale: Locale): string {
  const bare = stripLocale(path);
  if (locale === DEFAULT_LOCALE) return bare;
  return bare === '/' ? AR_PREFIX : `${AR_PREFIX}${bare}`;
}

export function directionOf(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

/** Keeps <html lang dir> in step with the language, which is what flips the layout to RTL. */
export function applyDocumentLocale(locale: Locale): void {
  document.documentElement.lang = locale;
  document.documentElement.dir = directionOf(locale);
}
