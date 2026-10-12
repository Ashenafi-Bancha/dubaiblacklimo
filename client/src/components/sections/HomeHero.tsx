import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookingWidget } from '@/components/booking/BookingWidget';
import { Container } from '@/components/ui/Layout';
import { Picture } from '@/components/ui/Picture';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

/**
 * The full-screen opening of the home page: a photograph that pushes in slowly
 * and drifts a little as the page scrolls, the tagline, and the booking widget.
 */
export function HomeHero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  // Parallax: the photo moves down at a fraction of the scroll speed.
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 900], [0, 180]);

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
        {/* Two scrims: one darkens the foot of the photo, one the side the text sits on. Phones get a heavier one, as the text covers more of the photo. */}
        <div className="absolute inset-0 bg-linear-to-t from-ink from-5% via-ink/55 via-55% to-ink/60 lg:via-ink/20 lg:to-ink/45" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/60 via-ink/10 via-55% to-transparent rtl:bg-linear-to-l" />
      </m.div>

      <Container className="pt-36 pb-8 sm:pb-12 lg:pb-16">
        <Eyebrow className="animate-rise">{t('home.hero.eyebrow')}</Eyebrow>
        <Heading as="h1" size="hero" className="mt-8 max-w-[14ch] animate-rise [animation-delay:120ms]">
          {t('home.hero.title')}
        </Heading>
        <Lead className="mt-8 max-w-xl animate-rise [animation-delay:240ms]">{t('home.hero.lead')}</Lead>
        <BookingWidget className="mt-12 animate-rise [animation-delay:360ms] lg:mt-16" />
      </Container>
    </section>
  );
}
