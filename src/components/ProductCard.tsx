import React from 'react';
import { 
  Heart, 
  CheckCircle2, 
  BatteryMedium, 
  ShoppingBag, 
  Star,
  ShieldCheck,
  MessageCircle,
  Truck
} from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openProductModal, addToCart, toggleWishlist, isInWishlist, isSeniorMode, openWhatsAppOrder } = useStore();
  const isWishlisted = isInWishlist(product.id);

  return (
    <article className="group relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111420] border border-slate-200/80 dark:border-white/[0.08] p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-apple-md hover:-translate-y-0.5 shadow-apple-sm">
      
      {/* 1. Card Top: Badges & Wishlist Heart (Matching Reference Image Design A & B) */}
      <div>
        <div className="flex items-center justify-between gap-1 mb-2">
          {/* Top Left Tag */}
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="truncate">100% Tested</span>
          </span>

          {/* Top Right Wishlist Heart Icon (Exact position from reference image) */}
          <button
            onClick={() => toggleWishlist(product.id)}
            className="p-1 sm:p-1.5 rounded-full text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
              isWishlisted ? 'text-rose-500 fill-rose-500 scale-110' : ''
            }`} />
          </button>
        </div>

        {/* 2. Centered Product Image (Clean iOS Look) */}
        <div 
          onClick={() => openProductModal(product)}
          className="relative aspect-square sm:aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/60 cursor-pointer mb-2.5 p-2 flex items-center justify-center"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Discount Pill Overlay */}
          <div className="absolute top-1.5 left-1.5 bg-rose-600 text-white text-[10px] sm:text-xs font-black px-1.5 py-0.5 rounded-md shadow-xs">
            {product.discountPercent}% OFF
          </div>

          {/* Battery Health / COD Tag on Image */}
          <div className="absolute bottom-1.5 left-1.5 bg-slate-950/85 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/10 shadow-xs">
            <BatteryMedium className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
            <span>{product.specs.batteryHealth}% Battery</span>
          </div>
        </div>

        {/* 3. Title & Specs */}
        <div className="space-y-1 mb-2">
          {/* Brand & Star Rating (Matching Reference Image: ★ 4.6 (1.2k)) */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            <span className="font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 text-[10px] sm:text-xs">
              {product.brand}
            </span>
            <div className="flex items-center gap-0.5 text-amber-500 font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal hidden sm:inline">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => openProductModal(product)}
            className="font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors line-clamp-1 leading-snug text-xs sm:text-sm"
          >
            {product.title}
          </h3>

          {/* Clean Specs Preview */}
          <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
            <span>⚡ {product.specs.processor.split('(')[0]}</span> • <span>💾 {product.specs.storage}</span>
          </div>
        </div>
      </div>

      {/* 4. Price & Actions */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
        {/* Pricing Line */}
        <div className="flex items-baseline justify-between gap-1 flex-wrap">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-lg font-black text-slate-950 dark:text-white font-mono">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-[9px] font-bold text-brand-600 dark:text-brand-400 bg-brand-500/10 px-1.5 py-0.5 rounded">
            2-Yr Warranty
          </span>
        </div>

        {/* Dual Actions: WhatsApp Instant Order + View & Buy */}
        <div className="grid grid-cols-2 gap-1.5 pt-0.5">
          {/* WhatsApp Direct Order (Senior Friendly) */}
          <button
            onClick={() => openWhatsAppOrder(product.title, product.price)}
            className="py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-xs transition-transform active:scale-95"
            title="Order directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
            <span className="truncate">WhatsApp</span>
          </button>

          {/* View & Buy */}
          <button
            onClick={() => openProductModal(product)}
            className="py-2 px-1 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-xs transition-transform active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Buy Now</span>
          </button>
        </div>

      </div>

    </article>
  );
};
