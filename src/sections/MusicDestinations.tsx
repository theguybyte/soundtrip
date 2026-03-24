import { MapPin, ArrowRight, Music } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  eventsCount: number;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Buenos Aires',
    country: 'Argentina',
    image: '/dest-buenos-aires.jpg',
    eventsCount: 45,
    description: 'La capital del rock latinoamericano con venues icónicos como el Estadio River Plate y el Movistar Arena.',
  },
  {
    id: 2,
    name: 'São Paulo',
    country: 'Brasil',
    image: '/dest-sao-paulo.jpg',
    eventsCount: 38,
    description: 'El corazón musical de Brasil, hogar de los festivales más grandes de América Latina.',
  },
  {
    id: 3,
    name: 'Río de Janeiro',
    country: 'Brasil',
    image: '/dest-rio.jpg',
    eventsCount: 25,
    description: 'Playas, montañas y los conciertos más espectaculares con el Pan de Azúcar de fondo.',
  },
  {
    id: 4,
    name: 'Santiago de Chile',
    country: 'Chile',
    image: '/dest-santiago.jpg',
    eventsCount: 32,
    description: 'Escenario de grandes giras internacionales con la cordillera de los Andes como telón.',
  },
];

export function MusicDestinations() {
  return (
    <section id="destinos" className="py-20 lg:py-32 bg-zinc-950/50">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-violet-600/20 text-violet-400 border-violet-600/30">
              <MapPin className="w-3 h-3 mr-1" />
              Destinos Musicales
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ciudades que <span className="text-gradient">vibran</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explora los destinos más populares para vivir experiencias musicales inolvidables. 
              Cada ciudad tiene su propio ritmo y energía.
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((destination) => (
              <article
                key={destination.id}
                className="group relative h-80 lg:h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <OptimizedImage
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/90 transition-colors" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  {/* Events Count */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-600/90 text-white text-sm font-medium">
                    <Music className="w-4 h-4" />
                    {destination.eventsCount} eventos
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white/70 text-sm mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {destination.country}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      {destination.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {destination.description}
                    </p>
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Explorar eventos
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
