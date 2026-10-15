import { m } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { EASE_LUXE } from '@/lib/motion';

/**
 * PREMIUM MOTION PRIMITIVES
 *
 * Each runs once, the first time its element scrolls into view. Under the
 * visitor's "reduce motion" setting the movement is dropped (see MotionConfig
 * in AppProviders) and content simply appears.
 */

const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' } as const;

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Text that rises into place from behind an invisible edge, the way titles
 * appear in a film. Used for section headings.
 */
export function MaskReveal({ children, delay = 0, className }: MaskRevealProps) {
  return (
    // The small bottom padding stops descenders (g, y, p) from being clipped.
    <span className={cn('block overflow-hidden pb-[0.12em] -mb-[0.12em]', className)}>
      <m.span
        className="block"
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={VIEWPORT}
        transition={{ duration: 1.2, ease: EASE_LUXE, delay }}
      >
        {children}
      </m.span>
    </span>
  );
}

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * A photograph that opens like a window: the frame expands from a narrower
 * crop while the photo inside settles from a slight zoom.
 */
export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  return (
    <m.div
      className={cn('overflow-hidden', className)}
      initial="hidden"
      whileInView="shown"
      viewport={VIEWPORT}
      variants={{
        hidden: { clipPath: 'inset(10% 8% 10% 8%)' },
        shown: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.6, ease: EASE_LUXE, delay } },
      }}
    >
      <m.div
        className="size-full"
        variants={{
          hidden: { scale: 1.18 },
          shown: { scale: 1, transition: { duration: 2.2, ease: EASE_LUXE, delay } },
        }}
      >
        {children}
      </m.div>
    </m.div>
  );
}

/** A hairline that draws itself across from the start of the reading direction. */
export function DrawLine({ className, gold = false, delay = 0 }: { className?: string; gold?: boolean; delay?: number }) {
  return (
    <m.div
      aria-hidden="true"
      className={cn('h-px w-full origin-left rtl:origin-right', gold ? 'bg-gold/50' : 'bg-line', className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.6, ease: EASE_LUXE, delay }}
    />
  );
}
