import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5512991265026"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <img 
        src="https://floriculturabelaflor.com/wp-content/uploads/2026/03/Design-sem-nome-3.png" 
        alt="WhatsApp" 
        className="w-16 h-16 drop-shadow-xl" 
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-stone-800 px-3 py-1 rounded-lg shadow-md text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
