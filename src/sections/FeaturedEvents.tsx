import { Calendar, MapPin, ArrowRight, ShoppingCart } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

interface Event {
  id: number;
  name: string;
  artist: string;
  city: string;
  country: string;
  date: string;
  price: number;
  image: string;
  category: string;
  venue: string;
}

const events: Event[] = [
  {
    id: 1,
    name: 'Los Fundamentalistas del Aire Acondicionado',
    artist: 'Los Fundamentalistas',
    city: 'Jesús María',
    country: 'Argentina',
    date: '23 Mayo 2026',
    price: 85000,
    image: '/artist-fundamentalistas.jpg',
    category: 'Rock',
    venue: 'Anfiteatro de Jesús María',
  },
  {
    id: 2,
    name: 'Rosalía',
    artist: 'Rosalía',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '1, 2, 4 y 6 Ago 2026',
    price: 180000,
    image: '/artist-rosalia.jpg',
    category: 'Pop',
    venue: 'Movistar Arena',
  },
  {
    id: 3,
    name: 'Soda Stereo',
    artist: 'Soda Stereo',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '4, 10 y 11 Jun 2026',
    price: 220000,
    image: '/artist-soda.jpg',
    category: 'Rock',
    venue: 'Movistar Arena',
  },
  {
    id: 4,
    name: 'Lali',
    artist: 'Lali',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '6 y 7 Jun 2026',
    price: 95000,
    image: '/artist-lali.jpg',
    category: 'Pop',
    venue: 'Estadio River Plate',
  },
  {
    id: 5,
    name: 'El Plan de la Mariposa',
    artist: 'El Plan de la Mariposa',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '13 Jun 2026',
    price: 45000,
    image: '/artist-plan-mariposa.jpg',
    category: 'Rock',
    venue: 'Movistar Arena',
  },
  {
    id: 6,
    name: 'Soda Stereo',
    artist: 'Soda Stereo',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '10, 11, 14 y 15 Ago 2026',
    price: 250000,
    image: '/artist-soda.jpg',
    category: 'Rock',
    venue: 'Movistar Arena',
  },
  {
    id: 7,
    name: 'Rawayana',
    artist: 'Rawayana',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '20 y 21 Ago 2026',
    price: 75000,
    image: '/artist-rawayana.jpg',
    category: 'Show',
    venue: 'Movistar Arena',
  },
  {
    id: 8,
    name: 'Midachi',
    artist: 'Midachi',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '29 Ago 2026',
    price: 35000,
    image: '/artist-midachi.jpg',
    category: 'Show',
    venue: 'Teatro Gran Rex',
  },
  {
    id: 9,
    name: 'Morat',
    artist: 'Morat',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '24, 25, 26 y 29 Sep 2026',
    price: 85000,
    image: '/artist-morat.jpg',
    category: 'Pop',
    venue: 'Movistar Arena',
  },
  {
    id: 10,
    name: 'Robbie Williams',
    artist: 'Robbie Williams',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '1, 2, 4 y 10 Oct 2026',
    price: 195000,
    image: '/artist-robbie.jpg',
    category: 'Pop',
    venue: 'Movistar Arena',
  },
  {
    id: 11,
    name: 'Zayn',
    artist: 'Zayn',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '6 Oct 2026',
    price: 145000,
    image: '/artist-zayn.jpg',
    category: 'Pop',
    venue: 'Movistar Arena',
  },
  {
    id: 12,
    name: 'Iron Maiden',
    artist: 'Iron Maiden',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '20 y 21 Oct 2026',
    price: 175000,
    image: '/artist-iron-maiden.jpg',
    category: 'Rock',
    venue: 'Estadio Huracán',
  },
  {
    id: 13,
    name: 'Eros Ramazzotti',
    artist: 'Eros Ramazzotti',
    city: 'Buenos Aires',
    country: 'Argentina',
    date: '28 Nov 2026',
    price: 165000,
    image: '/artist-eros.jpg',
    category: 'Pop',
    venue: 'Movistar Arena',
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
}

export function FeaturedEvents() {
  const { addItem, setIsCartOpen } = useCart();

  const handleAddToCart = (event: Event) => {
    addItem({
      id: event.id,
      name: event.name,
      artist: event.artist,
      city: event.city,
      country: event.country,
      date: event.date,
      price: event.price,
      image: event.image,
      category: event.category,
      venue: event.venue,
    });
    setIsCartOpen(true);
  };

  return (
    <section id="eventos" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <Badge className="mb-4 bg-violet-600/20 text-violet-400 border-violet-600/30">
              Próximos Shows
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Eventos <span className="text-gradient">Destacados</span>
            </h2>
            <p className="text-white/60 max-w-xl">
              Descubrí los mejores conciertos y shows de la temporada 2026. 
              Paquetes completos con transporte y alojamiento incluido.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-6 lg:mt-0 border-white/20 text-white hover:bg-white/10"
          >
            Ver todos los eventos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Events Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event) => (
            <article
              key={event.id}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-violet-600 text-white border-0 text-xs">
                  {event.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-violet-400 transition-colors line-clamp-2">
                  {event.name}
                </h3>
                <p className="text-white/50 text-xs mb-3">{event.artist}</p>

                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center text-white/60 text-xs">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-violet-500 flex-shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  <div className="flex items-center text-white/60 text-xs">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-violet-500 flex-shrink-0" />
                    {event.date}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wide">Desde</p>
                    <p className="text-lg font-bold text-white">{formatPrice(event.price)}</p>
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => handleAddToCart(event)}
                    className="bg-violet-600 hover:bg-violet-700 text-white text-xs px-3"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 mr-1" />
                    Reservar
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
