import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';

interface HeroSectionProps {
  onShopNow: () => void;
  onExploreFashion: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNow,
  onExploreFashion,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FFF5F8] via-[#FFF0F4] to-[#FAF5F7]">
      {/* Subtle atmospheric ambient swirls */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 -left-20 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-rose-200/25 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-left">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>New Arrival Collection</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-serif font-bold text-neutral-900 leading-[1.12] tracking-tight">
              Discover Your{' '}
              <span className="block italic font-medium text-[#E11D74] mt-1 sm:mt-2">
                Perfect Look
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-xl font-normal leading-relaxed">
              Premium Makeup & Fashion at Unbeatable Prices. Step into a world of elegance, boldness, and unapologetic glamour.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onShopNow}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E11D74] hover:bg-[#C2185B] text-white font-medium text-sm sm:text-base shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreFashion}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/90 hover:bg-white text-neutral-800 font-medium text-sm sm:text-base border border-pink-200/80 shadow-xs hover:border-pink-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                Explore Fashion
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-4 flex items-center gap-6 text-xs text-neutral-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74]" />
                100% Authentic Guaranteed
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74]" />
                Complimentary Shipping ₹1,499+
              </span>
            </div>
          </div>

          {/* Right Column: Hero Model Card with Artistic Shadow */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-[500px]">
              
              {/* Backing decorative peach/rose shadow card (matches screenshot offset) */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-gradient-to-tr from-rose-200/60 via-pink-100/70 to-amber-100/60 rounded-[2.5rem] transform translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 -z-10 blur-[1px]"
              />

              {/* Main Image Squircle Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-pink-950/10 border-4 border-white/80 aspect-[4/5] group">
                <img
                  src={HERO_IMAGE}
                  alt="High fashion editorial model in emerald satin gown"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle soft gradient highlight along edge */}
                <div 
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
