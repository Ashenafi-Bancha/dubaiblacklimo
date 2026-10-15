import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Layout';
import { Picture } from '@/components/ui/Picture';
import { Eyebrow, Heading, Lead } from '@/components/ui/Typography';

interface PageHeaderProps {
  eyebrow: string;
  /** The page's <h1>. Pass <Rich k="…" /> to show accent words in champagne italics. */
  title: ReactNode;
  lead?: string;
  /** A photograph set behind the heading. */
  image: string;
  /** The part of the photo to keep in view when it is cropped, as a CSS object-position. */
  imageFocus?: string;
  children?: ReactNode;
}

/**
 * The opening of every inner page: a photograph that pushes in slowly, a small
 * label, the page's <h1> rising into view, and an optional introduction.
 *
 * The entrance runs on CSS rather than script, so the heading is visible at the
 * first paint even before the page's JavaScript has loaded.
 */
export function PageHeader({ eyebrow, title, lead, image, imageFocus, children }: PageHeaderProps) {
  return (
    <header className="relative isolate flex min-h-[86svh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Picture
          src={image}
          alt=""
          focus={imageFocus}
          // On tall, narrow screens the photo is cropped to the header's height, so it is displayed wider than the screen.
          sizes="(max-aspect-ratio: 3/2) 140vh, 100vw"
          priority
          className="size-full animate-slow-zoom object-cover"
        />
        {/* Darkens the photo towards the foot, where the text sits, and a little along the reading side. */}
        <div className="absolute inset-0 bg-linear-to-t from-ink from-5% via-ink/55 via-50% to-ink/45" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/55 via-transparent to-transparent rtl:bg-linear-to-l" />
      </div>

      <Container className="pt-44 pb-16 lg:pb-24">
        <Eyebrow className="animate-rise">{eyebrow}</Eyebrow>
        <Heading as="h1" size="hero" className="mt-8 max-w-5xl">
          {/* The heading rises from behind an invisible edge. */}
          <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <span className="block animate-mask-rise [animation-delay:150ms]">{title}</span>
          </span>
        </Heading>
        {lead && <Lead className="mt-8 max-w-2xl animate-rise [animation-delay:350ms]">{lead}</Lead>}
        {children && <div className="mt-12 animate-rise [animation-delay:500ms]">{children}</div>}
      </Container>
    </header>
  );
}
