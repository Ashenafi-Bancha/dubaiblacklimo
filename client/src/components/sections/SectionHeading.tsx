import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Heading } from '@/components/ui/Typography';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Something to sit opposite the heading, such as a "view all" link. */
  action?: ReactNode;
}

/** The label-and-heading pair that opens a section, revealed on scroll. */
export function SectionHeading({ eyebrow, title, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
      <div>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <Heading className="mt-8 max-w-3xl">{title}</Heading>
        </Reveal>
      </div>
      {action && <Reveal delay={0.2}>{action}</Reveal>}
    </div>
  );
}
