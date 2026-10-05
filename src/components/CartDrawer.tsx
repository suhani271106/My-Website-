import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, Tag, Check, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { formatINR } from '../utils/currency';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  const freeShippingThreshold = 1499;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 149;
  const tax = (subtotal - discountAmount) * 0.12;
  const total = subtotal - discountAmount + shipping + tax;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'GLAMOUR10' || clean === 'GLAMOUR') {
      setDiscountPercent(10);
      setPromoMessage('10% VIP discount applied!');
    } else if (clean === 'WELCOME20') {
      setDiscountPercent(20);
      setPromoMessage('20% Welcome discount applied!');
    } else {
      setPromoMessage('Invalid promo code. Try GLAMOUR10');
    }
  };

  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between text-left animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-[#FFF7F9]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#E11D74]" />
            <h2 className="font-serif text-xl font-bold text-neutral-900">
              Shopping Bag
            </h2>
            <span className="text-xs bg-pink-100 text-[#E11D74] font-semibold px-2 py-0.5 rounded-full">
              {items.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3 bg-pink-50/60 border-b border-pink-100/60 text-xs text-neutral-700">
          {amountToFreeShipping > 0 ? (
            <div>
              <p className="font-medium text-neutral-800">
                Add <span className="font-bold text-[#E11D74]">{formatINR(amountToFreeShipping)}</span> more for Free Express Delivery!
              </p>
              <div className="w-full bg-neutral-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className="bg-[#E11D74] h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="font-semibold text-emerald-700 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              You unlocked Free Complimentary Shipping!
            </p>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-[#E11D74]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-serif text-lg font-bold text-neutral-900">Your bag is empty</p>
              <p className="text-xs text-neutral-500 max-w-xs">
                Explore our curated cosmetics and statement fashion pieces to begin your order.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2 rounded-full bg-[#E11D74] text-white text-xs font-semibold hover:bg-[#C2185B] transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.product.id}-${index}`} className="py-4 flex gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 rounded-xl object-cover bg-neutral-50 border border-neutral-100 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      {item.selectedOption && (
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {item.selectedOption}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => onRemoveItem(index)}
                      className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50 px-2 py-0.5 text-xs">
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        className="px-1.5 py-0.5 font-bold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-semibold text-neutral-900 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="px-1.5 py-0.5 font-bold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-sm font-bold text-neutral-900 tabular-nums">
                      {formatINR(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-neutral-100 bg-[#FAF7F8] space-y-4">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-neutral-400" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code (e.g. GLAMOUR10)"
                  className="w-full pl-8 pr-3 py-2 text-xs bg-white rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-900 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
              >
                Apply
              </button>
            </form>
            {promoMessage && (
              <p className={`text-[11px] font-medium ${discountPercent > 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                {promoMessage}
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-neutral-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium text-neutral-900">{formatINR(subtotal)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>VIP Discount ({discountPercent}%)</span>
                  <span className="tabular-nums">-{formatINR(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="tabular-nums font-medium text-neutral-900">
                  {shipping === 0 ? 'FREE' : formatINR(shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated GST (12%)</span>
                <span className="tabular-nums font-medium text-neutral-900">{formatINR(tax)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                <span>Total</span>
                <span className="tabular-nums text-[#E11D74]">{formatINR(total)}</span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              onClick={onCheckout}
              className="w-full py-3.5 px-6 rounded-xl bg-[#E11D74] hover:bg-[#C2185B] text-white font-medium text-sm shadow-md shadow-pink-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-neutral-400">
              Free 30-day returns & zero-hassle refunds on all orders
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
