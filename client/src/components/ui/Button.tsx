import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';
import { LocalizedLink } from './LocalizedLink';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface StyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-3 whitespace-nowrap text-label font-semibold uppercase ' +
  'transition-colors duration-500 ease-luxe select-none disabled:pointer-events-none disabled:opacity-40';

const variants: Record<Variant, string> = {
  /** The one gold-filled action per screen. */
  primary: 'bg-gold text-ink hover:bg-gold-soft',
  /** Secondary action: gold hairline that fills on hover. */
  outline: 'border border-gold/60 text-ivory hover:border-gold hover:bg-gold hover:text-ink',
  /** Quiet text action. */
  ghost: 'text-ivory hover:text-gold',
};

// Every size keeps a touch target of at least 44px.
const sizes: Record<Size, string> = {
  sm: 'h-11 px-5',
  md: 'h-12 px-7',
  lg: 'h-14 px-9',
};

export function buttonClasses({ variant = 'primary', size = 'md', className }: StyleProps = {}): string {
  return cn(base, variants[variant], variant === 'ghost' ? 'h-11' : sizes[size], className);
}

/** A real <button>, for actions and form submission. */
export function Button({ variant, size, className, type = 'button', ...props }: ComponentProps<'button'> & StyleProps) {
  return <button type={type} className={buttonClasses({ variant, size, className })} {...props} />;
}

/** A button-styled link to another page of the site. */
export function ButtonLink({ variant, size, className, ...props }: ComponentProps<typeof LocalizedLink> & StyleProps) {
  return <LocalizedLink className={buttonClasses({ variant, size, className })} {...props} />;
}

/** A button-styled external link: phone, WhatsApp, email. */
export function ButtonAnchor({ variant, size, className, ...props }: ComponentProps<'a'> & StyleProps) {
  return <a className={buttonClasses({ variant, size, className })} {...props} />;
}
