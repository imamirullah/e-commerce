import React from 'react';
import { ChevronRight, Laptop, Smartphone, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

export const ShopByCategoryCircular: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useStore();

  const CATEGORY_ITEMS = [
    {
      id: 'laptops',
      name: 'Laptops',
      image: PRODUCTS[0].images[0], // MacBook Pro
      badge: 'Mac & Dell'
    },
    {
      id: 'smartphones-ios',
      name: 'iPhones (iOS)',
      image: PRODUCTS[6].images[0], // iPhone 15 Pro Max
      badge: 'Apple'
    },
    {
      id: 'smartphones-android',
      name: 'Android Phones',
      image: PRODUCTS[10].images[0], // Galaxy S24 Ultra
      badge: 'Galaxy & Pixel'
    },
    {
      id: 'all',
      name: 'All Devices',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=300&q=80',
      badge: '14 Models'
    }
  ];

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId as any);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-full overflow-hidden py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header: Shop by Category with See All > (Matching Reference Image) */}
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Shop by Category
            </h2>
          </div>

          <button
            onClick={() => handleCategoryClick('all')}
            className="flex items-center gap-0.5 text-xs font-semibold text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Clean Circular Category Avatars (Laptops, iPhones, Android, All Devices) */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 pb-1">
          {CATEGORY_ITEMS.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="flex flex-col items-center gap-1.5 group text-center focus:outline-none"
              >
                {/* Circular Image Container */}
                <div className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center p-2 sm:p-3 transition-all duration-200 group-hover:scale-105 active:scale-95 ${
                  isSelected
                    ? 'bg-brand-50 dark:bg-brand-950/40 ring-2 ring-brand-600 dark:ring-brand-400 shadow-md'
                    : 'bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60'
                }`}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Category Label */}
                <span className={`text-[11px] sm:text-xs font-semibold truncate transition-colors ${
                  isSelected
                    ? 'text-brand-600 dark:text-brand-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white'
                }`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
