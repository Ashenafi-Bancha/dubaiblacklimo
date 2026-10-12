import { legalDocuments, type LegalSlug } from '@app/shared/content/legal';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/components/sections/PageHeader';
import { Seo } from '@/components/Seo';
import { Container, Section } from '@/components/ui/Layout';
import { useLocalize } from '@/i18n/useLocalize';
import NotFound from './NotFound';

/**
 * Terms, Privacy and Cancellation share this layout. The text is a placeholder
 * outline (see shared/src/content/legal.ts) and the page says so in a notice
 * at the top. Remove the notice once the real policies are in place.
 */
export default function Legal({ slug }: { slug: LegalSlug }) {
  const { t } = useTranslation();
  const l = useLocalize();
  const document = legalDocuments.find((candidate) => candidate.slug === slug);

  if (!document) return <NotFound />;

  return (
    <>
      <Seo title={l(document.title)} />
      <PageHeader eyebrow={t('legal.eyebrow')} title={l(document.title)} />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <aside role="note" className="border border-gold/50 bg-charcoal p-6 sm:p-8">
              <p className="text-label font-semibold uppercase text-gold">{t('legal.noticeLabel')}</p>
              <p className="mt-3 text-sm text-mist">{t('legal.notice')}</p>
            </aside>

            {document.sections.map((section) => (
              <section key={section.heading.en} className="mt-14">
                <h2 className="font-display text-title font-light text-ivory">{l(section.heading)}</h2>
                <p className="mt-4 text-mist">{l(section.body)}</p>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
