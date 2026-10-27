import React from 'react';
import { 
  ShieldCheck, 
  RotateCcw, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Microscope, 
  Sparkles, 
  PackageCheck,
  Cpu
} from 'lucide-react';

export const TrustFeatures: React.FC = () => {
  const PILLARS = [
    {
      icon: Award,
      title: '2-Year On-Site Warranty',
      subtitle: 'Complete Hardware Coverage',
      desc: 'Pan-India technician service covering motherboard, display, and components. If an issue arises, we repair or replace at zero cost.',
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      icon: RotateCcw,
      title: 'Pay After Satisfaction',
      subtitle: '14-Day No-Questions Return',
      desc: 'Inspect and test your laptop or iPhone upon arrival. Make payment only when fully satisfied. 14 days to test in your real workflow.',
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Microscope,
      title: '45-Point Lab Inspection',
      subtitle: 'Strict Diagnostic Standards',
      desc: 'Every single device passes rigorous thermal benchmarking, pixel scanning, and battery cycle analysis by certified engineers.',
      color: 'text-brand-500 bg-brand-500/10 border-brand-500/20'
    },
    {
      icon: MapPin,
      title: '90+ Experience Hubs',
      subtitle: 'Pan-India Service Reach',
      desc: 'Servicing over 18,000 pin codes across India with local service engineers and express replacement transit hubs.',
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20'
    }
  ];

  const JOURNEY_STEPS = [
    {
      step: '01',
      title: 'Source Verification',
      desc: 'Procured exclusively from verified corporate enterprise refreshes and direct tier-1 lease returns.'
    },
    {
      step: '02',
      title: '45-Point Lab Diagnostics',
      desc: 'Component-level thermal stress testing, battery health certification, and logic board signal analysis.'
    },
    {
      step: '03',
      title: 'Sanitization & Restoration',
      desc: 'Ultrasonic thermal clean, new thermal paste applied, hospital-grade UV-C chamber sterilization.'
    },
    {
      step: '04',
      title: 'Certified Packaging',
      desc: 'Sealed in biodegradable shock-cushion boxes with quality report card, original charger, and warranty seal.'
    }
  ];

  return (
    <section id="guarantee" className="py-14 sm:py-20 border-b border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-[#07080C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: 4 Key Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold mb-3 border border-brand-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              The LUMEN Standard of Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Discerning Buyers Choose LUMEN
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              We eliminated the risk from pre-owned electronics with industry-defining warranties and consumer protections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-6 bg-slate-50 dark:bg-[#10131E] border border-slate-200/80 dark:border-white/[0.08] hover:shadow-apple-md transition-all duration-300 space-y-3"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      {p.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: 4-Step Certified Process Breakdown */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white dark:bg-[#10131E] border border-slate-800 dark:border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              How It Works
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 4-Step LUMEN Certification Protocol
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Every device that enters our laboratory undergoes an uncompromising sequence before earning the LUMEN Certified seal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOURNEY_STEPS.map((step, idx) => (
              <div key={idx} className="relative space-y-2 border-l-2 border-brand-500/40 pl-4 lg:pl-0 lg:border-l-0 lg:border-t-2 lg:border-brand-500/40 lg:pt-4">
                <span className="text-2xl font-black font-mono text-brand-400 block">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
