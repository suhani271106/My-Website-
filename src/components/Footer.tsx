import React from 'react';
import { Instagram, Facebook, Share2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  onOpenPolicy: (type: 'privacy' | 'terms' | 'shipping' | 'returns' | 'faq') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenContact,
  onOpenPolicy,
}) => {
  return (
    <footer className="bg-[#201D24] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-neutral-800/80">
          
          {/* Brand Info & Motto (Col 1) */}
          <div className="md:col-span-6 space-y-4 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Glamour Hub
            </h2>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Stay Glamorous. Your ultimate destination for premium beauty and bold fashion. Redefining elegance every day.
            </p>

            {/* Social Icons matching screenshot */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Glamour Hub on Instagram"
                className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-[#E11D74] hover:text-white text-neutral-300 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Glamour Hub on Facebook"
                className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-[#E11D74] hover:text-white text-neutral-300 flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {/* TikTok Icon */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Glamour Hub on TikTok"
                className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-[#E11D74] hover:text-white text-neutral-300 flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">Tk</span>
              </a>
              {/* Pinterest Icon */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Glamour Hub on Pinterest"
                className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-[#E11D74] hover:text-white text-neutral-300 flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">P</span>
              </a>
            </div>
          </div>

          {/* Shop Column (Col 2) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Shop
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('makeup')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Makeup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('makeup')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Skincare
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('clothing')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Clothing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Brands
                </button>
              </li>
            </ul>
          </div>

          {/* Support Column (Col 3) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Shipping
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('returns')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('faq')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Glamour Hub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
