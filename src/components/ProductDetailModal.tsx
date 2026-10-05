import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';
import { Product } from '../types';
import { formatINR } from '../utils/currency';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedOption?: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!isOpen || !product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>(
    product.options?.values[0] || ''
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedOption);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-pink-100 flex flex-col md:flex-row my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-neutral-500 hover:text-neutral-900 hover:bg-white shadow-xs transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Column */}
        <div className="md:w-1/2 bg-neutral-50 relative aspect-[4/5] md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={() => onToggleWishlist(product)}
            aria-label="Wishlist"
            className="absolute top-4 left-4 p-2.5 rounded-full bg-white/90 hover:bg-white shadow-xs text-neutral-600 hover:text-[#E11D74] transition-colors cursor-pointer"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#E11D74] text-[#E11D74]' : ''}`} />
          </button>
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-left">
          <div className="space-y-4">
            
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E11D74]">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-neutral-600 font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-neutral-400">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Product Title & Price */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 leading-tight">
                {product.name}
              </h2>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[#E11D74] tabular-nums">
                  {formatINR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-neutral-400 line-through tabular-nums">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
                  In Stock
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 leading-relaxed">
              {product.description}
            </p>

            {/* Options Selection (e.g., Shade or Size) */}
            {product.options && (
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <div className="flex justify-between text-xs font-medium text-neutral-700">
                  <span>{product.options.name}:</span>
                  <span className="font-semibold text-neutral-900">{selectedOption}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.options.values.map((val) => {
                    const isSelected = selectedOption === val;
                    return (
                      <button
                        key={val}
                        onClick={() => setSelectedOption(val)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-900 text-white shadow-xs'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Key Features */}
            {product.features && (
              <div className="space-y-1.5 pt-2">
                <p className="text-xs font-semibold text-neutral-800">Highlights:</p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-neutral-600">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Module: Quantity & Add to Cart */}
          <div className="pt-6 mt-6 border-t border-neutral-100 space-y-4">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-neutral-200 rounded-xl bg-neutral-50 px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 py-1 text-sm font-bold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-semibold tabular-nums text-neutral-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 text-sm font-bold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-6 rounded-xl bg-[#E11D74] hover:bg-[#C2185B] text-white font-medium text-sm shadow-md shadow-pink-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{addedAnimation ? 'Added to Bag!' : `Add to Bag • ${formatINR(product.price * quantity)}`}</span>
              </button>
            </div>

            {/* Assurance badges */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-neutral-500 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-neutral-600" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-neutral-600" />
                <span>100% Authentic</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-4 h-4 text-neutral-600" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
