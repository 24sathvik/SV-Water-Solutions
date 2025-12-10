export interface Product {
  id: number
  slug: string
  name: string
  category: 'RO System' | 'UV System' | 'Water Softener' | 'Alkaline System' | 'Gravity Filter' | 'RO+UV System' | 'RO+UV+UF System'
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
    filterLife?: string
  }
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'aquaguard-aura-ro-uv-mtds',
    name: 'Aquaguard Aura RO+UV+MTDS',
    category: 'RO+UV System',
    price: 18999,
    originalPrice: 24999,
    rating: 4.8,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1624958723474-ab9b81e3aa40?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1624958723474-ab9b81e3aa40?w=800&q=80',
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
    badge: 'Best Seller',
    features: [
      '8-Stage Purification',
      'Active Copper Technology',
      '7L Storage Tank',
      'Mineral Guard',
      'Smart LED Indicators',
      'Auto UV Shut-off'
    ],
    description: 'The Aquaguard Aura combines RO+UV+MTDS technology with Active Copper for enhanced immunity. 8-stage purification ensures 100% safe drinking water while retaining essential minerals.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+MTDS+Active Copper',
      warranty: '1 Year',
      dimensions: '365 x 250 x 485 mm',
      weight: '8.5 kg',
      powerConsumption: '36W',
      filterLife: '6000 Liters'
    },
    inStock: true
  },
  {
    id: 2,
    slug: 'aquaguard-marvel-nxt-uv-uf',
    name: 'Aquaguard Marvel NXT UV+UF',
    category: 'UV System',
    price: 12499,
    originalPrice: 16999,
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
    badge: 'New',
    features: [
      'UV LED Technology',
      'Ultra Filtration',
      '8L/hr Flow Rate',
      'Energy Efficient',
      'Taste Adjuster',
      'Filter Change Alert'
    ],
    description: 'Perfect for municipal water with low TDS. The Marvel NXT uses UV+UF technology to eliminate bacteria and viruses while maintaining natural minerals in water.',
    specifications: {
      capacity: '6 Liters',
      filtration: 'UV+UF',
      warranty: '1 Year',
      dimensions: '320 x 180 x 420 mm',
      weight: '5.2 kg',
      powerConsumption: '11W',
      filterLife: '4000 Liters'
    },
    inStock: true
  },
  {
    id: 3,
    slug: 'aquasure-delight-ro-uv-mtds',
    name: 'Aquasure Delight RO+UV+MTDS',
    category: 'RO+UV System',
    price: 14999,
    originalPrice: 19999,
    rating: 4.9,
    reviews: 2156,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      'https://images.unsplash.com/photo-1624958723474-ab9b81e3aa40?w=800&q=80',
    ],
    badge: 'Premium',
    features: [
      '6-Stage Purification',
      'Mineral Guard Technology',
      'Auto Shut-off',
      'Compact Design',
      '6L Storage',
      'Energy Saving Mode'
    ],
    description: 'The Aquasure Delight offers premium water purification at an affordable price. Mineral Guard ensures essential minerals are retained for healthier drinking water.',
    specifications: {
      capacity: '6 Liters',
      filtration: 'RO+UV+MTDS',
      warranty: '2 Years',
      dimensions: '340 x 210 x 450 mm',
      weight: '7.2 kg',
      powerConsumption: '30W',
      filterLife: '6000 Liters'
    },
    inStock: true
  },
  {
    id: 4,
    slug: 'aquaguard-enhance-green-ro-uv-uf',
    name: 'Aquaguard Enhance Green RO+UV+UF',
    category: 'RO+UV+UF System',
    price: 22499,
    originalPrice: 29999,
    rating: 4.7,
    reviews: 756,
    image: 'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=800&q=80',
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
    ],
    badge: 'Popular',
    features: [
      'Alkaline Boost Technology',
      'Smart LED Display',
      '10L Storage Capacity',
      'RO+UV+UF Triple Protection',
      'Eco-Friendly',
      'Auto Cleaning'
    ],
    description: 'The Enhance Green combines triple purification with alkaline technology. The pH enhancement and mineral boost ensures healthy, great-tasting water.',
    specifications: {
      capacity: '10 Liters',
      filtration: 'RO+UV+UF+Alkaline',
      warranty: '2 Years',
      dimensions: '380 x 260 x 520 mm',
      weight: '9.5 kg',
      powerConsumption: '45W',
      filterLife: '8000 Liters'
    },
    inStock: true
  },
  {
    id: 5,
    slug: 'aquasure-xtra-tuff-gravity',
    name: 'Aquasure Xtra Tuff 15L',
    category: 'Gravity Filter',
    price: 2199,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 3412,
    image: 'https://images.unsplash.com/photo-1563310118-e66bb5b1d1f9?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1563310118-e66bb5b1d1f9?w=800&q=80',
      'https://images.unsplash.com/photo-1624958723474-ab9b81e3aa40?w=800&q=80',
    ],
    badge: 'Budget Friendly',
    features: [
      'No Electricity Required',
      'Gravity-Based Technology',
      '15L Storage',
      'Kitanu Magnet Technology',
      'Durable Design',
      'Easy to Clean'
    ],
    description: 'The Aquasure Xtra Tuff is perfect for areas with frequent power cuts. Uses gravity-based technology with Kitanu Magnet to provide clean drinking water without electricity.',
    specifications: {
      capacity: '15 Liters',
      filtration: 'Gravity + Kitanu Magnet',
      warranty: '1 Year',
      dimensions: '310 x 310 x 520 mm',
      weight: '3.5 kg',
      powerConsumption: 'None (Gravity-based)',
      filterLife: '3000 Liters'
    },
    inStock: true
  },
  {
    id: 6,
    slug: 'aquaguard-glory-ro-uv-mtds',
    name: 'Aquaguard Glory RO+UV+MTDS',
    category: 'RO+UV System',
    price: 16499,
    originalPrice: 21999,
    rating: 4.6,
    reviews: 1067,
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
      'https://images.unsplash.com/photo-1624958723474-ab9b81e3aa40?w=800&q=80',
    ],
    features: [
      '7-Stage Purification',
      'Taste Guard Technology',
      '8L Storage Tank',
      'Smart Indicators',
      'Easy Maintenance',
      'Space Saving Design'
    ],
    description: 'The Aquaguard Glory delivers pure water with great taste. 7-stage purification with Taste Guard technology ensures refreshing drinking water for your family.',
    specifications: {
      capacity: '8 Liters',
      filtration: 'RO+UV+MTDS+Taste Guard',
      warranty: '1 Year',
      dimensions: '350 x 230 x 470 mm',
      weight: '7.8 kg',
      powerConsumption: '32W',
      filterLife: '6000 Liters'
    },
    inStock: true
  },
  {
    id: 7,
    slug: 'dr-aquaguard-nrich-hd',
    name: 'Dr. Aquaguard Nrich HD RO+UV',
    category: 'RO+UV System',
    price: 28999,
    originalPrice: 38668,
    rating: 4.9,
    reviews: 589,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
    badge: 'Premium',
    features: [
      'HD RO Membrane',
      'Active Copper+Zinc',
      '8-Stage Purification',
      'Mineral Health Guard',
      'Digital Display',
      'Premium Design'
    ],
    description: 'The Dr. Aquaguard Nrich HD offers hospital-grade purification with Active Copper and Zinc for enhanced immunity. Premium design meets superior performance.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'HD RO+UV+Active Copper+Zinc',
      warranty: '1 Year',
      dimensions: '385 x 265 x 510 mm',
      weight: '9.8 kg',
      powerConsumption: '40W',
      filterLife: '6000 Liters'
    },
    inStock: true
  },
  {
    id: 8,
    slug: 'aquaguard-blaze-hot-ambient',
    name: 'Aquaguard Blaze Hot & Ambient',
    category: 'RO+UV+UF System',
    price: 25789,
    originalPrice: 32999,
    rating: 4.8,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
      'https://images.unsplash.com/photo-1624958723474-ab9b81e3aa40?w=800&q=80',
    ],
    badge: 'Hot & Cold',
    features: [
      'Hot Water Dispenser',
      'Copper Infusion',
      'Stainless Steel Tank',
      'RO+UV+UF Purification',
      'Touch Panel',
      'Child Lock'
    ],
    description: 'The Aquaguard Blaze offers both hot and ambient water on demand. Copper-infused stainless steel tank with advanced RO+UV+UF purification.',
    specifications: {
      capacity: '4 Liters',
      filtration: 'RO+UV+UF+Copper',
      warranty: '2 Years',
      dimensions: '420 x 280 x 560 mm',
      weight: '12 kg',
      powerConsumption: '2100W (Heating)',
      filterLife: '6000 Liters'
    },
    inStock: true
  },
  {
    id: 9,
    slug: 'aquasure-amrit-uv-uf',
    name: 'Aquasure Amrit UV+UF',
    category: 'UV System',
    price: 8499,
    originalPrice: 11999,
    rating: 4.4,
    reviews: 1823,
    image: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=800&q=80',
    ],
    badge: 'Value for Money',
    features: [
      'UV+UF Technology',
      '20L/hr Flow Rate',
      'Wall/Counter Mountable',
      'Low Maintenance',
      'Filter Alert',
      'Compact Size'
    ],
    description: 'The Aquasure Amrit is ideal for municipal water. High flow rate with UV+UF technology provides safe drinking water at an affordable price.',
    specifications: {
      capacity: '20L/hr',
      filtration: 'UV+UF',
      warranty: '1 Year',
      dimensions: '280 x 150 x 380 mm',
      weight: '4.5 kg',
      powerConsumption: '11W',
      filterLife: '4000 Liters'
    },
    inStock: true
  },
  {
    id: 10,
    slug: 'aquaguard-select-classic-ro',
    name: 'Aquaguard Select Classic+ RO',
    category: 'RO System',
    price: 11999,
    originalPrice: 15999,
    rating: 4.5,
    reviews: 967,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
    ],
    features: [
      '5-Stage RO Purification',
      '6L Storage Tank',
      'Smart Indicators',
      'Auto Shut-off',
      'Food Grade Plastic',
      'Easy Installation'
    ],
    description: 'The Aquaguard Select Classic+ offers reliable RO purification at an entry-level price. Perfect for families looking for basic RO technology.',
    specifications: {
      capacity: '6 Liters',
      filtration: '5-Stage RO',
      warranty: '1 Year',
      dimensions: '330 x 200 x 440 mm',
      weight: '6.5 kg',
      powerConsumption: '25W',
      filterLife: '4000 Liters'
    },
    inStock: true
  },
  {
    id: 11,
    slug: 'water-softener-whole-house',
    name: 'Whole House Water Softener',
    category: 'Water Softener',
    price: 35999,
    originalPrice: 45999,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
    badge: 'Whole House',
    features: [
      'Ion Exchange Technology',
      '2000L/Day Capacity',
      'Auto Regeneration',
      'Digital Timer',
      'Salt Level Indicator',
      'Suitable for Borewell'
    ],
    description: 'Protect your entire home from hard water damage. This whole-house softener removes calcium and magnesium, extending appliance life and improving water quality.',
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
    id: 12,
    slug: 'aquaguard-crystal-nxt-hd',
    name: 'Aquaguard Crystal NXT HD',
    category: 'RO+UV+UF System',
    price: 19999,
    originalPrice: 26999,
    rating: 4.6,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=800&q=80',
      'https://images.unsplash.com/photo-1624958723474-ab9b81e3aa40?w=800&q=80',
    ],
    features: [
      'HD RO Membrane',
      'UV+UF Protection',
      '8L Tank Capacity',
      'Taste Enhancer',
      'Smart Indicators',
      'Modern Design'
    ],
    description: 'The Crystal NXT HD features high-definition RO membrane for superior purification. Triple protection with RO+UV+UF ensures 100% safe drinking water.',
    specifications: {
      capacity: '8 Liters',
      filtration: 'HD RO+UV+UF',
      warranty: '1 Year',
      dimensions: '360 x 240 x 490 mm',
      weight: '8.2 kg',
      powerConsumption: '35W',
      filterLife: '6000 Liters'
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