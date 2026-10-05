import React, { useState, useMemo } from 'react';
import { X, Search, ShoppingBag } from 'lucide-react';
import { BEAUTY_PRODUCTS, FASHION_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { formatINR } from '../utils/currency';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const POPULAR_TAGS = ['Velvet Lipstick', 'Maxi Dress', 'Mascara', 'Foundation', 'Blush', 'Eyeliner', 'Hoodies', 'Skirts'];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const allProducts = useMemo(() => [...BEAUTY_PRODUCTS, ...FASHION_PRODUCTS], []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allProducts.slice(0, 6);
    return allProducts.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query, allProducts]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-pink-100 p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search makeup, dresses, brands, shades..."
            className="flex-1 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs text-neutral-400 shrink-0">Popular:</span>
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3 py-1 rounded-full bg-neutral-100 hover:bg-pink-100 hover:text-[#E11D74] text-xs text-neutral-600 transition-colors shrink-0 cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="mt-2 max-h-[60vh] overflow-y-auto divide-y divide-neutral-100">
          {results.length === 0 ? (
            <div className="py-12 text-center text-sm text-neutral-500">
              No products found for "{query}". Try checking your spelling or search another keyword.
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="py-3 px-2 flex items-center justify-between gap-4 hover:bg-[#FFF5F8] rounded-xl transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover bg-neutral-100 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-[#E11D74] transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-xs text-neutral-500">{product.category}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-neutral-900 tabular-nums">
                    {formatINR(product.price)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    aria-label="Add to bag"
                    className="p-2 rounded-lg bg-pink-50 hover:bg-[#E11D74] text-[#E11D74] hover:text-white transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
