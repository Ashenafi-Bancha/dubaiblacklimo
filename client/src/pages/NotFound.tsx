import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/components/sections/PageHeader';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('notFound.title')} noindex />
      <PageHeader image="pages/legal" eyebrow={t('notFound.eyebrow')} title={t('notFound.title')} lead={t('notFound.body')}>
        <ButtonLink to="/" variant="outline">
          {t('common.backHome')}
        </ButtonLink>
      </PageHeader>
    </>
  );
}
