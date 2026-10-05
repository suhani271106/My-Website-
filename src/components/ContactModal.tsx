import React, { useState } from 'react';
import { X, Send, Mail, Phone, MapPin, CheckCircle, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Order & Product Consultation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // keep message up
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-pink-100 p-6 sm:p-8 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-neutral-900">Message Received</h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto">
              Thank you for contacting Glamour Hub Concierge. A beauty advisor will reply within 4 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#E11D74] text-white text-xs font-semibold hover:bg-[#C2185B] cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-neutral-100 pb-4 mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E11D74]">
                Concierge Care
              </span>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mt-1">
                Contact Glamour Hub
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Reach our styling & beauty specialists for shade matching, order tracking, and bespoke assistance.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 p-3 bg-neutral-50 rounded-2xl border border-neutral-100 text-[11px] text-neutral-600">
              <div className="flex flex-col items-center text-center gap-1">
                <Mail className="w-4 h-4 text-[#E11D74]" />
                <span className="font-semibold text-neutral-800">Email</span>
                <span className="truncate max-w-full">concierge@glamourhub.com</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <Phone className="w-4 h-4 text-[#E11D74]" />
                <span className="font-semibold text-neutral-800">Direct Line</span>
                <span>+1 (800) 452-6687</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <Clock className="w-4 h-4 text-[#E11D74]" />
                <span className="font-semibold text-neutral-800">Hours</span>
                <span>24/7 Client Care</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Inquiry Topic</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74] bg-white"
                >
                  <option>Order & Product Consultation</option>
                  <option>Lipstick & Foundation Shade Matching</option>
                  <option>Styling & Sizing Recommendation</option>
                  <option>Returns & Exchanges</option>
                  <option>Brand Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Your Message</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us how we can assist you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-[#E11D74]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#E11D74] hover:bg-[#C2185B] text-white text-xs font-semibold shadow-md shadow-pink-200 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
