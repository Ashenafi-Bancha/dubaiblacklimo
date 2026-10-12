import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHeader } from '@/components/sections/PageHeader';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Seo } from '@/components/Seo';
import { Container, Section } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';
import { useLocale } from '@/i18n/useLocale';

const VALUES = ['punctuality', 'discretion', 'presentation', 'safety'];

/**
 * The About page. Its copy describes the standard of service and makes no
 * claims about history, size or awards: the operator should add their own
 * story in src/i18n/locales (the "about" section).
 */
export default function About() {
  const { t } = useTranslation();
  const brand = useBrand();
  const locale = useLocale();

  return (
    <>
      <Seo title={t('about.seoTitle')} description={t('about.seoDescription')} />
      <PageHeader image="about/hero" eyebrow={t('about.eyebrow')} title={t('about.title')} lead={t('about.lead')} />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{t('about.story.eyebrow')}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <Heading className="mt-8">{t('about.story.title')}</Heading>
            </Reveal>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <Lead>{t('about.story.first')}</Lead>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-mist">{t('about.story.second')}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="charcoal">
        <Container>
          <SectionHeading eyebrow={t('about.values.eyebrow')} title={t('about.values.title')} />
          <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((key, index) => (
              <li key={key}>
                <Reveal delay={index * 0.08} className="border-t border-gold/50 pt-8">
                  <h3 className="font-display text-2xl font-light text-ivory">{t(`about.values.${key}.title`)}</h3>
                  <p className="mt-3 text-sm text-mist">{t(`about.values.${key}.body`)}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-sm text-stone">
            {t('footer.licence', { authority: brand.licence.authority[locale], number: brand.licence.number })}
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
