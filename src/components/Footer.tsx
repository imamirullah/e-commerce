import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  ArrowRight, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Lock
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('Subscribed!', 'You will receive exclusive VIP drops and deal notifications.', 'success');
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-32 sm:pb-36 lg:pb-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Brand Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white font-mono font-bold text-base shadow-glow-brand">
                L
              </div>
              <span className="text-xl font-black text-white font-mono tracking-tight">
                LUMEN <span className="text-brand-500 font-sans text-xs uppercase font-extrabold ml-1">Certified</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed">
              India's premier certified electronics exchange. Enterprise-grade laptops, smartphones, and workstations tested to perfection. Backed by our signature 2-year comprehensive on-site warranty.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-white font-bold text-sm block">
                Stay updated on rare flagship inventory drops
              </span>
              <p className="text-slate-400 text-xs">
                Subscribe for private price reductions, trade-in bonus codes, and new arrivals.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2 pt-1">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Navigation Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Shop Certified
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">Apple MacBook Pro & Air</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Dell Latitude & XPS Laptops</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Lenovo ThinkPad Series</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Apple iPhones & Galaxys</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Android Flagships (Samsung & Google)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Customer Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#trade-in" className="hover:text-white transition-colors">Instant Trade-In Calculator</a></li>
              <li><a href="#guarantee" className="hover:text-white transition-colors">45-Point Lab Diagnostic Protocol</a></li>
              <li><a href="#guarantee" className="hover:text-white transition-colors">2-Year On-Site Warranty Claim</a></li>
              <li><a href="#guarantee" className="hover:text-white transition-colors">Pay on Delivery & 14-Day Return</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Order Tracking & Pin Code Search</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Enterprise & B2B
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Startup Hardware Fleet Leasing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bulk Laptop Procurement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Asset Disposition (ITAD)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GST Invoicing for Businesses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Buyback Programs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Corporate Office & Hubs
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                <span>Level 4, Prestige Tech Cloud, Bengaluru, KA 560066</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>+91 (800) 555-8899</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>GSTIN: 29AABCL9821K1ZZ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Compliance Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 LUMEN Tech Systems Private Limited. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-400" />
              256-Bit SSL Secure
            </span>
            <span>•</span>
            <span>UPI / NetBanking / Cards / COD</span>
            <span>•</span>
            <span>ISO 9001:2015 Certified Diagnostics</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-slate-600 leading-normal text-center max-w-4xl mx-auto pt-2">
          Disclaimer: Apple, iPhone, MacBook, iPad, Dell, ThinkPad, HP, and Samsung are registered trademarks of their respective brand owners. LUMEN is an independent certified diagnostic and refurbishment enterprise and is not directly affiliated with original equipment manufacturers. All sample catalog devices and reviews are presented for client demonstration.
        </p>

      </div>
    </footer>
  );
};
