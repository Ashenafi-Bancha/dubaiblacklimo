import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { BrandProvider } from '@/brand/BrandProvider';

/**
 * App-wide providers.
 *
 * - LazyMotion loads only the animation features the site uses. Components must
 *   therefore use `m.div` rather than `motion.div` (`strict` enforces this).
 * - MotionConfig honours the visitor's "reduce motion" setting: movement is
 *   removed and only gentle fades remain.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BrandProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </BrandProvider>
  );
}
