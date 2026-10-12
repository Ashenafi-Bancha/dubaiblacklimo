/**
 * Site navigation. Paths are written without a language prefix; LocalizedLink
 * adds "/ar" when the visitor is browsing in Arabic. `labelKey` is a
 * translation key in src/i18n/locales.
 *
 * The list of services in the footer is not here: it is built from the service
 * content itself, so adding a service adds its link.
 */
export interface NavItem {
  to: string;
  labelKey: string;
}

export const primaryNav: NavItem[] = [
  { to: '/fleet', labelKey: 'nav.fleet' },
  { to: '/services', labelKey: 'nav.services' },
  { to: '/corporate', labelKey: 'nav.corporate' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/contact', labelKey: 'nav.contact' },
];

export const companyNav: NavItem[] = [
  { to: '/fleet', labelKey: 'nav.fleet' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/corporate', labelKey: 'nav.corporate' },
  { to: '/faq', labelKey: 'nav.faq' },
  { to: '/contact', labelKey: 'nav.contact' },
  { to: '/account', labelKey: 'nav.account' },
];

export const legalNav: NavItem[] = [
  { to: '/terms', labelKey: 'nav.terms' },
  { to: '/privacy', labelKey: 'nav.privacy' },
  { to: '/cancellation', labelKey: 'nav.cancellation' },
];
