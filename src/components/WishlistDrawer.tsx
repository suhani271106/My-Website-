import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { formatINR } from '../utils/currency';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemove: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  products,
  onRemove,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between text-left animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-[#FFF7F9]">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-[#E11D74] fill-[#E11D74]" />
            <h2 className="font-serif text-xl font-bold text-neutral-900">
              Saved Wishlist
            </h2>
            <span className="text-xs bg-pink-100 text-[#E11D74] font-semibold px-2 py-0.5 rounded-full">
              {products.length}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close wishlist"
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
          {products.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-[#E11D74]">
                <Heart className="w-8 h-8" />
              </div>
              <p className="font-serif text-lg font-bold text-neutral-900">Your wishlist is empty</p>
              <p className="text-xs text-neutral-500 max-w-xs">
                Tap the heart on any lipstick, dress, or palette to save your favorites here.
              </p>
            </div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="py-4 flex gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-xl object-cover bg-neutral-50 border border-neutral-100 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900">
                        {product.name}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-0.5">{product.category}</p>
                    </div>
                    <button
                      onClick={() => onRemove(product)}
                      className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-bold text-[#E11D74] tabular-nums">
                      {formatINR(product.price)}
                    </span>
                    <button
                      onClick={() => {
                        onAddToCart(product);
                      }}
                      className="py-1.5 px-3 rounded-lg bg-[#E11D74] hover:bg-[#C2185B] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-neutral-100 bg-[#FAF7F8]">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl border border-neutral-300 text-neutral-800 hover:bg-neutral-100 text-xs font-semibold transition-colors cursor-pointer"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
