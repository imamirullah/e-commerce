import { Review } from '../types';

export const TESTIMONIALS: Review[] = [
  {
    id: 'rev-1',
    author: 'Vikramaditya Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 days ago',
    location: 'Bengaluru, KA',
    verifiedBuyer: true,
    productTitle: 'Apple MacBook Pro 16" (M3 Max)',
    title: 'Indistinguishable from brand-new Apple Store delivery',
    comment: 'Was hesitant about spending ₹2.5L on a refurbished machine. The MacBook arrived in pristine original packaging with only 14 battery cycles! The 45-point inspection certificate in the box gave me total peace of mind. Saved ₹1,00,000 without a single compromise.',
    helpfulCount: 42,
    tag: 'Architect & 3D Artist'
  },
  {
    id: 'rev-2',
    author: 'Priya Nambiar',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 week ago',
    location: 'Gurugram, HR',
    verifiedBuyer: true,
    productTitle: 'Dell Latitude 7400 Business Ultrabook',
    title: 'Best decision for our startup team',
    comment: 'Ordered 6 units of the Dell Latitude 7400 for our engineers. Every single one had clean keyboards, perfect battery health over 90%, and genuine Windows 11 Pro licenses. Laptopex and Saudewala were good, but LUMEN’s 2-year warranty and Apple-like unboxing experience is leagues ahead.',
    helpfulCount: 38,
    tag: 'Tech Lead at FinTech'
  },
  {
    id: 'rev-3',
    author: 'Arjun Mehta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 weeks ago',
    location: 'Mumbai, MH',
    verifiedBuyer: true,
    productTitle: 'Apple iPhone 15 Pro Max',
    title: 'Titanium finish is flawless, 99% battery health!',
    comment: 'The trade-in process for my old iPhone 12 was instantaneous. The delivery partner checked my phone at the door, handed me the cash difference, and delivered this gorgeous Natural Titanium 15 Pro Max. 10/10 recommend!',
    helpfulCount: 29,
    tag: 'Verified Trade-In Customer'
  }
];
