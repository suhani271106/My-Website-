import React from 'react';
import { X, ShieldCheck, Truck, RotateCcw, HelpCircle, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'shipping' | 'returns' | 'faq' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: ShieldCheck,
      content: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed">
          <p>
            At Glamour Hub, your privacy and personal trust are our highest priorities. We collect information solely to provide an elevated, tailored luxury shopping experience.
          </p>
          <h4 className="font-bold text-neutral-800 text-sm">Data Encryption & Protection</h4>
          <p>
            All payment credentials, personal information, and shipping addresses are encrypted end-to-end using 256-bit TLS protocols. We never sell, rent, or trade your private information with third parties.
          </p>
          <h4 className="font-bold text-neutral-800 text-sm">Cookie Preferences</h4>
          <p>
            We utilize essential session tokens to remember your shopping bag contents and shade preferences across your visits.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Service',
      icon: FileText,
      content: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed">
          <p>
            Welcome to Glamour Hub. By browsing our collections or completing a transaction, you agree to our standard terms of luxury retail.
          </p>
          <h4 className="font-bold text-neutral-800 text-sm">Product Authenticity & Pricing</h4>
          <p>
            All beauty cosmetics and fashion apparel sold on Glamour Hub are guaranteed 100% authentic, cruelty-free, and sourced directly from certified brand houses.
          </p>
          <h4 className="font-bold text-neutral-800 text-sm">Order Fulfillment</h4>
          <p>
            Orders are processed immediately upon confirmation. In rare instances of backorders, our customer care concierge will notify you within 12 hours.
          </p>
        </div>
      ),
    },
    shipping: {
      title: 'Shipping & Delivery',
      icon: Truck,
      content: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed">
          <p>
            We take supreme care in packaging every order with signature recycled rose-silk wrapping and temperature-controlled cosmetic boxes.
          </p>
          <div className="p-3 bg-neutral-50 rounded-xl space-y-2 border border-neutral-100">
            <div className="flex justify-between font-semibold text-neutral-800">
              <span>Standard Delivery (₹149, FREE over ₹1,499)</span>
              <span>2 - 4 Business Days</span>
            </div>
            <div className="flex justify-between font-semibold text-neutral-800">
              <span>Express Glamour Courier (₹299)</span>
              <span>Next Business Day</span>
            </div>
          </div>
          <p>
            Tracking numbers are issued via email immediately when your package leaves our fulfillment atelier.
          </p>
        </div>
      ),
    },
    returns: {
      title: 'Returns & 30-Day Guarantee',
      icon: RotateCcw,
      content: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed">
          <p>
            We want you to feel utterly confident in your purchases. We offer complimentary 30-day hassle-free returns and shade exchanges.
          </p>
          <h4 className="font-bold text-neutral-800 text-sm">Shade Match Guarantee</h4>
          <p>
            If your foundation or lipstick shade is not a perfect match for your skin tone, we will gladly ship an alternative shade free of charge.
          </p>
          <h4 className="font-bold text-neutral-800 text-sm">Easy Prepaid Return Labels</h4>
          <p>
            Simply initiate a return through our contact portal to receive an instant printable prepaid courier label.
          </p>
        </div>
      ),
    },
    faq: {
      title: 'Frequently Asked Questions',
      icon: HelpCircle,
      content: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed">
          <div className="space-y-1">
            <h4 className="font-bold text-neutral-800 text-sm">Are all cosmetics cruelty-free?</h4>
            <p>Yes, 100% of our makeup and skincare formulas are cruelty-free and never tested on animals.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-neutral-800 text-sm">How do I choose the right dress size?</h4>
            <p>Each fashion item includes detailed measurements in the description. Our sizing runs true to standard US ready-to-wear.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-neutral-800 text-sm">What payment options are supported?</h4>
            <p>We accept all major credit cards (Visa, MasterCard, Amex), Apple Pay, and Cash on Delivery (COD).</p>
          </div>
        </div>
      ),
    },
  }[type];

  const Icon = contentMap.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-pink-100 p-6 sm:p-8 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-neutral-100 pb-4 mb-5">
          <div className="w-10 h-10 rounded-full bg-pink-50 text-[#E11D74] flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-neutral-900">
              {contentMap.title}
            </h3>
            <span className="text-[11px] text-neutral-400">Glamour Hub Client Guidelines</span>
          </div>
        </div>

        {contentMap.content}

        <div className="pt-6 mt-6 border-t border-neutral-100 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
