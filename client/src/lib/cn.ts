/**
 * Joins class names, skipping anything falsy.
 *
 * It does not resolve conflicts: if two classes set the same CSS property
 * (`hidden` and `flex`, `text-mist` and `text-stone`), the winner is decided by
 * the stylesheet, not by the order written here. Pass only classes that add to
 * a component's own, and wrap the component in an element to hide or reposition it.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
