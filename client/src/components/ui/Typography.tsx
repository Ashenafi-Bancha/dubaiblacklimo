import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

/** The small, widely spaced gold label that sits above a heading. */
export function Eyebrow({ className, children, ...props }: ComponentProps<'p'>) {
  return (
    <p className={cn('flex items-center gap-4 text-label font-medium uppercase text-gold', className)} {...props}>
      <span aria-hidden="true" className="h-px w-10 shrink-0 bg-gold/60" />
      {children}
    </p>
  );
}

const headingSizes = {
  hero: 'text-hero',
  display: 'text-display',
  title: 'text-title',
} as const;

interface HeadingProps extends ComponentProps<'h2'> {
  /** The semantic level. Choose it for document structure, not for looks. */
  as?: 'h1' | 'h2' | 'h3';
  /** The visual size, independent of the level. */
  size?: keyof typeof headingSizes;
}

/** A serif display heading. */
export function Heading({ as: Tag = 'h2', size = 'display', className, ...props }: HeadingProps) {
  return <Tag className={cn('font-display font-light text-balance text-ivory', headingSizes[size], className)} {...props} />;
}

/** The larger introductory paragraph that follows a heading. */
export function Lead({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cn('text-lead text-pretty text-mist', className)} {...props} />;
}
