import React from 'react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuyClick = () => {
    window.location.href = product.checkoutUrl;
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img 
          src={product.imagePlaceholder} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
           <span className="text-brand-900 font-bold text-lg">R$ {product.price.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 leading-tight">{product.name}</h3>
        <p className="text-stone-500 text-sm mb-6 flex-grow leading-relaxed font-light">
          {product.description}
        </p>
        
        <button 
          onClick={handleBuyClick}
          className="w-full py-3.5 px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-green-200 active:scale-95"
        >
          <ShoppingBag size={18} strokeWidth={2.5} />
          Comprar agora
        </button>
      </div>
    </div>
  );
};

export default ProductCard;