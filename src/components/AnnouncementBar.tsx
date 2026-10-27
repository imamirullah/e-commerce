import React, { useState } from 'react';
import { ShieldCheck, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const [isCityOpen, setIsCityOpen] = useState(false);

  const CITIES = ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata'];

  return (
    <div className="bg-slate-950 text-white text-xs font-medium px-3 sm:px-4 py-2 border-b border-slate-800 dark:bg-[#040508] dark:border-slate-800/80 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Value & Assurance Ticker */}
        <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap text-center">
          <span className="inline-flex items-center gap-1 bg-brand-500/20 text-brand-300 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border border-brand-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span>2-YEAR COMPREHENSIVE ON-SITE WARRANTY</span>
          </span>

          <span className="hidden md:inline text-slate-400 text-[11px]">
            • 45-Point Lab Diagnostics • Free Inspected Doorstep Delivery
          </span>
        </div>

        {/* Right: Delivery City Selector */}
        <div className="hidden sm:flex items-center justify-end gap-2 text-slate-300">
          <div className="relative shrink-0">
            <button
              onClick={() => setIsCityOpen(!isCityOpen)}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full border border-white/10 text-[11px]"
              aria-label="Select delivery city"
            >
              <MapPin className="w-3 h-3 text-brand-400 shrink-0" />
              <span>Deliver to: <strong className="text-white font-semibold">{selectedCity}</strong></span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isCityOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCityOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsCityOpen(false)} 
                />
                <div className="absolute right-0 mt-1.5 w-44 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-1 z-50 text-slate-200 backdrop-blur-md">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800">
                    Select Delivery City
                  </div>
                  {CITIES.map(city => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-brand-600 hover:text-white transition-colors flex items-center justify-between ${
                        selectedCity === city ? 'font-semibold text-brand-400 bg-brand-500/10' : ''
                      }`}
                    >
                      <span>{city}</span>
                      {selectedCity === city && <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
