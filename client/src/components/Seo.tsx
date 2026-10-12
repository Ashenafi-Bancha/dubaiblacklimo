import { useBrand } from '@/brand/useBrand';
import { useLocale } from '@/i18n/useLocale';

interface SeoProps {
  /** Page title, without the brand name (it is appended). Omit on the home page to show the brand alone. */
  title?: string;
  description?: string;
  /** Keeps internal or utility pages out of search results. */
  noindex?: boolean;
}

/**
 * Sets the document title and meta tags for a page. React moves these tags
 * into <head>. Every page must render exactly one <Seo />.
 */
export function Seo({ title, description, noindex = false }: SeoProps) {
  const brand = useBrand();
  const locale = useLocale();
  const name = brand.name[locale];

  return (
    <>
      <title>{title ? `${title} | ${name}` : name}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex" />}
    </>
  );
}
