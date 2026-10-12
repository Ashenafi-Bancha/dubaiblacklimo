import { m } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_LUXE } from '@/lib/motion';

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before animating. Use small steps (0.1) to stagger siblings. */
  delay?: number;
  className?: string;
}

/**
 * Fades content in and lifts it into place the first time it scrolls into view.
 * For visitors who prefer reduced motion the movement is dropped and only the
 * fade remains (see MotionConfig in AppProviders).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1, ease: EASE_LUXE, delay }}
    >
      {children}
    </m.div>
  );
}
