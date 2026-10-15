import type { ReactNode } from 'react';
import { MaskReveal } from '@/components/ui/Motion';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Heading } from '@/components/ui/Typography';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow: string;
  /** Pass <Rich k="…" /> to show accent words in champagne italics. */
  title: ReactNode;
  /** Something to sit opposite the heading, such as a "view all" link. */
  action?: ReactNode;
  /** Centre the heading, for sections without an action. */
  centered?: boolean;
}

/** The label-and-heading pair that opens a section. The heading rises into view from behind an edge. */
export function SectionHeading({ eyebrow, title, action, centered = false }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 md:gap-10',
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
      )}
    >
      <div>
        <Reveal>
          <Eyebrow className={centered ? 'justify-center' : undefined}>{eyebrow}</Eyebrow>
        </Reveal>
        <Heading className="mt-8 max-w-4xl">
          <MaskReveal delay={0.1}>{title}</MaskReveal>
        </Heading>
      </div>
      {action && <Reveal delay={0.25}>{action}</Reveal>}
    </div>
  );
}
