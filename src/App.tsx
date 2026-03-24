import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { EventSearch } from './sections/EventSearch';
import { FeaturedEvents } from './sections/FeaturedEvents';
import { MusicDestinations } from './sections/MusicDestinations';
import { HowItWorks } from './sections/HowItWorks';
import { TravelExperiences } from './sections/TravelExperiences';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { CartDrawer } from './sections/CartDrawer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTopButton } from './components/BackToTopButton';
import { Toaster } from 'sonner';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar isScrolled={isScrolled} />
        <main>
          <Hero />
          <EventSearch />
          <FeaturedEvents />
          <MusicDestinations />
          <HowItWorks />
          <TravelExperiences />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
        <BackToTopButton />
        <Toaster
          position="top-center"
          theme="dark"
          toastOptions={{
            style: {
              background: 'rgba(24, 24, 27, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: '#fff',
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.1)',
              borderRadius: '12px',
              fontSize: '14px',
            },
          }}
        />
      </div>
    </CartProvider>
  );
}

export default App;
