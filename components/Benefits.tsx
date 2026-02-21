import React from 'react';
import { Truck, CalendarDays, CreditCard, Zap } from 'lucide-react';
import { Benefit } from '../types';

const benefitsList: Benefit[] = [
  { icon: <Truck size={28} className="text-brand-600" />, text: "Entrega rápida" },
  { icon: <CalendarDays size={28} className="text-brand-600" />, text: "Entrega agendada" },
  { icon: <CreditCard size={28} className="text-brand-600" />, text: "Cartão de crédito" },
  { icon: <Zap size={28} className="text-brand-600" />, text: "Pix instantâneo" },
];

const Benefits: React.FC = () => {
  return (
    <section className="bg-white py-6 shadow-xl shadow-stone-200/50 relative z-20 -mt-10 mx-4 md:mx-auto max-w-5xl rounded-2xl border border-stone-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-8">
        {benefitsList.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center gap-2 p-2">
            <div className="p-3 bg-brand-50 rounded-full text-brand-600 mb-1">
              {item.icon}
            </div>
            <span className="font-bold text-stone-700 text-sm leading-tight">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;