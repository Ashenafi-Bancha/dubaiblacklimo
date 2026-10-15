import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/Button';
import { SelectField, TextAreaField, TextField } from '@/components/ui/Field';
import { Container, Hairline } from '@/components/ui/Layout';
import { PageLoader } from '@/components/ui/PageLoader';
import { Rich } from '@/components/ui/Rich';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

/**
 * A developer reference for the design system, at /styleguide. It is not linked
 * from the site and is excluded from search engines. Labels are in English
 * only; the samples use real translated copy so the Arabic and right-to-left
 * rendering of every component can be checked at /ar/styleguide.
 */

const SWATCHES = [
  { name: 'ink', className: 'bg-ink', use: 'Page background' },
  { name: 'charcoal', className: 'bg-charcoal', use: 'Alternate sections, cards' },
  { name: 'graphite', className: 'bg-graphite', use: 'Raised surfaces' },
  { name: 'gold', className: 'bg-gold', use: 'Accent, used sparingly' },
  { name: 'gold-soft', className: 'bg-gold-soft', use: 'Accent hover' },
  { name: 'ivory', className: 'bg-ivory', use: 'Primary text' },
  { name: 'mist', className: 'bg-mist', use: 'Secondary text' },
  { name: 'stone', className: 'bg-stone', use: 'Tertiary text' },
];

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-16">
      <h2 className="text-label font-medium uppercase text-stone">{title}</h2>
      <div className="mt-10">{children}</div>
      <Hairline className="mt-16" />
    </section>
  );
}

export default function StyleGuide() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title="Style guide" noindex />
      <Container className="pt-40 pb-24">
        <Eyebrow>Design system</Eyebrow>
        <Heading as="h1" className="mt-8">
          Style guide
        </Heading>

        <Block title="Colour">
          <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {SWATCHES.map((swatch) => (
              <li key={swatch.name}>
                <div className={`h-24 border border-line ${swatch.className}`} />
                <p className="mt-3 text-sm text-ivory">{swatch.name}</p>
                <p className="text-sm text-stone">{swatch.use}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Typography">
          <div className="space-y-10">
            <Heading as="h3" size="hero">
              <Rich k="home.hero.title" />
            </Heading>
            <Heading as="h3" size="display">
              <Rich k="home.experience.title" />
            </Heading>
            <Heading as="h3" size="title">
              {t('home.seoTitle')}
            </Heading>
            <Eyebrow>{t('home.hero.eyebrow')}</Eyebrow>
            <Lead className="max-w-2xl">{t('home.hero.lead')}</Lead>
            <p className="max-w-2xl text-mist">{t('home.experience.body')}</p>
          </div>
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-6">
            <Button size="lg">
              {t('common.reserve')}
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 rtl:-scale-x-100" />
            </Button>
            <Button>{t('common.getQuote')}</Button>
            <Button variant="outline">{t('common.bookNow')}</Button>
            <Button variant="outline" size="sm">
              {t('common.bookNow')}
            </Button>
            <Button variant="ghost">{t('common.backHome')}</Button>
            <Button disabled>{t('common.getQuote')}</Button>
          </div>
        </Block>

        <Block title="Form fields">
          <form className="grid max-w-3xl gap-x-10 gap-y-10 md:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
            <TextField label="Pickup" placeholder="Dubai International Airport (DXB)" />
            <TextField label="Date" type="date" />
            <SelectField label="Vehicle class" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>Executive Sedan</option>
              <option>Luxury SUV</option>
            </SelectField>
            <TextField label="Email" type="email" defaultValue="name@" error="Enter a valid email address." />
            <TextField label="Flight number" hint="Lets the chauffeur track your arrival." />
            <TextAreaField label="Notes" className="md:col-span-2" />
          </form>
        </Block>

        <Block title="Dividers and loading">
          <div className="space-y-10">
            <Hairline />
            <Hairline gold />
            <div className="[&>div]:min-h-24">
              <PageLoader />
            </div>
          </div>
        </Block>
      </Container>
    </>
  );
}
