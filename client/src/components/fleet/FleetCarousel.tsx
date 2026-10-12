import { vehicleClasses } from '@app/shared/content/fleet';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { FleetCard } from './FleetCard';

const arrowButton =
  'flex size-12 items-center justify-center border border-line text-ivory transition-colors duration-500 ease-luxe ' +
  'hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30';

/**
 * The fleet as a horizontal strip. It scrolls natively (swipe on touch
 * screens, trackpad or arrow keys on desktop) with snap points, and the two
 * arrow buttons step through it. Works in both reading directions.
 *
 * `heading` is rendered beside the arrows, above the strip.
 */
export function FleetCarousel({ heading }: { heading: ReactNode }) {
  const { t } = useTranslation();
  const stripRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;
    // scrollLeft runs negative in right-to-left layouts, so compare its magnitude.
    const offset = Math.abs(strip.scrollLeft);
    setAtStart(offset < 8);
    setAtEnd(offset > strip.scrollWidth - strip.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  /** Moves one card forwards (1) or backwards (-1) in the reading direction. */
  const step = (direction: 1 | -1) => {
    const strip = stripRef.current;
    const card = strip?.firstElementChild;
    if (!strip || !card) return;
    const reading = getComputedStyle(strip).direction === 'rtl' ? -1 : 1;
    strip.scrollBy({ left: direction * reading * card.getBoundingClientRect().width, behavior: 'smooth' });
  };

  return (
    <>
      <Container className="flex items-end justify-between gap-8">
        <div>{heading}</div>
        <div className="hidden shrink-0 gap-3 sm:flex">
          <button type="button" onClick={() => step(-1)} disabled={atStart} aria-label={t('fleet.previous')} className={arrowButton}>
            <ArrowLeft aria-hidden="true" strokeWidth={1.25} className="size-5 rtl:-scale-x-100" />
          </button>
          <button type="button" onClick={() => step(1)} disabled={atEnd} aria-label={t('fleet.next')} className={arrowButton}>
            <ArrowRight aria-hidden="true" strokeWidth={1.25} className="size-5 rtl:-scale-x-100" />
          </button>
        </div>
      </Container>

      <Reveal className="mt-14">
        <ul
          ref={stripRef}
          onScroll={updateEdges}
          tabIndex={0}
          aria-label={t('fleet.carousel')}
          // The side padding lines the first card up with the page's content column.
          // `relative` keeps visually hidden text inside the cards from widening the page.
          className="no-scrollbar relative flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-6 pt-2 pb-4 sm:scroll-px-10 sm:px-10 lg:scroll-px-16 lg:px-16 min-[90rem]:scroll-px-[calc((100vw-90rem)/2+4rem)] min-[90rem]:px-[calc((100vw-90rem)/2+4rem)]"
        >
          {vehicleClasses.map((vehicle) => (
            <li key={vehicle.slug} className="w-[85vw] shrink-0 snap-start sm:w-[26rem]">
              <FleetCard vehicle={vehicle} />
            </li>
          ))}
        </ul>
      </Reveal>
    </>
  );
}
