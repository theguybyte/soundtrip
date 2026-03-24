import { Star, Quote } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  event: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    avatar: '/testimonio-1.jpg',
    event: 'Lollapalooza Argentina 2024',
    rating: 5,
    text: 'Increíble experiencia. Todo estuvo perfectamente organizado, desde el transporte hasta el hotel. Pude disfrutar del festival sin preocuparme por nada. ¡Ya estoy esperando el próximo viaje!',
    date: 'Marzo 2024',
  },
  {
    id: 2,
    name: 'Lucas Martínez',
    avatar: '/testimonio-2.jpg',
    event: 'Ultra Music Festival Brasil',
    rating: 5,
    text: 'Viajé con mi novia y fue una experiencia inolvidable. El grupo de viajeros que conocimos fue genial, y el coordinador siempre estuvo atento a todo. 100% recomendable.',
    date: 'Abril 2024',
  },
  {
    id: 3,
    name: 'Camila Rodríguez',
    avatar: '/testimonio-1.jpg',
    event: 'Taylor Swift Era Tour',
    rating: 5,
    text: 'Nunca pensé que podría ver a Taylor en vivo. SoundTrip hizo realidad mi sueño. El paquete premium valió cada peso, hotel excelente y entrada VIP. ¡Gracias!',
    date: 'Noviembre 2024',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-600/20 text-violet-400 border-violet-600/30">
            <Star className="w-3 h-3 mr-1" />
            Testimonios
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros <span className="text-gradient">viajeros</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Miles de fans ya vivieron la experiencia SoundTrip. 
            Esto es lo que cuentan sobre sus viajes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative p-6 lg:p-8 rounded-2xl glass hover:border-violet-500/30 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-violet-500/30" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-violet-500 text-violet-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <OptimizedImage
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  sizes="48px"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.event}</p>
                </div>
              </div>

              {/* Date */}
              <p className="absolute bottom-6 right-6 text-white/40 text-xs">
                {testimonial.date}
              </p>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '4.9', label: 'Rating promedio', suffix: '/5' },
            { value: '10K+', label: 'Viajeros felices', suffix: '' },
            { value: '98%', label: 'Recomiendan', suffix: '' },
            { value: '150+', label: 'Eventos realizados', suffix: '' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-gradient">
                {stat.value}
                <span className="text-violet-400">{stat.suffix}</span>
              </p>
              <p className="text-white/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
