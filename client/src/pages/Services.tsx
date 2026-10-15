import { services } from '@app/shared/content/services';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHeader } from '@/components/sections/PageHeader';
import { Seo } from '@/components/Seo';
import { Container, Section } from '@/components/ui/Layout';
import { LocalizedLink } from '@/components/ui/LocalizedLink';
import { Picture } from '@/components/ui/Picture';
import { Rich } from '@/components/ui/Rich';
import { Reveal } from '@/components/ui/Reveal';
import { useLocalize } from '@/i18n/useLocalize';

export default function Services() {
  const { t } = useTranslation();
  const l = useLocalize();

  return (
    <>
      <Seo title={t('services.seoTitle')} description={t('services.seoDescription')} />
      <PageHeader
        image="pages/services"
        eyebrow={t('services.eyebrow')}
        title={<Rich k="services.title" />}
        lead={t('services.lead')}
      />

      <Section>
        <Container>
          <ul className="border-t border-line">
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-line">
                <Reveal>
                  <LocalizedLink
                    to={`/services/${service.slug}`}
                    className="group grid items-center gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-12"
                  >
                    <span aria-hidden="true" className="font-display text-xl text-gold md:col-span-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="md:col-span-6">
                      <h2 className="font-display text-display font-light text-ivory transition-colors duration-500 ease-luxe group-hover:text-gold">
                        {l(service.name)}
                      </h2>
                      <p className="mt-4 max-w-xl text-mist">{l(service.summary)}</p>
                      <span className="mt-6 inline-flex items-center gap-3 text-label font-semibold uppercase text-gold">
                        {t('services.discover')}
                        <ArrowRight
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="size-4 transition-transform duration-700 ease-luxe group-hover:translate-x-1.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-1.5"
                        />
                      </span>
                    </div>
                    <div className="overflow-hidden md:col-span-4 md:col-start-9">
                      <Picture
                        src={service.image}
                        alt=""
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="aspect-3/2 w-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-105"
                      />
                    </div>
                  </LocalizedLink>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
