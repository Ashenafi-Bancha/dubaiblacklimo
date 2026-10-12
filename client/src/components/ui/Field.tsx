import { ChevronDown } from 'lucide-react';
import { useId, type ComponentProps, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * FORM FIELDS
 *
 * Underlined inputs with a small uppercase label. They accept the same props
 * as the native elements (including `ref`), so they work directly with
 * React Hook Form: <TextField label="Name" error={errors.name?.message} {...register('name')} />
 */

interface FieldMeta {
  label: string;
  /** Validation message. Its presence marks the field as invalid. */
  error?: string;
  /** Helper text shown under the field when there is no error. */
  hint?: string;
}

// The text is 16px so that iOS Safari does not zoom the page when a field is focused.
const control =
  'block w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ivory ' +
  'placeholder:text-stone transition-[border-color,box-shadow] duration-500 ease-luxe ' +
  'focus:border-gold focus:shadow-[0_1px_0_0_var(--color-gold)] focus:outline-none ' +
  'aria-invalid:border-danger aria-invalid:shadow-none disabled:opacity-40';

interface ShellProps extends FieldMeta {
  id: string;
  className?: string;
  children: ReactNode;
}

function FieldShell({ id, label, error, hint, className, children }: ShellProps) {
  const message = error ?? hint;
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-label font-medium uppercase text-mist">
        {label}
      </label>
      {children}
      {message && (
        <p id={`${id}-message`} role={error ? 'alert' : undefined} className={cn('mt-2 text-sm', error ? 'text-danger' : 'text-stone')}>
          {message}
        </p>
      )}
    </div>
  );
}

/** The aria attributes that tie a control to its error or hint. */
function describe(id: string, { error, hint }: FieldMeta) {
  return {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error || hint ? `${id}-message` : undefined,
  } as const;
}

export function TextField({ label, error, hint, className, ...props }: ComponentProps<'input'> & FieldMeta) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} className={className}>
      <input className={control} {...describe(id, { label, error, hint })} {...props} />
    </FieldShell>
  );
}

export function TextAreaField({ label, error, hint, className, rows = 4, ...props }: ComponentProps<'textarea'> & FieldMeta) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} className={className}>
      <textarea rows={rows} className={cn(control, 'resize-y')} {...describe(id, { label, error, hint })} {...props} />
    </FieldShell>
  );
}

export function SelectField({ label, error, hint, className, children, ...props }: ComponentProps<'select'> & FieldMeta) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} className={className}>
      <div className="relative">
        <select className={cn(control, 'appearance-none pe-8')} {...describe(id, { label, error, hint })} {...props}>
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          strokeWidth={1.25}
          className="pointer-events-none absolute end-0 top-1/2 size-5 -translate-y-1/2 text-gold"
        />
      </div>
    </FieldShell>
  );
}
