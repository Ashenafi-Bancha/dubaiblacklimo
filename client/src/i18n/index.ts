import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { applyDocumentLocale, DEFAULT_LOCALE, localeFromPath } from './locale';
import ar from './locales/ar.json';
import en from './locales/en.json';

const initialLocale = localeFromPath(window.location.pathname);
applyDocumentLocale(initialLocale);

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: initialLocale,
  fallbackLng: DEFAULT_LOCALE,
  // React already escapes rendered text.
  interpolation: { escapeValue: false },
});

export default i18n;
