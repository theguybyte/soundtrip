import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  /** Phone number in international format without + or spaces, e.g. "5493516995834" */
  phone?: string;
  /** Pre-filled message text */
  message?: string;
  /** Distance from bottom edge in px */
  offsetBottom?: number;
  /** Distance from right edge in px */
  offsetRight?: number;
  /** Accessible label for screen readers */
  label?: string;
  className?: string;
}

const DEFAULT_PHONE = '5493516995834';
const DEFAULT_MESSAGE = '🎵 Hola SoundTrip, quiero hacerles una consulta: ';
const DEFAULT_OFFSET_BOTTOM = 24;
const DEFAULT_OFFSET_RIGHT = 24;

export function WhatsAppButton({
  phone = DEFAULT_PHONE,
  message = DEFAULT_MESSAGE,
  offsetBottom = DEFAULT_OFFSET_BOTTOM,
  offsetRight = DEFAULT_OFFSET_RIGHT,
  label = 'Contactar por WhatsApp',
  className,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      tabIndex={0}
      style={{ bottom: offsetBottom, right: offsetRight }}
      className={cn(
        // Base layout
        'group fixed z-50 flex items-center justify-center',
        'w-14 h-14 rounded-full',
        // Color
        'bg-[#25D366] text-white',
        // Shadow
        'shadow-lg shadow-[#25D366]/40',
        // Transitions
        'transition-all duration-200 ease-out',
        // Hover / Active states
        'hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50',
        'active:scale-95',
        // Focus-visible ring (keyboard nav)
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
        // Animation class (defined in index.css)
        'whatsapp-btn',
        className,
      )}
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 whatsapp-ping"
      />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative w-7 h-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>

      {/* Tooltip */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute right-full mr-3 whitespace-nowrap',
          'px-3 py-1.5 rounded-lg text-xs font-medium',
          'bg-zinc-900 text-white border border-white/10',
          'shadow-lg pointer-events-none',
          // Hidden by default, shown on hover/focus-within of parent
          'opacity-0 translate-x-1 transition-all duration-150',
          'group-hover:opacity-100 group-hover:translate-x-0',
        )}
      >
        {label}
      </span>
    </a>
  );
}
