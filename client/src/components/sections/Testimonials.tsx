import { testimonials } from '@app/shared/content/testimonials';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Heading } from '@/components/ui/Typography';
import { useLocalize } from '@/i18n/useLocalize';

/**
 * Customer testimonials. Renders nothing at all until the operator has added
 * real reviews: the site never shows invented quotes, names or ratings.
 */
export function Testimonials() {
  const { t } = useTranslation();
  const l = useLocalize();

  if (testimonials.length === 0) return null;

  return (
    <Section>
      <Container>
        <Reveal>
          <Eyebrow>{t('home.testimonials.eyebrow')}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <Heading className="mt-8">{t('home.testimonials.title')}</Heading>
        </Reveal>

        <ul className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={testimonial.id}>
              <Reveal delay={index * 0.08}>
                <figure className="border-t border-gold/50 pt-8">
                  <blockquote className="font-display text-2xl font-light text-ivory">{l(testimonial.quote)}</blockquote>
                  <figcaption className="mt-6 text-sm text-mist">
                    {testimonial.author}
                    {testimonial.context && <span className="block text-stone">{l(testimonial.context)}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
