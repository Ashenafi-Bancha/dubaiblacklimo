import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { whatsappHref } from '@/lib/contact';
import { EASE_LUXE } from '@/lib/motion';

/**
 * The floating WhatsApp button shown on every page. It sits in the bottom
 * corner at the end of the reading direction and clears the iPhone home bar.
 */
export function WhatsAppButton() {
  const { t } = useTranslation();
  const brand = useBrand();

  return (
    <m.a
      href={whatsappHref(brand.contact.whatsapp, t('whatsapp.prefill'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('common.chatOnWhatsapp')}
      title={t('common.chatOnWhatsapp')}
      className="fixed end-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 flex size-14 items-center justify-center rounded-full border border-gold/50 bg-charcoal text-gold shadow-[0_12px_32px_rgb(0_0_0/0.5)] transition-colors duration-500 ease-luxe hover:border-gold hover:bg-gold hover:text-ink sm:end-8 sm:bottom-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE_LUXE, delay: 1.2 }}
    >
      <WhatsAppIcon className="size-6" />
    </m.a>
  );
}
