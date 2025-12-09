"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, ShoppingCart, Package } from 'lucide-react'

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
  {
    id: 1,
    name: 'RO Membrane 75 GPD',
    category: 'Filters & Membranes',
    price: 45,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'High-quality 75 GPD RO membrane suitable for most residential systems'
  },
  {
    id: 2,
    name: 'Pre-Filter Set (3 Pack)',
    category: 'Filters & Membranes',
    price: 25,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Sediment, carbon, and post-carbon filters for complete purification'
  },
  {
    id: 3,
    name: 'Storage Tank 12L',
    category: 'Storage Tanks',
    price: 65,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    inStock: true,
    compatibility: 'Standard RO Systems',
    description: 'Food-grade plastic storage tank with air pressure bladder'
  },
  {
    id: 4,
    name: 'Booster Pump 75 GPD',
    category: 'Pumps & Motors',
    price: 55,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
    inStock: true,
    compatibility: 'RO Systems',
    description: 'Increases water pressure for optimal RO performance'
  },
  {
    id: 5,
    name: 'UV Lamp 11W',
    category: 'UV Lamps',
    price: 35,
    image: 'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=400&q=80',
    inStock: true,
    compatibility: 'UV Systems',
    description: 'Replacement UV lamp with 9000-hour lifespan'
  },
  {
    id: 6,
    name: 'Designer Faucet - Chrome',
    category: 'Faucets & Taps',
    price: 28,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Premium chrome-finished faucet with ceramic valve'
  },
  {
    id: 7,
    name: 'Quick Connect Kit',
    category: 'Pipes & Connectors',
    price: 15,
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Set of quick-connect fittings for easy installation'
  },
  {
    id: 8,
    name: 'Power Adapter 24V',
    category: 'Electrical Parts',
    price: 18,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80',
    inStock: true,
    compatibility: 'Most RO Systems',
    description: 'Universal 24V power adapter with surge protection'
  },
  {
    id: 9,
    name: 'Carbon Block Filter',
    category: 'Filters & Membranes',
    price: 12,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Removes chlorine, odor, and improves taste'
  },
  {
    id: 10,
    name: 'TDS Meter Digital',
    category: 'Electrical Parts',
    price: 22,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Digital TDS meter for water quality testing'
  },
  {
    id: 11,
    name: 'Float Valve Assembly',
    category: 'Storage Tanks',
    price: 8,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    inStock: true,
    compatibility: 'Storage Tanks',
    description: 'Auto shut-off float valve for storage tanks'
  },
  {
    id: 12,
    name: 'Inline Filter Housing',
    category: 'Pipes & Connectors',
    price: 20,
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
    inStock: true,
    compatibility: 'Universal',
    description: 'Clear housing for 10-inch inline filters'
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

  return (
    <main className="min-h-screen bg-off-white pt-24">
      {/* Hero Section */}
      <section className="bg-charcoal py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Spare Parts & Accessories</h1>
            <p className="text-lg text-gray-300">
              Genuine spare parts and accessories for all your water purification needs. 
              Quality guaranteed, compatible with most brands.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Search Bar */}
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
          {/* Categories Sidebar */}
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

            {/* Help Card */}
            <Card className="mt-6 bg-aqua/10">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-charcoal">Need Help?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Not sure which part you need? Contact our experts.
                </p>
                <Button className="w-full bg-aqua text-white hover:bg-aqua-dark" asChild>
                  <a href="tel:+1234567890">Call Us Now</a>
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Parts Grid */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold">{filteredParts.length}</span> parts
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredParts.map((part) => (
                <Card key={part.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
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
                  <CardContent className="p-6">
                    <div className="mb-2 text-xs text-muted-foreground">{part.category}</div>
                    <h3 className="mb-2 text-lg font-semibold text-charcoal">{part.name}</h3>
                    <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                      {part.description}
                    </p>
                    <div className="mb-3 flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="text-xs">
                        {part.compatibility}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-aqua">${part.price}</div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full bg-charcoal text-white hover:bg-charcoal/90">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
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

        {/* Information Section */}
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
