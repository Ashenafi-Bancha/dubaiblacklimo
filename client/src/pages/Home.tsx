import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { Seo } from '@/components/Seo';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import { Container, Section } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { whatsappHref } from '@/lib/contact';

export default function Home() {
  const { t } = useTranslation();
  const brand = useBrand();

  return (
    <>
      <Seo title={t('home.seoTitle')} description={t('home.seoDescription')} />

      <section className="flex min-h-svh items-end bg-[radial-gradient(ellipse_90%_70%_at_75%_0%,var(--color-charcoal),var(--color-ink))]">
        <Container className="pt-40 pb-24 lg:pb-32">
          <Reveal>
            <Eyebrow>{t('home.hero.eyebrow')}</Eyebrow>
          </Reveal>
          <Reveal delay={0.12}>
            <Heading as="h1" size="hero" className="mt-8 max-w-[14ch]">
              {t('home.hero.title')}
            </Heading>
          </Reveal>
          <Reveal delay={0.24}>
            <Lead className="mt-8 max-w-xl">{t('home.hero.lead')}</Lead>
          </Reveal>
          <Reveal delay={0.36} className="mt-12 flex flex-col gap-4 sm:flex-row">
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
        </Container>
      </section>

      <Section tone="charcoal">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>{t('home.intro.eyebrow')}</Eyebrow>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <Heading>{t('home.intro.title')}</Heading>
            </Reveal>
            <Reveal delay={0.12}>
              <Lead className="mt-8 max-w-2xl">{t('home.intro.body')}</Lead>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
