import { ArrowRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout';
import { Picture } from '@/components/ui/Picture';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { telHref, whatsappHref } from '@/lib/contact';

/**
 * The closing call to action shown at the foot of most pages: book online,
 * WhatsApp, or call.
 */
export function CtaBand() {
  const { t } = useTranslation();
  const brand = useBrand();

  return (
    <section className="relative isolate overflow-hidden border-t border-line">
      <div className="absolute inset-0 -z-10">
        <Picture src="home/cta" alt="" sizes="(max-width: 640px) 250vw, 100vw" className="size-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
      </div>

      <Container className="flex flex-col items-center py-28 text-center md:py-40">
        <Reveal>
          <Eyebrow>{t('cta.eyebrow')}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <Heading className="mt-8">{t('cta.title')}</Heading>
        </Reveal>
        <Reveal delay={0.2}>
          <Lead className="mt-6 max-w-xl">{t('cta.body')}</Lead>
        </Reveal>
        <Reveal delay={0.3} className="mt-12 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <ButtonLink to="/book" size="lg">
            {t('common.reserve')}
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 rtl:-scale-x-100" />
          </ButtonLink>
          <ButtonAnchor
            href={whatsappHref(brand.contact.whatsapp, t('whatsapp.prefill'))}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            <WhatsAppIcon className="size-4" />
            {t('common.chatOnWhatsapp')}
          </ButtonAnchor>
        </Reveal>
        <Reveal delay={0.4} className="mt-8">
          <a
            href={telHref(brand.contact.phone)}
            className="inline-flex h-11 items-center gap-3 text-sm text-mist transition-colors duration-500 ease-luxe hover:text-gold"
          >
            <Phone aria-hidden="true" strokeWidth={1.25} className="size-4 text-gold" />
            <span className="sr-only">{t('common.call')}</span>
            <span dir="ltr">{brand.contact.phone}</span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
