import React from 'react';
import { Home, Laptop, MessageCircle, Heart, User } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const MobileBottomNav: React.FC = () => {
  const { 
    setIsWishlistOpen, 
    setIsProfileOpen, 
    wishlist, 
    openWhatsAppOrder,
    setSelectedCategory
  } = useStore();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCatalogClick = () => {
    setSelectedCategory('all');
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="lg:hidden fixed bottom-5 sm:bottom-6 left-0 right-0 w-full max-w-full z-40 px-4 pointer-events-none">
      <nav className="pointer-events-auto mx-auto max-w-sm rounded-full bg-white/95 dark:bg-[#0E111B]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 shadow-2xl shadow-slate-950/25 px-3 py-2 flex items-center justify-around transition-all">
        
        {/* 1. Home */}
        <button
          onClick={handleHomeClick}
          className="flex flex-col items-center gap-0.5 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 p-1.5 transition-colors group"
          aria-label="Home"
        >
          <Home className="w-5 h-5 transition-transform group-active:scale-90" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        {/* 2. All Products */}
        <button
          onClick={handleCatalogClick}
          className="flex flex-col items-center gap-0.5 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 p-1.5 transition-colors group"
          aria-label="Catalog"
        >
          <Laptop className="w-5 h-5 transition-transform group-active:scale-90" />
          <span className="text-[10px] font-bold">Laptops</span>
        </button>

        {/* 3. WhatsApp Assisted Order */}
        <button
          onClick={() => openWhatsAppOrder()}
          className="relative flex flex-col items-center gap-0.5 text-emerald-600 dark:text-emerald-400 p-1.5 transition-colors group"
          aria-label="WhatsApp Order"
        >
          <div className="relative p-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <MessageCircle className="w-5 h-5 fill-emerald-500 text-emerald-500" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400">WhatsApp</span>
        </button>

        {/* 4. Wishlist */}
        <button
          onClick={() => setIsWishlistOpen(true)}
          className="relative flex flex-col items-center gap-0.5 text-slate-700 dark:text-slate-300 hover:text-rose-500 p-1.5 transition-colors group"
          aria-label="Wishlist"
        >
          <div className="relative">
            <Heart className={`w-5 h-5 transition-colors ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-black flex items-center justify-center shadow-xs">
                {wishlist.length}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold">Saved</span>
        </button>

        {/* 5. Profile (Replaces Bag per user request) */}
        <button
          onClick={() => setIsProfileOpen(true)}
          className="relative flex flex-col items-center gap-0.5 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 p-1.5 transition-colors group"
          aria-label="Profile"
        >
          <div className="relative">
            <User className="w-5 h-5 transition-transform group-active:scale-90" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white dark:border-[#0E111B]" />
          </div>
          <span className="text-[10px] font-bold">Profile</span>
        </button>

      </nav>
    </div>
  );
};
