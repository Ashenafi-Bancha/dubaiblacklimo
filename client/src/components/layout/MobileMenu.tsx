import { AnimatePresence, m } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import { Container, Hairline } from '@/components/ui/Layout';
import { LocalizedNavLink } from '@/components/ui/LocalizedLink';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useModalBehaviour } from '@/hooks/useModalBehaviour';
import { telHref, whatsappHref } from '@/lib/contact';
import { EASE_LUXE } from '@/lib/motion';
import { primaryNav } from '@/lib/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Wordmark } from './Wordmark';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/** The full-screen navigation shown on phones and tablets. */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const brand = useBrand();
  const panelRef = useRef<HTMLDivElement>(null);
  useModalBehaviour(panelRef, open, onClose);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.menu')}
          className="fixed inset-0 z-60 flex flex-col overflow-y-auto bg-ink lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_LUXE }}
        >
          <Container className="flex h-18 shrink-0 items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={onClose}
              aria-label={t('nav.closeMenu')}
              className="-me-3 flex size-11 items-center justify-center text-ivory transition-colors duration-500 hover:text-gold"
            >
              <X aria-hidden="true" strokeWidth={1.25} className="size-6" />
            </button>
          </Container>

          <nav aria-label={t('nav.primary')} className="flex flex-1 items-center py-10">
            <Container>
              <ul className="space-y-2">
                {primaryNav.map((item, index) => (
                  <m.li
                    key={item.to}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE_LUXE, delay: 0.12 + index * 0.06 }}
                  >
                    <LocalizedNavLink
                      to={item.to}
                      onClick={onClose}
                      className="block py-2 font-display text-4xl font-light text-ivory transition-colors duration-500 hover:text-gold aria-[current=page]:text-gold"
                    >
                      {t(item.labelKey)}
                    </LocalizedNavLink>
                  </m.li>
                ))}
              </ul>
            </Container>
          </nav>

          <Container className="shrink-0 pb-[calc(2rem+env(safe-area-inset-bottom))]">
            <Hairline />
            <div className="flex items-center justify-between py-4">
              <LanguageSwitcher onNavigate={onClose} />
              <a
                href={telHref(brand.contact.phone)}
                className="inline-flex h-11 items-center gap-3 text-sm text-mist transition-colors duration-500 hover:text-gold"
              >
                <Phone aria-hidden="true" strokeWidth={1.25} className="size-4 text-gold" />
                <span dir="ltr">{brand.contact.phone}</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ButtonAnchor
                href={whatsappHref(brand.contact.whatsapp, t('whatsapp.prefill'))}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <WhatsAppIcon className="size-4" />
                {t('common.whatsapp')}
              </ButtonAnchor>
              <ButtonLink to="/book" onClick={onClose}>
                {t('common.bookNow')}
              </ButtonLink>
            </div>
          </Container>
        </m.div>
      )}
    </AnimatePresence>
  );
}
