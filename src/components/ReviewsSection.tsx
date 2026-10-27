import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, MessageSquare, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState(TESTIMONIALS);

  const handleHelpful = (id: string) => {
    setReviews(prev => 
      prev.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r)
    );
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 border-b border-slate-200/80 dark:border-white/[0.06] bg-slate-50 dark:bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Aggregate Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold mb-3 border border-amber-500/20">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Real Customer Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trusted by 50,000+ Professionals & Students
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Every review represents an authentic verified purchase certified through our doorstep delivery protocol.
            </p>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#12151E] border border-slate-200 dark:border-white/10 shadow-sm shrink-0">
            <div className="text-center">
              <span className="text-3xl font-black text-slate-900 dark:text-white font-mono block">
                4.95
              </span>
              <div className="flex items-center gap-0.5 text-amber-400 mt-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="text-xs text-slate-500 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-white block font-bold">1,420+ Verified Reviews</strong>
              <span>99.4% Recommendation Rate</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(review => (
            <article
              key={review.id}
              className="rounded-3xl p-6 bg-white dark:bg-[#10131E] border border-slate-200/80 dark:border-white/[0.08] shadow-apple-sm hover:shadow-apple-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Author Info & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {review.author}
                      </h4>
                      <span className="text-[11px] text-slate-400 block">
                        {review.location} • {review.tag}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-[11px] text-slate-400 ml-1 font-mono">
                    {review.date}
                  </span>
                </div>

                {/* Title & Comment */}
                <h5 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  "{review.title}"
                </h5>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {review.comment}
                </p>
              </div>

              {/* Footer: Purchased Product Tag & Helpful Counter */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono truncate max-w-[170px]" title={review.productTitle}>
                  {review.productTitle}
                </span>

                <button
                  onClick={() => handleHelpful(review.id)}
                  className="flex items-center gap-1 text-slate-400 hover:text-brand-500 transition-colors py-1 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span className="text-[11px]">{review.helpfulCount}</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
