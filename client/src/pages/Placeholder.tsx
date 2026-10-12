import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

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
      <Container className="flex min-h-svh flex-col justify-center py-40">
        <Reveal>
          <Eyebrow>{t('placeholder.eyebrow')}</Eyebrow>
        </Reveal>
        <Reveal delay={0.12}>
          <Heading as="h1" className="mt-8">
            {title}
          </Heading>
        </Reveal>
        <Reveal delay={0.24}>
          <Lead className="mt-6 max-w-xl">{t('placeholder.body')}</Lead>
        </Reveal>
        <Reveal delay={0.36} className="mt-12">
          <ButtonLink to="/" variant="outline">
            {t('common.backHome')}
          </ButtonLink>
        </Reveal>
      </Container>
    </>
  );
}
