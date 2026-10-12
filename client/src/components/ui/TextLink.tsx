import { ArrowRight } from 'lucide-react';
import type { ComponentProps } from 'react';
import { LocalizedLink } from './LocalizedLink';

/** A quiet gold link with an arrow, for "view all" style actions. */
export function TextLink({ children, ...props }: Omit<ComponentProps<typeof LocalizedLink>, 'className'>) {
  return (
    <LocalizedLink
      className="group inline-flex h-11 shrink-0 items-center gap-3 text-label font-semibold uppercase text-gold transition-colors duration-500 ease-luxe hover:text-gold-soft"
      {...props}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-4 transition-transform duration-700 ease-luxe group-hover:translate-x-1.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-1.5"
      />
    </LocalizedLink>
  );
}
