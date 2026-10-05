import React from 'react';
import { Eye, Heart, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { formatINR } from '../utils/currency';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) => {
  const [justAdded, setJustAdded] = React.useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col text-left cursor-pointer transition-all duration-300"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden bg-neutral-100/70 border border-pink-100/50 shadow-xs group-hover:shadow-md transition-shadow">
        
        {/* Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Top-Right Wishlist Button */}
        <button
          onClick={handleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer ${
            isWishlisted
              ? 'bg-white text-[#E11D74] shadow-sm'
              : 'bg-white/80 text-neutral-600 hover:text-[#E11D74] hover:bg-white shadow-xs'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#E11D74]' : ''}`} />
        </button>

        {/* Quick Add / Quick View Hover Scrim */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
          <button
            onClick={handleAdd}
            className="flex-1 py-2.5 px-3 rounded-xl bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold shadow-md flex items-center justify-center gap-1.5 backdrop-blur-sm hover:text-[#E11D74] transition-colors cursor-pointer"
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            aria-label="View product details"
            className="p-2.5 rounded-xl bg-white/95 hover:bg-white text-neutral-900 hover:text-[#E11D74] text-xs font-semibold shadow-md backdrop-blur-sm transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Details (Matches screenshot format exactly) */}
      <div className="mt-3.5 space-y-1">
        <p className="text-xs text-neutral-500 font-normal">
          {product.category}
        </p>

        <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#E11D74] transition-colors line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-[#E11D74] tabular-nums">
            {formatINR(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-neutral-400 line-through tabular-nums">
              {formatINR(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
