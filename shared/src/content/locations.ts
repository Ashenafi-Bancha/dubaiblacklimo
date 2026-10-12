import type { Localized } from '../locale.ts';

/**
 * POPULAR LOCATIONS
 *
 * Suggested as the customer types a pickup or drop-off. Coordinates are
 * approximate and are used to estimate distances when Google Maps is not
 * configured.
 */
export interface Place {
  id: string;
  name: Localized;
  lat: number;
  lng: number;
  /** Airports get flat rates and a flight number field in the booking flow. */
  airport?: boolean;
}

export const popularPlaces: Place[] = [
  { id: 'dxb', name: { en: 'Dubai International Airport (DXB)', ar: 'مطار دبي الدولي (DXB)' }, lat: 25.2532, lng: 55.3657, airport: true },
  { id: 'dwc', name: { en: 'Al Maktoum International Airport (DWC)', ar: 'مطار آل مكتوم الدولي (DWC)' }, lat: 24.896, lng: 55.1614, airport: true },
  { id: 'downtown', name: { en: 'Downtown Dubai', ar: 'وسط مدينة دبي' }, lat: 25.1972, lng: 55.2744 },
  { id: 'difc', name: { en: 'DIFC', ar: 'مركز دبي المالي العالمي' }, lat: 25.2118, lng: 55.2797 },
  { id: 'business-bay', name: { en: 'Business Bay', ar: 'الخليج التجاري' }, lat: 25.1852, lng: 55.2721 },
  { id: 'palm', name: { en: 'Palm Jumeirah', ar: 'نخلة جميرا' }, lat: 25.1124, lng: 55.139 },
  { id: 'marina', name: { en: 'Dubai Marina', ar: 'دبي مارينا' }, lat: 25.0805, lng: 55.1403 },
  { id: 'jbr', name: { en: 'Jumeirah Beach Residence (JBR)', ar: 'جميرا بيتش ريزيدنس (JBR)' }, lat: 25.0782, lng: 55.1336 },
  { id: 'jumeirah', name: { en: 'Jumeirah', ar: 'جميرا' }, lat: 25.2048, lng: 55.2399 },
  { id: 'deira', name: { en: 'Deira', ar: 'ديرة' }, lat: 25.2711, lng: 55.3095 },
  { id: 'abu-dhabi', name: { en: 'Abu Dhabi', ar: 'أبوظبي' }, lat: 24.4539, lng: 54.3773 },
  { id: 'auh', name: { en: 'Zayed International Airport (AUH)', ar: 'مطار زايد الدولي (AUH)' }, lat: 24.433, lng: 54.6511, airport: true },
  { id: 'sharjah', name: { en: 'Sharjah', ar: 'الشارقة' }, lat: 25.3463, lng: 55.4209 },
  { id: 'al-ain', name: { en: 'Al Ain', ar: 'العين' }, lat: 24.2075, lng: 55.7447 },
];
