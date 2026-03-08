import React from 'react';
import { MapPin, Truck, Clock } from 'lucide-react';

const StickyBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-brand-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 text-center sm:text-left">
        <div className="flex items-center gap-1.5 animate-pulse">
          <Clock size={14} className="text-yellow-400" />
          <span className="font-semibold">Atendimento apenas presencial hoje</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-center">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-brand-100" />
            <span>Visite nossas lojas em <strong>Taubaté</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck size={14} className="text-pink-300" />
            <span className="font-bold text-pink-100">Vendas online temporariamente suspensas 🌹</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;