import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

/** Centres content and sets the page gutters. Content is capped at 1440px. */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16', className)} {...props} />;
}

interface SectionProps extends ComponentProps<'section'> {
  /** Alternate between the two backgrounds to separate neighbouring sections. */
  tone?: 'ink' | 'charcoal';
}

/** A page section with the standard generous vertical spacing. */
export function Section({ tone = 'ink', className, ...props }: SectionProps) {
  return (
    <section
      className={cn('py-24 md:py-32 lg:py-40', tone === 'charcoal' ? 'bg-charcoal' : 'bg-ink', className)}
      {...props}
    />
  );
}

/** A thin divider. `gold` is for emphasis; the default is barely-there ivory. */
export function Hairline({ gold = false, className }: { gold?: boolean; className?: string }) {
  return <hr className={cn('h-px w-full border-0', gold ? 'bg-gold/50' : 'bg-line', className)} />;
}
