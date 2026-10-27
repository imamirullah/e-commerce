import { Product } from '../types';

export const CATEGORIES = [
  { id: 'all', name: 'All Devices', icon: 'Sparkles', badge: '14 Models' },
  { id: 'laptops', name: 'Laptops', icon: 'Laptop', badge: 'Mac & Enterprise' },
  { id: 'smartphones-ios', name: 'iPhones (iOS)', icon: 'Smartphone', badge: 'Apple Flagship' },
  { id: 'smartphones-android', name: 'Android Phones', icon: 'Smartphone', badge: 'Galaxy & Pixel' },
];

export const PRODUCTS: Product[] = [
  // ================= LAPTOPS =================
  {
    id: 'lumen-mbp-16-m3',
    title: 'Apple MacBook Pro 16" (M3 Max Chip)',
    subtitle: '36GB Unified RAM • 1TB Fast NVMe SSD • Space Black',
    brand: 'Apple',
    category: 'laptops',
    condition: 'Pristine A++',
    conditionDescription: 'Zero blemishes. 100% original Apple hardware verified with Apple Diagnostics diagnostics.',
    price: 249999,
    originalPrice: 359900,
    discountPercent: 31,
    rating: 4.95,
    reviewCount: 142,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Apple M3 Max (14-Core CPU, 30-Core GPU)',
      ram: '36GB Unified Memory',
      storage: '1TB Ultra-Fast SSD',
      display: '16.2" Liquid Retina XDR (3456 x 2234, 120Hz ProMotion)',
      graphics: '30-Core Apple GPU Hardware Ray Tracing',
      batteryHealth: 99,
      cycleCount: 18,
      os: 'macOS Sonoma (Clean Enterprise Reset)',
      color: 'Space Black',
      ports: '3x Thunderbolt 4, HDMI 2.1, MagSafe 3, SDXC Slot',
      weight: '2.14 kg'
    },
    simpleSpecs: {
      speed: 'Extreme workstation speed for 4K video, AI & heavy multitasking',
      storage: '1TB SSD (Holds 250,000+ High-Res Photos or 1,000+ Movies)',
      battery: 'Up to 22 Hours Battery Life (99% Original Battery Health)',
      screen: '16.2-inch Liquid Retina XDR with anti-reflective coating',
      bestFor: 'Designers, Software Engineers, Executives & Creators'
    },
    highlights: [
      'Genuine Apple Charger & braided MagSafe cable included',
      'Complimentary 2-Year Comprehensive On-Site Warranty',
      'Sealed in LUMEN Eco-Safe protective presentation box',
      'Cash on Delivery with open-box verification'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 168,
    featured: true,
    bestseller: true
  },
  {
    id: 'lumen-mba-15-m2',
    title: 'Apple MacBook Air 15" (M2 Chip)',
    subtitle: '16GB Unified RAM • 512GB SSD • Midnight Finish',
    brand: 'Apple',
    category: 'laptops',
    condition: 'Pristine A++',
    conditionDescription: 'Flawless condition, virtually indistinguishable from brand new.',
    price: 94999,
    originalPrice: 144900,
    discountPercent: 34,
    rating: 4.9,
    reviewCount: 98,
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Apple M2 (8-Core CPU, 10-Core GPU)',
      ram: '16GB Unified Memory',
      storage: '512GB Fast SSD',
      display: '15.3" Liquid Retina Display (2880 x 1864, 500 nits)',
      graphics: '10-Core Apple GPU',
      batteryHealth: 98,
      cycleCount: 22,
      os: 'macOS Sonoma',
      color: 'Midnight Blue',
      ports: '2x Thunderbolt / USB 4, MagSafe 3, 3.5mm Headphone Jack',
      weight: '1.51 kg'
    },
    simpleSpecs: {
      speed: 'Silent, fanless architecture with lightning app responsiveness',
      storage: '512GB SSD (Holds 120,000+ Photos and Documents)',
      battery: 'Up to 18 Hours All-Day Battery (98% Health)',
      screen: 'Large 15.3-inch immersive vibrant Retina display',
      bestFor: 'College Students, Business Travelers & Remote Professionals'
    },
    highlights: [
      'Ultra-thin 11.5mm aluminum enclosure',
      '2-Year Pan-India Doorstep Warranty',
      'Original 35W Dual USB-C Port Compact Power Adapter'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 122,
    featured: true
  },
  {
    id: 'lumen-dell-xps-15',
    title: 'Dell XPS 15 9530 Creator Laptop',
    subtitle: 'Intel Core i7 13th Gen • 32GB DDR5 • 1TB SSD • RTX 4050',
    brand: 'Dell',
    category: 'laptops',
    condition: 'Pristine A++',
    conditionDescription: 'Corporate executive lease return, zero scratches, verified thermals.',
    price: 139999,
    originalPrice: 224900,
    discountPercent: 38,
    rating: 4.88,
    reviewCount: 76,
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Intel Core i7-13700H (14 Cores, up to 5.0 GHz)',
      ram: '32GB DDR5 4800MHz',
      storage: '1TB PCIe Gen4 NVMe SSD',
      display: '15.6" OLED 3.5K (3456 x 2160) Touchscreen Display',
      graphics: 'NVIDIA GeForce RTX 4050 6GB GDDR6',
      batteryHealth: 96,
      cycleCount: 31,
      os: 'Windows 11 Pro Licensed',
      color: 'Platinum Silver / Black Carbon Fiber',
      ports: '2x Thunderbolt 4, 1x USB-C 3.2, SD Card Reader',
      weight: '1.92 kg'
    },
    simpleSpecs: {
      speed: 'Exceptional computing horsepower with dedicated RTX graphics',
      storage: '1TB High-Speed SSD (Instant boot-up under 5 seconds)',
      battery: '86Whr battery lasting 8+ hours of intensive work',
      screen: 'Breathtaking 3.5K OLED touch display with deep pure blacks',
      bestFor: '3D Rendering, Architects, Financial Modeling & Creators'
    },
    highlights: [
      'Genuine Dell 130W Type-C adapter included',
      'CNC machined aluminum and aerospace carbon fiber palm rest',
      '2-Year Pan-India Hardware Replacement Warranty'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 154,
    featured: true
  },
  {
    id: 'lumen-thinkpad-t14-g3',
    title: 'Lenovo ThinkPad T14 Gen 3 Enterprise',
    subtitle: 'AMD Ryzen 7 PRO 6850U • 32GB RAM • 1TB NVMe • Military Grade',
    brand: 'Lenovo',
    category: 'laptops',
    condition: 'Pristine A++',
    conditionDescription: 'MIL-SPEC 810H tested durability. Flawless ergonomic legendary keyboard.',
    price: 68999,
    originalPrice: 148000,
    discountPercent: 53,
    rating: 4.92,
    reviewCount: 184,
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'AMD Ryzen 7 PRO 6850U (8 Cores, 16 Threads, 4.7 GHz)',
      ram: '32GB LPDDR5 6400MHz',
      storage: '1TB PCIe 4.0 NVMe SSD',
      display: '14.0" WUXGA (1920 x 1200) IPS Anti-Glare 400 nits Low Power',
      graphics: 'AMD Radeon 680M Graphics',
      batteryHealth: 97,
      cycleCount: 28,
      os: 'Windows 11 Pro Enterprise Certified',
      color: 'Thunder Black',
      ports: '2x USB-C 3.2, 2x USB-A, HDMI 2.0b, RJ45 Ethernet',
      weight: '1.36 kg'
    },
    simpleSpecs: {
      speed: 'Bulletproof business multitasking with 8-core AMD Ryzen 7 Pro',
      storage: '1TB High-Speed SSD with hardware data encryption',
      battery: '10+ Hours work battery life (52.5Whr capacity)',
      screen: '14-inch Matte anti-glare display designed to prevent eye strain',
      bestFor: 'Developers, Chartered Accountants, Legal & Business Executives'
    },
    highlights: [
      'Legendary spill-resistant ThinkPad keyboard with TrackPoint',
      'Hardware dTPM 2.0 security chip with fingerprint reader',
      'Free 2-Year On-Site Doorstep Service Warranty'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 138,
    bestseller: true
  },
  {
    id: 'lumen-dell-lat-7420',
    title: 'Dell Latitude 7420 Business Ultrabook',
    subtitle: 'Intel Core i7 11th Gen • 16GB RAM • 512GB SSD • 1.2kg Ultra-Light',
    brand: 'Dell',
    category: 'laptops',
    condition: 'Excellent A',
    conditionDescription: 'Clean enterprise unit, tested across all ports, battery and thermal sensors.',
    price: 42999,
    originalPrice: 112000,
    discountPercent: 61,
    rating: 4.84,
    reviewCount: 112,
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Intel Core i7-1185G7 (vPro, up to 4.8 GHz)',
      ram: '16GB LPDDR4x',
      storage: '512GB PCIe NVMe Class 40 SSD',
      display: '14.0" FHD (1920x1080) Anti-Glare Carbon Fiber',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealth: 95,
      cycleCount: 42,
      os: 'Windows 11 Pro',
      color: 'Carbon Fiber Black',
      ports: '2x Thunderbolt 4, 1x USB 3.2, HDMI 2.0, MicroSD',
      weight: '1.22 kg'
    },
    simpleSpecs: {
      speed: 'Fast quad-core vPro performance for Office 365, Zoom & Analytics',
      storage: '512GB SSD (Fast file searches and instantaneous startup)',
      battery: 'Up to 9 Hours battery with ExpressCharge technology',
      screen: 'Compact 14-inch sharp anti-reflective business display',
      bestFor: 'Field Professionals, Consulting, Students & Operations'
    },
    highlights: [
      'Featherweight 1.22kg carbon fiber chassis',
      'Complimentary 2-Year On-Site Hardware Guarantee',
      'Dell 65W Type-C Rapid Charger included'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 115
  },
  {
    id: 'lumen-hp-elitebook-840',
    title: 'HP EliteBook 840 G8 Executive Laptop',
    subtitle: 'Intel Core i7 11th Gen • 16GB RAM • 512GB NVMe SSD • Bang & Olufsen',
    brand: 'HP',
    category: 'laptops',
    condition: 'Excellent A',
    conditionDescription: 'Sleek silver aluminum design, pristine keyboard and display.',
    price: 44999,
    originalPrice: 118000,
    discountPercent: 62,
    rating: 4.82,
    reviewCount: 94,
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Intel Core i7-1165G7 (4 Cores, 8 Threads, up to 4.7 GHz)',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB PCIe NVMe SSD',
      display: '14.0" IPS FHD (1920 x 1080) 400 nits Anti-Glare',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealth: 96,
      cycleCount: 39,
      os: 'Windows 11 Pro',
      color: 'Natural Silver Aluminum',
      ports: '2x Thunderbolt 4, 2x USB-A, HDMI 2.0, Headphone Jack',
      weight: '1.32 kg'
    },
    simpleSpecs: {
      speed: 'Smooth enterprise performance with Bang & Olufsen conference audio',
      storage: '512GB SSD storage for quick access to all work documents',
      battery: '8+ Hours of continuous productivity on a single charge',
      screen: 'Anti-glare bright 400-nit display for comfortable all-day viewing',
      bestFor: 'Executive Management, Corporate Staff & Remote Work'
    },
    highlights: [
      'Premium all-metal unibody aluminum finish',
      'HP Sure Start self-healing BIOS protection',
      '2-Year Pan-India On-Site Warranty Coverage'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 118
  },

  // ================= iPHONES (iOS SMARTPHONES) =================
  {
    id: 'lumen-ip-15-pro-max',
    title: 'Apple iPhone 15 Pro Max (256GB)',
    subtitle: 'Natural Titanium • A17 Pro Chip • 5x Optical Telephoto',
    brand: 'Apple',
    category: 'smartphones-ios',
    condition: 'Pristine A++',
    conditionDescription: 'Original box sealed with genuine cable. 100% genuine Apple components.',
    price: 114999,
    originalPrice: 159900,
    discountPercent: 28,
    rating: 4.97,
    reviewCount: 210,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Apple A17 Pro (3nm architecture, 6-Core CPU, 6-Core GPU)',
      ram: '8GB RAM',
      storage: '256GB NVMe',
      display: '6.7" Super Retina XDR OLED (120Hz ProMotion, Always-On, 2000 nits)',
      graphics: 'Hardware-Accelerated Ray Tracing',
      batteryHealth: 99,
      cycleCount: 14,
      os: 'iOS 17.5 (Upgradable to iOS 18)',
      color: 'Natural Titanium',
      ports: 'USB-C (10Gbps USB 3 Speeds)',
      weight: '221 g'
    },
    simpleSpecs: {
      speed: 'World-leading A17 Pro performance capable of console-quality gaming',
      storage: '256GB Storage (Holds 70,000+ High-Res Photos or 20 hours 4K Video)',
      battery: 'All-Day battery life with 29 hours video playback capability',
      screen: 'Stunning 6.7-inch Super Retina OLED with Dynamic Island',
      bestFor: 'Pro Mobile Photography, Creators & Flagship iOS Enthusiasts'
    },
    highlights: [
      'Aerospace-grade titanium design with contoured edges',
      '48MP Main Camera with 5x optical telephoto zoom',
      'Free 2-Year Comprehensive LUMEN Warranty with COD'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 85,
    featured: true,
    bestseller: true
  },
  {
    id: 'lumen-ip-15',
    title: 'Apple iPhone 15 (128GB)',
    subtitle: 'Dynamic Island • 48MP Main Camera • USB-C • Black',
    brand: 'Apple',
    category: 'smartphones-ios',
    condition: 'Pristine A++',
    conditionDescription: 'Flawless condition, verified battery health, factory unlocked.',
    price: 58999,
    originalPrice: 79900,
    discountPercent: 26,
    rating: 4.91,
    reviewCount: 165,
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Apple A16 Bionic (6-Core CPU, 5-Core GPU)',
      ram: '6GB RAM',
      storage: '128GB Storage',
      display: '6.1" Super Retina XDR OLED (2556 x 1179, 2000 nits peak)',
      batteryHealth: 98,
      cycleCount: 26,
      os: 'iOS 17',
      color: 'Black',
      ports: 'USB-C Connector',
      weight: '171 g'
    },
    simpleSpecs: {
      speed: 'Smooth lightning speed for social apps, camera, streaming & gaming',
      storage: '128GB Storage (Holds ~35,000 Photos and 50+ Apps)',
      battery: 'Full-day battery life with 20 hours video playback',
      screen: '6.1-inch ultra-bright OLED with interactive Dynamic Island',
      bestFor: 'Everyday Power Users, Students & Professionals'
    },
    highlights: [
      'Color-infused durable glass back and aluminum frame',
      'Universal USB-C charging convenience',
      '2-Year Pan-India Replacement Warranty'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 78
  },
  {
    id: 'lumen-ip-14-pro',
    title: 'Apple iPhone 14 Pro (256GB)',
    subtitle: 'Space Black • ProMotion 120Hz • A16 Bionic • 48MP Camera',
    brand: 'Apple',
    category: 'smartphones-ios',
    condition: 'Pristine A++',
    conditionDescription: 'Clean stainless steel bands, zero micro-scratches on display.',
    price: 79999,
    originalPrice: 129900,
    discountPercent: 38,
    rating: 4.89,
    reviewCount: 140,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Apple A16 Bionic (4nm)',
      ram: '6GB RAM',
      storage: '256GB NVMe',
      display: '6.1" Super Retina XDR (120Hz ProMotion, Always-On Display)',
      batteryHealth: 96,
      cycleCount: 45,
      os: 'iOS 17',
      color: 'Space Black',
      ports: 'Lightning',
      weight: '206 g'
    },
    simpleSpecs: {
      speed: 'Pro performance with buttery-smooth 120Hz scrolling',
      storage: '256GB Storage (Holds 70,000+ Photos and Documents)',
      battery: 'Reliable all-day battery with 23 hours video playback',
      screen: '6.1-inch Always-On Super Retina XDR OLED display',
      bestFor: 'Photography, Vlogging & Compact Flagship Lovers'
    },
    highlights: [
      'Surgical-grade stainless steel chassis',
      'Photonic Engine with 48MP quad-pixel sensor',
      '2-Year Pan-India On-Site Warranty'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 80
  },
  {
    id: 'lumen-ip-13',
    title: 'Apple iPhone 13 (128GB)',
    subtitle: 'Midnight • Cinematic Mode • Dual 12MP Cameras • Long Battery',
    brand: 'Apple',
    category: 'smartphones-ios',
    condition: 'Excellent A',
    conditionDescription: '100% verified diagnostics, fresh battery health certification.',
    price: 38999,
    originalPrice: 69900,
    discountPercent: 44,
    rating: 4.86,
    reviewCount: 220,
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Apple A15 Bionic (5nm, 6-Core CPU)',
      ram: '4GB RAM',
      storage: '128GB Storage',
      display: '6.1" Super Retina XDR OLED',
      batteryHealth: 95,
      cycleCount: 52,
      os: 'iOS 17',
      color: 'Midnight',
      ports: 'Lightning',
      weight: '174 g'
    },
    simpleSpecs: {
      speed: 'Fast A15 Bionic chip handles all modern apps seamlessly',
      storage: '128GB Storage (Accommodates 35,000+ Photos and Videos)',
      battery: '19 Hours video playback on a single charge (95% Health)',
      screen: 'Vibrant 6.1-inch OLED with true color accuracy',
      bestFor: 'Budget-Conscious iPhone Buyers & Everyday Reliability'
    },
    highlights: [
      'Cinematic Mode with shallow depth of field video',
      'Ceramic Shield front cover with water resistance',
      '2-Year Comprehensive Warranty with COD'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 72
  },

  // ================= ANDROID SMARTPHONES =================
  {
    id: 'lumen-s24-ultra',
    title: 'Samsung Galaxy S24 Ultra 5G (512GB)',
    subtitle: 'Titanium Gray • Galaxy AI • Built-in S-Pen • 200MP Camera',
    brand: 'Samsung',
    category: 'smartphones-android',
    condition: 'Pristine A++',
    conditionDescription: 'Immaculate condition. Built-in S-Pen tested. Galaxy AI activated.',
    price: 99999,
    originalPrice: 139999,
    discountPercent: 29,
    rating: 4.96,
    reviewCount: 175,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)',
      ram: '12GB LPDDR5X RAM',
      storage: '512GB UFS 4.0 Storage',
      display: '6.8" Dynamic AMOLED 2X (QHD+, 120Hz Flat Display, 2600 nits)',
      graphics: 'Adreno 750 with Ray Tracing',
      batteryHealth: 99,
      cycleCount: 16,
      os: 'Android 14 with One UI 6.1 (7 Years of OS Updates)',
      color: 'Titanium Gray',
      ports: 'USB-C 3.2 Gen 1 (DisplayPort support)',
      weight: '232 g'
    },
    simpleSpecs: {
      speed: 'Top-tier Android computing with on-device generative Galaxy AI',
      storage: '512GB High-Speed Storage (Holds 150,000+ Photos)',
      battery: 'Massive 5000mAh battery lasting nearly 2 full days',
      screen: 'Flat 6.8-inch Dynamic AMOLED with Gorilla Glass Armor anti-reflection',
      bestFor: 'Power Users, Note-Takers, Mobile Photographers & Executives'
    },
    highlights: [
      'Built-in S-Pen stylus for precision notes and drawing',
      '200MP Ultra-detailed Camera with 100x Space Zoom',
      '2-Year Pan-India Doorstep Replacement Warranty'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 90,
    featured: true,
    bestseller: true
  },
  {
    id: 'lumen-pixel-8-pro',
    title: 'Google Pixel 8 Pro (128GB)',
    subtitle: 'Obsidian Black • Google Tensor G3 • Best-in-Class Computational AI Camera',
    brand: 'Google',
    category: 'smartphones-android',
    condition: 'Pristine A++',
    conditionDescription: 'Pure Google software experience, flawless camera visor and display.',
    price: 64999,
    originalPrice: 106999,
    discountPercent: 39,
    rating: 4.88,
    reviewCount: 92,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Google Tensor G3 (Titan M2 security coprocessor)',
      ram: '12GB LPDDR5X RAM',
      storage: '128GB UFS 3.1',
      display: '6.7" Super Actua Display (1344 x 2992, LTPO 120Hz, 2400 nits)',
      batteryHealth: 97,
      cycleCount: 30,
      os: 'Android 14 (7 Years of Direct Feature Drops & Security Updates)',
      color: 'Obsidian',
      ports: 'USB-C 3.2',
      weight: '213 g'
    },
    simpleSpecs: {
      speed: 'Pure stock Android with Google AI photo editing (Magic Eraser, Best Take)',
      storage: '128GB Storage (Holds ~35,000 Photos & 4K Videos)',
      battery: '5050mAh battery with 24+ hour battery life and extreme saver',
      screen: 'Super Actua 6.7-inch display, exceptionally bright even in harsh sunlight',
      bestFor: 'Photography Purists, Tech Enthusiasts & Clean Android Lovers'
    },
    highlights: [
      'Exclusive Google AI features: Best Take, Magic Audio Eraser, Video Boost',
      'Temperature sensor built into rear camera bar',
      '2-Year Pan-India On-Site Warranty with COD'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 82
  },
  {
    id: 'lumen-oneplus-12',
    title: 'OnePlus 12 5G (256GB)',
    subtitle: 'Silky Black • Snapdragon 8 Gen 3 • 100W SuperVOOC • Hasselblad Camera',
    brand: 'OnePlus',
    category: 'smartphones-android',
    condition: 'Pristine A++',
    conditionDescription: 'Mint condition, original 100W flash charger included in box.',
    price: 52999,
    originalPrice: 64999,
    discountPercent: 18,
    rating: 4.9,
    reviewCount: 104,
    images: [
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Qualcomm Snapdragon 8 Gen 3',
      ram: '12GB LPDDR5X',
      storage: '256GB UFS 4.0',
      display: '6.82" 2K 120Hz ProXDR Display (4500 nits peak brightness)',
      batteryHealth: 98,
      cycleCount: 22,
      os: 'OxygenOS 14 based on Android 14',
      color: 'Silky Black',
      ports: 'USB-C 3.2',
      weight: '220 g'
    },
    simpleSpecs: {
      speed: 'Ultra-fast app switching and gaming with 100W charging from 1% to 100% in 26 mins',
      storage: '256GB High-Speed Storage (Holds 70,000+ Photos)',
      battery: 'Massive 5400mAh dual-cell battery with extraordinary battery life',
      screen: 'Record-shattering 4500-nit ProXDR 2K display with Aqua Touch',
      bestFor: 'Gamers, Fast Charging Enthusiasts & High-Value Flagship Seekers'
    },
    highlights: [
      '4th Gen Hasselblad Camera System with 3x periscope telephoto',
      '100W SuperVOOC wired + 50W AirVOOC wireless charging',
      '2-Year Pan-India Doorstep Warranty'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 84
  },
  {
    id: 'lumen-s23-plus',
    title: 'Samsung Galaxy S23+ 5G (256GB)',
    subtitle: 'Phantom Black • Snapdragon 8 Gen 2 • Dynamic AMOLED 2X',
    brand: 'Samsung',
    category: 'smartphones-android',
    condition: 'Excellent A',
    conditionDescription: 'Clean enterprise refresh, all sensors and 5G bands tested.',
    price: 48999,
    originalPrice: 94999,
    discountPercent: 48,
    rating: 4.87,
    reviewCount: 130,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      processor: 'Snapdragon 8 Gen 2 for Galaxy',
      ram: '8GB LPDDR5X',
      storage: '256GB UFS 4.0',
      display: '6.6" Dynamic AMOLED 2X (120Hz, 1750 nits)',
      batteryHealth: 96,
      cycleCount: 40,
      os: 'Android 14 One UI 6',
      color: 'Phantom Black',
      ports: 'USB-C 3.2',
      weight: '196 g'
    },
    simpleSpecs: {
      speed: 'Fast flagship Snapdragon 8 Gen 2 performance with efficient thermals',
      storage: '256GB Storage (Holds 70,000+ Photos and Apps)',
      battery: '4700mAh battery lasting well over 24 hours of normal use',
      screen: 'Vibrant 6.6-inch flat AMOLED display with Gorilla Glass Victus 2',
      bestFor: 'Everyday Android Users Wanting Premium Build & Reliability'
    },
    highlights: [
      '50MP Triple Camera setup with Nightography enhancements',
      'Armor Aluminum frame with IP68 water & dust resistance',
      '2-Year Comprehensive On-Site Warranty with COD'
    ],
    inStock: true,
    warrantyYears: 2,
    co2SavedKg: 80
  }
];
