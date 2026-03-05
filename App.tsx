import React, { useRef } from 'react';
import StickyBanner from './components/StickyBanner';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Catalog from './components/Catalog';
import { Occasions, PhysicalStore } from './components/InfoSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const catalogRef = useRef<HTMLDivElement>(null);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <StickyBanner />
      
      <main className="flex-grow">
        {/* Hero now scrolls to Catalog on CTA click */}
        <Hero onScrollToCatalog={scrollToCatalog} />
        
        <Benefits />
        
        <HowItWorks />

        {/* Catalog Section */}
        <Catalog ref={catalogRef} />
        
        <Occasions />
        
        <PhysicalStore />
      </main>
      
      {/* Footer CTA now also scrolls to Catalog */}
      <Footer onScrollToCatalog={scrollToCatalog} />

      <FloatingWhatsApp />
    </div>
  );
};

export default App;