export type ConditionGrade = 'Pristine A++' | 'Excellent A' | 'Good B';

export type ProductCategory = 
  | 'all'
  | 'laptops'
  | 'smartphones-ios'
  | 'smartphones-android';

export type ProductBrand = 'Apple' | 'Dell' | 'Lenovo' | 'HP' | 'Samsung' | 'Google' | 'OnePlus';

export interface ProductSpecs {
  processor: string;
  ram: string;
  storage: string;
  display: string;
  graphics?: string;
  batteryHealth: number; // e.g. 96 (%)
  cycleCount?: number;
  os: string;
  color: string;
  ports?: string;
  weight?: string;
}

export interface SimpleSpecs {
  speed: string;       // e.g. "Blazing Fast Multi-core Speed"
  storage: string;     // e.g. "512 GB NVMe SSD (Holds ~100,000 Photos)"
  battery: string;     // e.g. "All-Day Battery (95%+ Health Guaranteed)"
  screen: string;      // e.g. "Stunning Anti-Glare Retina/OLED Display"
  bestFor: string;     // e.g. "Engineering, Business Executives & Creative Pro"
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  brand: ProductBrand;
  category: ProductCategory;
  condition: ConditionGrade;
  conditionDescription: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  images: string[];
  specs: ProductSpecs;
  simpleSpecs: SimpleSpecs;
  highlights: string[];
  inStock: boolean;
  warrantyYears: number; // 1 or 2 or 3
  co2SavedKg: number;
  featured?: boolean;
  bestseller?: boolean;
  flashDeal?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedRam?: string;
  selectedStorage?: string;
  selectedColor?: string;
  extendedWarranty?: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  location: string;
  verifiedBuyer: boolean;
  productTitle: string;
  title: string;
  comment: string;
  helpfulCount: number;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Warranty & Testing' | 'Orders & Delivery' | 'Trade-In / Sell' | 'Payment & Returns';
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'cart';
}

export interface TradeInOption {
  deviceType: 'smartphone' | 'laptop' | 'tablet' | 'smartwatch';
  brand: string;
  model: string;
  condition: 'Like New' | 'Good' | 'Fair';
  estimatedValue: number;
}
