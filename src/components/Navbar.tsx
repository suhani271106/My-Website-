import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenContact: () => void;
  onOpenBrands: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist,
  onOpenContact,
  onOpenBrands,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (sectionId === 'contact') {
      onOpenContact();
    } else if (sectionId === 'brands') {
      onOpenBrands();
    } else {
      onNavigate(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF5F8]/90 backdrop-blur-md border-b border-pink-100/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Zone: Monogram & Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E11D74] to-[#F43F5E] flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm shadow-pink-200 group-hover:scale-105 transition-transform duration-200">
            G
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-[#E11D74] transition-colors">
            Glamour Hub
          </span>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-neutral-600">
          <button
            onClick={() => handleNavClick('home')}
            className="hover:text-[#E11D74] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('makeup')}
            className="hover:text-[#E11D74] transition-colors cursor-pointer"
          >
            Makeup
          </button>
          <button
            onClick={() => handleNavClick('clothing')}
            className="hover:text-[#E11D74] transition-colors cursor-pointer"
          >
            Clothing
          </button>
          <button
            onClick={() => handleNavClick('brands')}
            className="hover:text-[#E11D74] transition-colors cursor-pointer"
          >
            Brands
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-[#E11D74] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search catalog"
            className="p-2 text-neutral-600 hover:text-[#E11D74] hover:bg-pink-100/50 rounded-full transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Saved wishlist"
            className="relative p-2 text-neutral-600 hover:text-[#E11D74] hover:bg-pink-100/50 rounded-full transition-colors cursor-pointer"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E11D74] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag Button (matches screenshot) */}
          <button
            onClick={onOpenCart}
            aria-label={`Shopping bag with ${cartCount} items`}
            className="relative p-2 text-neutral-800 hover:text-[#E11D74] transition-colors cursor-pointer group"
          >
            <div className="relative">
              <ShoppingBag className="w-6 h-6 stroke-[1.8] group-hover:scale-105 transition-transform" />
              <span className="absolute -top-1.5 -right-2 bg-[#E11D74] text-white text-[11px] font-bold min-w-4 h-4 px-1 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-neutral-700 hover:text-[#E11D74] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-pink-100 bg-[#FFF5F8] px-6 py-5 shadow-lg space-y-3">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2 text-base font-medium text-neutral-800 hover:text-[#E11D74]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('makeup')}
            className="block w-full text-left py-2 text-base font-medium text-neutral-800 hover:text-[#E11D74]"
          >
            Makeup & Beauty
          </button>
          <button
            onClick={() => handleNavClick('clothing')}
            className="block w-full text-left py-2 text-base font-medium text-neutral-800 hover:text-[#E11D74]"
          >
            Fashion & Clothing
          </button>
          <button
            onClick={() => handleNavClick('brands')}
            className="block w-full text-left py-2 text-base font-medium text-neutral-800 hover:text-[#E11D74]"
          >
            Featured Brands
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 text-base font-medium text-neutral-800 hover:text-[#E11D74]"
          >
            Contact Concierge
          </button>
        </div>
      )}
    </header>
  );
};
