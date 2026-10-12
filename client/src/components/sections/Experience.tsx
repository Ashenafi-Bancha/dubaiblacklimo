import { Baby, EyeOff, GlassWater, UserRoundCheck, Wifi, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/ui/Layout';
import { Picture } from '@/components/ui/Picture';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

const ITEMS: { key: string; icon: LucideIcon }[] = [
  { key: 'meet', icon: UserRoundCheck },
  { key: 'water', icon: GlassWater },
  { key: 'wifi', icon: Wifi },
  { key: 'seats', icon: Baby },
  { key: 'discreet', icon: EyeOff },
];

/** "The Experience": what sets the service apart, beside a photo of the cabin. */
export function Experience() {
  const { t } = useTranslation();

  return (
    <Section tone="charcoal">
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="overflow-hidden lg:col-span-6">
          <Picture
            src="home/experience"
            alt={t('home.experience.imageAlt')}
            sizes="(min-width: 1024px) 85vw, 190vw"
            className="aspect-4/5 w-full object-cover brightness-90"
          />
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <Eyebrow>{t('home.experience.eyebrow')}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <Heading className="mt-8">{t('home.experience.title')}</Heading>
          </Reveal>
          <Reveal delay={0.2}>
            <Lead className="mt-6">{t('home.experience.body')}</Lead>
          </Reveal>

          <ul className="mt-12 border-t border-line">
            {ITEMS.map(({ key, icon: Icon }, index) => (
              <li key={key} className="border-b border-line">
                <Reveal delay={index * 0.06} className="flex items-start gap-5 py-5">
                  <Icon aria-hidden="true" strokeWidth={1} className="mt-0.5 size-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-medium text-ivory">{t(`home.experience.items.${key}.title`)}</h3>
                    <p className="mt-1 text-sm text-mist">{t(`home.experience.items.${key}.body`)}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
