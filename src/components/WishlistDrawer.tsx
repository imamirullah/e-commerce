import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer: React.FC = () => {
  const { 
    isWishlistOpen, 
    setIsWishlistOpen, 
    wishlist, 
    toggleWishlist, 
    addToCart, 
    openProductModal 
  } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#0B0D14] shadow-2xl border-l border-slate-200 dark:border-white/10 flex flex-col animate-slide-left">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Saved Devices ({wishlistedProducts.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
            {wishlistedProducts.length === 0 ? (
              <div className="text-center py-24 space-y-3">
                <Heart className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  No saved devices yet
                </h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Click the heart icon on any product to save it to your wishlist for quick access later.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="mt-2 px-5 py-2 rounded-full bg-brand-600 text-white text-xs font-bold hover:bg-brand-500 shadow-sm"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              wishlistedProducts.map(product => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex gap-3.5 items-center"
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-16 h-16 rounded-xl object-cover bg-white shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsWishlistOpen(false);
                      openProductModal(product);
                    }}
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono uppercase">
                        {product.condition}
                      </span>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 
                      onClick={() => {
                        setIsWishlistOpen(false);
                        openProductModal(product);
                      }}
                      className="text-xs font-bold text-slate-900 dark:text-white truncate cursor-pointer hover:text-brand-500"
                    >
                      {product.title}
                    </h4>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-black text-slate-900 dark:text-white font-mono">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          addToCart(product);
                          toggleWishlist(product.id);
                        }}
                        className="px-3 py-1 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-[11px] font-bold flex items-center gap-1 shadow-xs transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
