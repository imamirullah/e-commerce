import React, { useMemo } from 'react';
import { 
  Sparkles, 
  Laptop, 
  Smartphone, 
  ArrowUpDown, 
  X,
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES } from '../data/products';

export const CategoryFilterBar: React.FC = () => {
  const { 
    selectedCategory, 
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    selectedCondition,
    setSelectedCondition,
    selectedSort,
    setSelectedSort
  } = useStore();

  // Dynamic brand options based on selected category (Step 1 -> Step 2)
  const availableBrands = useMemo(() => {
    switch (selectedCategory) {
      case 'laptops':
        return ['Apple', 'Dell', 'Lenovo', 'HP'];
      case 'smartphones-ios':
        return ['Apple'];
      case 'smartphones-android':
        return ['Samsung', 'Google', 'OnePlus'];
      default:
        return ['Apple', 'Dell', 'Lenovo', 'HP', 'Samsung', 'Google', 'OnePlus'];
    }
  }, [selectedCategory]);

  // Handle category change: if active brand is not in new category, reset brand
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId as any);
    if (selectedBrand && !availableBrands.includes(selectedBrand)) {
      setSelectedBrand(null);
    }
  };

  const hasActiveFilters = selectedBrand !== null || selectedCondition !== null || selectedCategory !== 'all';

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand(null);
    setSelectedCondition(null);
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'laptops': return <Laptop className="w-4 h-4" />;
      case 'smartphones-ios': return <Smartphone className="w-4 h-4" />;
      case 'smartphones-android': return <Smartphone className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="rounded-3xl p-4 sm:p-6 bg-white dark:bg-[#0E111B] border border-slate-200/80 dark:border-white/10 shadow-apple-sm space-y-5 mb-8">
      
      {/* ================= STEP 1: WHAT ARE YOU LOOKING FOR? ================= */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
              1
            </span>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              What are you looking for?
            </label>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-rose-500 hover:text-rose-600 font-bold flex items-center gap-1 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Device Category Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border text-left ${
                  isSelected
                    ? 'bg-slate-950 text-white dark:bg-brand-600 dark:border-brand-500 shadow-sm ring-1 ring-slate-900 dark:ring-brand-400'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-700/60'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  {getCategoryIcon(cat.id)}
                  <span className="truncate">{cat.name}</span>
                </div>
                {cat.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono shrink-0 hidden sm:inline ${
                    isSelected ? 'bg-white/20 text-white' : 'text-slate-400'
                  }`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= STEP 2: CHOOSE BRAND ================= */}
      <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-950 text-[11px] font-black flex items-center justify-center shrink-0">
              2
            </span>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Choose Brand
            </label>
            <span className="text-[11px] text-slate-400">
              ({availableBrands.length} available)
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 sm:ml-auto">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-xs text-slate-400 hidden sm:inline">Sort:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as any)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-500 cursor-pointer"
              aria-label="Sort products"
            >
              <option value="popular">Most Popular</option>
              <option value="discount">Highest Discount %</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Dynamic Brand Selection Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {/* All Brands Pill */}
          <button
            onClick={() => setSelectedBrand(null)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              selectedBrand === null
                ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                : 'bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
            }`}
          >
            All Brands
          </button>

          {/* Contextual Brands for Selected Category */}
          {availableBrands.map(brand => {
            const isSelected = selectedBrand === brand;
            return (
              <button
                key={brand}
                onClick={() => setSelectedBrand(isSelected ? null : (brand as any))}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <span>{brand}</span>
                {isSelected && <Check className="w-3 h-3 text-white" />}
              </button>
            );
          })}

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block" />

          {/* Condition Grades */}
          {['Pristine A++', 'Excellent A'].map(cond => {
            const isSelected = selectedCondition === cond;
            return (
              <button
                key={cond}
                onClick={() => setSelectedCondition(isSelected ? null : (cond as any))}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                {cond}
              </button>
            );
          })}
        </div>

      </div>

    </div>
  );
};
