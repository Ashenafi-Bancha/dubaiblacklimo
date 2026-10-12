import type { Localized } from '@brand';
import { useCallback } from 'react';
import { useLocale } from './useLocale';

/**
 * Returns a function that picks the current language out of a `{ en, ar }` value.
 * Used for content such as vehicle and service descriptions, which carry their
 * own translations instead of living in the i18n files.
 */
export function useLocalize(): (text: Localized) => string {
  const locale = useLocale();
  return useCallback((text: Localized) => text[locale], [locale]);
}
