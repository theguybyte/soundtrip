import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { href: '#eventos', label: 'Eventos' },
  { href: '#destinos', label: 'Destinos' },
  { href: '#como-funciona', label: 'Cómo Funciona' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar({ isScrolled }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <picture>
              <source srcSet="/images/soundtrip_logo_white.webp" type="image/webp" />
              <img
                src="/images/soundtrip_logo_white.png"
                alt="SoundTrip"
                width={211}
                height={32}
                className="h-8 w-auto group-hover:opacity-90 transition-opacity"
              />
            </picture>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons & Cart */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            <Button
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              Iniciar Sesión
            </Button>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6">
              Reservar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  className="text-white/70 hover:text-white hover:bg-white/10 w-full"
                >
                  Iniciar Sesión
                </Button>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white font-medium w-full">
                  Reservar Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
