import { vehicleClasses, vehicleName, type VehicleClass } from '@app/shared/content/fleet';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VehicleCapacity, VehiclePrice } from '@/components/fleet/VehicleFacts';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHeader } from '@/components/sections/PageHeader';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout';
import { LocalizedLink } from '@/components/ui/LocalizedLink';
import { MaskReveal } from '@/components/ui/Motion';
import { Picture } from '@/components/ui/Picture';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { useLocale } from '@/i18n/useLocale';
import { useLocalize } from '@/i18n/useLocalize';
import { cn } from '@/lib/cn';

const pad = (value: number) => String(value).padStart(2, '0');

/** A full-width photograph that drifts gently against the page as it is scrolled past. */
function ParallaxPicture({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      <m.div className="absolute -inset-y-[8%] inset-x-0" style={reduceMotion ? undefined : { y }}>
        <Picture
          src={src}
          alt={alt}
          // The panel is shorter than the photo's proportions on phones, so it is cropped and shown wider.
          sizes="(max-aspect-ratio: 4/3) 150vh, 100vw"
          className="size-full object-cover"
        />
      </m.div>
    </div>
  );
}

/** One car: a cinematic full-width panel with its name, then its details on a single line beneath. */
function VehiclePanel({ vehicle, number }: { vehicle: VehicleClass; number: number }) {
  const { t } = useTranslation();
  const l = useLocalize();
  const locale = useLocale();

  return (
    // The id lets other pages link straight to a car (/fleet#rolls-royce-ghost).
    <article id={vehicle.slug} className="scroll-mt-36" aria-labelledby={`${vehicle.slug}-name`}>
      <div className="relative isolate flex min-h-[78svh] items-end overflow-hidden">
        <ParallaxPicture src={vehicle.image} alt={vehicleName(vehicle, locale)} />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink from-5% via-ink/30 via-45% to-ink/10" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/60 via-transparent to-transparent rtl:bg-linear-to-l" />

        <Container className="pb-12 lg:pb-16">
          <Reveal>
            <p className="flex items-baseline gap-4 text-label font-medium uppercase text-gold">
              <span className="font-display text-xl tracking-normal normal-case">{pad(number)}</span>
              {l(vehicle.make)}
            </p>
          </Reveal>
          <h2 id={`${vehicle.slug}-name`} className="mt-4 font-display text-hero font-light text-ivory">
            <MaskReveal delay={0.1}>{l(vehicle.model)}</MaskReveal>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-3 text-mist">{l(vehicle.category)}</p>
          </Reveal>
        </Container>
      </div>

      <Container className="grid gap-10 border-b border-line py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <Reveal className="lg:col-span-5">
          <p className="text-lead text-mist">{l(vehicle.description)}</p>
          <VehicleCapacity vehicle={vehicle} className="mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4">
          <ul className="grid gap-3">
            {vehicle.features.map((feature) => (
              <li key={feature.en} className="flex items-start gap-3 text-sm text-mist">
                <Check aria-hidden="true" strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-gold" />
                {l(feature)}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col items-start gap-6 lg:col-span-3 lg:items-end lg:text-end">
          <VehiclePrice vehicle={vehicle} />
          <ButtonLink to="/book" state={{ quote: { vehicleClass: vehicle.slug } }} variant="outline">
            {t('fleet.book')}
          </ButtonLink>
        </Reveal>
      </Container>
    </article>
  );
}

/**
 * Which car the index bar should highlight: the last one whose panel has
 * reached the middle of the screen, or none while the page header is in view.
 */
function useCurrentVehicle(): string | undefined {
  const [current, setCurrent] = useState<string>();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const middle = window.innerHeight / 2;
        let found: string | undefined;
        for (const vehicle of vehicleClasses) {
          const element = document.getElementById(vehicle.slug);
          if (element && element.getBoundingClientRect().top <= middle) found = vehicle.slug;
        }
        setCurrent(found);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
    };
  }, []);

  return current;
}

export default function Fleet() {
  const { t } = useTranslation();
  const l = useLocalize();
  const current = useCurrentVehicle();

  return (
    <>
      <Seo title={t('fleet.seoTitle')} description={t('fleet.seoDescription')} />
      <PageHeader image="pages/fleet" eyebrow={t('fleet.eyebrow')} title={<Rich k="fleet.title" />} lead={t('fleet.lead')} />

      {/* An index of the collection that stays under the header while the cars scroll past. */}
      <nav aria-label={t('fleet.index')} className="sticky top-18 z-30 border-y border-line bg-ink/85 backdrop-blur-md lg:top-22">
        <Container>
          <ul className="no-scrollbar flex gap-8 overflow-x-auto">
            {vehicleClasses.map((vehicle) => (
              <li key={vehicle.slug} className="shrink-0">
                <LocalizedLink
                  to={`/fleet#${vehicle.slug}`}
                  aria-current={current === vehicle.slug ? 'true' : undefined}
                  className={cn(
                    'relative inline-flex h-14 items-center text-sm whitespace-nowrap transition-colors duration-500 ease-luxe',
                    'after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-700 rtl:after:origin-right',
                    current === vehicle.slug ? 'text-ivory after:scale-x-100' : 'text-stone after:scale-x-0 hover:text-ivory',
                  )}
                >
                  {l(vehicle.make)} {l(vehicle.model)}
                </LocalizedLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="bg-ink">
        {vehicleClasses.map((vehicle, index) => (
          <VehiclePanel key={vehicle.slug} vehicle={vehicle} number={index + 1} />
        ))}
        <Container>
          <p className="py-10 text-sm text-stone">
            {t('fleet.note')} {t('fleet.photoNote')}
          </p>
        </Container>
      </div>

      <CtaBand />
    </>
  );
}
