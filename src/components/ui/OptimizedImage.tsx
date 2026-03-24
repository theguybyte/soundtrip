import { type ImgHTMLAttributes } from 'react';

const CATEGORY_SIZES: Record<string, number[]> = {
  'artist-':     [400, 800],
  'dest-':       [600, 1200],
  'event-':      [600, 1200],
  'hero-':       [800, 1200, 1920],
  'testimonio-': [80, 160],
  'exp-':        [600, 1200],
};

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading'> {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

function getSrcSet(src: string): string | null {
  const filename = src.replace(/^\//, '');
  const name = filename.replace(/\.[^.]+$/, '');
  for (const [prefix, sizes] of Object.entries(CATEGORY_SIZES)) {
    if (filename.startsWith(prefix)) {
      return sizes.map(w => `/${name}-${w}w.webp ${w}w`).join(', ');
    }
  }
  return null;
}

export function OptimizedImage({ src, alt, sizes, className, priority = false, ...rest }: OptimizedImageProps) {
  const srcSet = getSrcSet(src);
  return (
    <picture>
      {srcSet && <source type="image/webp" srcSet={srcSet} sizes={sizes} />}
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? 'sync' : 'async'}
        {...rest}
      />
    </picture>
  );
}
