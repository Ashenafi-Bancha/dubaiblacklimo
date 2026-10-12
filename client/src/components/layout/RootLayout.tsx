import { AnimatePresence, m } from 'framer-motion';
import { Suspense, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useOutlet } from 'react-router';
import { PageLoader } from '@/components/ui/PageLoader';
import i18n from '@/i18n';
import { applyDocumentLocale } from '@/i18n/locale';
import { useLocale } from '@/i18n/useLocale';
import { EASE_LUXE } from '@/lib/motion';
import { Footer } from './Footer';
import { Header } from './Header';
import { WhatsAppButton } from './WhatsAppButton';

/**
 * The frame around every page: header, footer, floating WhatsApp button, and
 * the cross-fade between pages. It also keeps the translation library and the
 * document's language and direction in step with the URL.
 */
export function RootLayout() {
  const { t } = useTranslation();
  const location = useLocation();
  // `useOutlet` hands back the current page as an element, so the outgoing page
  // can stay on screen while it fades out.
  const outlet = useOutlet();
  const locale = useLocale();

  useLayoutEffect(() => {
    applyDocumentLocale(locale);
    if (i18n.language !== locale) void i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-70 focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        {t('common.skipToContent')}
      </a>

      <Header />

      <AnimatePresence
        mode="wait"
        initial={false}
        // Jump to the top between pages, while nothing is on screen.
        onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}
      >
        <m.main
          id="main"
          key={location.pathname}
          tabIndex={-1}
          className="min-h-svh outline-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_LUXE }}
        >
          <Suspense fallback={<PageLoader />}>{outlet}</Suspense>
        </m.main>
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
