import { services } from '@app/shared/content/services';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { FleetCarousel } from '@/components/fleet/FleetCarousel';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHeader } from '@/components/sections/PageHeader';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Seo } from '@/components/Seo';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import { Container, Section } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useLocalize } from '@/i18n/useLocalize';
import { whatsappHref } from '@/lib/contact';
import NotFound from './NotFound';

/** The page for one service. Every service page shares this layout and differs only in content. */
export default function ServiceDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const l = useLocalize();
  const brand = useBrand();
  const service = services.find((candidate) => candidate.slug === slug);

  if (!service) return <NotFound />;

  return (
    <>
      <Seo title={l(service.seoTitle)} description={l(service.seoDescription)} />

      <PageHeader image={service.image} eyebrow={t('services.eyebrow')} title={l(service.name)} lead={l(service.summary)}>
        <div className="flex flex-col gap-4 sm:flex-row">
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
        </div>
      </PageHeader>

      <Section>
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-title font-light text-ivory">{l(service.intro)}</p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <div className="border border-line bg-charcoal p-8">
              <h2 className="text-label font-medium uppercase text-gold">{t('services.included')}</h2>
              <ul className="mt-6 space-y-4">
                {service.included.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 text-sm text-mist">
                    <Check aria-hidden="true" strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-gold" />
                    {l(item)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>

        <Container className="mt-24 lg:mt-32">
          <ul className="grid gap-12 border-t border-line pt-12 md:grid-cols-3 md:gap-10 lg:pt-16">
            {service.highlights.map((highlight, index) => (
              <li key={highlight.title.en}>
                <Reveal delay={index * 0.1}>
                  <span aria-hidden="true" className="font-display text-xl text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-4 font-display text-title font-light text-ivory">{l(highlight.title)}</h2>
                  <p className="mt-3 text-mist">{l(highlight.body)}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <section className="border-t border-line bg-ink py-24 md:py-32">
        <FleetCarousel
          heading={<SectionHeading eyebrow={t('services.fleetEyebrow')} title={t('services.fleetTitle')} />}
        />
      </section>

      <CtaBand />
    </>
  );
}
