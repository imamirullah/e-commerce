import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const OfferBannersSection: React.FC = () => {
  const { setSelectedCategory, openWhatsAppOrder } = useStore();

  const handleShopLaptops = () => {
    setSelectedCategory('laptops');
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShopPhones = () => {
    setSelectedCategory('smartphones-ios');
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full max-w-full overflow-hidden py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold mb-1 border border-rose-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Seasonal Offers</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Exclusive Flash Drops & Upgrade Festivals
            </h2>
          </div>
        </div>

        {/* 2-Column Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Card 1: Laptop Upgrade Festival */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-apple-lg border border-slate-800 transition-all duration-300 hover:shadow-2xl flex flex-col justify-end min-h-[300px] sm:min-h-[360px]">
            {/* Background Image */}
            <img 
              src="/banners/laptop_fest_banner.jpg" 
              alt="MacBook and Dell Laptops Offer Banner" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            {/* Content Box */}
            <div className="relative z-10 p-5 sm:p-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-rose-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                  SAVE UP TO 62%
                </span>
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  2-Year Warranty
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Laptop Upgrade Festival
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                  Certified enterprise MacBook Pro M3, ThinkPads, and Dell XPS starting from ₹42,999. Verified thermals & 45-point diagnostics.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleShopLaptops}
                  className="px-5 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-slate-100 transition-transform active:scale-95 group/btn"
                >
                  <span>Explore Laptops</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => openWhatsAppOrder("Laptop Upgrade Festival")}
                  className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Flagship Titanium Smartphones Drop */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-apple-lg border border-slate-800 transition-all duration-300 hover:shadow-2xl flex flex-col justify-end min-h-[300px] sm:min-h-[360px]">
            {/* Background Image */}
            <img 
              src="/banners/phones_deal_banner.jpg" 
              alt="iPhone 15 Pro and Galaxy S24 Ultra Offer Banner" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            {/* Content Box */}
            <div className="relative z-10 p-5 sm:p-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-brand-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                  NEW ARRIVALS
                </span>
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  98%+ Min Battery Health
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Titanium & AI Smartphone Drop
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                  Pristine condition Apple iPhone 15 Pro Max & Samsung Galaxy S24 Ultra. Factory unlocked with 100% original hardware.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleShopPhones}
                  className="px-5 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-slate-100 transition-transform active:scale-95 group/btn"
                >
                  <span>Explore Phones</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => openWhatsAppOrder("Smartphone Drop Offer")}
                  className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
