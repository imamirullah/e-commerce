import React, { useState } from 'react';
import { 
  ArrowLeftRight, 
  Smartphone, 
  Laptop, 
  ShieldCheck, 
  Truck, 
  Banknote, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

type DeviceCategory = 'smartphone' | 'laptop';
type ConditionType = 'Like New' | 'Good' | 'Fair';

interface ModelOption {
  id: string;
  name: string;
  baseValuation: number;
}

const DEVICE_MODELS: Record<DeviceCategory, Record<string, ModelOption[]>> = {
  smartphone: {
    Apple: [
      { id: 'ip-14-pro', name: 'iPhone 14 Pro (128GB)', baseValuation: 52000 },
      { id: 'ip-13', name: 'iPhone 13 (128GB)', baseValuation: 32000 },
      { id: 'ip-12', name: 'iPhone 12 (64GB)', baseValuation: 21500 },
      { id: 'ip-11', name: 'iPhone 11 (64GB)', baseValuation: 14000 },
    ],
    Samsung: [
      { id: 's-23-ultra', name: 'Galaxy S23 Ultra (256GB)', baseValuation: 48000 },
      { id: 's-22', name: 'Galaxy S22 5G (128GB)', baseValuation: 23000 },
      { id: 'z-fold-4', name: 'Galaxy Z Fold 4 (256GB)', baseValuation: 42000 },
    ],
    OnePlus: [
      { id: 'op-11', name: 'OnePlus 11 5G (128GB)', baseValuation: 26000 },
      { id: 'op-10-pro', name: 'OnePlus 10 Pro (128GB)', baseValuation: 19500 },
    ]
  },
  laptop: {
    Apple: [
      { id: 'mb-air-m1', name: 'MacBook Air M1 (8GB / 256GB)', baseValuation: 42000 },
      { id: 'mb-air-m2', name: 'MacBook Air M2 (8GB / 256GB)', baseValuation: 56000 },
      { id: 'mb-pro-14-m1', name: 'MacBook Pro 14" M1 Pro (16GB / 512GB)', baseValuation: 78000 },
    ],
    Dell: [
      { id: 'dell-xps-13', name: 'Dell XPS 13 (i7 11th Gen / 16GB)', baseValuation: 34000 },
      { id: 'dell-insp-15', name: 'Dell Inspiron 15 (i5 11th Gen / 8GB)', baseValuation: 18500 },
    ],
    Lenovo: [
      { id: 'len-t490', name: 'ThinkPad T490 (i5 8th Gen / 16GB)', baseValuation: 17000 },
      { id: 'len-t14-g1', name: 'ThinkPad T14 Gen 1 (i7 10th Gen)', baseValuation: 25000 },
    ],
    HP: [
      { id: 'hp-pav-15', name: 'HP Pavilion 15 (Ryzen 5 / 8GB)', baseValuation: 19000 },
      { id: 'hp-envy-13', name: 'HP Envy 13 x360 (i7 11th Gen)', baseValuation: 29000 },
    ]
  }
};

export const TradeInCalculator: React.FC = () => {
  const { showToast } = useStore();
  
  const [category, setCategory] = useState<DeviceCategory>('smartphone');
  const [selectedBrand, setSelectedBrand] = useState<string>('Apple');
  const [selectedModelId, setSelectedModelId] = useState<string>('ip-14-pro');
  const [condition, setCondition] = useState<ConditionType>('Like New');
  const [payoutMethod, setPayoutMethod] = useState<'cash' | 'credit'>('credit');
  const [isLocked, setIsLocked] = useState(false);

  // Available brands for current category
  const categoryModels = DEVICE_MODELS[category];
  const availableBrands = Object.keys(categoryModels);

  // Available models for current brand
  const currentModels: ModelOption[] = categoryModels[selectedBrand] || [];

  // Active selected model
  const activeModel = currentModels.find((m: ModelOption) => m.id === selectedModelId) || currentModels[0];

  // Valuation calculation
  const conditionMultipliers: Record<ConditionType, number> = {
    'Like New': 1.0,
    'Good': 0.85,
    'Fair': 0.68,
  };

  const basePrice = activeModel ? activeModel.baseValuation : 30000;
  const calculatedValue = Math.round(basePrice * conditionMultipliers[condition]);
  const storeCreditBonus = Math.round(calculatedValue * 1.10); // 10% extra credit
  const finalPayout = payoutMethod === 'credit' ? storeCreditBonus : calculatedValue;

  const handleLockQuote = () => {
    setIsLocked(true);
    showToast(
      'Price Quote Locked!',
      `Valuation of ₹${finalPayout.toLocaleString('en-IN')} locked for 7 days with free doorstep inspection.`,
      'success'
    );
  };

  return (
    <section id="trade-in" className="py-12 sm:py-16 bg-slate-100/60 dark:bg-[#0B0D14] border-b border-slate-200/80 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-3 border border-emerald-500/20">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Instant Guaranteed Buyback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Turn Your Old Tech Into Instant Cash
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Get an instant valuation in 60 seconds. Our technician inspects your device at your doorstep and pays you immediately.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 glass-panel-light dark:glass-panel-dark shadow-apple-lg border border-slate-200/80 dark:border-white/10">
          
          {/* Step 1: Device Category Tabs */}
          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Step 1: Choose Device Category
            </label>
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              {[
                { id: 'laptop', label: 'Laptop (Mac & Windows)', icon: Laptop },
                { id: 'smartphone', label: 'Smartphone (iOS & Android)', icon: Smartphone },
              ].map(item => {
                const Icon = item.icon;
                const isSelected = category === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      const newCat = item.id as DeviceCategory;
                      setCategory(newCat);
                      const newBrands = Object.keys(DEVICE_MODELS[newCat]);
                      setSelectedBrand(newBrands[0]);
                      const newMods = DEVICE_MODELS[newCat][newBrands[0]];
                      setSelectedModelId(newMods[0]?.id || '');
                    }}
                    className={`flex items-center justify-center gap-2 p-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-brand-600 dark:border-brand-500 shadow-sm'
                        : 'bg-white/60 hover:bg-white text-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Brand & Model Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Brand
              </label>
              <div className="flex flex-wrap gap-2">
                {availableBrands.map(b => (
                  <button
                    key={b}
                    onClick={() => {
                      setSelectedBrand(b);
                      const newMods = categoryModels[b] || [];
                      setSelectedModelId(newMods[0]?.id || '');
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedBrand === b
                        ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Exact Model
              </label>
              <select
                value={selectedModelId}
                onChange={(e) => setSelectedModelId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm font-medium rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                {currentModels.map((m: ModelOption) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Physical Condition */}
          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Step 2: Assess Condition
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { 
                  grade: 'Like New' as const, 
                  desc: 'Zero scratches or dents. Screen is flawless. 100% original hardware.' 
                },
                { 
                  grade: 'Good' as const, 
                  desc: 'Minor hairline scratches from normal usage. No cracks or screen damage.' 
                },
                { 
                  grade: 'Fair' as const, 
                  desc: 'Visible scratches or minor edge dents. Fully functional display & cameras.' 
                }
              ].map(c => (
                <button
                  key={c.grade}
                  onClick={() => setCondition(c.grade)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    condition === c.grade
                      ? 'bg-brand-500/10 border-brand-500 text-slate-900 dark:text-white ring-1 ring-brand-500'
                      : 'bg-white/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">{c.grade}</span>
                    {condition === c.grade && <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {c.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Valuation Output Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white dark:from-[#12151E] dark:to-[#171B27] border border-slate-800 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
              
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Estimated Valuation Quote
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    ₹{finalPayout.toLocaleString('en-IN')}
                  </span>
                  {payoutMethod === 'credit' && (
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-semibold border border-emerald-500/30">
                      Includes +10% LUMEN Credit Bonus
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Device: {activeModel ? activeModel.name : ''} • Condition: {condition}
                </p>
              </div>

              {/* Payout Method Toggle & Lock In Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <div className="flex p-1 bg-slate-800/80 rounded-xl border border-slate-700/60 w-full sm:w-auto">
                  <button
                    onClick={() => setPayoutMethod('credit')}
                    className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      payoutMethod === 'credit' ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Store Credit (+10%)
                  </button>
                  <button
                    onClick={() => setPayoutMethod('cash')}
                    className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      payoutMethod === 'cash' ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Instant Cash / UPI
                  </button>
                </div>

                <button
                  onClick={handleLockQuote}
                  disabled={isLocked}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 ${
                    isLocked 
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold'
                  }`}
                >
                  {isLocked ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Quote Locked!</span>
                    </>
                  ) : (
                    <>
                      <span>Lock In Price</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Micro Highlights strip */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-brand-400" />
                <span>Free doorstep pickup in 24 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant payment before leaving your door</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                <span>Certified data wiping certificate provided</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
