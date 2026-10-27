import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ToastMessage } from '../types';
import { PRODUCTS } from '../data/products';

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface UserAddress {
  id: string;
  tag: 'Home' | 'Office' | 'Other';
  isDefault: boolean;
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  memberTier: string;
  credits: number;
}

interface StoreContextType {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, options?: { ram?: string; storage?: string; color?: string; extendedWarranty?: boolean }) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Modes & Filtering
  activeMode: 'buy' | 'trade-in';
  setActiveMode: (mode: 'buy' | 'trade-in') => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
  selectedCondition: string | null;
  setSelectedCondition: (condition: string | null) => void;
  selectedSort: 'popular' | 'price-low' | 'price-high' | 'discount';
  setSelectedSort: (sort: 'popular' | 'price-low' | 'price-high' | 'discount') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Modals & Drawers
  selectedProductForModal: Product | null;
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
  userProfile: UserProfile;
  updateUserProfile: (updated: Partial<UserProfile>) => void;
  savedAddresses: UserAddress[];
  addAddress: (address: Omit<UserAddress, 'id'>) => void;
  removeAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;

  // Coupon
  appliedCoupon: string | null;
  couponDiscount: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;

  // User Auth
  user: User | null;
  loginDemoUser: () => void;
  logoutUser: () => void;

  // Senior / Bada Simple Mode (Accessibility for 50+)
  isSeniorMode: boolean;
  toggleSeniorMode: () => void;
  openWhatsAppOrder: (productTitle?: string, price?: number) => void;

  // Toasts
  toasts: ToastMessage[];
  showToast: (title: string, description?: string, type?: 'success' | 'info' | 'cart') => void;
  dismissToast: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lumen_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'initial-demo-cart-item',
          product: PRODUCTS[1], // Dell Latitude 7400
          quantity: 1,
          selectedRam: '16GB',
          selectedStorage: '512GB NVMe',
          selectedColor: 'Titanium Gray',
          extendedWarranty: true
        }
      ];
    } catch {
      return [];
    }
  });

  // 2. Wishlist State
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lumen_wishlist');
      return saved ? JSON.parse(saved) : ['lumen-mbp-16-m3', 'lumen-iphone-15-pro-max'];
    } catch {
      return [];
    }
  });

  // 3. Senior / Bada Mode State (Defaults to true or saved preference)
  const [isSeniorMode, setIsSeniorMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('lumen_senior_mode');
      return saved !== null ? JSON.parse(saved) : true; // Default ON for great accessibility
    } catch {
      return true;
    }
  });

  // 4. UI and Filter State
  const [activeMode, setActiveMode] = useState<'buy' | 'trade-in'>('buy');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<'popular' | 'price-low' | 'price-high' | 'discount'>('popular');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 5. Modals State
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  // 6. User Profile & Addresses State
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('lumen_user_profile');
      return saved ? JSON.parse(saved) : {
        name: 'Andrew Ainsley',
        phone: '+1 111 467 378 399',
        email: 'andrew.ainsley@lumendigital.io',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
        memberTier: 'LUMEN Titanium Member',
        credits: 4200
      };
    } catch {
      return {
        name: 'Andrew Ainsley',
        phone: '+1 111 467 378 399',
        email: 'andrew.ainsley@lumendigital.io',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
        memberTier: 'LUMEN Titanium Member',
        credits: 4200
      };
    }
  });

  const [savedAddresses, setSavedAddresses] = useState<UserAddress[]>(() => {
    try {
      const saved = localStorage.getItem('lumen_saved_addresses');
      return saved ? JSON.parse(saved) : [
        {
          id: 'addr-1',
          tag: 'Home',
          isDefault: true,
          name: 'Aditya Varma',
          phone: '+91 98765 43210',
          street: 'Flat 402, Tower B, Oakwood Residency, 100ft Road, Indiranagar',
          city: 'Bengaluru',
          state: 'Karnataka',
          pincode: '560038',
          landmark: 'Opposite Metro Pillar 84'
        },
        {
          id: 'addr-2',
          tag: 'Office',
          isDefault: false,
          name: 'Aditya Varma (Work)',
          phone: '+91 98765 43210',
          street: 'Level 4, Building 3, Tech Cloud Campus, Outer Ring Road, Bellandur',
          city: 'Bengaluru',
          state: 'Karnataka',
          pincode: '560103',
          landmark: 'Near Ecospace Gate 2'
        }
      ];
    } catch {
      return [];
    }
  });

  // 7. Coupon State
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('LUMEN2026');
  const [couponDiscount, setCouponDiscount] = useState<number>(0.10);

  // 8. User Auth State
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('lumen_user');
      return saved ? JSON.parse(saved) : {
        name: 'Aditya Varma',
        email: 'aditya.varma@lumendigital.io',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=180&q=80'
      };
    } catch {
      return null;
    }
  });

  // 8. Toast State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // LocalStorage sync
  useEffect(() => {
    localStorage.setItem('lumen_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('lumen_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('lumen_senior_mode', JSON.stringify(isSeniorMode));
    if (isSeniorMode) {
      document.documentElement.classList.add('senior-friendly');
    } else {
      document.documentElement.classList.remove('senior-friendly');
    }
  }, [isSeniorMode]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('lumen_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('lumen_user');
    }
  }, [user]);

  const toggleSeniorMode = () => {
    setIsSeniorMode(prev => !prev);
  };

  // WhatsApp Order helper (Tailored for Indian 50+ users who want to message directly)
  const openWhatsAppOrder = (productTitle?: string, price?: number) => {
    const text = productTitle 
      ? `Namaste LUMEN Team! Mujhe ye laptop/phone order karna hai:\n*${productTitle}*\nPrice: ₹${price?.toLocaleString('en-IN')}\n\nKripya Cash on Delivery pe book kar dein. Mera address lene ke liye call karein.`
      : `Namaste LUMEN Team! Mujhe certified laptop/phone khareedne ke liye salah chahiye. Kripya meri madad karein.`;
    
    const url = `https://wa.me/917983990134?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    showToast('Opening WhatsApp...', 'Connecting you to our senior tech advisor on WhatsApp.', 'info');
  };

  const showToast = (title: string, description?: string, type: 'success' | 'info' | 'cart' = 'success') => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, title, description, type };
    setToasts(prev => [...prev.slice(-3), newToast]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3800);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart operations
  const addToCart = (product: Product, options?: { ram?: string; storage?: string; color?: string; extendedWarranty?: boolean }) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `${product.id}-${Date.now()}`,
          product,
          quantity: 1,
          selectedRam: options?.ram || product.specs.ram,
          selectedStorage: options?.storage || product.specs.storage,
          selectedColor: options?.color || product.specs.color,
          extendedWarranty: options?.extendedWarranty ?? false
        }
      ];
    });

    showToast(
      'Bag Me Add Ho Gaya!',
      `${product.title.slice(0, 32)}... has been added to your shopping bag.`,
      'cart'
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
    showToast('Item Removed', 'The selected item was removed from your bag.', 'info');
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart(prev => 
      prev.map(item => {
        if (item.id === cartItemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const isAlready = prev.includes(productId);
      const product = PRODUCTS.find(p => p.id === productId);
      const name = product ? product.title.slice(0, 24) : 'Product';

      if (isAlready) {
        showToast('Saved se Hataya', `${name}... was removed from your saved items.`, 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved Ho Gaya!', `${name}... was added to your saved items.`, 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartTotal = cart.reduce((sum, item) => {
    let itemPrice = item.product.price;
    if (item.extendedWarranty) {
      itemPrice += 1999;
    }
    return sum + (itemPrice * item.quantity);
  }, 0);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'LUMEN2026' || clean === 'APPLE2026' || clean === 'LAPTOPEX') {
      setAppliedCoupon(clean);
      setCouponDiscount(0.10);
      showToast('10% Discount Lag Gaya!', '10% Discount has been deducted from your order.', 'success');
      return true;
    } else {
      showToast('Invalid Coupon Code', 'Try using demo code "LUMEN2026" for 10% off.', 'info');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    showToast('Promo Code Removed', 'Discount removed.', 'info');
  };

  const loginDemoUser = () => {
    const demoUser = {
      name: 'Aditya Varma',
      email: 'aditya.varma@lumendigital.io',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    };
    setUser(demoUser);
    setIsAuthOpen(false);
    showToast('Welcome, Aditya!', 'Signed in successfully to your LUMEN account.', 'success');
  };

  const logoutUser = () => {
    setUser(null);
    showToast('Signed Out', 'You have been signed out of your account.', 'info');
  };

  const updateUserProfile = (updated: Partial<UserProfile>) => {
    setUserProfile(prev => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem('lumen_user_profile', JSON.stringify(next));
      } catch {}
      return next;
    });
    showToast('Profile Updated', 'Your profile details have been updated.', 'success');
  };

  const addAddress = (addressData: Omit<UserAddress, 'id'>) => {
    const newAddr: UserAddress = {
      ...addressData,
      id: `addr-${Date.now()}`
    };
    setSavedAddresses(prev => {
      const updated = newAddr.isDefault 
        ? prev.map(a => ({ ...a, isDefault: false })).concat(newAddr)
        : [...prev, newAddr];
      try {
        localStorage.setItem('lumen_saved_addresses', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast('Address Added', 'New delivery address has been saved.', 'success');
  };

  const removeAddress = (id: string) => {
    setSavedAddresses(prev => {
      const updated = prev.filter(a => a.id !== id);
      try {
        localStorage.setItem('lumen_saved_addresses', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast('Address Removed', 'Address was removed from your profile.', 'info');
  };

  const setDefaultAddress = (id: string) => {
    setSavedAddresses(prev => {
      const updated = prev.map(a => ({ ...a, isDefault: a.id === id }));
      try {
        localStorage.setItem('lumen_saved_addresses', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast('Default Address Set', 'Your primary delivery address was updated.', 'success');
  };

  const openProductModal = (product: Product) => {
    setSelectedProductForModal(product);
  };

  const closeProductModal = () => {
    setSelectedProductForModal(null);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartItemCount,
        wishlist,
        toggleWishlist,
        isInWishlist,
        activeMode,
        setActiveMode,
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        selectedCondition,
        setSelectedCondition,
        selectedSort,
        setSelectedSort,
        searchQuery,
        setSearchQuery,
        selectedProductForModal,
        openProductModal,
        closeProductModal,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAuthOpen,
        setIsAuthOpen,
        isProfileOpen,
        setIsProfileOpen,
        userProfile,
        updateUserProfile,
        savedAddresses,
        addAddress,
        removeAddress,
        setDefaultAddress,
        appliedCoupon,
        couponDiscount,
        applyCoupon,
        removeCoupon,
        user,
        loginDemoUser,
        logoutUser,
        isSeniorMode,
        toggleSeniorMode,
        openWhatsAppOrder,
        toasts,
        showToast,
        dismissToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
