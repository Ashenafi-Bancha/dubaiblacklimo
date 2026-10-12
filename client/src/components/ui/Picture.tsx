import manifest from '@/generated/images.json';

interface ImageMeta {
  width: number;
  height: number;
  /** The widths that were generated for this photo. */
  widths: number[];
  /** The photo's dominant colour, shown while it loads. */
  color: string;
}

const images: Record<string, ImageMeta | undefined> = manifest;

interface PictureProps {
  /** A photo from client/image-sources by name ("fleet/luxury-suv"), or a full URL. */
  src: string;
  /** Describe the photo, or pass "" when it is purely decorative. */
  alt: string;
  /**
   * How wide the photo is displayed, as a CSS `sizes` value such as
   * "(min-width: 1024px) 50vw, 100vw". The browser uses it to download the
   * smallest file that will still look sharp.
   */
  sizes: string;
  /** Load at once and at high priority. Only for the first photo on a page. */
  priority?: boolean;
  /** The part of the photo to keep in view when it is cropped, as a CSS object-position. */
  focus?: string;
  className?: string;
}

/**
 * A responsive photo: AVIF with a WebP fallback, in several widths, lazy-loaded,
 * and with its dimensions declared so the page never jumps as it loads.
 */
export function Picture({ src, alt, sizes, priority = false, focus, className }: PictureProps) {
  const meta = images[src];
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : 'auto';

  // Not one of the optimised photos (for example an image uploaded later): show it as given.
  if (!meta) {
    return <img src={src} alt={alt} loading={loading} fetchPriority={fetchPriority} decoding="async" className={className} style={{ objectPosition: focus }} />;
  }

  const srcSet = (extension: string) =>
    meta.widths.map((width) => `/images/${src}-${width}.${extension} ${width}w`).join(', ');
  const largest = meta.widths[meta.widths.length - 1];

  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <img
        src={`/images/${src}-${largest}.webp`}
        srcSet={srcSet('webp')}
        sizes={sizes}
        width={meta.width}
        height={meta.height}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        style={{ backgroundColor: meta.color, objectPosition: focus }}
      />
    </picture>
  );
}
