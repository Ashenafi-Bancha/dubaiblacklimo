import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { PageHeader } from '@/components/sections/PageHeader';
import { Seo } from '@/components/Seo';
import { Container, Section } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useLocale } from '@/i18n/useLocale';
import { mailHref, telHref, whatsappHref } from '@/lib/contact';

const valueLink = 'transition-colors duration-500 ease-luxe hover:text-gold';

function Method({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-5 border-b border-line py-7">
      <span className="mt-1 text-gold">{icon}</span>
      <div className="min-w-0">
        <dt className="text-label font-medium uppercase text-stone">{label}</dt>
        <dd className="mt-2 text-ivory">{children}</dd>
      </div>
    </div>
  );
}

/** A keyless OpenStreetMap embed centred on the office, with a marker. */
function mapEmbedUrl(lat: number, lng: number): string {
  const span = { lat: 0.012, lng: 0.02 };
  const bbox = [lng - span.lng, lat - span.lat, lng + span.lng, lat + span.lat].join(',');
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
}

export default function Contact() {
  const { t } = useTranslation();
  const { contact } = useBrand();
  const locale = useLocale();
  const { lat, lng } = contact.location;
  const iconProps = { 'aria-hidden': true, strokeWidth: 1.25, className: 'size-5' } as const;

  return (
    <>
      <Seo title={t('contact.seoTitle')} description={t('contact.seoDescription')} />
      <PageHeader eyebrow={t('contact.eyebrow')} title={t('contact.title')} lead={t('contact.lead')} />

      <Section>
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <dl className="border-t border-line">
              <Method icon={<Phone {...iconProps} />} label={t('contact.phone')}>
                <a href={telHref(contact.phone)} className={`font-display text-3xl font-light ${valueLink}`}>
                  <span dir="ltr">{contact.phone}</span>
                </a>
              </Method>
              <Method icon={<WhatsAppIcon className="size-5" />} label={t('contact.whatsapp')}>
                <a
                  href={whatsappHref(contact.whatsapp, t('whatsapp.prefill'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-display text-3xl font-light ${valueLink}`}
                >
                  <span dir="ltr">{contact.whatsapp}</span>
                </a>
              </Method>
              <Method icon={<Mail {...iconProps} />} label={t('contact.email')}>
                <a href={mailHref(contact.email)} className={`break-all ${valueLink}`}>
                  {contact.email}
                </a>
              </Method>
              <Method icon={<MapPin {...iconProps} />} label={t('contact.office')}>
                {contact.address[locale]}
              </Method>
              <Method icon={<Clock {...iconProps} />} label={t('contact.hours')}>
                {contact.hours[locale]}
              </Method>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <div className="overflow-hidden border border-line bg-charcoal">
              {/* The filter turns the standard light map into one that suits the dark page. */}
              <iframe
                title={t('contact.mapTitle')}
                src={mapEmbedUrl(lat, lng)}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="block h-[26rem] w-full contrast-[.9] grayscale invert-[.92] lg:h-[32rem]"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 items-center gap-2 text-label font-semibold uppercase text-gold transition-colors duration-500 ease-luxe hover:text-gold-soft"
            >
              {t('contact.openMap')}
              <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-4 rtl:-scale-x-100" />
            </a>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
