/** The languages the platform is published in. */
export type LocaleCode = 'en' | 'ar';

/** A piece of text provided in every supported language. */
export type Localized = Record<LocaleCode, string>;
