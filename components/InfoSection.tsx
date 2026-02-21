import React, { forwardRef } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Store as StoreIcon } from 'lucide-react';
import { STORES } from '../constants';

export const Occasions: React.FC = () => {
  const tags = [
    "Aniversários",
    "Datas especiais",
    "Pedido de desculpas",
    "Surpresas inesperadas",
    "Demonstrações de carinho"
  ];

  return (
    <section className="bg-brand-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">Para qual momento?</h2>
        <p className="text-stone-600 mb-10 max-w-2xl mx-auto text-lg">
          Nossas flores são perfeitas para expressar o que as palavras nem sempre conseguem dizer.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, i) => (
            <span key={i} className="px-6 py-3 bg-white rounded-full text-brand-800 font-semibold shadow-sm border border-brand-100 text-sm md:text-base hover:bg-brand-100 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PhysicalStore = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-1 rounded-full mb-4">
            <StoreIcon size={16} className="text-stone-500" />
            <span className="text-stone-600 font-semibold uppercase tracking-wider text-xs">Compra Presencial</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mt-2">Prefere escolher pessoalmente?</h2>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-lg">
          Visite uma de nossas lojas e encante-se com nosso atendimento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {STORES.map((store) => (
          <div key={store.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
             {/* Image Container */}
             <div className="relative h-72 bg-stone-200 group overflow-hidden">
                <img 
                  src={store.image} 
                  alt={`Fachada ${store.name}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white">
                   <p className="font-bold text-lg">{store.name}</p>
                   <p className="text-stone-200 text-sm">{store.phone}</p>
                </div>
             </div>

             {/* Content */}
             <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="space-y-5 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-2 rounded-lg shrink-0 text-brand-600">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Endereço</p>
                        <p className="text-stone-600 leading-relaxed">{store.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-2 rounded-lg shrink-0 text-brand-600">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Horário</p>
                        <p className="text-stone-600 leading-relaxed">{store.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-stone-100 grid grid-cols-2 gap-4">
                  <a 
                    href={store.googleMapsLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-brand-100 text-brand-700 font-bold hover:bg-brand-50 hover:border-brand-200 transition-colors text-sm"
                  >
                    <Navigation size={18} />
                    Como chegar
                  </a>
                  <a 
                    href={`https://wa.me/${store.whatsapp}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-colors text-sm shadow-lg shadow-green-200"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
});

PhysicalStore.displayName = 'PhysicalStore';