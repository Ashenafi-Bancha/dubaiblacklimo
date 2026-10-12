import { faqCategories, faqs } from '@app/shared/content/faqs';
import { useTranslation } from 'react-i18next';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHeader } from '@/components/sections/PageHeader';
import { Seo } from '@/components/Seo';
import { AccordionItem } from '@/components/ui/Accordion';
import { Container, Section } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { useLocalize } from '@/i18n/useLocalize';

export default function Faq() {
  const { t } = useTranslation();
  const l = useLocalize();

  return (
    <>
      <Seo title={t('faq.seoTitle')} description={t('faq.seoDescription')} />
      <PageHeader eyebrow={t('faq.eyebrow')} title={t('faq.title')} lead={t('faq.lead')} />

      <Section>
        <Container className="space-y-20 lg:space-y-28">
          {faqCategories.map((category) => (
            <section key={category} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-4">
                <h2 className="font-display text-title font-light text-ivory">{t(`faq.categories.${category}`)}</h2>
              </Reveal>
              <Reveal delay={0.1} className="border-t border-line lg:col-span-8">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <AccordionItem key={faq.id} title={l(faq.question)}>
                      <p>{l(faq.answer)}</p>
                    </AccordionItem>
                  ))}
              </Reveal>
            </section>
          ))}
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
