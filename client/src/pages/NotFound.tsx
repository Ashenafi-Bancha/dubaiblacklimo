import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('notFound.title')} noindex />
      <Container className="flex min-h-svh flex-col justify-center py-40">
        <Eyebrow>{t('notFound.eyebrow')}</Eyebrow>
        <Heading as="h1" className="mt-8">
          {t('notFound.title')}
        </Heading>
        <Lead className="mt-6 max-w-xl">{t('notFound.body')}</Lead>
        <div className="mt-12">
          <ButtonLink to="/" variant="outline">
            {t('common.backHome')}
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
