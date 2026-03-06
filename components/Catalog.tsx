import React, { forwardRef } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const Catalog = forwardRef<HTMLDivElement>((_, ref) => {
  const roses = PRODUCTS.filter(p => p.category === 'roses');
  const sunflowers = PRODUCTS.filter(p => p.category === 'sunflowers');

  return (
    <section ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Nossa Coleção</span>
        <h2 className="text-4xl font-serif font-bold text-stone-800 mt-2">Escolha o presente perfeito</h2>
      </div>

      {/* Roses Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-stone-300 flex-grow"></div>
          <h3 className="text-2xl font-serif text-brand-900 px-4 bg-brand-50 rounded-full py-1">🌹 Linha Rosas</h3>
          <div className="h-px bg-stone-300 flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {roses.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>


    </section>
  );
});

Catalog.displayName = 'Catalog';
export default Catalog;