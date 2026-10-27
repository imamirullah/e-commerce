import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Sun, 
  Moon, 
  User as UserIcon, 
  ArrowLeftRight, 
  ShieldCheck, 
  Menu, 
  X,
  Phone,
  MessageCircle,
  Truck,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useStore } from '../context/StoreContext';

const CITIES = ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata'];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { 
    cartItemCount, 
    setIsCartOpen, 
    wishlist, 
    setIsWishlistOpen, 
    setIsSearchOpen,
    activeMode,
    setActiveMode,
    user,
    setIsAuthOpen,
    setIsProfileOpen,
    openWhatsAppOrder
  } = useStore();

  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  return (
    <header className={`sticky top-0 z-40 w-full max-w-full overflow-hidden transition-all duration-300 ${
      isScrolled 
        ? 'glass-panel-light dark:glass-panel-dark shadow-apple-sm' 
        : 'bg-white/95 dark:bg-[#07080C]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.06]'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* === MOBILE HEADER (Matching Reference iOS Design B) === */}
        <div className="sm:hidden pt-2.5 pb-2 space-y-2">
          {/* Top Row: Location Deliver-To + Bada Text + Theme + Bag */}
          <div className="flex items-center justify-between gap-2">
            
            {/* Delivery Location Pill (Design B style) */}
            <div className="relative">
              <button 
                onClick={() => setIsCityOpen(!isCityOpen)}
                className="flex items-center gap-1.5 text-left py-0.5 px-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                aria-label="Select delivery city"
              >
                <div className="w-7 h-7 rounded-full bg-brand-500/10 dark:bg-brand-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-none">
                    Deliver to
                  </span>
                  <div className="flex items-center gap-0.5 text-xs font-black text-slate-900 dark:text-white leading-tight">
                    <span className="truncate max-w-[130px]">{selectedCity}, 560001</span>
                    <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
                  </div>
                </div>
              </button>

              {/* City Selection Dropdown */}
              {isCityOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsCityOpen(false)} />
                  <div className="absolute left-0 mt-1.5 w-44 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl py-1.5 z-50 text-slate-800 dark:text-slate-200">
                    <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100 dark:border-slate-800">
                      Choose Delivery City
                    </div>
                    {CITIES.map(city => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setIsCityOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-brand-500/10 dark:hover:bg-slate-800 flex items-center justify-between ${
                          selectedCity === city ? 'font-bold text-brand-600 dark:text-brand-400' : ''
                        }`}
                      >
                        <span>{city}</span>
                        {selectedCity === city && <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Mobile Actions: Theme + Bag */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Cart Bag */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* Row 2: Full-Width Rounded iOS Search Input (Design B) */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-800/80 dark:hover:bg-slate-800 dark:text-slate-400 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-xs transition-colors text-left"
          >
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-slate-500 dark:text-slate-400 font-medium truncate">
              Search for products, brands and more...
            </span>
          </button>
        </div>

        {/* === DESKTOP / TABLET HEADER === */}
        <div className="hidden sm:flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* 1. Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-glow-brand transition-transform duration-300 group-hover:scale-105 shrink-0">
                <span className="font-bold text-base sm:text-xl tracking-wider font-mono">L</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white font-mono">
                    LUMEN
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/25">
                    100% Tested
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-extrabold hidden sm:block">
                  Cash on Delivery
                </span>
              </div>
            </a>

            {/* Segmented Mode Switcher (Desktop) */}
            <div className="hidden xl:flex items-center p-1 bg-slate-100 dark:bg-slate-800/80 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-inner">
              <button
                onClick={() => setActiveMode('buy')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeMode === 'buy'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-brand-600 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Buy Certified</span>
              </button>
              <button
                onClick={() => setActiveMode('trade-in')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeMode === 'trade-in'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-brand-600 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Trade-In & Sell</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </button>
            </div>
          </div>

          {/* 2. Global Spotlight Search Bar (Desktop) */}
          <div className="flex-1 max-w-md hidden md:block mx-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-slate-500 bg-slate-100/90 hover:bg-slate-100 dark:bg-slate-800/70 dark:hover:bg-slate-800 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-700/60 transition-all duration-200 group shadow-sm"
              aria-label="Search tech"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium truncate">Search: Dell, ThinkPad, iPhone, MacBook...</span>
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* 3. Action Controls */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            
            {/* Desktop WhatsApp Quick Order */}
            <button
              onClick={() => openWhatsAppOrder()}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-transform active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Concierge</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Desktop Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="hidden sm:flex relative p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Saved Items"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Desktop User Account Button */}
            <button
              onClick={() => setIsProfileOpen(true)}
              className="hidden sm:flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Account"
            >
              {user ? (
                <div className="flex items-center gap-2">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-brand-500" 
                  />
                  <span className="text-xs font-bold hidden lg:inline">
                    {user.name.split(' ')[0]}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <UserIcon className="w-5 h-5" />
                  <span className="text-xs font-bold hidden lg:inline">Sign In</span>
                </div>
              )}
            </button>

            {/* Cart Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-brand-600 dark:hover:bg-brand-500 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-bold">Bag</span>
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-500 dark:bg-white text-white dark:text-brand-700 text-[10px] sm:text-xs font-black flex items-center justify-center">
                {cartItemCount}
              </span>
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (iOS Style) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#0B0D14]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-4 animate-slide-up">
          
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                openWhatsAppOrder();
                setIsMobileMenuOpen(false);
              }}
              className="py-3 px-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Concierge</span>
            </button>

            <a
              href="tel:+918005558899"
              className="py-3 px-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-brand-500" />
              <span>Call Helpline</span>
            </a>
          </div>

          <nav className="flex flex-col gap-2 pt-2 text-sm font-bold text-slate-800 dark:text-slate-200">
            <a 
              href="#products" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>Explore All Laptops & Phones</span>
              <span className="text-xs text-brand-600 dark:text-brand-400 font-mono">14 In Stock</span>
            </a>
            <a 
              href="#guarantee" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>2-Year Warranty & 45-Point Testing</span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </a>
            <a 
              href="#trade-in" 
              onClick={() => {
                setActiveMode('trade-in');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>Trade-In Old Laptop / Phone</span>
              <span className="text-xs text-emerald-500">Instant Valuation</span>
            </a>
            <button
              onClick={() => {
                setIsProfileOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left"
            >
              <span>{user ? `Account (${user.name})` : 'Sign In / Account'}</span>
              <UserIcon className="w-4 h-4 text-slate-400" />
            </button>
            <a 
              href="#reviews" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Customer Reviews (★ 4.95/5)
            </a>
            <a 
              href="#faqs" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Frequently Asked Questions (FAQs)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
