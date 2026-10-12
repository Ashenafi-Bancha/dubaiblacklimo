import { z } from 'zod';

/**
 * A request for a price, as entered in the booking widget on the home page.
 * The website and the API validate it with this same schema.
 *
 * Error messages are translation keys, not sentences: the website looks them
 * up in the visitor's language.
 */
export const quoteRequestSchema = z.object({
  pickup: z.string().trim().min(3, 'validation.pickupRequired').max(200, 'validation.tooLong'),
  dropoff: z.string().trim().min(3, 'validation.dropoffRequired').max(200, 'validation.tooLong'),
  /** Calendar date in the visitor's own time zone, as YYYY-MM-DD. */
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'validation.dateRequired'),
  /** 24-hour time, as HH:MM. */
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'validation.timeRequired'),
  /** A vehicle class slug, or empty when the customer has no preference. */
  vehicleClass: z.string().max(60),
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;
