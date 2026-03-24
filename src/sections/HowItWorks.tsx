import { Search, Ticket, Plane, Music } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: Search,
    title: 'Elegí tu evento',
    description: 'Explorá nuestro catálogo de conciertos y festivales. Filtrá por artista, ciudad o fecha para encontrar tu experiencia perfecta.',
  },
  {
    id: 2,
    icon: Ticket,
    title: 'Reservá tu viaje',
    description: 'Seleccioná el paquete que más te guste. Todos incluyen entrada al evento, transporte y opciones de alojamiento.',
  },
  {
    id: 3,
    icon: Plane,
    title: 'Viví el show',
    description: 'Nosotros nos encargamos de todo. Vos solo concentrate en disfrutar la música y crear recuerdos inolvidables.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-600/20 text-violet-400 border-violet-600/30">
            Proceso Simple
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Cómo <span className="text-gradient">funciona</span>?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            En tres simples pasos, podés estar en camino a vivir la experiencia musical de tu vida.
            Nosotros nos encargamos de todos los detalles.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-violet-600/50 to-transparent" />
              )}

              <div className="relative text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-xl" />
                  
                  {/* Circle */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-zinc-900 border-2 border-violet-500 flex items-center justify-center">
                    <span className="text-lg font-bold text-violet-400">{step.id}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass">
            <Music className="w-8 h-8 text-violet-500" />
            <div className="text-left">
              <p className="text-white font-semibold">¿Listo para tu próxima aventura musical?</p>
              <p className="text-white/60 text-sm">Más de 10,000 fans ya viajaron con nosotros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
