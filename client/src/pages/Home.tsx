import { services } from '@app/shared/content/services';
import { useTranslation } from 'react-i18next';
import { FleetShowcase } from '@/components/fleet/FleetShowcase';
import { CtaBand } from '@/components/sections/CtaBand';
import { Destinations } from '@/components/sections/Destinations';
import { Experience } from '@/components/sections/Experience';
import { HomeHero } from '@/components/sections/HomeHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { Statement } from '@/components/sections/Statement';
import { Testimonials } from '@/components/sections/Testimonials';
import { TrustBar } from '@/components/sections/TrustBar';
import { Seo } from '@/components/Seo';
import { Container, Section } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { TextLink } from '@/components/ui/TextLink';

/** The home page shows the first six services; all of them are on the Services page. */
const FEATURED_SERVICES = 6;

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('home.seoTitle')} description={t('home.seoDescription')} />

      <HomeHero />
      <TrustBar />
      <Statement />
      <FleetShowcase />

      <Section tone="charcoal">
        <Container>
          <SectionHeading
            eyebrow={t('home.services.eyebrow')}
            title={<Rich k="home.services.title" />}
            action={<TextLink to="/services">{t('home.services.all')}</TextLink>}
          />
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, FEATURED_SERVICES).map((service, index) => (
              <li key={service.slug}>
                <Reveal delay={(index % 3) * 0.1}>
                  <ServiceCard service={service} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Experience />
      <Destinations />
      <Testimonials />
      <CtaBand />
    </>
  );
}
