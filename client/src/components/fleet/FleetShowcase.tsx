import { vehicleClasses, vehicleName } from '@app/shared/content/fleet';
import { AnimatePresence, m } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useId, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout';
import { ImageReveal } from '@/components/ui/Motion';
import { Picture } from '@/components/ui/Picture';
import { Rich } from '@/components/ui/Rich';
import { TextLink } from '@/components/ui/TextLink';
import { useLocale } from '@/i18n/useLocale';
import { useLocalize } from '@/i18n/useLocalize';
import { cn } from '@/lib/cn';
import { EASE_LUXE } from '@/lib/motion';
import { VehicleCapacity, VehiclePrice } from './VehicleFacts';

const pad = (value: number) => String(value).padStart(2, '0');

const arrowButton =
  'flex size-12 items-center justify-center border border-line text-ivory transition-colors duration-500 ease-luxe hover:border-gold hover:text-gold';

/**
 * "The Collection": the fleet presented one car at a time, like a showroom.
 * A large photograph cross-fades between cars beside the selected car's
 * details; an index of every model sits underneath. It can be driven by the
 * index (a set of tabs, with arrow-key support), the arrow buttons, or a
 * swipe across the photograph.
 */
export function FleetShowcase() {
  const { t } = useTranslation();
  const l = useLocalize();
  const locale = useLocale();
  const id = useId();
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const swipeStart = useRef<number | null>(null);

  const count = vehicleClasses.length;
  const vehicle = vehicleClasses[index]!;
  const isRtl = locale === 'ar';

  const select = (next: number, focus = false) => {
    const wrapped = (next + count) % count;
    setIndex(wrapped);
    if (focus) tabRefs.current[wrapped]?.focus();
  };

  // Arrow keys follow the reading direction; Home and End jump to the ends.
  const onTabKeyDown = (event: KeyboardEvent) => {
    const forward = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const backward = isRtl ? 'ArrowRight' : 'ArrowLeft';
    const moves: Record<string, number> = { [forward]: index + 1, [backward]: index - 1, Home: 0, End: count - 1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key]!, true);
  };

  const onPointerDown = (event: PointerEvent) => {
    swipeStart.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent) => {
    if (swipeStart.current === null) return;
    const distance = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(distance) < 50) return;
    const towardsEnd = isRtl ? distance > 0 : distance < 0;
    select(index + (towardsEnd ? 1 : -1));
  };

  return (
    <section className="overflow-hidden bg-ink py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow={t('home.collection.eyebrow')}
          title={<Rich k="home.collection.title" />}
          action={<TextLink to="/fleet">{t('home.collection.all')}</TextLink>}
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-end lg:gap-12">
          <ImageReveal className="lg:col-span-8">
            <div
              role="tabpanel"
              id={`${id}-panel`}
              aria-labelledby={`${id}-tab-${index}`}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              className="relative aspect-4/3 touch-pan-y overflow-hidden bg-charcoal select-none sm:aspect-16/10"
            >
              {vehicleClasses.map((item, itemIndex) => (
                <div
                  key={item.slug}
                  aria-hidden={itemIndex !== index}
                  className={cn(
                    'absolute inset-0 transition-[opacity,scale] duration-[1400ms] ease-luxe',
                    itemIndex === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
                  )}
                >
                  <Picture
                    src={item.image}
                    alt={vehicleName(item, locale)}
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    className="size-full object-cover"
                  />
                </div>
              ))}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
              <p aria-hidden="true" className="absolute start-6 bottom-5 font-display text-2xl font-light sm:start-8 sm:bottom-7">
                <span className="text-gold">{pad(index + 1)}</span>
                <span className="text-stone"> / {pad(count)}</span>
              </p>
            </div>
          </ImageReveal>

          <div className="lg:col-span-4">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={vehicle.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: EASE_LUXE }}
              >
                <p className="text-label font-medium uppercase text-gold">{l(vehicle.make)}</p>
                <h3 className="mt-3 font-display text-display font-light text-ivory">{l(vehicle.model)}</h3>
                <p className="mt-1 text-sm text-stone">{l(vehicle.category)}</p>
                <p className="mt-6 text-mist">{l(vehicle.description)}</p>
                <VehicleCapacity vehicle={vehicle} className="mt-8" />
                <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
                  <VehiclePrice vehicle={vehicle} />
                  <ButtonLink to="/book" state={{ quote: { vehicleClass: vehicle.slug } }}>
                    {t('home.collection.reserve')}
                  </ButtonLink>
                </div>
              </m.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-3">
              <button type="button" onClick={() => select(index - 1)} aria-label={t('home.collection.previous')} className={arrowButton}>
                <ArrowLeft aria-hidden="true" strokeWidth={1.25} className="size-5 rtl:-scale-x-100" />
              </button>
              <button type="button" onClick={() => select(index + 1)} aria-label={t('home.collection.next')} className={arrowButton}>
                <ArrowRight aria-hidden="true" strokeWidth={1.25} className="size-5 rtl:-scale-x-100" />
              </button>
            </div>
          </div>
        </div>

        <div
          role="tablist"
          aria-label={t('home.collection.choose')}
          className="no-scrollbar mt-12 flex gap-8 overflow-x-auto border-t border-line lg:mt-16 lg:grid lg:grid-cols-7 lg:gap-6"
        >
          {vehicleClasses.map((item, itemIndex) => {
            const active = itemIndex === index;
            return (
              <button
                key={item.slug}
                ref={(element) => {
                  tabRefs.current[itemIndex] = element;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${itemIndex}`}
                aria-selected={active}
                aria-controls={`${id}-panel`}
                tabIndex={active ? 0 : -1}
                onClick={() => select(itemIndex)}
                onKeyDown={onTabKeyDown}
                className="group relative shrink-0 py-6 text-start"
              >
                {/* A gold rule draws across the top of the selected model. */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-0 -top-px h-px origin-left bg-gold transition-transform duration-700 ease-luxe rtl:origin-right',
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50',
                  )}
                />
                <span className="block text-label uppercase text-stone">{l(item.make)}</span>
                <span
                  className={cn(
                    'mt-1 block font-display text-xl transition-colors duration-500 ease-luxe',
                    active ? 'text-ivory' : 'text-mist group-hover:text-ivory',
                  )}
                >
                  {l(item.model)}
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
