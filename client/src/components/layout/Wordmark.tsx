import { useBrand } from '@/brand/useBrand';
import { useLocale } from '@/i18n/useLocale';
import { cn } from '@/lib/cn';

/**
 * The brand mark. Shows the logo image when one is set in the brand settings,
 * and otherwise typesets the brand name.
 */
export function Wordmark({ className }: { className?: string }) {
  const brand = useBrand();
  const locale = useLocale();
  const name = brand.name[locale];

  if (brand.logo.src) {
    return (
      <img
        src={brand.logo.src}
        alt={name}
        width={brand.logo.width}
        height={brand.logo.height}
        className={cn('h-8 w-auto', className)}
      />
    );
  }

  return (
    <span className={cn('font-display text-lg font-medium uppercase tracking-[0.22em] text-ivory sm:text-xl', className)}>
      {name}
    </span>
  );
}
