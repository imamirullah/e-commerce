import React, { useState } from 'react';
import { X, Lock, Mail, User as UserIcon, Sparkles, CheckCircle2, ShieldCheck, LogOut } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AuthModal: React.FC = () => {
  const { isAuthOpen, setIsAuthOpen, user, loginDemoUser, logoutUser } = useStore();
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginDemoUser();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={() => setIsAuthOpen(false)} 
      />

      <div className="relative w-full max-w-md bg-white dark:bg-[#0E111B] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-10 animate-slide-up p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* Logged In View */
          <div className="text-center py-4 space-y-5">
            <div className="relative w-20 h-20 mx-auto">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-full h-full rounded-full object-cover ring-4 ring-brand-500 shadow-md"
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {user.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                {user.email}
              </p>
              <span className="inline-flex items-center gap-1 mt-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" />
                LUMEN Premier Member
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Active 2-Year Warranties:</span>
                <strong className="text-slate-900 dark:text-white">2 Devices</strong>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Available Store Credit:</span>
                <strong className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">₹4,200</strong>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Lifetime CO₂ Saved:</span>
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold">475 kg</strong>
              </div>
            </div>

            <button
              onClick={() => {
                logoutUser();
                setIsAuthOpen(false);
              }}
              className="w-full py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:hover:bg-rose-950/50 dark:text-rose-400 text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          /* Sign In / Sign Up Form */
          <div className="space-y-6">
            
            {/* Header */}
            <div className="text-center">
              <div className="w-10 h-10 rounded-2xl bg-brand-600/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {tab === 'signin' ? 'Welcome Back' : 'Create an Account'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Access warranty certificates, track orders, and manage trade-in valuations.
              </p>
            </div>

            {/* Quick Demo Autofill Button */}
            <button
              onClick={loginDemoUser}
              className="w-full py-2.5 px-4 rounded-2xl bg-brand-50 hover:bg-brand-100 text-brand-700 dark:bg-brand-950/40 dark:hover:bg-brand-900/50 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>1-Click Demo Login (Pre-filled Persona)</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              <span>or continue with email</span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl text-xs font-bold">
              <button
                onClick={() => setTab('signin')}
                className={`py-2 rounded-lg transition-all ${
                  tab === 'signin'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setTab('signup')}
                className={`py-2 rounded-lg transition-all ${
                  tab === 'signup'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  <a href="#" className="text-[11px] text-brand-600 dark:text-brand-400 hover:underline">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white text-xs font-bold shadow-md transition-all active:scale-98"
              >
                {tab === 'signin' ? 'Sign In to Account' : 'Create Free Account'}
              </button>
            </form>

            <p className="text-[10px] text-center text-slate-400">
              By continuing, you agree to LUMEN’s Terms of Service and Privacy Policy.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};
