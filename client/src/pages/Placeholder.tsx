import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/components/sections/PageHeader';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';

/**
 * Stands in for a page that has not been built yet, so that every link in the
 * navigation leads somewhere. Each use is replaced by the real page as it is built.
 */
export default function Placeholder({ titleKey }: { titleKey: string }) {
  const { t } = useTranslation();
  const title = t(titleKey);

  return (
    <>
      <Seo title={title} noindex />
      <PageHeader image="pages/legal" eyebrow={t('placeholder.eyebrow')} title={title} lead={t('placeholder.body')}>
        <ButtonLink to="/" variant="outline">
          {t('common.backHome')}
        </ButtonLink>
      </PageHeader>
    </>
  );
}
