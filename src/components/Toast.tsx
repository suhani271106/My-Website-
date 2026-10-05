import React from 'react';
import { Check, ShoppingBag, Heart } from 'lucide-react';

export interface ToastData {
  id: string;
  type: 'cart' | 'wishlist' | 'info';
  title: string;
  subtitle?: string;
}

interface ToastProps {
  toasts: ToastData[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        const isCart = toast.type === 'cart';
        const isWishlist = toast.type === 'wishlist';

        return (
          <div
            key={toast.id}
            onClick={() => onDismiss(toast.id)}
            className="pointer-events-auto bg-neutral-900/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              isCart ? 'bg-[#E11D74]' : isWishlist ? 'bg-rose-500' : 'bg-emerald-600'
            }`}>
              {isCart ? <ShoppingBag className="w-4 h-4 text-white" /> : isWishlist ? <Heart className="w-4 h-4 text-white fill-white" /> : <Check className="w-4 h-4 text-white" />}
            </div>

            <div className="text-left flex-1 min-w-0">
              <p className="text-xs font-semibold text-white leading-tight">
                {toast.title}
              </p>
              {toast.subtitle && (
                <p className="text-[11px] text-neutral-300 truncate mt-0.5">
                  {toast.subtitle}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
