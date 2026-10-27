import React from 'react';
import { CheckCircle2, Info, ShoppingBag, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Toast: React.FC = () => {
  const { toasts, dismissToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none w-full max-w-sm px-4">
      {toasts.map(toast => {
        let Icon = CheckCircle2;
        let iconColor = 'text-emerald-500';

        if (toast.type === 'cart') {
          Icon = ShoppingBag;
          iconColor = 'text-brand-500';
        } else if (toast.type === 'info') {
          Icon = Info;
          iconColor = 'text-blue-500';
        }

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950/90 dark:bg-[#12151E]/95 text-white backdrop-blur-xl border border-white/10 shadow-2xl animate-slide-up"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} />
              <div className="min-w-0">
                <h5 className="text-xs font-bold leading-tight truncate">
                  {toast.title}
                </h5>
                {toast.description && (
                  <p className="text-[11px] text-slate-300 truncate mt-0.5">
                    {toast.description}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={() => dismissToast(toast.id)}
              className="p-1 rounded-full text-slate-400 hover:text-white transition-colors shrink-0"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
