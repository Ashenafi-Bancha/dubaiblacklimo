import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Layout';
import { Picture } from '@/components/ui/Picture';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  /** A photo to set behind the heading. Without one the header is typographic. */
  image?: string;
  children?: ReactNode;
}

/**
 * The opening of every inner page: a small label, the page's <h1> and an
 * optional introduction, either on a plain background or over a photograph.
 */
export function PageHeader({ eyebrow, title, lead, image, children }: PageHeaderProps) {
  const content = (
    <>
      <Eyebrow className="animate-rise">{eyebrow}</Eyebrow>
      <Heading as="h1" className="mt-8 max-w-4xl animate-rise [animation-delay:120ms]">
        {title}
      </Heading>
      {lead && <Lead className="mt-8 max-w-2xl animate-rise [animation-delay:240ms]">{lead}</Lead>}
      {children && <div className="mt-12 animate-rise [animation-delay:360ms]">{children}</div>}
    </>
  );

  if (!image) {
    return (
      <header className="border-b border-line bg-[radial-gradient(ellipse_90%_100%_at_75%_0%,var(--color-charcoal),var(--color-ink))]">
        <Container className="pt-40 pb-16 lg:pt-52 lg:pb-24">{content}</Container>
      </header>
    );
  }

  return (
    <header className="relative isolate flex min-h-[80svh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Picture src={image} alt="" sizes="(max-aspect-ratio: 3/2) 130vh, 100vw" priority className="size-full animate-slow-zoom object-cover" />
        {/* Darkens the photo towards the bottom, where the text sits. */}
        <div className="absolute inset-0 bg-linear-to-t from-ink from-5% via-ink/45 via-55% to-ink/45" />
      </div>
      <Container className="pt-40 pb-16 lg:pb-24">{content}</Container>
    </header>
  );
}
