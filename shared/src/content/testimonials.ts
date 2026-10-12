import type { Localized } from '../locale.ts';

/**
 * TESTIMONIALS
 *
 * Empty on purpose. The testimonials section of the home page stays hidden
 * until the operator adds real reviews from real customers. Never fill this
 * with invented quotes, names or ratings.
 */
export interface Testimonial {
  id: string;
  /** The customer's own words. */
  quote: Localized;
  /** Their name as they agreed to be credited, e.g. "Sarah M." */
  author: string;
  /** Optional context, e.g. "Airport transfer, March 2026". */
  context?: Localized;
}

export const testimonials: Testimonial[] = [];
