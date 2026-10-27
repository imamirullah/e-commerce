import React, { useState } from 'react';
import { MessageCircle, Phone, X, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const FloatingWhatsAppHelp: React.FC = () => {
  const { openWhatsAppOrder } = useStore();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-24 lg:bottom-6 right-4 z-40 flex flex-col items-end pointer-events-auto">
      
      {/* Expanded Quick Help Card */}
      {isExpanded && (
        <div className="mb-3 w-80 rounded-3xl bg-white dark:bg-[#0E111B] p-5 shadow-2xl border border-slate-200 dark:border-white/10 animate-slide-up text-left space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                Live Hardware Concierge
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Need guidance choosing between an M3 MacBook, ThinkPad, or iPhone? Chat directly with our certified hardware engineers for real-time recommendations.
          </p>

          <div className="space-y-2 pt-1">
            <button
              onClick={() => {
                openWhatsAppOrder();
                setIsExpanded(false);
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </button>

            <a
              href="tel:+918005558899"
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span>Toll-Free Call: 1800-555-8899</span>
            </a>
          </div>

          <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>2-Year Comprehensive On-Site Warranty</span>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-apple-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105 active:scale-95 border border-white/20"
        title="Live Tech Concierge"
        aria-label="Order on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-emerald-600" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-extrabold leading-none">
            Live Hardware Help
          </span>
          <span className="text-[9px] text-emerald-100 font-medium">
            2-Year Free Warranty
          </span>
        </div>
      </button>

    </div>
  );
};
