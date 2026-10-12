import type { Locale } from '@/i18n/locale';

/** Formats a whole-dirham amount for display: "AED 450" in English, "450 د.إ." in Arabic. */
export function formatAed(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-AE' : 'en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
    numberingSystem: 'latn',
  }).format(amount);
}
