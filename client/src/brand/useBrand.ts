import type { BrandConfig } from '@brand';
import { use } from 'react';
import { BrandContext } from './BrandProvider';

export function useBrand(): BrandConfig {
  return use(BrandContext);
}
