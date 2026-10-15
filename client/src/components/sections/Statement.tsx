import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Typography';

/** One word that brightens as the reader's scroll position passes through its share of the passage. */
function Word({ progress, range, children }: { progress: MotionValue<number>; range: [number, number]; children: string }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return <m.span style={{ opacity }}>{children} </m.span>;
}

/**
 * A short statement set large in the serif, whose words light up one after
 * another as it is scrolled through. Read normally, it is just a paragraph.
 */
export function Statement() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const text = t('home.statement.body');
  const words = text.split(' ');

  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{t('home.statement.eyebrow')}</Eyebrow>
        </Reveal>
        <p ref={ref} className="mt-10 max-w-5xl font-display text-title font-light text-balance text-ivory md:text-display">
          {reduceMotion
            ? text
            : words.map((word, index) => (
                <Word key={index} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>
                  {word}
                </Word>
              ))}
        </p>
      </Container>
    </Section>
  );
}
