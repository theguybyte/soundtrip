import { Check, Bus, Hotel, Ticket, Users, ArrowRight } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    id: 1,
    name: 'Paquete Básico',
    description: 'Ideal para quienes solo necesitan transporte y entrada',
    price: 180000,
    image: '/exp-viaje.jpg',
    features: [
      'Traslado ida y vuelta',
      'Entrada al evento',
      'Coordinador de viaje',
      'Seguro de viaje',
    ],
  },
  {
    id: 2,
    name: 'Paquete Completo',
    description: 'La experiencia completa con alojamiento incluido',
    price: 380000,
    image: '/event-edm.jpg',
    features: [
      'Traslado ida y vuelta',
      'Entrada al evento',
      'Hotel 3 estrellas (2 noches)',
      'Desayuno incluido',
      'Coordinador de viaje',
      'Seguro de viaje',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Paquete Premium',
    description: 'Máximo confort con hotel premium y beneficios exclusivos',
    price: 650000,
    image: '/event-pop.jpg',
    features: [
      'Traslado ida y vuelta',
      'Entrada VIP al evento',
      'Hotel 4-5 estrellas (2 noches)',
      'Desayuno y cena incluidos',
      'Acceso backstage (si aplica)',
      'Coordinador exclusivo',
      'Seguro premium',
    ],
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
}

export function TravelExperiences() {
  return (
    <section id="experiencias" className="py-20 lg:py-32 bg-zinc-950/50">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-violet-600/20 text-violet-400 border-violet-600/30">
              <Users className="w-3 h-3 mr-1" />
              Paquetes de Viaje
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Experiencias <span className="text-gradient">completas</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Elegí el paquete que mejor se adapte a tus necesidades. 
              Todos incluyen transporte, entrada y opciones de alojamiento.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  pkg.popular
                    ? 'border-2 border-violet-500 shadow-2xl shadow-violet-500/20'
                    : 'border border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-violet-600 text-white text-center py-2 text-sm font-semibold z-10">
                    Más Popular
                  </div>
                )}

                {/* Image */}
                <div className={`relative h-48 overflow-hidden ${pkg.popular ? 'mt-10' : ''}`}>
                  <OptimizedImage
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 bg-zinc-900/80 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-xs text-white/50">Desde</p>
                    <p className="text-3xl font-bold text-white">{formatPrice(pkg.price)}</p>
                    <p className="text-xs text-white/50">por persona</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/70 text-sm">
                        <Check className="w-4 h-4 mr-2 text-violet-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-violet-600 hover:bg-violet-700 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Elegir paquete
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Icons Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Bus, label: 'Transporte', desc: 'Ida y vuelta' },
              { icon: Hotel, label: 'Alojamiento', desc: 'Hoteles seleccionados' },
              { icon: Ticket, label: 'Entradas', desc: 'Acceso garantizado' },
              { icon: Users, label: 'Grupos', desc: 'Viajá con otros fans' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-xl glass">
                <item.icon className="w-8 h-8 text-violet-500 mx-auto mb-3" />
                <p className="text-white font-medium">{item.label}</p>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
