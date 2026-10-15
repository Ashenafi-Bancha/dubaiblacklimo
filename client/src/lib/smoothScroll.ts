import Lenis from 'lenis';

/**
 * SMOOTH SCROLLING
 *
 * Mouse-wheel and trackpad scrolling is eased with Lenis, which gives the page
 * its slow, weighted glide. Touch screens keep their native scrolling, and
 * visitors who ask for reduced motion get ordinary scrolling.
 *
 * Code that moves the page programmatically (page changes, #fragment links,
 * dialogs) must go through these helpers, so the easing never fights it.
 */
let lenis: Lenis | null = null;

export function startSmoothScroll(): void {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  lenis = new Lenis({ autoRaf: true, lerp: 0.085, wheelMultiplier: 0.9 });
}

export function stopSmoothScroll(): void {
  lenis?.destroy();
  lenis = null;
}

/** Freezes page scrolling, for example while a full-screen menu is open. */
export function lockScroll(): void {
  document.documentElement.style.overflow = 'hidden';
  lenis?.stop();
}

export function unlockScroll(): void {
  document.documentElement.style.overflow = '';
  lenis?.start();
}

/** Jumps to the top of the page without animation. */
export function jumpToTop(): void {
  if (lenis) {
    lenis.resize();
    lenis.scrollTo(0, { immediate: true, force: true });
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

/** Jumps to an element, honouring its CSS `scroll-margin-top` (both paths apply it). */
export function jumpToElement(element: HTMLElement): void {
  if (lenis) {
    // A new page has just replaced the old one: let Lenis re-measure the page before it scrolls.
    lenis.resize();
    lenis.scrollTo(element, { immediate: true, force: true });
  } else {
    element.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
}
