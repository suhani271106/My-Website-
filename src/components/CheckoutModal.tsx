import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, DollarSign, Truck, Sparkles, Smartphone } from 'lucide-react';
import { CartItem } from '../types';
import { formatINR } from '../utils/currency';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    address: '42, Sea Face Road, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400050',
    paymentMethod: 'upi',
    upiId: 'ananya@oksbi',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '08/28',
    cardCvc: '888',
  });
  const [orderId, setOrderId] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 1499 ? 0 : 149;
  const tax = subtotal * 0.12;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `GH-IN-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-pink-100 p-6 sm:p-8 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close checkout"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            <div className="border-b border-neutral-100 pb-4 mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E11D74]">
                Secure Checkout
              </span>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mt-1">
                Finalize Your Order
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Shipping Information */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#E11D74]" />
                  Shipping Address
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 mb-1">State</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 mb-1">ZIP</label>
                      <input
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#E11D74]" />
                  Payment Method
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { id: 'upi', label: 'UPI / GPay', icon: Smartphone },
                    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                    { id: 'cod', label: 'Cash on Delivery', icon: DollarSign },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                      className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        formData.paymentMethod === m.id
                          ? 'border-[#E11D74] bg-pink-50/50 text-[#E11D74] font-semibold'
                          : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <m.icon className="w-4 h-4" />
                      <span>{m.label}</span>
                    </button>
                  ))}
                </div>

                {formData.paymentMethod === 'upi' && (
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 space-y-2">
                    <label className="block text-[11px] font-medium text-neutral-600 mb-0.5">UPI ID / VPA</label>
                    <input
                      type="text"
                      value={formData.upiId}
                      onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                      placeholder="e.g. yourname@oksbi / mobile@upi"
                      className="w-full px-2.5 py-1.5 text-xs bg-white rounded-lg border border-neutral-200 focus:outline-none"
                    />
                    <p className="text-[10px] text-neutral-500">Supports Google Pay, PhonePe, Paytm & BHIM UPI</p>
                  </div>
                )}

                {formData.paymentMethod === 'card' && (
                  <div className="grid grid-cols-3 gap-2 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                    <div className="col-span-3">
                      <label className="block text-[11px] font-medium text-neutral-500 mb-0.5">Card Number</label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-2.5 py-1.5 text-xs bg-white rounded-lg border border-neutral-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-neutral-500 mb-0.5">Expires</label>
                      <input
                        type="text"
                        value={formData.cardExp}
                        onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                        className="w-full px-2.5 py-1.5 text-xs bg-white rounded-lg border border-neutral-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-neutral-500 mb-0.5">CVC</label>
                      <input
                        type="text"
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full px-2.5 py-1.5 text-xs bg-white rounded-lg border border-neutral-200 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'cod' && (
                  <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-800">
                    Pay securely in cash or via UPI QR code upon parcel delivery to your doorstep.
                  </div>
                )}
              </div>

              {/* Total & Submit */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500">Total Due:</p>
                  <p className="text-2xl font-bold text-neutral-900 tabular-nums">
                    {formatINR(total)}
                  </p>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-[#E11D74] hover:bg-[#C2185B] text-white text-sm font-semibold shadow-md shadow-pink-200 flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Place Order</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-serif font-bold text-neutral-900">
              Thank You For Your Order!
            </h2>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              Your glamour package has been confirmed and is being hand-prepared with care.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 max-w-sm mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Order Reference:</span>
                <span className="font-mono font-bold text-neutral-900">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Estimated Delivery:</span>
                <span className="font-semibold text-neutral-900">In 2 - 3 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Confirmation Sent To:</span>
                <span className="font-medium text-neutral-900">{formData.email}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#E11D74] hover:bg-[#C2185B] text-white text-sm font-semibold shadow-sm transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
