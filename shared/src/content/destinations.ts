import type { Localized } from '../locale.ts';

/**
 * DESTINATIONS
 *
 * The "Dubai, door to door" collection on the home page. Journey times are
 * approximate drives from Dubai International Airport (DXB) in normal traffic.
 */
export interface Destination {
  id: string;
  /** Image name in client/image-sources (without extension), or a full URL. */
  image: string;
  name: Localized;
  /** A few landmarks, so the name means something to a first-time visitor. */
  highlights: Localized;
  minutesFromDxb: number;
}

export const destinations: Destination[] = [
  {
    id: 'downtown-dubai',
    image: 'destinations/downtown-dubai',
    name: { en: 'Downtown Dubai', ar: 'وسط مدينة دبي' },
    highlights: { en: 'Burj Khalifa, The Dubai Mall, Dubai Opera', ar: 'برج خليفة ودبي مول ودبي أوبرا' },
    minutesFromDxb: 20,
  },
  {
    id: 'palm-jumeirah',
    image: 'destinations/palm-jumeirah',
    name: { en: 'Palm Jumeirah', ar: 'نخلة جميرا' },
    highlights: { en: 'Atlantis, beach resorts, private villas', ar: 'أتلانتس والمنتجعات الشاطئية والفلل الخاصة' },
    minutesFromDxb: 35,
  },
  {
    id: 'dubai-marina',
    image: 'destinations/dubai-marina',
    name: { en: 'Dubai Marina', ar: 'دبي مارينا' },
    highlights: { en: 'Waterfront dining, yachts and JBR', ar: 'مطاعم الواجهة البحرية واليخوت وجي بي آر' },
    minutesFromDxb: 35,
  },
  {
    id: 'jumeirah',
    image: 'destinations/jumeirah',
    name: { en: 'Jumeirah', ar: 'جميرا' },
    highlights: { en: 'Burj Al Arab and Madinat Jumeirah', ar: 'برج العرب ومدينة جميرا' },
    minutesFromDxb: 30,
  },
  {
    id: 'difc',
    image: 'destinations/difc',
    name: { en: 'DIFC & Sheikh Zayed Road', ar: 'مركز دبي المالي وشارع الشيخ زايد' },
    highlights: { en: 'The financial district and Museum of the Future', ar: 'الحي المالي ومتحف المستقبل' },
    minutesFromDxb: 15,
  },
  {
    id: 'bluewaters',
    image: 'destinations/bluewaters',
    name: { en: 'Bluewaters Island', ar: 'جزيرة بلوواترز' },
    highlights: { en: 'Ain Dubai and the waterfront', ar: 'عين دبي والواجهة البحرية' },
    minutesFromDxb: 40,
  },
];
