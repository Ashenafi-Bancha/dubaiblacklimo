import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import { LOCALE_NAMES, localeFromPath, localizePath, type Locale } from '@/i18n/locale';

/**
 * Links to the page being viewed in the other language. The link is written
 * in that language's own script so its speakers can recognise it.
 */
export function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation();
  const { pathname, search, hash } = useLocation();
  const target: Locale = localeFromPath(pathname) === 'en' ? 'ar' : 'en';

  return (
    <Link
      to={{ pathname: localizePath(pathname, target), search, hash }}
      lang={target}
      hrefLang={target}
      aria-label={t('common.switchLanguage', { language: LOCALE_NAMES[target] })}
      onClick={onNavigate}
      className="inline-flex h-11 items-center text-sm font-medium text-mist transition-colors duration-500 ease-luxe hover:text-gold"
    >
      {LOCALE_NAMES[target]}
    </Link>
  );
}
