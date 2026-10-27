import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  BatteryMedium, 
  Truck, 
  ShoppingBag, 
  Heart, 
  Cpu, 
  HardDrive, 
  ArrowRight, 
  MessageCircle,
  Sparkles,
  Award
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ProductModal: React.FC = () => {
  const { 
    selectedProductForModal, 
    closeProductModal, 
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    setIsCartOpen,
    openWhatsAppOrder
  } = useStore();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'inspection'>('overview');
  const [extendedWarranty, setExtendedWarranty] = useState(false);

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;
  const isWishlisted = isInWishlist(product.id);

  const handleBuyNow = () => {
    addToCart(product, { extendedWarranty });
    closeProductModal();
    setIsCartOpen(true);
  };

  const handleAddToCart = () => {
    addToCart(product, { extendedWarranty });
  };

  const inspectionChecklist = [
    { title: 'Logic Board & Processor Stress Test', status: 'Passed (No Throttle)' },
    { title: `Battery Capacity & Health (${product.specs.batteryHealth}%)`, status: 'Certified Genuine OEM' },
    { title: 'Display Uniformity & Dead Pixel Scan', status: '0 Bad Pixels Verified' },
    { title: 'Thermal Fan & Ultrasonic Heatsink Cleaning', status: 'Fresh Thermal Paste Applied' },
    { title: 'Keyboard Actuation & Key Travel', status: '100% Responsiveness' },
    { title: 'Thunderbolt / USB-C High-Speed Data Ports', status: 'Verified 40Gbps Throughput' },
    { title: 'Wireless Wi-Fi 6E & Bluetooth Antennas', status: 'Signal Strength 100%' },
    { title: 'Full Device Hospital-Grade UV Sanitization', status: 'Completed' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={closeProductModal} 
      />

      {/* iOS Modal / Bottom Sheet Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0E111B] rounded-t-[32px] sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-10 max-h-[92vh] sm:max-h-[90vh] flex flex-col animate-slide-up">
        
        {/* iOS Native Drag Handle (for mobile feel) */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-brand-600 dark:text-brand-400">
              {product.brand}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Certified Pristine A++
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleWishlist(product.id)}
              className="p-2 rounded-full text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Save to Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>
            <button
              onClick={closeProductModal}
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Column: Image Gallery */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-inner">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* 2-Year Warranty Badge on photo */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-amber-500/30">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>2-Year Comprehensive Warranty</span>
                </div>
              </div>

              {/* Thumbnail Selector */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2.5">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-brand-600 scale-105 shadow-sm'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Verification & Doorstep Inspection Assurance */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-extrabold text-sm">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span>Doorstep Open-Box Inspection</span>
                </div>
                <p className="text-emerald-700 dark:text-emerald-400 leading-relaxed">
                  Inspect the physical condition, display, and accessories upon delivery before completing payment. Protected by our 14-day zero-deductible return guarantee.
                </p>
              </div>
            </div>

            {/* Right Column: Title, Pricing & Highlights */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <h2 className="font-black text-slate-900 dark:text-white leading-tight text-xl sm:text-2xl">
                  {product.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {product.subtitle}
                </p>
              </div>

              {/* Price Banner */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className="text-3xl font-black text-slate-950 dark:text-white font-mono">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded border border-rose-500/20">
                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} ({product.discountPercent}% OFF)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ Free Inspected Express Shipping</span>
                  <span>24-48 Hours Delivery</span>
                </div>
              </div>

              {/* Quick Specs Cards */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">⚡ Performance & Speed:</span>
                  <strong className="text-slate-900 dark:text-white font-bold">{product.simpleSpecs.speed}</strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">💾 Storage Capacity:</span>
                  <strong className="text-slate-900 dark:text-white font-bold">{product.simpleSpecs.storage}</strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">🔋 Battery Endurance:</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{product.simpleSpecs.battery}</strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">🛡️ Warranty Coverage:</span>
                  <strong className="text-amber-500 font-bold">2-Year Complimentary On-Site Warranty</strong>
                </div>
              </div>

              {/* 2 Primary Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => openWhatsAppOrder(product.title, product.price)}
                  className="w-full py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/20 transition-transform active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                  <span>Order via WhatsApp Concierge</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleAddToCart}
                    className="py-3 px-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="py-3 px-3 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                  >
                    <span>Instant Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Deep-Dive Tabs (Overview, Tech Specs, 45-Point Lab Inspection) */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto text-xs sm:text-sm font-bold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  activeTab === 'overview'
                    ? 'border-brand-600 text-brand-600 dark:text-brand-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <span>Product Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === 'specs'
                    ? 'border-brand-600 text-brand-600 dark:text-brand-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                Technical Specifications
              </button>
              <button
                onClick={() => setActiveTab('inspection')}
                className={`pb-2 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  activeTab === 'inspection'
                    ? 'border-brand-600 text-brand-600 dark:text-brand-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <span>45-Point Lab Report</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </button>
            </div>

            {/* Tab 1: Product Overview */}
            {activeTab === 'overview' && (
              <div className="pt-4 space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Target Workflows & Best Use Cases
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {product.simpleSpecs.bestFor}. Fully stress-tested for thermal stability, app launching speeds, display color fidelity, and endurance. Zero latency or thermal throttling guaranteed.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <strong className="block text-slate-900 dark:text-white mb-1">Doorstep Open-Box Inspection</strong>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                      Examine the laptop or phone at your door before completing payment.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <strong className="block text-slate-900 dark:text-white mb-1">14-Day Money Back Guarantee</strong>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                      Test the machine in your real daily workload with a 14-day hassle-free return policy.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Detailed Specifications */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Processor</span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{product.specs.processor}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Display</span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{product.specs.display}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Graphics</span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{product.specs.graphics || 'Integrated Engine'}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Operating System</span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{product.specs.os}</p>
                </div>
              </div>
            )}

            {/* Tab 3: 45-Point Inspection Report */}
            {activeTab === 'inspection' && (
              <div className="pt-4 space-y-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-bold">LUMEN Quality Lab: 45/45 Tests Passed</span>
                  </div>
                  <span className="font-mono text-[11px]">Report ID: LM-{product.id.slice(-6).toUpperCase()}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {inspectionChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item.title}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono text-[11px]">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
