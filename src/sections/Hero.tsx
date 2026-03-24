import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="/hero-concert.jpg"
          alt="Concierto masivo con luces y multitud"
          className="w-full h-full object-cover"
          sizes="100vw"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-32 lg:pt-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-sm text-white/80">Más de 10,000 viajeros musicales</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Viaja para vivir{' '}
            <span className="text-gradient">la música</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Experiencias únicas para asistir a los mejores conciertos y festivales.
            Transporte, entradas y alojamiento en un solo paquete.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-6 text-lg rounded-xl group animate-pulse-glow"
            >
              Ver próximos eventos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver experiencias
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-white/50">Eventos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">12</div>
              <div className="text-sm text-white/50">Países</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">50K+</div>
              <div className="text-sm text-white/50">Fans</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      {/* Scroll Indicator */}
      <div className="relative z-10 flex justify-center pb-6 sm:pb-8 lg:pb-28 lg:pt-10">
        <button
          aria-label="Desplazarse hacia abajo"
          onClick={() => {
            const target = document.getElementById('buscar-eventos');
            if (!target) return;
            const navbarHeight = window.innerWidth >= 1024 ? 104 : 88;
            const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
          }}
          className="animate-bounce cursor-pointer focus:outline-none"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-violet-500" />
          </div>
        </button>
      </div>
    </section>
  );
}
