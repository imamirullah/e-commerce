import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  Truck, 
  CheckCircle2,
  MessageCircle,
  Phone
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    cartTotal, 
    appliedCoupon, 
    couponDiscount, 
    applyCoupon, 
    removeCoupon,
    showToast,
    openWhatsAppOrder
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const discountAmount = Math.round(cartTotal * couponDiscount);
  const finalPayable = cartTotal - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  const handleSimulateCheckout = (paymentMethod: 'COD' | 'ONLINE') => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      clearCart();
      showToast(
        'Order Confirmed!', 
        `Your order #LM-84920 has been placed. Our courier partner will call before doorstep delivery.`, 
        'success'
      );
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in flex items-end sm:items-stretch">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto max-w-full flex">
        <div className="w-full sm:w-screen sm:max-w-md bg-white dark:bg-[#0B0D14] rounded-t-[32px] sm:rounded-none shadow-2xl border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh] sm:max-h-full animate-slide-up sm:animate-slide-left">
          
          {/* iOS Grab Bar (Mobile) */}
          <div className="sm:hidden pt-3 pb-1 flex justify-center">
            <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          </div>

          {/* Header */}
          <div className="p-5 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Your Shopping Bag ({cart.reduce((sum, i) => sum + i.quantity, 0)} Items)
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Assurance Notice */}
          <div className="px-5 py-2.5 bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-900/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <Truck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span><strong>Doorstep Inspection:</strong> Inspect and verify your device before completing payment.</span>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderComplete ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Order Successfully Placed!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Your order ID: <strong className="font-mono text-slate-900 dark:text-white">#LM-84920</strong>. Our courier partner will deliver your parcel within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setOrderComplete(false);
                    setIsCartOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-brand-600 text-white text-xs font-bold shadow-md hover:bg-slate-800"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Your shopping bag is empty
                </h3>
                <p className="text-xs text-slate-400">
                  Browse our certified laptops and smartphones to add items.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2 rounded-full bg-brand-600 text-white text-xs font-bold hover:bg-brand-500 shadow-sm"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              <div className="space-y-3.5">
                {cart.map(item => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex gap-3.5 items-center"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-16 h-16 rounded-xl object-cover bg-white shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase font-mono">
                          {item.product.condition}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {item.product.title}
                      </h4>

                      <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        <span>{item.selectedRam || item.product.specs.ram}</span>
                        <span>•</span>
                        <span>{item.selectedStorage || item.product.specs.storage}</span>
                      </div>

                      {/* Quantity adjustment & Price */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 px-1.5 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-brand-500 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-1.5">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-brand-500 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-black text-slate-900 dark:text-white font-mono">
                          ₹{((item.product.price + (item.extendedWarranty ? 1999 : 0)) * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && !orderComplete && (
            <div className="p-5 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3.5">
              
              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span>Discount (10%)</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Inspected Express Delivery</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-950 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span>Total Payable</span>
                  <span className="text-lg font-mono text-brand-600 dark:text-brand-400">
                    ₹{finalPayable.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Primary Buttons: WhatsApp Order & 1-Click Doorstep Inspection Order */}
              <div className="space-y-2">
                <button
                  onClick={() => openWhatsAppOrder(cart[0]?.product.title, finalPayable)}
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-transform active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                  <span>Confirm Order on WhatsApp</span>
                </button>

                <button
                  onClick={() => handleSimulateCheckout('COD')}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white font-bold text-sm shadow-apple-md transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  {isCheckingOut ? (
                    <span>Placing Order...</span>
                  ) : (
                    <>
                      <span>Place Order (Doorstep Inspection)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                🛡️ Pay after inspection at your doorstep. 14-day return & warranty covered.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
