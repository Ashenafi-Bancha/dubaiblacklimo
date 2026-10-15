import { Baby, EyeOff, GlassWater, UserRoundCheck, Wifi, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/ui/Layout';
import { DrawLine, ImageReveal, MaskReveal } from '@/components/ui/Motion';
import { Picture } from '@/components/ui/Picture';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

const ITEMS: { key: string; icon: LucideIcon }[] = [
  { key: 'meet', icon: UserRoundCheck },
  { key: 'water', icon: GlassWater },
  { key: 'wifi', icon: Wifi },
  { key: 'seats', icon: Baby },
  { key: 'discreet', icon: EyeOff },
];

/** "The Experience": what sets the service apart, beside a photograph that opens like a window. */
export function Experience() {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <ImageReveal className="aspect-4/5 lg:col-span-6">
          <Picture
            src="home/experience"
            alt={t('home.experience.imageAlt')}
            sizes="(min-width: 1024px) 85vw, 190vw"
            className="size-full object-cover"
          />
        </ImageReveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <Eyebrow>{t('home.experience.eyebrow')}</Eyebrow>
          </Reveal>
          <Heading className="mt-8">
            <MaskReveal delay={0.1}>
              <Rich k="home.experience.title" />
            </MaskReveal>
          </Heading>
          <Reveal delay={0.2}>
            <Lead className="mt-6">{t('home.experience.body')}</Lead>
          </Reveal>

          <DrawLine className="mt-12" />
          <ul>
            {ITEMS.map(({ key, icon: Icon }, index) => (
              <li key={key}>
                <Reveal delay={index * 0.06} className="flex items-start gap-5 py-5">
                  <Icon aria-hidden="true" strokeWidth={1} className="mt-0.5 size-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-medium text-ivory">{t(`home.experience.items.${key}.title`)}</h3>
                    <p className="mt-1 text-sm text-mist">{t(`home.experience.items.${key}.body`)}</p>
                  </div>
                </Reveal>
                <DrawLine delay={index * 0.06} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
