import React from 'react';
import { BRAND_PARTNERS } from '../data/products';

interface BrandShowcaseProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onSelectBrand }) => {
  return (
    <section id="brands" className="py-14 sm:py-16 border-y border-pink-100/70 bg-[#FFF7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs tracking-[0.22em] text-neutral-400 font-semibold uppercase mb-8">
          TRUSTED BY PREMIUM BRANDS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          {BRAND_PARTNERS.map((brand, index) => {
            // Apply distinctive luxury typographic styling matching screenshot
            let fontClass = 'font-serif text-2xl sm:text-3xl text-neutral-700 tracking-wider';
            if (brand.name === 'Lumière') fontClass = 'font-serif italic text-2xl sm:text-3xl text-neutral-700';
            if (brand.name === 'AURORA') fontClass = 'font-serif font-light tracking-[0.25em] text-2xl sm:text-3xl text-neutral-700';
            if (brand.name === 'NOIR') fontClass = 'font-serif font-normal tracking-[0.2em] text-2xl sm:text-3xl text-neutral-700';
            if (brand.name === 'Velvet') fontClass = 'font-serif italic font-medium text-2xl sm:text-3xl text-neutral-700';
            if (brand.name === 'BELLE') fontClass = 'font-serif font-normal tracking-[0.25em] text-2xl sm:text-3xl text-neutral-700';

            return (
              <button
                key={brand.name}
                onClick={() => onSelectBrand?.(brand.name)}
                title={`${brand.name} - ${brand.subtitle}`}
                className="group relative cursor-pointer focus:outline-none transition-all duration-200"
              >
                <span className={`${fontClass} transition-all duration-300 group-hover:text-[#E11D74] group-hover:scale-105 inline-block`}>
                  {brand.name}
                </span>
                <span className="block text-[10px] tracking-normal text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {brand.subtitle}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
