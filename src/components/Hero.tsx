import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  BatteryMedium, 
  CheckCircle2, 
  Tag,
  Laptop,
  Smartphone
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

export const Hero: React.FC = () => {
  const { openProductModal, setActiveMode, setSelectedCategory } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // 3 Featured Slides strictly for Laptops & Phones (iOS & Android)
  const SLIDES = [
    {
      product: PRODUCTS[0], // MacBook Pro 16 M3 Max
      eyebrow: 'APPLE CERTIFIED REFURBISHED',
      title: 'Flagship Power. Certified Like New.',
      subtitle: 'Experience M3 Max silicon verified via 45-point diagnostics. Backed by our signature 2-year on-site warranty.',
      cta: 'Shop Laptops',
      categoryId: 'laptops',
      themeClass: 'from-[#F5EFE6] via-[#E8DFD8] to-[#DDD2C7] dark:from-[#131722] dark:via-[#181D2B] dark:to-[#0F131D]',
      highlight: 'Save up to ₹1,10,000',
      badge: '99% Battery Health'
    },
    {
      product: PRODUCTS[6], // iPhone 15 Pro Max
      eyebrow: 'TITANIUM iOS FLAGSHIP',
      title: 'Precision Engineered. Like-New Condition.',
      subtitle: 'Aerospace-grade titanium, 48MP camera, and all-day battery life. Sealed with genuine accessories.',
      cta: 'Shop iPhones',
      categoryId: 'smartphones-ios',
      themeClass: 'from-[#EBF0F5] via-[#DEE5ED] to-[#D0D9E3] dark:from-[#111927] dark:via-[#162033] dark:to-[#0D1420]',
      highlight: 'Save ₹45,000',
      badge: '100% Genuine Apple'
    },
    {
      product: PRODUCTS[10], // Samsung Galaxy S24 Ultra
      eyebrow: 'ANDROID AI POWERHOUSE',
      title: 'Next-Gen Galaxy AI. Unlocked Performance.',
      subtitle: 'Snapdragon 8 Gen 3 with built-in S-Pen, 200MP camera, and 7 years of Android updates guaranteed.',
      cta: 'Shop Android',
      categoryId: 'smartphones-android',
      themeClass: 'from-[#EDE8F5] via-[#E2DCEB] to-[#D5CEE0] dark:from-[#1A1526] dark:via-[#211B30] dark:to-[#14101E]',
      highlight: 'Save ₹40,000',
      badge: 'Galaxy AI Enabled'
    }
  ];

  // Auto advance slide every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [SLIDES.length]);

  const activeSlide = SLIDES[currentSlide];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    } else if (diff < -50) {
      setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
    }
    touchStartX.current = null;
  };

  const handleCtaClick = () => {
    setSelectedCategory(activeSlide.categoryId as any);
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full max-w-full overflow-hidden pt-3 sm:pt-6 pb-6 sm:pb-12 border-b border-slate-200/80 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
        
        {/* === HERO CAROUSEL CARD (Matching Reference Image Design A & B) === */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${activeSlide.themeClass} p-5 sm:p-10 lg:p-12 border border-slate-200/60 dark:border-white/10 shadow-apple-md transition-all duration-500`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Content Column */}
            <div className="md:col-span-7 flex flex-col items-start text-left space-y-3 sm:space-y-4 z-10">
              
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 font-mono">
                  {activeSlide.eyebrow}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-[10px] sm:text-xs font-bold text-brand-700 dark:text-brand-300 bg-brand-500/15 px-2 py-0.5 rounded-full">
                  {activeSlide.highlight}
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                {activeSlide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
                {activeSlide.subtitle}
              </p>

              {/* CTA Pill Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleCtaClick}
                  className="flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 group"
                >
                  <span>{activeSlide.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => openProductModal(activeSlide.product)}
                  className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white/80 hover:bg-white text-slate-900 dark:bg-slate-800/80 dark:hover:bg-slate-800 dark:text-white text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  View Details
                </button>
              </div>

            </div>

            {/* Right Product Showcase Column */}
            <div className="md:col-span-5 flex justify-center items-center relative">
              <div 
                onClick={() => openProductModal(activeSlide.product)}
                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 cursor-pointer group"
              >
                <img
                  src={activeSlide.product.images[0]}
                  alt={activeSlide.product.title}
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Micro Tag on Image */}
                <div className="absolute bottom-1 right-1 bg-slate-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 shadow-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{activeSlide.badge}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-4 sm:pt-6">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx 
                    ? 'w-6 h-2 bg-slate-900 dark:bg-white' 
                    : 'w-2 h-2 bg-slate-400/60 dark:bg-slate-600 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

        </div>

        {/* 4 Trust Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 text-left w-full max-w-full">
          <div className="p-2.5 rounded-2xl bg-white dark:bg-[#10131E] border border-slate-200/70 dark:border-white/5 flex items-center gap-2.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 dark:text-white block font-mono">45-Point Test</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Lab Diagnostic Cert</span>
            </div>
          </div>

          <div className="p-2.5 rounded-2xl bg-white dark:bg-[#10131E] border border-slate-200/70 dark:border-white/5 flex items-center gap-2.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 dark:text-white block font-mono">2-Year Warranty</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Complimentary On-Site</span>
            </div>
          </div>

          <div className="p-2.5 rounded-2xl bg-white dark:bg-[#10131E] border border-slate-200/70 dark:border-white/5 flex items-center gap-2.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 dark:text-white block font-mono">14-Day Return</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Full Refund Guarantee</span>
            </div>
          </div>

          <div className="p-2.5 rounded-2xl bg-white dark:bg-[#10131E] border border-slate-200/70 dark:border-white/5 flex items-center gap-2.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <BatteryMedium className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 dark:text-white block font-mono">95%+ Battery</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Certified OEM Cells</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
