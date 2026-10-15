import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookingWidget } from '@/components/booking/BookingWidget';
import { Container } from '@/components/ui/Layout';
import { Picture } from '@/components/ui/Picture';
import { Rich } from '@/components/ui/Rich';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

/**
 * The full-screen opening of the home page: Dubai at night, pushing in slowly
 * and drifting as the page scrolls; the tagline rising into view; and the
 * booking console.
 */
export function HomeHero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  // Parallax: the photo moves down at a fraction of the scroll speed, and the copy lifts away a little faster.
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 900], [0, 200]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden">
      <m.div className="absolute inset-0 -z-10" style={reduceMotion ? undefined : { y: drift }}>
        {/* On tall, narrow screens the photo is cropped to the hero's height, so it is displayed far wider than the screen. */}
        <Picture
          src="home/hero"
          alt=""
          sizes="(max-aspect-ratio: 16/9) 200vh, 100vw"
          priority
          className="size-full animate-slow-zoom object-cover"
        />
        {/* Scrims: the foot of the photo, the side the text sits on, and a soft vignette. */}
        <div className="absolute inset-0 bg-linear-to-t from-ink from-5% via-ink/45 via-50% to-ink/40 lg:via-ink/25 lg:to-ink/35" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/65 via-ink/10 via-50% to-transparent rtl:bg-linear-to-l" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,color-mix(in_srgb,var(--color-ink)_55%,transparent))]" />
      </m.div>

      <Container className="pt-36 pb-8 sm:pb-12 lg:pb-14">
        <m.div style={reduceMotion ? undefined : { opacity: fade }}>
          <Eyebrow className="animate-rise">{t('home.hero.eyebrow')}</Eyebrow>
          <Heading as="h1" size="hero" className="mt-8 max-w-[15ch]">
            <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
              <span className="block animate-mask-rise [animation-delay:150ms]">
                <Rich k="home.hero.title" />
              </span>
            </span>
          </Heading>
          <Lead className="mt-8 max-w-xl animate-rise [animation-delay:400ms]">{t('home.hero.lead')}</Lead>
        </m.div>
        <BookingWidget className="mt-12 animate-rise [animation-delay:600ms] lg:mt-14" />
      </Container>

      {/* A slow pulse down a hairline, inviting the visitor to scroll. Wide screens only. */}
      <div
        aria-hidden="true"
        className="absolute end-10 bottom-14 hidden flex-col items-center gap-4 text-label uppercase text-stone xl:flex"
      >
        <span className="[writing-mode:vertical-rl]">{t('home.hero.scroll')}</span>
        <span className="relative h-20 w-px overflow-hidden bg-line">
          <span className="absolute inset-0 animate-scroll-cue bg-gold" />
        </span>
      </div>
    </section>
  );
}
