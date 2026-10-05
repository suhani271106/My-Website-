/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BeautySection } from './components/BeautySection';
import { BrandShowcase } from './components/BrandShowcase';
import { FashionSection } from './components/FashionSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ContactModal } from './components/ContactModal';
import { BrandsModal } from './components/BrandsModal';
import { PolicyModal } from './components/PolicyModal';
import { ToastContainer, ToastData } from './components/Toast';
import { Product, CartItem } from './types';
import { BEAUTY_PRODUCTS, FASHION_PRODUCTS } from './data/products';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist state
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'shipping' | 'returns' | 'faq' | null>(null);

  // Toast notifications
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (type: 'cart' | 'wishlist' | 'info', title: string, subtitle?: string) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, title, subtitle }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Handlers
  const handleAddToCart = (product: Product, quantity = 1, selectedOption?: string) => {
    setCartItems((prev) => {
      const optionToUse = selectedOption || product.options?.values[0];
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedOption === optionToUse
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity, selectedOption: optionToUse }];
    });

    addToast('cart', 'Added to Shopping Bag', `${product.name} (${quantity})`);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], quantity };
      return next;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some((p) => p.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((p) => p.id !== product.id));
      addToast('info', 'Removed from Wishlist', product.name);
    } else {
      setWishlist((prev) => [...prev, product]);
      addToast('wishlist', 'Saved to Wishlist', product.name);
    }
  };

  // Navigation Smooth Scroll
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFF5F8] text-neutral-800 flex flex-col font-sans selection:bg-pink-200 selection:text-pink-900">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenBrands={() => setIsBrandsOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onShopNow={() => handleNavigate('makeup')}
          onExploreFashion={() => handleNavigate('clothing')}
        />

        {/* Section 1: The Beauty Edit */}
        <BeautySection
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onQuickView={(product) => setSelectedProduct(product)}
          wishlistIds={wishlist.map((p) => p.id)}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* Brand Showcase: Trusted by Premium Brands */}
        <BrandShowcase
          onSelectBrand={(brandName) => {
            setIsBrandsOpen(true);
          }}
        />

        {/* Section 2: Fashion Collection */}
        <FashionSection
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onQuickView={(product) => setSelectedProduct(product)}
          wishlistIds={wishlist.map((p) => p.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPolicy={(policy) => setActivePolicy(policy)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlist.some((p) => p.id === selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={() => {
          setCartItems([]);
          addToast('info', 'Order Confirmed!', 'Receipt sent to your email');
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={(product) => handleAddToCart(product, 1)}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        products={wishlist}
        onRemove={(product) => handleToggleWishlist(product)}
        onAddToCart={(product) => {
          handleAddToCart(product, 1);
        }}
      />

      {/* Contact Concierge Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Brands Modal */}
      <BrandsModal
        isOpen={isBrandsOpen}
        onClose={() => setIsBrandsOpen(false)}
        onSelectBrandFilter={() => {
          handleNavigate('makeup');
        }}
      />

      {/* Policy / Terms / Shipping / FAQ Modal */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      {/* Toast Notification Stack */}
      <ToastContainer
        toasts={toasts}
        onDismiss={removeToast}
      />
    </div>
  );
}
