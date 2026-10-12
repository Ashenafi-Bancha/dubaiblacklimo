import { brandConfig, type BrandConfig } from '@brand';
import { createContext, type ReactNode } from 'react';

/**
 * Makes the brand settings (name, contact details, licence, colours) available
 * to every component through `useBrand()`. Components must read business
 * details from here and never hard-code them.
 */
export const BrandContext = createContext<BrandConfig>(brandConfig);

export function BrandProvider({ children }: { children: ReactNode }) {
  return <BrandContext value={brandConfig}>{children}</BrandContext>;
}
