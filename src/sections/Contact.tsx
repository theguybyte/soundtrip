import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-zinc-950/50">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-violet-600/20 text-violet-400 border-violet-600/30">
              <MapPin className="w-3 h-3 mr-1" />
              Contacto
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Estamos para <span className="text-gradient">ayudarte</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              ¿Tenés dudas sobre algún evento o paquete? Contactanos y te respondemos a la brevedad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Dirección</p>
                    <p className="text-white/60">Av. Vélez Sarsfield 850</p>
                    <p className="text-white/60">Córdoba, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Teléfono</p>
                    <p className="text-white/60">+54 351 123-4567</p>
                    <p className="text-white/60">+54 11 2345-6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <p className="text-white/60">info@soundtrip.com.ar</p>
                    <p className="text-white/60">reservas@soundtrip.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Horario de atención</p>
                    <p className="text-white/60">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-white/60">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                <OptimizedImage
                  src="/dest-buenos-aires.jpg"
                  alt="Ubicación"
                  className="w-full h-full object-cover opacity-50"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-violet-500 mx-auto mb-2" />
                    <p className="text-white font-semibold">Córdoba, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 lg:p-8 rounded-2xl glass">
              <h3 className="text-2xl font-bold text-white mb-6">Envianos un mensaje</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Nombre
                    </label>
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Apellido
                    </label>
                    <Input
                      type="text"
                      placeholder="Tu apellido"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    placeholder="+54 9 ..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="¿En qué podemos ayudarte?"
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-6"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
