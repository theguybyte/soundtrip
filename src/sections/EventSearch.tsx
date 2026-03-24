import { useState } from 'react';
import { Search, MapPin, Calendar, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function EventSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const cities = [
    { value: '', label: 'Todas las ciudades' },
    { value: 'buenos-aires', label: 'Buenos Aires' },
    { value: 'sao-paulo', label: 'São Paulo' },
    { value: 'rio', label: 'Río de Janeiro' },
    { value: 'santiago', label: 'Santiago de Chile' },
    { value: 'montevideo', label: 'Montevideo' },
  ];

  return (
    <section id="buscar-eventos" className="relative z-20 mt-0 lg:-mt-20 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-2xl p-6 lg:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-white/70 mb-2">
                <Music className="inline w-4 h-4 mr-1" />
                Artista o evento
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  type="text"
                  placeholder="Busca tu artista favorito..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-500 focus:ring-violet-500/20 h-12"
                />
              </div>
            </div>

            {/* City Select */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                Ciudad
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full h-12 px-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20 appearance-none cursor-pointer"
                >
                  {cities.map((city) => (
                    <option key={city.value} value={city.value} className="bg-zinc-900">
                      {city.label}
                    </option>
                  ))}
                </select>
                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Date Input */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                Fecha
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-white/5 border-white/10 text-white focus:border-violet-500 focus:ring-violet-500/20 h-12 [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6">
            <Button
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-6 text-lg rounded-xl"
              onClick={() =>
                toast('Próximamente', {
                  id: 'buscar-eventos',
                  description: 'Estamos trabajando en el buscador de eventos. ¡Volvé pronto!',
                  icon: '🎵',
                  duration: 3500,
                })
              }
            >
              <Search className="mr-2 w-5 h-5" />
              Buscar eventos
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-white/50 mb-3">Búsquedas populares:</p>
            <div className="flex flex-wrap gap-2">
              {['Rock', 'Pop', 'EDM', 'Latino', 'Hip Hop', 'Indie'].map((genre) => (
                <button
                  key={genre}
                  className="px-4 py-2 rounded-full bg-white/5 text-white/70 text-sm hover:bg-violet-600/20 hover:text-violet-400 transition-colors border border-white/10"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
