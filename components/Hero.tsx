import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollToCatalog: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToCatalog }) => {
  return (
    <section className="relative w-full h-[85vh] sm:h-[75vh] flex items-center justify-center overflow-hidden bg-brand-50 mt-10">
      {/* Logo in top left */}
      <div className="absolute top-4 left-4 z-20">
        <img 
          src="https://floriculturabelaflor.com/wp-content/uploads/2026/03/Design-sem-nome.png" 
          alt="Bela Flor Logo" 
          className="w-16 md:w-24 drop-shadow-lg"
        />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1619551734325-81aad323788c?auto=format&fit=crop&q=80&w=2000" 
          alt="Mãe e filha se abraçando" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/20"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center text-white space-y-6">
        <div className="animate-fade-in-up">
           <span className="inline-block py-1 px-4 border border-white/40 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm bg-white/10 mb-4">
            Flores & Sentimentos
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-xl mb-4">
            Surpreenda quem sempre cuidou de <span className="text-brand-300 italic">você</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-stone-100 max-w-2xl mx-auto font-light drop-shadow-md leading-relaxed">
            Neste <strong>Dia das Mães</strong>, presenteie com a beleza das flores. <br />
            Preparamos arranjos e kits exclusivos para tornar este dia inesquecível.
          </p>
        </div>
        
        <div className="pt-8">
          <button 
            onClick={onScrollToCatalog}
            className="group relative inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg py-5 px-10 rounded-full shadow-[0_10px_40px_-10px_rgba(219,39,119,0.7)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Escolher presente agora
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;