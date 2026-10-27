import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-14 sm:py-20 border-b border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-[#07080C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold mb-3 border border-brand-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Everything you need to know about our refurbishment standards, warranties, and doorstep trade-ins.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#10131E] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-brand-600 dark:text-brand-400 font-bold bg-brand-500/10 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs space-y-2">
          <p className="text-slate-600 dark:text-slate-300">
            Have a custom configuration or enterprise bulk order question?
          </p>
          <div className="flex items-center justify-center gap-3 font-semibold text-brand-600 dark:text-brand-400">
            <a href="mailto:support@lumentech.in" className="hover:underline">
              support@lumentech.in
            </a>
            <span>•</span>
            <a href="tel:+918005558899" className="hover:underline">
              +91 (800) 555-8899 (Mon–Sat 9AM–8PM)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
