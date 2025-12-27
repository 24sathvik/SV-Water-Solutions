export interface Product {
  id: number
  slug: string
  name: string
  category: 'RO System' | 'UV System' | 'Water Softener' | 'Alkaline System' | 'Gravity Filter' | 'RO+UV System' | 'RO+UV+UF System' | 'Smart RO+UV System'
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
    technology?: string
    certifications?: string
  }
  inStock: boolean
  sku?: string
}

export const products: Product[] = [
  // AURA Series
  {
    id: 1,
    slug: 'aquaguard-aura-ro-uv-uf',
    name: 'Aquaguard Aura RO+UV+UF',
    category: 'RO+UV+UF System',
    price: 18999,
    originalPrice: 24999,
    rating: 4.8,
    reviews: 2834,
    image: '/products/aquaguard-aura-ro-uv-uf.webp',
    images: [
      '/products/aquaguard-aura-ro-uv-uf.webp',
      '/products/aquaguard-aura-ro-uv-uf-alt.webp',
    ],
    badge: 'Best Seller',
    sku: 'AQ-AURA-RUF-01',
    features: [
      '10-Stage Purification Process',
      'Removes Lead, Mercury & Heavy Metals',
      'UV e-Boiling Technology',
      'UF Filters Microplastics & Bacteria',
      '60% Water Savings',
      '7L Storage Tank',
      'Free Service Worth ₹2,000'
    ],
    description: 'The Aquaguard Aura combines advanced 10-stage RO+UV+UF technology to deliver 100% safe drinking water. Features UV e-boiling and saves up to 60% water compared to traditional purifiers.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+UF (10-Stage)',
      warranty: '1 Year Comprehensive',
      dimensions: '365 x 250 x 485 mm',
      weight: '8.5 kg',
      powerConsumption: '36W',
      filterLife: '6000 Liters or 1 Year',
      technology: 'UV e-Boiling, UF Membrane',
      certifications: 'ISI Certified'
    },
    inStock: true
  },
  {
    id: 2,
    slug: 'aquaguard-aura-2x-life-ro-uv',
    name: 'Aquaguard Aura 2X Life RO+UV',
    category: 'RO+UV System',
    price: 16499,
    originalPrice: 21999,
    rating: 4.7,
    reviews: 1923,
    image: '/products/aquaguard-aura-2x-life-ro-uv.webp',
    images: [
      '/products/aquaguard-aura-2x-life-ro-uv.webp',
      '/products/aquaguard-aura-2x-life-ro-uv-alt.webp',
    ],
    badge: '2 Year Filter',
    sku: 'AQ-AURA-2X-01',
    features: [
      '2 Year Filter Life',
      '8-Stage Purification',
      'Active Copper Enrichment',
      '99.9999% Bacteria Removal',
      '99.99% Virus Reduction',
      '50% Water Savings',
      'UV e-Boiling'
    ],
    description: 'Extended filter life with Dual Layer Filter Technology lasting 2 years. Active copper enrichment for enhanced health benefits with 8-stage advanced purification.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+Active Copper (8-Stage)',
      warranty: '1 Year Comprehensive',
      dimensions: '360 x 245 x 480 mm',
      weight: '8.2 kg',
      powerConsumption: '35W',
      filterLife: '2 Years or 12000 Liters',
      technology: 'Dual Layer Filter, Active Copper',
      certifications: 'BIS Certified'
    },
    inStock: true
  },

  // RITZ Series
  {
    id: 3,
    slug: 'aquaguard-ritz-ro-uv',
    name: 'Aquaguard Ritz RO+UV',
    category: 'RO+UV System',
    price: 14999,
    originalPrice: 19999,
    rating: 4.6,
    reviews: 1567,
    image: '/products/aquaguard-ritz-ro-uv.webp',
    images: [
      '/products/aquaguard-ritz-ro-uv.webp',
      '/products/aquaguard-ritz-ro-uv-alt.webp',
    ],
    badge: 'Stainless Steel Tank',
    sku: 'AQ-RITZ-RU-01',
    features: [
      '9-Stage Purification',
      '304-Grade Stainless Steel Tank',
      '99.9999% Bacteria Removal',
      '60% Water Savings',
      'Works with TDS up to 2000 PPM',
      '5.5L Premium Storage',
      'Lifetime Tank Warranty'
    ],
    description: 'Features premium 304-grade stainless steel storage tank with superior durability. 9-stage purification ensures highest water quality with up to 60% water savings.',
    specifications: {
      capacity: '5.5 Liters',
      filtration: 'RO+UV (9-Stage)',
      warranty: '1 Year + Lifetime Tank Warranty',
      dimensions: '340 x 230 x 460 mm',
      weight: '7.8 kg',
      powerConsumption: '32W',
      filterLife: '6000 Liters or 1 Year',
      technology: 'Stainless Steel Tank, RO Membrane',
      certifications: 'ISI Certified'
    },
    inStock: true
  },
  {
    id: 4,
    slug: 'aquaguard-ritz-pro-2x-smart',
    name: 'Aquaguard Ritz Pro 2X Smart',
    category: 'Smart RO+UV System',
    price: 22499,
    originalPrice: 29999,
    rating: 4.9,
    reviews: 892,
    image: '/products/aquaguard-ritz-ro-uv-alt.webp',
    images: [
      '/products/aquaguard-ritz-ro-uv-alt.webp',
      '/products/aquaguard-ritz-ro-uv.webp',
    ],
    badge: 'IoT Enabled',
    sku: 'AQ-RITZ-PRO-IOT',
    features: [
      'Wi-Fi Enabled IoT Connectivity',
      '2 Year Titanium Filter Life',
      '9-Stage Advanced Purification',
      'Real-Time TDS Monitoring',
      '21-Point Device Health Check',
      'Eureka Forbes App Control',
      '304-Grade SS Tank with Lifetime Warranty'
    ],
    description: 'Smart water purifier with IoT capabilities. Monitor water quality and device health through the Eureka Forbes app. Features 2-year titanium filters and premium stainless steel tank.',
    specifications: {
      capacity: '5.5 Liters',
      filtration: 'RO+UV+IoT (9-Stage Advanced)',
      warranty: '1 Year + Lifetime Tank Warranty',
      dimensions: '345 x 235 x 465 mm',
      weight: '8.5 kg',
      powerConsumption: '35W',
      filterLife: '2 Years or 12000 Liters',
      technology: 'IoT Connectivity, Titanium Filters, Real-time TDS',
      certifications: 'ISI Certified, Wi-Fi Certified'
    },
    inStock: true
  },

  // GLORY Series
  {
    id: 5,
    slug: 'aquaguard-glory-ro-uv-uf',
    name: 'Aquaguard Glory RO+UV+UF',
    category: 'RO+UV+UF System',
    price: 17999,
    originalPrice: 23999,
    rating: 4.7,
    reviews: 2145,
    image: '/products/aquaguard-aura-ro-uv-uf-alt.webp',
    images: [
      '/products/aquaguard-aura-ro-uv-uf-alt.webp',
      '/products/aquaguard-aura-ro-uv-uf.webp',
    ],
    badge: '5 Year Service',
    sku: 'AQ-GLORY-RUF-01',
    features: [
      '9-Stage Purification Process',
      '3-in-1 Active Copper Technology',
      'Copper, Calcium & Magnesium Enrichment',
      '99.9999% Bacteria Elimination',
      'Unlimited Breakdown Visits - 5 Years',
      'Suitable for All Water Sources',
      '7L Storage Capacity'
    ],
    description: 'Premium purifier with 3-in-1 Active Copper technology enriching water with essential minerals. Includes 5 years of unlimited breakdown visits for complete peace of mind.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+UF+Active Copper (9-Stage)',
      warranty: '1 Year + 5 Years Service',
      dimensions: '360 x 245 x 485 mm',
      weight: '8.5 kg',
      powerConsumption: '36W',
      filterLife: '6000 Liters or 1 Year',
      technology: '3-in-1 Active Copper, Mineral Enrichment',
      certifications: 'BIS Certified'
    },
    inStock: true
  },

  // ENHANCE Series
  {
    id: 6,
    slug: 'aquaguard-enhance-ro-uv-mtds',
    name: 'Aquaguard Enhance RO+UV+MTDS',
    category: 'RO+UV System',
    price: 13999,
    originalPrice: 18999,
    rating: 4.5,
    reviews: 1678,
    image: '/products/aquaguard-enhance-nxt-2x-life.webp',
    images: [
      '/products/aquaguard-enhance-nxt-2x-life.webp',
      '/products/aquaguard-enhance-nxt-2x-life-alt.webp',
    ],
    sku: 'AQ-ENHANCE-RUM-01',
    features: [
      '7-Stage Purification',
      'Mineral Guard Technology',
      'BioTron Cartridge',
      '15L/hr Purification Capacity',
      'Handles TDS up to 2000 ppm',
      '7L Storage Tank',
      'Energy Efficient'
    ],
    description: 'Combines Mineral Guard technology with BioTron cartridge for enhanced health benefits. Efficient 7-stage purification with 15 liters per hour capacity.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+MTDS+BioTron (7-Stage)',
      warranty: '1 Year Manufacturing Defects',
      dimensions: '350 x 235 x 470 mm',
      weight: '8.0 kg',
      powerConsumption: '32W',
      filterLife: '6000 Liters or 1 Year',
      technology: 'Mineral Guard, BioTron, MTDS',
      certifications: 'ISI Certified'
    },
    inStock: true
  },
  {
    id: 7,
    slug: 'aquaguard-enhance-nxt-2x',
    name: 'Aquaguard Enhance NXT 2X Life',
    category: 'RO+UV+UF System',
    price: 15999,
    originalPrice: 21999,
    rating: 4.6,
    reviews: 1234,
    image: '/products/aquaguard-enhance-nxt-2x-life-alt.webp',
    images: [
      '/products/aquaguard-enhance-nxt-2x-life-alt.webp',
      '/products/aquaguard-enhance-nxt-2x-life.webp',
    ],
    badge: '2X Filter Life',
    sku: 'AQ-ENHANCE-NXT-2X',
    features: [
      '7-Stage RO+UV+TA+UF',
      '2 Year Filter Life',
      'Taste Adjuster (TA)',
      'Compact Design',
      '7L Storage',
      'Energy Saving Mode',
      'Easy Maintenance'
    ],
    description: 'Extended 2-year filter life with Taste Adjuster for customizable water taste. Compact design perfect for modern kitchens with 7-stage purification.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+TA+UF (7-Stage)',
      warranty: '1 Year Onsite Warranty',
      dimensions: '316 x 251 x 462 mm',
      weight: '8.32 kg',
      powerConsumption: '30W',
      filterLife: '2 Years or 12000 Liters',
      technology: 'Taste Adjuster, Extended Filter Life',
      certifications: 'ISI Certified'
    },
    inStock: true
  },

  // ENRICH Series
  {
    id: 8,
    slug: 'aquaguard-enrich-nexen-2x',
    name: 'Aquaguard Enrich Nexen 2X',
    category: 'RO+UV System',
    price: 16999,
    originalPrice: 22999,
    rating: 4.8,
    reviews: 1456,
      image: '/products/aquaguard-enrich-nexen-2x.webp',
      images: [
        '/products/aquaguard-enrich-nexen-2x.webp',
        '/products/aquaguard-enrich-vector-2x.webp',
      ],
    badge: 'Advanced Protection',
    sku: 'AQ-ENRICH-NEXEN-2X',
    features: [
      '2 Year Filter Life (10,000L)',
      'NanoPore 2X Filter Technology',
      'Protects Against Pesticides & Microplastics',
      '3-in-1 Active Copper Infusion',
      'Removes Lead & Mercury',
      'Mega Sediment Filter',
      'BIS Compliant Mineral Enrichment'
    ],
    description: 'Advanced NanoPore 2X technology protects against pesticides, microplastics, lead and mercury. 3-in-1 Active Copper infuses copper, calcium and magnesium as per BIS norms.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+NanoPore 2X+Active Copper',
      warranty: '1 Year Comprehensive',
      dimensions: '365 x 250 x 485 mm',
      weight: '8.7 kg',
      powerConsumption: '36W',
      filterLife: '2 Years or 10000 Liters',
      technology: 'NanoPore 2X, Active Copper, Mega Sediment Filter',
      certifications: 'BIS Certified'
    },
    inStock: true
  },
  {
    id: 9,
    slug: 'aquaguard-enrich-vector-2x',
    name: 'Aquaguard Enrich Vector 2X',
    category: 'RO+UV System',
    price: 15499,
    originalPrice: 20999,
    rating: 4.7,
    reviews: 987,
      image: '/products/aquaguard-enrich-vector-2x.webp',
      images: [
        '/products/aquaguard-enrich-vector-2x.webp',
        '/products/aquaguard-enrich-nexen-2x.webp',
      ],
    sku: 'AQ-ENRICH-VECTOR-2X',
    features: [
      'Mineral-Charged Water Technology',
      'TDS Support up to 2000 mg/L',
      '2 Year Filter Life',
      'Free Installation',
      '7L Storage',
      'Energy Efficient',
      'Compact Design'
    ],
    description: 'Mineral-charged water technology ensures healthy drinking water. Supports high TDS levels up to 2000 mg/L with extended 2-year filter life.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+Mineral Charge (2X)',
      warranty: '1 Year with Free Installation',
      dimensions: '355 x 240 x 475 mm',
      weight: '8.1 kg',
      powerConsumption: '33W',
      filterLife: '2 Years or 10000 Liters',
      technology: 'Mineral Charge, High TDS Support',
      certifications: 'ISI Certified'
    },
    inStock: true
  },

  // SURE Series
  {
    id: 10,
    slug: 'aquaguard-sure-delight-aquasaver',
    name: 'Aquaguard Sure Delight Aquasaver',
    category: 'RO+UV System',
    price: 12999,
    originalPrice: 17999,
    rating: 4.5,
    reviews: 2341,
    image: '/products/aquaguard-sure-delight-aquasaver.webp',
    images: [
      '/products/aquaguard-sure-delight-aquasaver.webp',
      '/products/aquaguard-sure-delight.webp',
    ],
    badge: 'Best Value',
    sku: 'AQ-SURE-DELIGHT-AS',
    features: [
      '2 Year Filter Life',
      '60% More Water Savings',
      'Removes Microplastics',
      'Removes Pesticides & Industrial Waste',
      '6L Storage Tank',
      'Mega Sediment Filter',
      'Affordable Pricing'
    ],
    description: 'Budget-friendly option with 2-year filter life. Saves 60% more water while effectively removing microplastics, pesticides and industrial waste.',
    specifications: {
      capacity: '6 Liters',
      filtration: 'RO+UV+Aquasaver (6-Stage)',
      warranty: '1 Year Comprehensive',
      dimensions: '340 x 220 x 450 mm',
      weight: '7.5 kg',
      powerConsumption: '30W',
      filterLife: '2 Years or 10000 Liters',
      technology: 'Aquasaver, Mega Sediment Filter',
      certifications: 'ISI Certified'
    },
    inStock: true
  },
  {
    id: 11,
    slug: 'aquaguard-sure-6l-ro-uv',
    name: 'Aquaguard Sure 6L RO+UV',
    category: 'RO+UV System',
    price: 11999,
    originalPrice: 15999,
    rating: 4.4,
    reviews: 1789,
    image: '/products/aquaguard-sure-6l-ro-uv.webp',
    images: [
      '/products/aquaguard-sure-6l-ro-uv.webp',
      '/products/aquaguard-sure-delight.webp',
    ],
    sku: 'AQ-SURE-6L-RU',
    features: [
      '2 Year Filter Life',
      'Mega Sediment Filter',
      '6L Storage',
      'Compact Design',
      'Energy Efficient',
      'Easy Maintenance',
      'Affordable Solution'
    ],
    description: 'Compact and affordable RO+UV purifier with 2-year filter life. Perfect for small families with mega sediment filter for enhanced protection.',
    specifications: {
      capacity: '6 Liters',
      filtration: 'RO+UV+Mega Sediment (6-Stage)',
      warranty: '1 Year Comprehensive',
      dimensions: '330 x 210 x 445 mm',
      weight: '7.2 kg',
      powerConsumption: '28W',
      filterLife: '2 Years or 10000 Liters',
      technology: 'Mega Sediment Filter',
      certifications: 'ISI Certified'
    },
    inStock: true
  },

  // ASTOR Series
  {
    id: 12,
    slug: 'aquaguard-astor-ro-uv-mtds',
    name: 'Aquaguard ASTOR RO+UV+MTDS',
    category: 'RO+UV System',
    price: 14499,
    originalPrice: 19499,
    rating: 4.6,
    reviews: 1123,
    image: '/products/aquaguard-astor-ro-uv-mtds.webp',
    images: [
      '/products/aquaguard-astor-ro-uv-mtds.webp',
      '/products/aquaguard-aura-ro-uv-uf.webp',
    ],
    sku: 'AQ-ASTOR-RUM-01',
    features: [
      'Active Copper Technology',
      'MTDS Controller',
      '7L Storage Tank',
      '7-Stage Purification',
      'Smart LED Indicators',
      'Auto Shut-off',
      'Premium Design'
    ],
    description: 'Features Active Copper technology with MTDS controller for maintaining optimum TDS levels. 7-stage purification with smart LED indicators.',
    specifications: {
      capacity: '7 Liters',
      filtration: 'RO+UV+MTDS+Active Copper (7-Stage)',
      warranty: '1 Year Comprehensive',
      dimensions: '355 x 240 x 475 mm',
      weight: '8.0 kg',
      powerConsumption: '33W',
      filterLife: '6000 Liters or 1 Year',
      technology: 'Active Copper, MTDS Controller',
      certifications: 'BIS Certified'
    },
    inStock: true
  },

  // AQUASURE Series
  {
    id: 13,
    slug: 'aquasure-champ-7l-ro',
    name: 'Aquasure Champ 7L RO',
    category: 'RO System',
    price: 9999,
    originalPrice: 13999,
    rating: 4.3,
    reviews: 2567,
    image: '/products/aquasure-champ-7l-ro.webp',
    images: [
      '/products/aquasure-champ-7l-ro.webp',
      '/products/aquasure-amrit-uv-uf.webp',
    ],
    badge: 'Budget Friendly',
    sku: 'AS-CHAMP-7L-RO',
    features: [
      '6000L Filter Life',
      '5-Stage RO Purification',
      '7L Storage Capacity',
      'Affordable Pricing',
      'Compact Design',
      'Easy Installation',
      'Low Maintenance'
    ],
    description: 'Budget-friendly RO purifier with 6000-liter filter life. 5-stage purification in a compact design, perfect for first-time buyers.',
    specifications: {
      capacity: '7 Liters',
      filtration: '5-Stage RO',
      warranty: '1 Year',
      dimensions: '335 x 215 x 455 mm',
      weight: '6.8 kg',
      powerConsumption: '25W',
      filterLife: '6000 Liters or 1 Year',
      technology: 'Standard RO Membrane',
      certifications: 'ISI Certified'
    },
    inStock: true
  },
  {
    id: 14,
    slug: 'aquasure-amrit-uv-uf',
    name: 'Aquasure Amrit UV+UF',
    category: 'UV System',
    price: 8499,
    originalPrice: 11999,
    rating: 4.4,
    reviews: 1823,
    image: '/products/aquasure-amrit-uv-uf.webp',
    images: [
      '/products/aquasure-amrit-uv-uf.webp',
      '/products/aquasure-champ-7l-ro.webp',
    ],
    badge: 'For Municipal Water',
    sku: 'AS-AMRIT-UV-UF',
    features: [
      'UV+UF Technology',
      '20L/hr Flow Rate',
      'Wall/Counter Mountable',
      'Low Maintenance',
      'Filter Alert',
      'Compact Size',
      'No Water Wastage'
    ],
    description: 'Ideal for municipal water with low TDS. High flow rate of 20L/hr with UV+UF technology provides safe drinking water without wastage.',
    specifications: {
      capacity: '20L/hr Flow',
      filtration: 'UV+UF',
      warranty: '1 Year',
      dimensions: '280 x 150 x 380 mm',
      weight: '4.5 kg',
      powerConsumption: '11W',
      filterLife: '4000 Liters or 1 Year',
      technology: 'UV LED, Ultra Filtration',
      certifications: 'ISI Certified'
    },
    inStock: true
  },
  {
    id: 15,
    slug: 'aquasure-xtra-tuff-gravity',
    name: 'Aquasure Xtra Tuff 15L Gravity',
    category: 'Gravity Filter',
    price: 2199,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 3412,
    image: '/products/aquasure-xtra-tuff-gravity.webp',
    images: [
      '/products/aquasure-xtra-tuff-gravity.webp',
      '/products/aquasure-amrit-uv-uf.webp',
    ],
    badge: 'No Electricity',
    sku: 'AS-XTRA-TUFF-15L',
    features: [
      'No Electricity Required',
      'Gravity-Based Technology',
      '15L Storage',
      'Kitanu Magnet Technology',
      'Durable Design',
      'Easy to Clean',
      'Perfect for Power Cuts'
    ],
    description: 'Perfect for areas with frequent power cuts. Uses gravity-based technology with Kitanu Magnet to provide clean drinking water without electricity.',
    specifications: {
      capacity: '15 Liters',
      filtration: 'Gravity + Kitanu Magnet',
      warranty: '1 Year',
      dimensions: '310 x 310 x 520 mm',
      weight: '3.5 kg',
      powerConsumption: 'None (Gravity-based)',
      filterLife: '3000 Liters',
      technology: 'Kitanu Magnet, Gravity Filtration',
      certifications: 'ISI Certified'
    },
    inStock: true
  },

  // BLAZE Series (Hot & Cold)
  {
    id: 16,
    slug: 'aquaguard-blaze-hot-ambient',
    name: 'Aquaguard Blaze Hot & Ambient',
    category: 'RO+UV+UF System',
    price: 25789,
    originalPrice: 32999,
    rating: 4.8,
    reviews: 423,
    image: '/products/aquaguard-blaze-hot-ambient.webp',
    images: [
      '/products/aquaguard-blaze-hot-ambient.webp',
      '/products/aquaguard-aura-ro-uv-uf.webp',
    ],
    badge: 'Hot & Cold',
    sku: 'AQ-BLAZE-HC-01',
    features: [
      'Hot Water Dispenser (80-90°C)',
      'Copper Infusion Technology',
      'Stainless Steel Tank (304-Grade)',
      'RO+UV+UF Purification',
      'Touch Panel Control',
      'Child Safety Lock',
      'Instant Hot Water'
    ],
    description: 'Premium purifier offering both hot and ambient water on demand. Copper-infused stainless steel tank with advanced RO+UV+UF purification and touch panel.',
    specifications: {
      capacity: '4 Liters',
      filtration: 'RO+UV+UF+Copper',
      warranty: '2 Years',
      dimensions: '420 x 280 x 560 mm',
      weight: '12 kg',
      powerConsumption: '2100W (Heating)',
      filterLife: '6000 Liters or 1 Year',
      technology: 'Hot Water System, Copper Infusion, SS Tank',
      certifications: 'ISI Certified'
    },
    inStock: true
  },

  // CRYSTAL Series
  {
    id: 17,
    slug: 'aquaguard-crystal-nxt-hd',
    name: 'Aquaguard Crystal NXT HD',
    category: 'RO+UV+UF System',
    price: 19999,
    originalPrice: 26999,
    rating: 4.6,
    reviews: 678,
    image: '/products/aquaguard-crystal-nxt-hd.webp',
    images: [
      '/products/aquaguard-crystal-nxt-hd.webp',
      '/products/aquaguard-aura-ro-uv-uf.webp',
    ],
    sku: 'AQ-CRYSTAL-NXT-HD',
    features: [
      'HD RO Membrane',
      'UV+UF Protection',
      '8L Tank Capacity',
      'Taste Enhancer Technology',
      'Smart LED Indicators',
      'Modern Premium Design',
      'Energy Efficient'
    ],
    description: 'Features high-definition RO membrane for superior purification. Triple protection with RO+UV+UF ensures 100% safe drinking water with enhanced taste.',
    specifications: {
      capacity: '8 Liters',
      filtration: 'HD RO+UV+UF',
      warranty: '1 Year Comprehensive',
      dimensions: '360 x 240 x 490 mm',
      weight: '8.2 kg',
      powerConsumption: '35W',
      filterLife: '6000 Liters or 1 Year',
      technology: 'HD RO Membrane, Taste Enhancer',
      certifications: 'ISI Certified'
    },
    inStock: true
  },

  // MARVEL Series
  {
    id: 18,
    slug: 'aquaguard-marvel-nxt-uv-uf',
    name: 'Aquaguard Marvel NXT UV+UF',
    category: 'UV System',
    price: 7999,
    originalPrice: 10999,
    rating: 4.6,
    reviews: 892,
    image: '/products/vheezpzvx6yvvlpuqcly.webp',
    images: [
      '/products/vheezpzvx6yvvlpuqcly.webp',
      '/products/mdyhm8vmuln1wyhe62fj.webp',
    ],
    badge: 'For Low TDS',
    sku: 'AQ-MARVEL-NXT-UV',
    features: [
      'UV LED Technology',
      'Ultra Filtration',
      '8L/hr Flow Rate',
      'Energy Efficient (11W)',
      'Taste Adjuster',
      'Filter Change Alert',
      'No Water Wastage'
    ],
    description: 'Perfect for municipal water with low TDS. UV LED technology with UF eliminates bacteria and viruses while maintaining natural minerals in water.',
    specifications: {
      capacity: '6 Liters',
      filtration: 'UV LED+UF',
      warranty: '1 Year',
      dimensions: '320 x 180 x 420 mm',
      weight: '5.2 kg',
      powerConsumption: '11W',
      filterLife: '4000 Liters or 1 Year',
      technology: 'UV LED, Ultra Filtration, Taste Adjuster',
      certifications: 'ISI Certified'
    },
    inStock: true
  },

  // ASPIRE Series
  {
    id: 19,
    slug: 'aquaguard-aspire-nova-pro',
    name: 'Aquaguard Aspire Nova Pro',
    category: 'RO+UV System',
    price: 24999,
    originalPrice: 32999,
    rating: 4.8,
    reviews: 567,
    image: '/products/aquaguard-aspire-nova-pro.webp',
    images: [
      '/products/aquaguard-aspire-nova-pro.webp',
      '/products/aquaguard-ritz-ro-uv-alt.webp',
    ],
    badge: 'Premium IoT',
    sku: 'AQ-ASPIRE-NOVA-PRO',
    features: [
      '6000L Capacity',
      'Stainless Steel Tank',
      '2X IoT Technology',
      'App Connectivity',
      'Advanced Monitoring',
      'Premium Build Quality',
      'Smart Notifications'
    ],
    description: 'Premium 6000L capacity purifier with RO+UV and stainless steel construction. Features 2X IoT technology for advanced monitoring and control via smartphone app.',
    specifications: {
      capacity: '6 Liters',
      filtration: 'RO+UV+IoT (Advanced)',
      warranty: '1 Year + Lifetime SS Tank',
      dimensions: '370 x 260 x 500 mm',
      weight: '9.5 kg',
      powerConsumption: '40W',
      filterLife: '6000 Liters or 1 Year',
      technology: '2X IoT, Stainless Steel, Smart Monitoring',
      certifications: 'ISI Certified, IoT Certified'
    },
    inStock: true
  },

  // SELECT Series
  {
    id: 20,
    slug: 'aquaguard-select-classic-ro',
    name: 'Aquaguard Select Classic+ RO',
    category: 'RO System',
    price: 8999,
    originalPrice: 12999,
    rating: 4.5,
    reviews: 967,
    image: '/products/aquaguard-select-classic-ro.webp',
    images: [
      '/products/aquaguard-select-classic-ro.webp',
      '/products/aquasure-amrit-uv-uf.webp',
    ],
    badge: 'Entry Level',
    sku: 'AQ-SELECT-CLASSIC-RO',
    features: [
      '5-Stage RO Purification',
      '6L Storage Tank',
      'Smart Indicators',
      'Auto Shut-off',
      'Food Grade Plastic',
      'Easy Installation',
      'Value for Money'
    ],
    description: 'Entry-level RO purifier offering reliable 5-stage purification at an affordable price. Perfect for families looking for basic RO technology.',
    specifications: {
      capacity: '6 Liters',
      filtration: '5-Stage RO',
      warranty: '1 Year',
      dimensions: '330 x 200 x 440 mm',
      weight: '6.5 kg',
      powerConsumption: '25W',
      filterLife: '4000 Liters or 1 Year',
      technology: 'Standard RO Membrane',
      certifications: 'ISI Certified'
    },
    inStock: true
  },

  // Water Softener
  {
    id: 21,
    slug: 'whole-house-water-softener',
    name: 'Whole House Water Softener 2000L',
    category: 'Water Softener',
    price: 35999,
    originalPrice: 45999,
    rating: 4.7,
    reviews: 234,
    image: '/products/zroo0vq0dlmipbkimhx5.webp',
    images: [
      '/products/zroo0vq0dlmipbkimhx5.webp',
      '/products/wshflbdmhbeyi1iral5j.webp',
    ],
    badge: 'Whole House',
    sku: 'WS-WHOLE-HOUSE-2K',
    features: [
      'Ion Exchange Technology',
      '2000L/Day Capacity',
      'Auto Regeneration',
      'Digital Timer Control',
      'Salt Level Indicator',
      'Suitable for Borewell Water',
      'Protects All Appliances'
    ],
    description: 'Protect your entire home from hard water damage. Ion exchange technology removes calcium and magnesium, extending appliance life and improving water quality throughout your home.',
    specifications: {
      capacity: '2000L/day',
      filtration: 'Ion Exchange Resin',
      warranty: '3 Years',
      dimensions: '450 x 300 x 600 mm',
      weight: '18 kg',
      powerConsumption: '15W',
      technology: 'Auto Regeneration, Digital Control',
      certifications: 'ISI Certified'
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
