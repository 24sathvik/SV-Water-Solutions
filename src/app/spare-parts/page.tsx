"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, MessageCircle, Package, Phone } from 'lucide-react'

const categories = [
  'All Parts',
  'Filters & Membranes',
  'Storage Tanks',
  'Pumps & Motors',
  'UV Lamps',
  'Faucets & Taps',
  'Pipes & Connectors',
  'Electrical Parts'
]

const spareParts = [
  // RO Membranes
  {
    id: 1,
    name: 'RO Membrane 75 GPD',
    sku: 'EF-ROM-75GPD',
    category: 'Filters & Membranes',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
    inStock: true,
    compatibility: 'Aquaguard, Kent, Livpure',
    description: 'High-quality 75 GPD RO membrane suitable for most residential RO systems. Ensures effective removal of TDS and impurities.'
  },
  {
    id: 2,
    name: 'RO Membrane 100 GPD',
    sku: 'EF-ROM-100GPD',
    category: 'Filters & Membranes',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
    inStock: true,
    compatibility: 'Aquaguard Aura, Ritz, Glory',
    description: 'Premium 100 GPD RO membrane for higher flow rate. Ideal for larger families and commercial use.'
  },

  // Pre & Post Filters
  {
    id: 3,
    name: 'Sediment Filter 5 Micron',
    sku: 'EF-SF-5M',
    category: 'Filters & Membranes',
    price: 299,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Removes dirt, sand, rust and other sediment particles. First stage of filtration.'
  },
  {
    id: 4,
    name: 'Carbon Block Filter',
    sku: 'EF-CBF-10',
    category: 'Filters & Membranes',
    price: 399,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Removes chlorine, odor, bad taste and organic compounds. Improves water taste significantly.'
  },
  {
    id: 5,
    name: 'i-Filter Cartridge',
    sku: 'EF-IFIL-01',
    category: 'Filters & Membranes',
    price: 599,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Aquaguard Models',
    description: 'Intelligent filter with advanced sediment removal technology. Lasts up to 6000 liters.'
  },
  {
    id: 6,
    name: 'Chemi-Block Filter',
    sku: 'EF-CHEM-01',
    category: 'Filters & Membranes',
    price: 499,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Aquaguard, Aquasure',
    description: 'Removes chemicals, pesticides and improves water clarity. Essential for borewell water.'
  },
  {
    id: 7,
    name: 'Pre-Filter Set (3 Pack)',
    sku: 'EF-PFS-3P',
    category: 'Filters & Membranes',
    price: 899,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Complete set including sediment, carbon and post-carbon filters. Complete annual replacement kit.'
  },

  // UV Lamps
  {
    id: 8,
    name: 'UV Lamp 8W',
    sku: 'EF-UVL-8W',
    category: 'UV Lamps',
    price: 999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    inStock: true,
    compatibility: 'Aquasure, Entry-level Models',
    description: 'Replacement 8W UV lamp with 5000-hour lifespan. Kills 99.99% bacteria and viruses.'
  },
  {
    id: 9,
    name: 'UV Lamp 11W',
    sku: 'EF-UVL-11W',
    category: 'UV Lamps',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    inStock: true,
    compatibility: 'Aquaguard Aura, Glory, Enhance',
    description: 'Standard 11W UV lamp for most Aquaguard models. 5000 burning hours guaranteed.'
  },
  {
    id: 10,
    name: 'UV LED Module',
    sku: 'EF-UV-LED',
    category: 'UV Lamps',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    inStock: true,
    compatibility: 'Ritz Pro, Marvel NXT',
    description: 'Advanced UV LED module with 10-year lifespan. Energy efficient and mercury-free.'
  },

  // Storage Tanks
  {
    id: 11,
    name: 'Storage Tank 6L',
    sku: 'EF-ST-6L',
    category: 'Storage Tanks',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    inStock: true,
    compatibility: 'Compact Models',
    description: 'Food-grade 6-liter plastic storage tank with air pressure bladder system.'
  },
  {
    id: 12,
    name: 'Storage Tank 8L',
    sku: 'EF-ST-8L',
    category: 'Storage Tanks',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    inStock: true,
    compatibility: 'Standard RO Systems',
    description: 'Durable 8-liter food-grade storage tank. Suitable for most Aquaguard models.'
  },
  {
    id: 13,
    name: 'Storage Tank 12L',
    sku: 'EF-ST-12L',
    category: 'Storage Tanks',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    inStock: true,
    compatibility: 'Large Capacity Systems',
    description: 'Large 12-liter food-grade plastic storage tank with air pressure bladder.'
  },
  {
    id: 14,
    name: 'Stainless Steel Tank 5.5L',
    sku: 'EF-SST-5.5L',
    category: 'Storage Tanks',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    inStock: true,
    compatibility: 'Ritz, Aspire Models',
    description: 'Premium 304-grade stainless steel tank. Corrosion-resistant with lifetime warranty.'
  },

  // Pumps & Motors
  {
    id: 15,
    name: 'Booster Pump 75 GPD',
    sku: 'EF-BP-75',
    category: 'Pumps & Motors',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
    inStock: true,
    compatibility: 'All RO Systems',
    description: 'Increases water pressure for optimal RO membrane performance. Essential for low-pressure areas.'
  },
  {
    id: 16,
    name: 'SMPS Power Supply 24V 2.5A',
    sku: 'EF-SMPS-24V',
    category: 'Pumps & Motors',
    price: 799,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80',
    inStock: true,
    compatibility: 'Most RO Systems',
    description: 'Switching mode power supply for pump and UV lamp. Surge protection included.'
  },

  // Special Cartridges
  {
    id: 17,
    name: 'MTDS Cartridge',
    sku: 'EF-MTDS-01',
    category: 'Filters & Membranes',
    price: 699,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Aura, Glory, Enhance',
    description: 'Mineral Taste & Deposit Shield cartridge. Maintains optimal TDS and adds essential minerals.'
  },
  {
    id: 18,
    name: 'Active Copper Cartridge',
    sku: 'EF-ACC-01',
    category: 'Filters & Membranes',
    price: 899,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Glory, Enrich Series',
    description: 'Infuses copper for enhanced immunity and health benefits. BIS certified copper dosing.'
  },
  {
    id: 19,
    name: 'Active Copper + Zinc Cartridge',
    sku: 'EF-ACZ-01',
    category: 'Filters & Membranes',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Nrich HD, Premium Models',
    description: 'Dual infusion of copper and zinc for maximum health benefits. Hospital-grade quality.'
  },
  {
    id: 20,
    name: 'Alkaline Cartridge',
    sku: 'EF-ALK-01',
    category: 'Filters & Membranes',
    price: 799,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Compatible Models',
    description: 'Increases pH and adds beneficial minerals. Creates alkaline water for better health.'
  },

  // Faucets & Taps
  {
    id: 21,
    name: 'Designer Faucet - Chrome',
    sku: 'EF-TAP-CHR',
    category: 'Faucets & Taps',
    price: 999,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Premium chrome-finished faucet with ceramic valve. Leak-proof and durable.'
  },
  {
    id: 22,
    name: 'Designer Faucet - Matt Black',
    sku: 'EF-TAP-BLK',
    category: 'Faucets & Taps',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Modern matt black finish faucet. Premium ceramic valve with 360° rotation.'
  },
  {
    id: 23,
    name: 'Long Reach Faucet',
    sku: 'EF-TAP-LR',
    category: 'Faucets & Taps',
    price: 899,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Extended reach faucet for wall-mounted installations. Chrome plated brass.'
  },

  // Pipes & Connectors
  {
    id: 24,
    name: 'Quick Connect Kit',
    sku: 'EF-QCK-01',
    category: 'Pipes & Connectors',
    price: 499,
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Set of quick-connect fittings (10 pieces). Easy installation without tools.'
  },
  {
    id: 25,
    name: 'Food Grade Pipe 5 Meters',
    sku: 'EF-PIPE-5M',
    category: 'Pipes & Connectors',
    price: 299,
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Food-grade 1/4" PE pipe. 5-meter roll for complete system installation.'
  },
  {
    id: 26,
    name: 'Inline Filter Housing',
    sku: 'EF-IFH-10',
    category: 'Pipes & Connectors',
    price: 699,
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Clear housing for 10-inch inline filters. Easy to monitor filter condition.'
  },
  {
    id: 27,
    name: 'Flow Restrictor Set',
    sku: 'EF-FRS-01',
    category: 'Pipes & Connectors',
    price: 199,
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
    inStock: true,
    compatibility: 'RO Systems',
    description: 'Set of flow restrictors (300ml, 400ml, 550ml). Controls waste water ratio.'
  },

  // Electrical Parts
  {
    id: 28,
    name: 'Power Adapter 24V 2A',
    sku: 'EF-PA-24V-2A',
    category: 'Electrical Parts',
    price: 599,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80',
    inStock: true,
    compatibility: 'Most RO Systems',
    description: 'Universal 24V 2A power adapter with surge protection. BIS certified.'
  },
  {
    id: 29,
    name: 'TDS Meter Digital',
    sku: 'EF-TDS-01',
    category: 'Electrical Parts',
    price: 749,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Digital TDS meter for water quality testing. Range: 0-9999 ppm with temperature display.'
  },
  {
    id: 30,
    name: 'Solenoid Valve 24V',
    sku: 'EF-SOL-24V',
    category: 'Electrical Parts',
    price: 899,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80',
    inStock: true,
    compatibility: 'RO Systems',
    description: 'Auto shut-off solenoid valve. Controls water flow when tank is full.'
  },
  {
    id: 31,
    name: 'High/Low Pressure Switch',
    sku: 'EF-HLP-01',
    category: 'Electrical Parts',
    price: 699,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80',
    inStock: true,
    compatibility: 'RO Systems with Pump',
    description: 'Dual pressure switch for pump protection. Prevents dry run and over-pressure.'
  },

  // Miscellaneous
  {
    id: 32,
    name: 'Float Valve Assembly',
    sku: 'EF-FVA-01',
    category: 'Storage Tanks',
    price: 299,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    inStock: true,
    compatibility: 'All Storage Tanks',
    description: 'Auto shut-off float valve for storage tanks. Prevents overflow.'
  },
  {
    id: 33,
    name: 'Complete Service Kit (RO+UV)',
    sku: 'EF-CSK-RU',
    category: 'Filters & Membranes',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'RO+UV Systems',
    description: 'Annual maintenance kit with all filters and membrane. Complete replacement package.'
  },
  {
    id: 34,
    name: 'NanoPore 2X Filter',
    sku: 'EF-NP2X-01',
    category: 'Filters & Membranes',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Enrich Nexen Models',
    description: 'Advanced NanoPore 2X technology filter. Removes pesticides and microplastics. 2-year life.'
  },
  {
    id: 35,
    name: 'Mega Sediment Filter',
    sku: 'EF-MSF-01',
    category: 'Filters & Membranes',
    price: 449,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Sure, Enrich Series',
    description: 'High-capacity sediment filter with 2-year life. Ideal for high sediment water sources.'
  },
  {
    id: 36,
    name: 'Filter Wrench Set',
    sku: 'EF-FWS-01',
    category: 'Pipes & Connectors',
    price: 399,
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Professional filter wrench set (2 pieces). Easy filter replacement without damage.'
  }
]

