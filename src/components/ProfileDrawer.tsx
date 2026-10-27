import React, { useState } from 'react';
import { 
  X, 
  User, 
  MapPin, 
  Bell, 
  CreditCard, 
  Shield, 
  Globe, 
  Eye, 
  Lock, 
  HelpCircle, 
  Users, 
  LogOut, 
  ChevronRight, 
  ArrowLeft, 
  Pencil, 
  Package, 
  Check, 
  Plus, 
  Trash2, 
  Truck, 
  FileText, 
  ShieldCheck, 
  MessageCircle, 
  Copy, 
  Share2, 
  Phone,
  MoreHorizontal,
  Wrench
} from 'lucide-react';
import { useStore, UserAddress } from '../context/StoreContext';
import { useTheme } from '../context/ThemeContext';

type SubView = 
  | 'menu' 
  | 'edit-profile' 
  | 'address' 
  | 'orders' 
  | 'notification' 
  | 'payment' 
  | 'security' 
  | 'privacy' 
  | 'help' 
  | 'invite';

export const ProfileDrawer: React.FC = () => {
  const { 
    isProfileOpen, 
    setIsProfileOpen, 
    userProfile, 
    updateUserProfile, 
    savedAddresses, 
    addAddress, 
    removeAddress, 
    setDefaultAddress,
    logoutUser,
    openWhatsAppOrder,
    showToast
  } = useStore();

  const { theme, toggleTheme } = useTheme();

  const [currentView, setCurrentView] = useState<SubView>('menu');

  // Edit Profile Form State
  const [editName, setEditName] = useState(userProfile.name);
  const [editPhone, setEditPhone] = useState(userProfile.phone);
  const [editEmail, setEditEmail] = useState(userProfile.email);
  const [editAvatar, setEditAvatar] = useState(userProfile.avatar);

  // Add Address Form State
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddrName, setNewAddrName] = useState(userProfile.name);
  const [newAddrPhone, setNewAddrPhone] = useState(userProfile.phone);
  const [newAddrStreet, setNewAddrStreet] = useState('');
  const [newAddrCity, setNewAddrCity] = useState('Bengaluru');
  const [newAddrState, setNewAddrState] = useState('Karnataka');
  const [newAddrPin, setNewAddrPin] = useState('560001');
  const [newAddrLandmark, setNewAddrLandmark] = useState('');
  const [newAddrTag, setNewAddrTag] = useState<'Home' | 'Office' | 'Other'>('Home');
  const [newAddrIsDefault, setNewAddrIsDefault] = useState(false);

  // Notification toggles
  const [notifWhatsApp, setNotifWhatsApp] = useState(true);
  const [notifPromos, setNotifPromos] = useState(true);
  const [notifWarranty, setNotifWarranty] = useState(true);

  if (!isProfileOpen) return null;

  const handleClose = () => {
    setIsProfileOpen(false);
    setCurrentView('menu');
    setIsAddingAddress(false);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: editName.trim() || userProfile.name,
      phone: editPhone.trim() || userProfile.phone,
      email: editEmail.trim() || userProfile.email,
      avatar: editAvatar
    });
    setCurrentView('menu');
  };

  const handleCreateAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddrStreet || !newAddrPin) {
      showToast('Missing Fields', 'Please enter street address and pincode.', 'info');
      return;
    }
    addAddress({
      name: newAddrName,
      phone: newAddrPhone,
      street: newAddrStreet,
      city: newAddrCity,
      state: newAddrState,
      pincode: newAddrPin,
      landmark: newAddrLandmark,
      tag: newAddrTag,
      isDefault: newAddrIsDefault
    });
    setNewAddrStreet('');
    setNewAddrLandmark('');
    setIsAddingAddress(false);
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText('ANDREW2026');
    showToast('Code Copied!', 'Referral code ANDREW2026 copied to clipboard.', 'success');
  };

  const AVATAR_OPTIONS = [
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in flex items-end sm:items-stretch">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto max-w-full flex">
        <div className="w-full sm:w-screen sm:max-w-md bg-white dark:bg-[#0E111B] rounded-t-[36px] sm:rounded-none shadow-2xl border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-white/10 flex flex-col max-h-[92vh] sm:max-h-full animate-slide-up sm:animate-slide-left">
          
          {/* iOS Grab Bar (Mobile) */}
          <div className="sm:hidden pt-3 pb-1 flex justify-center">
            <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          </div>

          {/* Top Bar (Matching reference image: Logo/Back + "Profile" + Circle options) */}
          <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              {currentView === 'menu' ? (
                <>
                  {/* Brand Glyph */}
                  <div className="w-7 h-7 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-black text-xs">
                    L
                  </div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                    Profile
                  </h2>
                </>
              ) : (
                <button
                  onClick={() => setCurrentView('menu')}
                  className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-brand-600 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-base font-bold capitalize">
                    {currentView.replace('-', ' ')}
                  </span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => showToast('Account Settings', 'LUMEN Certified Account ID #LM-USER-8921', 'info')}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="More options"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>

              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
            
            {/* === MAIN PROFILE VIEW (Exact match to reference image) === */}
            {currentView === 'menu' && (
              <div className="space-y-6">
                
                {/* 1. Centered Avatar & Identity Section */}
                <div className="text-center pt-2">
                  <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28">
                    <img
                      src={userProfile.avatar}
                      alt={userProfile.name}
                      className="w-full h-full rounded-full object-cover shadow-apple-sm ring-4 ring-slate-100 dark:ring-slate-800"
                    />
                    <button
                      onClick={() => setCurrentView('edit-profile')}
                      className="absolute bottom-0 right-1 w-7 h-7 rounded-xl bg-slate-950 dark:bg-brand-600 text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform border-2 border-white dark:border-[#0E111B]"
                      title="Edit photo"
                      aria-label="Edit avatar"
                    >
                      <Pencil className="w-3.5 h-3.5 fill-white" />
                    </button>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
                    {userProfile.name}
                  </h3>
                  
                  <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {userProfile.phone}
                  </p>
                </div>

                {/* 2. Menu Items List (Matching Reference Image) */}
                <div className="space-y-0.5 pt-1">
                  
                  {/* Edit Profile */}
                  <button
                    onClick={() => {
                      setEditName(userProfile.name);
                      setEditPhone(userProfile.phone);
                      setEditEmail(userProfile.email);
                      setEditAvatar(userProfile.avatar);
                      setCurrentView('edit-profile');
                    }}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <User className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Edit Profile
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* Address */}
                  <button
                    onClick={() => setCurrentView('address')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <MapPin className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Address
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 font-medium">
                        {savedAddresses.length} Saved
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>

                  {/* My Orders */}
                  <button
                    onClick={() => setCurrentView('orders')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <Package className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        My Orders
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        1 In Transit
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>

                  {/* Notification */}
                  <button
                    onClick={() => setCurrentView('notification')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <Bell className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Notification
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* Payment */}
                  <button
                    onClick={() => setCurrentView('payment')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <CreditCard className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Payment
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        ₹{userProfile.credits.toLocaleString('en-IN')}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>

                  {/* Security */}
                  <button
                    onClick={() => setCurrentView('security')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <Shield className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Security
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* Language */}
                  <button
                    onClick={() => showToast('Language', 'Current language is English (US). More dialects coming soon.', 'info')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <Globe className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Language
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        English (US)
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>

                  {/* Dark Mode (Interactive Toggle Switch) */}
                  <div className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left">
                    <div className="flex items-center gap-3.5">
                      <Eye className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Dark Mode
                      </span>
                    </div>
                    <div
                      onClick={toggleTheme}
                      role="switch"
                      aria-checked={theme === 'dark'}
                      className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                        theme === 'dark' ? 'bg-slate-900 dark:bg-brand-600' : 'bg-slate-200'
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                          theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Privacy Policy */}
                  <button
                    onClick={() => setCurrentView('privacy')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <Lock className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Privacy Policy
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* Help Center */}
                  <button
                    onClick={() => setCurrentView('help')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <HelpCircle className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Help Center
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* Invite Friends */}
                  <button
                    onClick={() => setCurrentView('invite')}
                    className="w-full flex items-center justify-between py-3.5 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <Users className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        Invite Friends
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* Logout (Red colored row with Logout icon) */}
                  <button
                    onClick={() => {
                      logoutUser();
                      handleClose();
                    }}
                    className="w-full flex items-center gap-3.5 py-3.5 px-2 text-rose-500 hover:text-rose-600 rounded-2xl hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors text-left group pt-3"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-bold">Logout</span>
                  </button>

                </div>

              </div>
            )}

            {/* === SUBVIEW: EDIT PROFILE === */}
            {currentView === 'edit-profile' && (
              <form onSubmit={handleSaveProfile} className="space-y-4 animate-slide-up">
                <div className="text-center pb-2">
                  <div className="relative mx-auto w-24 h-24">
                    <img
                      src={editAvatar}
                      alt={editName}
                      className="w-full h-full rounded-full object-cover shadow-md"
                    />
                  </div>
                  <span className="text-xs text-slate-400 mt-2 block font-medium">Choose Avatar:</span>
                  <div className="flex justify-center gap-2 mt-2">
                    {AVATAR_OPTIONS.map((url, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setEditAvatar(url)}
                        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-transform ${
                          editAvatar === url ? 'border-brand-500 scale-110 shadow-sm' : 'border-slate-200 dark:border-slate-700 opacity-60'
                        }`}
                      >
                        <img src={url} alt="Option" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-slate-950 dark:bg-brand-600 text-white rounded-xl font-bold text-xs shadow-md transition-all active:scale-98"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentView('menu')}
                    className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-semibold text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* === SUBVIEW: ADDRESS === */}
            {currentView === 'address' && (
              <div className="space-y-4 animate-slide-up">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">
                    Your Saved Locations
                  </span>
                  {!isAddingAddress && (
                    <button
                      onClick={() => setIsAddingAddress(true)}
                      className="py-1.5 px-3 rounded-xl bg-slate-950 dark:bg-brand-600 text-white text-xs font-bold flex items-center gap-1 shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Address</span>
                    </button>
                  )}
                </div>

                {isAddingAddress && (
                  <form onSubmit={handleCreateAddress} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      New Delivery Address
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Street / Flat / House Address"
                      value={newAddrStreet}
                      onChange={(e) => setNewAddrStreet(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                    />
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <input
                        type="text"
                        required
                        placeholder="City"
                        value={newAddrCity}
                        onChange={(e) => setNewAddrCity(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Pincode"
                        value={newAddrPin}
                        onChange={(e) => setNewAddrPin(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div className="flex gap-2">
                      {(['Home', 'Office'] as const).map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setNewAddrTag(t)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold border ${newAddrTag === t ? 'bg-brand-600 text-white border-brand-600' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold">
                        Save
                      </button>
                      <button type="button" onClick={() => setIsAddingAddress(false)} className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-xs font-semibold rounded-xl">
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                <div className="space-y-3">
                  {savedAddresses.map(addr => (
                    <div
                      key={addr.id}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-[10px] font-extrabold uppercase text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {addr.tag}
                          </span>
                          {addr.isDefault && (
                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                              • Default
                            </span>
                          )}
                        </div>
                        {savedAddresses.length > 1 && (
                          <button onClick={() => removeAddress(addr.id)} className="text-slate-400 hover:text-rose-500">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {addr.name} ({addr.phone})
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {addr.street}, {addr.city}, {addr.state} - {addr.pincode}
                      </p>
                      {!addr.isDefault && (
                        <button
                          onClick={() => setDefaultAddress(addr.id)}
                          className="text-[11px] font-bold text-brand-600 dark:text-brand-400 hover:underline pt-1 block"
                        >
                          Make Default
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* === SUBVIEW: ORDERS === */}
            {currentView === 'orders' && (
              <div className="space-y-4 animate-slide-up">
                
                {/* Active Order Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#111420] border-2 border-emerald-500/40 shadow-apple-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Out for Delivery Today
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">#LM-92841</span>
                  </div>

                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80"
                      alt="MacBook Pro"
                      className="w-14 h-14 rounded-xl object-contain bg-slate-50 dark:bg-slate-900 p-1 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        MacBook Pro 16" (M3 Max / 36GB / 1TB)
                      </h4>
                      <p className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                        ₹2,39,999 • <span className="text-emerald-600 font-semibold">Pay on Delivery</span>
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <p className="font-semibold text-slate-700 dark:text-slate-300">
                      Courier: BlueDart Air • Delivery Partner: Rajesh K.
                    </p>
                    <p>Expected arrival: Today between 2:00 PM – 4:00 PM</p>
                  </div>

                  <button
                    onClick={() => openWhatsAppOrder('Track Order #LM-92841 MacBook Pro 16')}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Track Live on WhatsApp</span>
                  </button>
                </div>

                {/* Delivered Order 2 */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Delivered on Oct 24, 2026
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">#LM-84920</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    iPhone 15 Pro Max (256GB - Natural Titanium)
                  </h4>
                  <p className="text-xs font-mono text-slate-500">₹94,999 • Paid UPI</p>
                  <div className="pt-1 flex gap-2">
                    <button
                      onClick={() => showToast('Certificate Downloaded', '2-Year On-Site Warranty PDF saved.', 'success')}
                      className="py-1 px-2.5 rounded-lg bg-white dark:bg-slate-800 text-[11px] font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-1"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                      <span>2-Year Warranty</span>
                    </button>
                    <button
                      onClick={() => showToast('Report Card', 'Lab report card opened.', 'info')}
                      className="py-1 px-2.5 rounded-lg bg-white dark:bg-slate-800 text-[11px] font-bold border border-slate-200 dark:border-slate-700"
                    >
                      Lab Report
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* === SUBVIEW: NOTIFICATION === */}
            {currentView === 'notification' && (
              <div className="space-y-4 animate-slide-up text-xs">
                <p className="text-slate-500 dark:text-slate-400">
                  Manage how you receive order delivery alerts and price drop updates:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white">WhatsApp Order Updates</h5>
                      <p className="text-[11px] text-slate-500">Real-time courier dispatch & arrival pin</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifWhatsApp}
                      onChange={(e) => setNotifWhatsApp(e.target.checked)}
                      className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white">Flash Discounts & Inventory</h5>
                      <p className="text-[11px] text-slate-500">Alerts when rare M3 or ThinkPad models arrive</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifPromos}
                      onChange={(e) => setNotifPromos(e.target.checked)}
                      className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white">Warranty Reminders</h5>
                      <p className="text-[11px] text-slate-500">Complimentary 6-month lab checkup schedule</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifWarranty}
                      onChange={(e) => setNotifWarranty(e.target.checked)}
                      className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* === SUBVIEW: PAYMENT === */}
            {currentView === 'payment' && (
              <div className="space-y-4 animate-slide-up text-xs">
                {/* Credit balance card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    LUMEN Store Credits Available
                  </span>
                  <div className="text-2xl font-black font-mono text-emerald-400">
                    ₹{userProfile.credits.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Applicable automatically at checkout on all certified laptops and smartphones.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">
                    Supported Payment Modes
                  </span>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Cash on Delivery (Doorstep Inspection)
                    </span>
                    <span className="text-emerald-600 font-bold text-[11px]">Enabled</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      UPI (Google Pay, PhonePe, Paytm)
                    </span>
                    <span className="text-emerald-600 font-bold text-[11px]">Instant 0% Fee</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Credit / Debit Cards (Visa / Mastercard / Amex)
                    </span>
                    <span className="text-slate-400 text-[11px]">256-Bit SSL</span>
                  </div>
                </div>
              </div>
            )}

            {/* === SUBVIEW: SECURITY === */}
            {currentView === 'security' && (
              <div className="space-y-4 animate-slide-up text-xs">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Your account is protected with Two-Factor OTP authentication.</span>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => showToast('Security Alert', 'OTP authentication is permanently active for your phone number.', 'info')}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Two-Factor Authentication (WhatsApp / SMS)
                    </span>
                    <span className="text-emerald-600 font-bold text-[11px]">Active</span>
                  </button>

                  <button
                    onClick={() => showToast('Password', 'Password reset link sent to your registered email.', 'success')}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Change Login Password
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </div>
            )}

            {/* === SUBVIEW: PRIVACY POLICY === */}
            {currentView === 'privacy' && (
              <div className="space-y-3 animate-slide-up text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  LUMEN Data Protection Commitment
                </h4>
                <p>
                  1. <strong>Device Sanitization:</strong> Every traded-in or sold laptop/phone undergoes DoD 5220.22-M military grade 3-pass data wipe before certified resale.
                </p>
                <p>
                  2. <strong>Personal Information:</strong> We never share your phone number or shipping addresses with unverified third parties.
                </p>
                <p>
                  3. <strong>Payment Integrity:</strong> Payments are processed via PCI-DSS Level 1 encrypted banking gateways.
                </p>
              </div>
            )}

            {/* === SUBVIEW: HELP CENTER === */}
            {currentView === 'help' && (
              <div className="space-y-4 animate-slide-up text-xs">
                <p className="text-slate-600 dark:text-slate-300">
                  Need assistance with an active order, warranty inspection, or technical diagnostic?
                </p>
                
                <button
                  onClick={() => openWhatsAppOrder()}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat with Senior Hardware Concierge</span>
                </button>

                <a
                  href="tel:+918005558899"
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-500" />
                  <span>Toll-Free Helpline: 1800-555-8899</span>
                </a>
              </div>
            )}

            {/* === SUBVIEW: INVITE FRIENDS === */}
            {currentView === 'invite' && (
              <div className="space-y-4 animate-slide-up text-xs text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Give ₹1,000, Get ₹1,000
                </h4>
                <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                  Invite a friend to purchase their next certified MacBook, iPhone, or ThinkPad. They get ₹1,000 off and you get ₹1,000 store credits!
                </p>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span className="font-mono font-bold text-slate-900 dark:text-white tracking-widest text-sm">
                    ANDREW2026
                  </span>
                  <button
                    onClick={copyReferralCode}
                    className="p-1.5 rounded-lg text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40"
                    title="Copy code"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={copyReferralCode}
                  className="w-full py-3 bg-slate-950 dark:bg-brand-600 text-white rounded-xl font-bold shadow-md"
                >
                  Copy Referral Link
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
