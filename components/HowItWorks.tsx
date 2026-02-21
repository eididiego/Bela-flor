import React from 'react';
import { MousePointerClick, Gift, HeartHandshake } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-3">Como funciona?</h2>
          <p className="text-stone-600">Surpreender é mais simples do que você imagina</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">1</div>
            <div className="mb-4 flex justify-center">
               <MousePointerClick size={48} className="text-stone-300" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Escolha o arranjo</h3>
            <p className="text-stone-600">Navegue pelo nosso catálogo e selecione o presente ideal.</p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">2</div>
             <div className="mb-4 flex justify-center">
               <Gift size={48} className="text-stone-300" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Checkout Rápido</h3>
            <p className="text-stone-600">Clique em comprar e finalize o pagamento com segurança.</p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">3</div>
             <div className="mb-4 flex justify-center">
               <HeartHandshake size={48} className="text-brand-500 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Nós cuidamos de tudo</h3>
            <p className="text-stone-600">Preparamos com carinho e entregamos em mãos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;