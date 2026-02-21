import React from 'react';
import { MessageCircle, Heart, ShoppingBag } from 'lucide-react';
import { WHATSAPP_GENERAL } from '../constants';

interface FooterProps {
  onScrollToCatalog: () => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollToCatalog }) => {
  const whatsappLink = `https://wa.me/${WHATSAPP_GENERAL}?text=Olá! Gostaria de tirar uma dúvida sobre as flores.`;

  return (
    <footer className="bg-stone-900 text-stone-300 py-20 px-4 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 via-pink-500 to-brand-500"></div>

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <div className="inline-block p-4 bg-white/5 rounded-full backdrop-blur-sm">
            <Heart className="mx-auto text-brand-500 w-10 h-10 fill-brand-500" />
        </div>
        
        <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-4">
            Quem você vai surpreender hoje?
            </h2>
            <p className="text-stone-400 text-lg">Não deixe para depois o carinho que você pode entregar agora.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <button 
             onClick={onScrollToCatalog}
             className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-brand-500/50 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Comprar agora
          </button>
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
        </div>
        
        <div className="pt-16 border-t border-stone-800 text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Floricultura Taubaté - Bela Flor. Entregando amor em forma de flor.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;