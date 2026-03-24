import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const SCROLL_THRESHOLD = 400;
// WhatsApp button: bottom 24px + height 56px + 12px gap = 92px
const OFFSET_BOTTOM = 92;
const OFFSET_RIGHT = 32;

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      tabIndex={visible ? 0 : -1}
      style={{ bottom: OFFSET_BOTTOM, right: OFFSET_RIGHT }}
      className={cn(
        'fixed z-50 w-10 h-10 rounded-full',
        'flex items-center justify-center',
        // Glass style — subtle, non-competing with WhatsApp button
        'bg-white/10 border border-white/15 backdrop-blur-md',
        'text-white/70',
        // Transitions
        'transition-all duration-300 ease-out',
        // Hover / active
        'hover:bg-white/20 hover:border-white/30 hover:text-white hover:-translate-y-0.5',
        'active:scale-95 active:translate-y-0',
        // Focus ring
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
        // Visibility toggle — fade + slight slide up
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none',
      )}
    >
      <ArrowUp className="w-4 h-4" aria-hidden="true" />
    </button>
  );
}
