/**
 * BRAND CONFIGURATION
 *
 * The single source of business defaults for the whole platform. Nothing in the
 * codebase hard-codes a name, phone number, colour or licence number: it all
 * reads from here (and, once the admin panel is in use, from the brand settings
 * saved in the database, which take precedence over this file).
 *
 * Values marked PLACEHOLDER must be replaced by the operator before launch.
 */

export type LocaleCode = 'en' | 'ar';

/** A piece of text provided in every supported language. */
export type Localized = Record<LocaleCode, string>;

export interface BrandConfig {
  /** Trading name shown in the header, footer, page titles and emails. */
  name: Localized;
  /** Registered company name, used in the copyright line and legal pages. */
  legalName: string;
  /** Public site address, without a trailing slash. */
  siteUrl: string;
  /**
   * Optional logo image. When `src` is null the name is typeset as a wordmark.
   * Place the file in `client/public/images/brand/` and give its real pixel size.
   */
  logo: { src: string | null; width: number; height: number };
  contact: {
    /** Written as it should be displayed; links are derived from the digits. */
    phone: string;
    whatsapp: string;
    email: string;
    address: Localized;
  };
  licence: {
    authority: Localized;
    number: string;
  };
  /** Full profile URLs. Leave a value empty to hide that link. */
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    x: string;
    tiktok: string;
  };
  /** The four colours every other shade in the design system is derived from. */
  colours: {
    background: string;
    surface: string;
    accent: string;
    text: string;
  };
}

export const brandConfig: BrandConfig = {
  name: {
    en: 'Dubai Black Limo',
    ar: 'دبي بلاك ليمو',
  },
  legalName: 'Dubai Black Limo', // PLACEHOLDER: registered company name
  siteUrl: 'https://dubaiblacklimo.com',
  logo: { src: null, width: 0, height: 0 },
  contact: {
    phone: '+971 4 000 0000', // PLACEHOLDER
    whatsapp: '+971 50 000 0000', // PLACEHOLDER
    email: 'reservations@dubaiblacklimo.com', // PLACEHOLDER
    address: {
      en: 'Office address, Dubai, United Arab Emirates', // PLACEHOLDER
      ar: 'عنوان المكتب، دبي، الإمارات العربية المتحدة', // PLACEHOLDER
    },
  },
  licence: {
    authority: { en: 'RTA', ar: 'هيئة الطرق والمواصلات' },
    number: '000000', // PLACEHOLDER: the operator's licence number
  },
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
    x: '',
    tiktok: '',
  },
  colours: {
    background: '#0A0A0A',
    surface: '#141414',
    accent: '#C9A961',
    text: '#F5F1E8',
  },
};
