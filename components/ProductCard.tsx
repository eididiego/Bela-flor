import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Trophy, Ban, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuyClick = () => {
    if (product.soldOut) {
      alert("Este produto está esgotado. Por favor, selecione outro produto.");
      return;
    }
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
        
        {/* Best Seller Badge */}
        {product.bestSeller && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
            <Trophy className="w-3 h-3" /> Mais Vendido
          </div>
        )}

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
           <span className="text-brand-900 font-bold text-lg">R$ {product.price.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        {/* Rating for Best Sellers */}
        {product.bestSeller && (
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-stone-500 ml-1 font-medium">5.0 (120+ avaliações)</span>
          </div>
        )}

        <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 leading-tight">{product.name}</h3>
        <p className="text-stone-500 text-sm mb-6 flex-grow leading-relaxed font-light">
          {product.description}
        </p>
        
        <button 
          onClick={handleBuyClick}
          className={`w-full py-3.5 px-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
            product.soldOut 
              ? 'bg-red-600 hover:bg-red-700 text-white hover:shadow-red-200 cursor-not-allowed opacity-80' 
              : 'bg-green-600 hover:bg-green-700 text-white hover:shadow-green-200'
          }`}
        >
          {product.soldOut ? (
            <>
              <Ban size={18} strokeWidth={2.5} />
              Esgotado
            </>
          ) : (
            <>
              <ShoppingBag size={18} strokeWidth={2.5} />
              Comprar agora
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;