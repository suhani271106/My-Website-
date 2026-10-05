import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FASHION_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface FashionSectionProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

const CATEGORIES = ['All', 'Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Hoodies', 'Skirts'];

export const FashionSection: React.FC<FashionSectionProps> = ({
  onAddToCart,
  onQuickView,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredProducts = selectedCategory === 'All'
    ? FASHION_PRODUCTS
    : FASHION_PRODUCTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    handleScroll();
  }, [filteredProducts]);

  const scrollBy = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="clothing" className="py-16 sm:py-20 bg-[#FFF5F8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          {/* Section Titles */}
          <div className="space-y-2 text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 tracking-tight">
              Fashion Collection
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 max-w-xl">
              Statement pieces designed to make you feel as confident as you look.
            </p>
          </div>

          {/* Filter Pills & Scrollbar Control */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            {/* Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full pb-1">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#26242B] text-white shadow-sm'
                        : 'bg-[#F2EDF0] text-neutral-600 hover:text-neutral-900 hover:bg-[#EAE4E7]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Carousel navigation track and arrows matching screenshot */}
            <div className="flex items-center gap-2 w-full md:w-56 pt-1">
              <button
                onClick={() => scrollBy(-320)}
                aria-label="Scroll left in fashion collection"
                className="p-1 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Progress Bar Track */}
              <div 
                className="relative flex-1 h-1.5 bg-[#E6E0E4] rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = clickX / rect.width;
                  if (scrollContainerRef.current) {
                    const max = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
                    scrollContainerRef.current.scrollTo({ left: max * ratio, behavior: 'smooth' });
                  }
                }}
              >
                <div
                  className="h-full bg-neutral-600 rounded-full transition-all duration-150"
                  style={{
                    width: '35%',
                    transform: `translateX(${scrollProgress * 1.85}%)`,
                  }}
                />
              </div>

              <button
                onClick={() => scrollBy(320)}
                aria-label="Scroll right in fashion collection"
                className="p-1 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Product Cards Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="w-[260px] sm:w-[280px] lg:w-[calc(25%-18px)] shrink-0"
            >
              <ProductCard
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
