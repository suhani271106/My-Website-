import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_PARTNERS } from '../data/products';

interface BrandsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBrandFilter: (brandName: string) => void;
}

export const BrandsModal: React.FC<BrandsModalProps> = ({
  isOpen,
  onClose,
  onSelectBrandFilter,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-pink-100 p-6 sm:p-8 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close brands view"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-neutral-100 pb-4 mb-6">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#E11D74] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Prestige Houses
          </span>
          <h2 className="text-2xl font-serif font-bold text-neutral-900 mt-1">
            Featured Luxury Brands
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Glamour Hub partners exclusively with premier European and global beauty houses.
          </p>
        </div>

        <div className="space-y-4">
          {BRAND_PARTNERS.map((brand) => (
            <div 
              key={brand.name}
              className="p-4 rounded-2xl border border-neutral-100 hover:border-pink-200 hover:bg-pink-50/30 transition-all flex items-center justify-between group"
            >
              <div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-[#E11D74] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {brand.subtitle}
                </p>
              </div>

              <button
                onClick={() => {
                  onSelectBrandFilter(brand.name);
                  onClose();
                }}
                className="px-4 py-2 rounded-full bg-white group-hover:bg-[#E11D74] text-neutral-700 group-hover:text-white text-xs font-semibold border border-neutral-200 group-hover:border-transparent transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-neutral-100 text-center text-xs text-neutral-400">
          All brand partnerships are rigorously audited for 100% authenticity and cruelty-free certification.
        </div>
      </div>
    </div>
  );
};
