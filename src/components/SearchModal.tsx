import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Laptop, Smartphone, CheckCircle2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, openProductModal } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim() === ''
    ? PRODUCTS.slice(0, 4) // Show top picks when query empty
    : PRODUCTS.filter(p => {
        const q = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.specs.processor.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q)
        );
      });

  const handleSelectProduct = (product: any) => {
    setIsSearchOpen(false);
    openProductModal(product);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={() => setIsSearchOpen(false)} 
      />

      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0E111B] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-10 animate-slide-up">
        
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by model, brand, or specs (e.g., M3 Max, Latitude, iPhone)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base sm:text-lg bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-400 uppercase font-bold text-[10px] shrink-0">Popular:</span>
          {['MacBook Pro', 'Dell Latitude', 'iPhone 15 Pro', 'ThinkPad T14', 'Galaxy S24 Ultra'].map(chip => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500 whitespace-nowrap transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
            {query.trim() === '' ? 'Recommended Flagships' : `Found ${filteredProducts.length} Results`}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No certified products found matching "{query}". Try checking for typos or searching by brand.
            </div>
          ) : (
            filteredProducts.map(product => (
              <div
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700/80 transition-all group"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-14 h-14 rounded-xl object-cover bg-white shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase font-mono">
                      {product.condition}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-[11px] text-slate-400">{product.brand}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {product.title}
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {product.specs.processor} • {product.specs.ram} • {product.specs.storage}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-sm font-black text-slate-950 dark:text-white font-mono block">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                    Save {product.discountPercent}%
                  </span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
