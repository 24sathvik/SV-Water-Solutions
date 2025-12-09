export interface Product {
  id: number
  slug: string
  name: string
  category: 'RO System' | 'UV System' | 'Water Softener' | 'Alkaline System' | 'Gravity Filter'
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  images: string[]
  badge?: string
  features: string[]
  description: string
  specifications: {
    capacity: string
    filtration: string
    warranty: string
    dimensions: string
    weight: string
    powerConsumption: string
  }
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'aquapure-ro-pro',
    name: 'AquaPure RO Pro',
    category: 'RO System',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=800&q=80',
    ],
    badge: 'Best Seller',
    features: [
      '7-Stage Advanced Filtration',
      'Smart LED Display',
      '12L Storage Capacity',
      'Auto Shut-off Feature',
      'Mineralizer Technology',
      'TDS Controller'
    ],
    description: 'The AquaPure RO Pro is our flagship water purification system featuring advanced 7-stage filtration technology. Perfect for families, it combines RO membrane purification with UV sterilization and mineralizer to ensure pure, healthy drinking water. The smart LED display keeps you informed about filter life and system status.',
    specifications: {
      capacity: '12 Liters',
      filtration: '7-Stage RO+UV+UF+TDS',
      warranty: '2 Years Comprehensive',
      dimensions: '365 x 225 x 485 mm',
      weight: '8.5 kg',
      powerConsumption: '24W'
    },
    inStock: true
  },
  {
    id: 2,
    slug: 'ultraclean-uv-plus',
    name: 'UltraClean UV+',
    category: 'UV System',
    price: 199,
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
    ],
    badge: 'New',
    features: [
      'UV LED Technology',
      'Energy Efficient Operation',
      '8L/hr Flow Rate',
      'Carbon Pre-Filter',
      'Easy Installation',
      'Compact Design'
    ],
    description: 'The UltraClean UV+ uses advanced UV LED technology to eliminate 99.99% of harmful microorganisms. Energy-efficient and eco-friendly, it\'s perfect for areas with municipal water supply. The compact design fits easily under your kitchen counter.',
    specifications: {
      capacity: '8L/hr Flow',
      filtration: 'UV LED + Carbon Filter',
      warranty: '1 Year',
      dimensions: '320 x 180 x 420 mm',
      weight: '5.2 kg',
      powerConsumption: '11W'
    },
    inStock: true
  },
  {
    id: 3,
    slug: 'softflow-elite',
    name: 'SoftFlow Elite',
    category: 'Water Softener',
    price: 449,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
      'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=800&q=80',
    ],
    badge: 'Premium',
    features: [
      'Automatic Regeneration',
      'Salt Level Indicator',
      'Compact Design',
      'High Flow Rate',
      'Digital Timer',
      'Easy Maintenance'
    ],
    description: 'Say goodbye to hard water problems with the SoftFlow Elite. This premium water softener removes calcium and magnesium, preventing scale buildup in pipes and appliances. Features automatic regeneration and a convenient salt indicator.',
    specifications: {
      capacity: '2000L/day',
      filtration: 'Ion Exchange Resin',
      warranty: '3 Years',
      dimensions: '450 x 300 x 600 mm',
      weight: '18 kg',
      powerConsumption: '15W'
    },
    inStock: true
  },
  {
    id: 4,
    slug: 'pureflow-alkaline',
    name: 'PureFlow Alkaline',
    category: 'Alkaline System',
    price: 349,
    originalPrice: 429,
    rating: 4.7,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=800&q=80',
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
    badge: 'Popular',
    features: [
      'pH Enhancement (8-10)',
      'Essential Mineral Boost',
      '10L Storage Tank',
      'RO + Alkaline Technology',
      'Antioxidant Properties',
      'Modern Design'
    ],
    description: 'The PureFlow Alkaline combines RO purification with alkaline enhancement, raising pH levels to 8-10 and adding essential minerals. Experience the health benefits of alkaline water with superior taste and antioxidant properties.',
    specifications: {
      capacity: '10 Liters',
      filtration: 'RO + Alkaline + Mineral',
      warranty: '2 Years',
      dimensions: '340 x 210 x 470 mm',
      weight: '7.8 kg',
      powerConsumption: '20W'
    },
    inStock: true
  },
  {
    id: 5,
    slug: 'aquashield-gravity',
    name: 'AquaShield Gravity',
    category: 'Gravity Filter',
    price: 89,
    rating: 4.5,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1563310118-e66bb5b1d1f9?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1563310118-e66bb5b1d1f9?w=800&q=80',
      'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
    ],
    badge: 'Budget',
    features: [
      'No Electricity Required',
      'Natural Filtration',
      '20L Capacity',
      'Ceramic Candle Filter',
      'Portable Design',
      'Easy to Clean'
    ],
    description: 'The AquaShield Gravity filter is perfect for areas with frequent power cuts or for outdoor use. No electricity required! Uses natural gravity and ceramic candle filtration to provide clean drinking water.',
    specifications: {
      capacity: '20 Liters',
      filtration: 'Ceramic Candle + Carbon',
      warranty: '1 Year',
      dimensions: '310 x 310 x 580 mm',
      weight: '4.5 kg',
      powerConsumption: 'None (Gravity-based)'
    },
    inStock: true
  },
  {
    id: 6,
    slug: 'cleanstream-ro-compact',
    name: 'CleanStream RO Compact',
    category: 'RO System',
    price: 249,
    rating: 4.6,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
      'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
    ],
    features: [
      '5-Stage Filtration',
      'Space-Saving Design',
      '8L Storage',
      'Quick Installation',
      'Low Maintenance',
      'Affordable'
    ],
    description: 'Perfect for small families and apartments, the CleanStream RO Compact delivers excellent purification in a space-saving design. 5-stage RO filtration ensures pure water at an affordable price.',
    specifications: {
      capacity: '8 Liters',
      filtration: '5-Stage RO',
      warranty: '1 Year',
      dimensions: '310 x 200 x 440 mm',
      weight: '6.5 kg',
      powerConsumption: '20W'
    },
    inStock: true
  },
  {
    id: 7,
    slug: 'puremax-industrial',
    name: 'PureMax Industrial',
    category: 'RO System',
    price: 899,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
    badge: 'Commercial',
    features: [
      '50L/hr Capacity',
      'Heavy-Duty Build',
      'Multi-Stage Filtration',
      'Auto Flush System',
      'Digital Monitoring',
      'Commercial Grade'
    ],
    description: 'The PureMax Industrial is designed for high-volume commercial applications. With 50L/hr capacity, it\'s perfect for offices, restaurants, and small industries. Built to last with industrial-grade components.',
    specifications: {
      capacity: '50L/hr',
      filtration: '9-Stage RO+UV',
      warranty: '3 Years',
      dimensions: '550 x 400 x 850 mm',
      weight: '35 kg',
      powerConsumption: '100W'
    },
    inStock: true
  },
  {
    id: 8,
    slug: 'aqua-sense-smart',
    name: 'Aqua Sense Smart',
    category: 'RO System',
    price: 399,
    rating: 4.8,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
      'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
    ],
    badge: 'Smart',
    features: [
      'WiFi Connectivity',
      'App Control',
      'Filter Life Monitoring',
      'TDS Display',
      'Voice Alerts',
      'Auto Service Booking'
    ],
    description: 'The future of water purification is here! Aqua Sense Smart connects to your smartphone, providing real-time monitoring, filter life tracking, and automatic service booking. Stay informed about your water quality 24/7.',
    specifications: {
      capacity: '10 Liters',
      filtration: '8-Stage RO+UV+Alkaline',
      warranty: '2 Years',
      dimensions: '380 x 240 x 510 mm',
      weight: '9.2 kg',
      powerConsumption: '28W'
    },
    inStock: true
  }
]

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products
  return products.filter(p => p.category === category)
}
