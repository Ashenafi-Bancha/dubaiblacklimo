import { useLocation } from 'react-router';
import { localeFromPath, type Locale } from './locale';

/** The language of the page being viewed, read from the URL. */
export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname);
}