export default function SparePartsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Parts')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredParts = spareParts.filter(part => {
    const categoryMatch = selectedCategory === 'All Parts' || part.category === selectedCategory
    const searchMatch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       part.description.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleEnquiry = (partName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${partName}. Please share availability and price.`)
    window.open(`https://wa.me/918297612490?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-off-white pt-24">
      <section className="bg-charcoal py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Spare Parts & Accessories</h1>
            <p className="text-lg text-gray-300">
              Genuine spare parts and accessories for all water purifiers. 
              Compatible with Aquaguard, Aquasure, Kent, Livpure & more.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search spare parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  <h2 className="font-semibold">Categories</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-aqua text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6 bg-aqua/10">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-charcoal">Need Help?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Not sure which part you need? Contact our experts.
                </p>
                <Button className="w-full bg-aqua text-white hover:bg-aqua-dark" asChild>
                  <a href="tel:+919999999999">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold">{filteredParts.length}</span> parts
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredParts.map((part) => (
                <Card key={part.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={part.image}
                        alt={part.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {part.inStock && (
                        <Badge className="absolute right-4 top-4 bg-green-500 text-white">
                          In Stock
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1">
                    <div className="mb-2 text-xs text-muted-foreground">{part.category}</div>
                    <h3 className="mb-2 text-lg font-semibold text-charcoal">{part.name}</h3>
                    <div className="mb-2 text-xs font-mono text-aqua">SKU: {part.sku}</div>
                    <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                      {part.description}
                    </p>
                    <div className="mb-3 flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="text-xs">
                        {part.compatibility}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-aqua">{formatPrice(part.price)}</div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      className="w-full bg-green-600 text-white hover:bg-green-700"
                      onClick={() => handleEnquiry(part.name)}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enquire Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredParts.length === 0 && (
              <div className="py-12 text-center">
                <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold">No parts found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>
        </div>

        <section className="mt-16 rounded-lg bg-white p-8">
          <h2 className="mb-6 text-2xl font-bold text-charcoal">Why Choose Our Spare Parts?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold text-aqua">Genuine Quality</h3>
              <p className="text-sm text-muted-foreground">
                All parts are genuine or certified compatible, ensuring optimal performance and longevity.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-aqua">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Most parts ship within 24 hours. Get your system back up and running quickly.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-aqua">Expert Support</h3>
              <p className="text-sm text-muted-foreground">
                Not sure which part you need? Our technical team is here to help you find the right solution.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}