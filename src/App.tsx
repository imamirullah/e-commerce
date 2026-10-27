import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { StoreProvider, useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { ProductCard } from './components/ProductCard';
import { TradeInCalculator } from './components/TradeInCalculator';
import { TrustFeatures } from './components/TrustFeatures';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { ProfileDrawer } from './components/ProfileDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWhatsAppHelp } from './components/FloatingWhatsAppHelp';
import { Toast } from './components/Toast';
import { ShopByCategoryCircular } from './components/ShopByCategoryCircular';
import { OfferBannersSection } from './components/OfferBannersSection';
import { PRODUCTS } from './data/products';
import { Sparkles, ShieldCheck, CheckCircle2, Truck, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';

const MainContent: React.FC = () => {
  const { 
    selectedCategory, 
    selectedBrand, 
    selectedCondition, 
    selectedSort,
    activeMode,
    isSeniorMode,
    openWhatsAppOrder
  } = useStore();

  const filteredProducts = PRODUCTS.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }
    if (selectedBrand && p.brand !== selectedBrand) {
      return false;
    }
    if (selectedCondition && p.condition !== selectedCondition) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (selectedSort === 'discount') {
      return b.discountPercent - a.discountPercent;
    }
    if (selectedSort === 'price-low') {
      return a.price - b.price;
    }
    if (selectedSort === 'price-high') {
      return b.price - a.price;
    }
    return b.rating - a.rating;
  });

  return (
    <div className={`min-h-screen flex flex-col w-full max-w-full overflow-hidden bg-slate-50 dark:bg-[#07080C] text-slate-900 dark:text-slate-100 transition-all duration-200 ${
      isSeniorMode ? 'text-[15px]' : 'text-sm'
    }`}>
      
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Glassmorphic Navigation (iOS Header) */}
      <Navbar />

      {/* 3. Hero Section (iOS Carousel Banner Matching Reference Image) */}
      <Hero />

      {/* 4. Circular "Shop by Category" Avatars (Matching Reference Image Design A & B) */}
      <ShopByCategoryCircular />

      {/* Trade-In Mode */}
      {activeMode === 'trade-in' && (
        <div className="animate-slide-up">
          <TradeInCalculator />
        </div>
      )}

      {/* 5. Main Products Catalog Section */}
      <main id="products" className="py-6 sm:py-12 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full flex-1">
        
        {/* Section Heading (Matching Reference Image: Featured Products) */}
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold mb-1.5 border border-brand-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Refurbished Fleet</span>
            </div>
            <h2 className="text-base sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
              Featured Flagships
            </h2>
            <p className="hidden sm:block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 max-w-xl">
              Every device passes our 45-point diagnostics laboratory and is protected by a complimentary 2-Year Comprehensive On-Site Warranty.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              <strong className="text-slate-900 dark:text-white">{filteredProducts.length}</strong> certified models
            </span>
          </div>
        </div>

        {/* Guided 2-Step Filter & Sort Strip */}
        <CategoryFilterBar />

        {/* Product Grid (2-Column Mobile iOS Layout Matching Reference Image) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 rounded-3xl bg-white dark:bg-[#10131E] border border-slate-200 dark:border-white/10 p-8 space-y-3">
            <ShieldCheck className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No devices match your selected filters
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Please reset your brand or category filters to view our complete certified stock.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* 6. Promotional Deals Banner (Matching Reference Image Design B) */}
        <div className="mt-8 sm:mt-12 rounded-3xl p-5 sm:p-7 bg-gradient-to-r from-[#B84E29] via-[#C95E36] to-[#D97746] text-white shadow-apple-md relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-left w-full sm:w-auto z-10">
            <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded-full inline-block">
              LIMITED TIME
            </span>
            <h3 className="text-lg sm:text-2xl font-black tracking-tight flex items-center gap-2">
              Deals Up to 60% Off
              <ArrowRight className="w-5 h-5 hidden sm:inline" />
            </h3>
            <p className="text-xs text-white/90">
              2-Year Comprehensive On-Site Warranty • Free Doorstep Inspection & Delivery
            </p>
          </div>

          <button
            onClick={() => openWhatsAppOrder("Limited Time Deals Up to 60% Off")}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 z-10 shrink-0"
          >
            <span>Claim Offer on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>

      </main>

      {/* 5. Curated Offer Banners (Generated Studio Visuals) */}
      <OfferBannersSection />

      {/* 6. Trade-In Calculator */}
      {activeMode !== 'trade-in' && (
        <TradeInCalculator />
      )}

      {/* 6. Trust Features */}
      <TrustFeatures />

      {/* 7. Verified Reviews */}
      <ReviewsSection />

      {/* 8. FAQs */}
      <FAQSection />

      {/* 9. Footer */}
      <Footer />

      {/* 10. Modals & Drawers */}
      <ProductModal />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <AuthModal />
      <ProfileDrawer />
      <Toast />

      {/* 11. Floating WhatsApp Help Concierge (Crucial for 50+) */}
      <FloatingWhatsAppHelp />

      {/* 12. iOS Native Mobile Bottom Dock */}
      <MobileBottomNav />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <MainContent />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
