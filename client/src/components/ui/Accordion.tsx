import { Plus } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

/**
 * A question that expands to show its answer. The panel animates by growing a
 * grid row from 0 to its natural height, which needs no measuring in script.
 * While closed the panel is `inert`, so its content cannot be focused or read
 * by a screen reader.
 */
export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((value) => !value)}
          className="group flex w-full items-center justify-between gap-6 py-6 text-start font-display text-xl font-normal text-ivory transition-colors duration-500 ease-luxe hover:text-gold sm:text-2xl"
        >
          {title}
          <Plus
            aria-hidden="true"
            strokeWidth={1.25}
            className={cn('size-5 shrink-0 text-gold transition-transform duration-700 ease-luxe', open && 'rotate-45')}
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        inert={!open}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-700 ease-luxe',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="max-w-3xl pb-8 text-mist">{children}</div>
        </div>
      </div>
    </div>
  );
}
