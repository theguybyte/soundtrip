import { Instagram, Twitter, Facebook, Youtube, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  empresa: [
    { label: 'Sobre Nosotros', href: '#' },
    { label: 'Nuestro Equipo', href: '#' },
    { label: 'Trabajá con Nosotros', href: '#' },
    { label: 'Prensa', href: '#' },
  ],
  servicios: [
    { label: 'Paquetes de Viaje', href: '#' },
    { label: 'Eventos Internacionales', href: '#' },
    { label: 'Grupos Corporativos', href: '#' },
    { label: 'Eventos Privados', href: '#' },
  ],
  soporte: [
    { label: 'Preguntas Frecuentes', href: '#' },
    { label: 'Términos y Condiciones', href: '#' },
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Cancelaciones', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Suscribite al newsletter
              </h3>
              <p className="text-white/60">
                Recibí las últimas novedades sobre eventos y ofertas exclusivas.
              </p>
            </div>
            <div className="flex gap-3 max-w-md w-full lg:w-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-500 h-12"
                />
              </div>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white h-12 px-6">
                Suscribirme
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <a href="#" className="flex items-center mb-6">
                <picture>
                  <source srcSet="/images/soundtrip_logo.webp" type="image/webp" />
                  <img
                    src="/images/soundtrip_logo.png"
                    alt="SoundTrip"
                    width={89}
                    height={40}
                    className="h-10 w-auto"
                  />
                </picture>
              </a>
              <p className="text-white/60 text-sm mb-6">
                Tu puerta de entrada a las mejores experiencias musicales del mundo. 
                Viajá, viví la música, creá recuerdos.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-violet-600 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-violet-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-violet-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Soporte</h4>
              <ul className="space-y-3">
                {footerLinks.soporte.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-violet-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2025 SoundTrip. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Términos de uso
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
            <p className="text-white/40 text-sm">
              soundtrip.com.ar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
