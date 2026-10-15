import { destinations } from '@app/shared/content/destinations';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/ui/Layout';
import { LocalizedLink } from '@/components/ui/LocalizedLink';
import { Picture } from '@/components/ui/Picture';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { useLocalize } from '@/i18n/useLocalize';
import { cn } from '@/lib/cn';
import { SectionHeading } from './SectionHeading';

/**
 * "Dubai, door to door": the city's landmark districts as a staggered gallery.
 * Each one opens the booking flow with that destination already filled in.
 */
export function Destinations() {
  const { t } = useTranslation();
  const l = useLocalize();

  return (
    <Section tone="charcoal">
      <Container>
        <SectionHeading eyebrow={t('home.destinations.eyebrow')} title={<Rich k="home.destinations.title" />} />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pb-16">
          {destinations.map((destination, index) => {
            const name = l(destination.name);
            return (
              // The middle column sits lower, for an editorial, staggered rhythm.
              <li key={destination.id} className={cn(index % 3 === 1 && 'lg:translate-y-16')}>
                <Reveal delay={(index % 3) * 0.12}>
                  <LocalizedLink
                    to="/book"
                    state={{ quote: { dropoff: name } }}
                    aria-label={t('home.destinations.book', { place: name })}
                    className="group relative isolate flex aspect-4/5 flex-col justify-end overflow-hidden bg-ink p-7 sm:p-8"
                  >
                    <Picture
                      src={destination.image}
                      alt=""
                      // The landscape photo is cropped to a tall card, so it is displayed about twice the card's width.
                      sizes="(min-width: 1024px) 62vw, (min-width: 640px) 95vw, 190vw"
                      className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-[1800ms] ease-luxe group-hover:scale-105"
                    />
                    <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/45 to-ink/5" />

                    <p className="text-label font-medium uppercase text-gold">
                      {t('home.destinations.fromDxb', { minutes: destination.minutesFromDxb })}
                    </p>
                    <h3 className="mt-3 font-display text-title font-light text-ivory">{name}</h3>
                    <p className="mt-2 text-sm text-mist">{l(destination.highlights)}</p>
                    <ArrowRight
                      aria-hidden="true"
                      strokeWidth={1.25}
                      className="mt-6 size-5 text-gold transition-transform duration-700 ease-luxe group-hover:translate-x-1.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-1.5"
                    />
                  </LocalizedLink>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-sm text-stone lg:mt-0">{t('home.destinations.note')}</p>
      </Container>
    </Section>
  );
}
