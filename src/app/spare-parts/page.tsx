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
  {
    id: 1,
    name: 'Aquaguard Pre Filter Assembly - RO',
    sku: 'AQ-PFA-RO',
    category: 'Filters & Membranes',
    price: 1070,
    image: '/products/aquaguard-pre-filter-assembly.webp',
    inStock: true,
    compatibility: 'Aquaguard RO Systems',
    description: 'Genuine Aquaguard Pre-Filter Assembly for RO systems. Protects the main membrane from sediment and large particles.'
  },
  {
    id: 2,
    name: 'Aquaguard UV Kit with Active Copper',
    sku: 'AQ-UVK-AC',
    category: 'UV Lamps',
    price: 2599,
    image: '/products/aquaguard-uv-kit.webp',
    inStock: true,
    compatibility: 'Aquaguard UV Systems',
    description: 'Complete UV kit with Active Copper technology for advanced purification and health benefits.'
  },
  {
    id: 3,
    name: 'Aquaguard UV+UF Kit with Active Copper',
    sku: 'AQ-UVUF-AC',
    category: 'Filters & Membranes',
    price: 4805,
    image: '/products/aquaguard-pre-filter-assembly.webp',
    inStock: true,
    compatibility: 'Aquaguard UV+UF Systems',
    description: 'Combined UV and UF kit featuring Active Copper technology for comprehensive protection.'
  },
  {
    id: 4,
    name: 'Aquaguard RO+UV Kit with Active Copper',
    sku: 'AQ-ROUV-AC',
    category: 'Filters & Membranes',
    price: 4599,
    image: '/products/fdwcpzkcfe9eadjgjikv.webp',
    inStock: true,
    compatibility: 'Aquaguard RO+UV Systems',
    description: 'Advanced RO+UV purification kit with the goodness of Active Copper.'
  },
  {
    id: 5,
    name: 'Aquaguard RO+UV Kit with Alkaline Boost',
    sku: 'AQ-ROUV-AB',
    category: 'Filters & Membranes',
    price: 4599,
    image: '/products/fdwcpzkcfe9eadjgjikv.webp',
    inStock: true,
    compatibility: 'Aquaguard RO+UV Systems',
    description: 'RO+UV kit with Alkaline Boost technology to maintain optimal pH levels and add essential minerals.'
  },
  {
    id: 6,
    name: 'Aquaguard Enhance UV Kit',
    sku: 'AQ-ENH-UV',
    category: 'UV Lamps',
    price: 1632,
    image: '/products/aquaguard-uv-kit.webp',
    inStock: true,
    compatibility: 'Aquaguard Enhance Series',
    description: 'Specific UV kit designed for the Aquaguard Enhance series of water purifiers.'
  },
  {
    id: 7,
    name: 'Aquaguard Reviva NXT RO Kit',
    sku: 'AQ-REV-RO',
    category: 'Filters & Membranes',
    price: 3424,
    image: '/products/fdwcpzkcfe9eadjgjikv.webp',
    inStock: true,
    compatibility: 'Aquaguard Reviva NXT',
    description: 'Full RO membrane and filter kit for Aquaguard Reviva NXT models.'
  },
  {
    id: 8,
    name: 'Aquaguard Pre Filter Assembly RO - PL6',
    sku: 'AQ-PFA-PL6',
    category: 'Filters & Membranes',
    price: 1040,
    image: '/products/aquaguard-pre-filter-assembly.webp',
    inStock: true,
    compatibility: 'Aquaguard RO Systems',
    description: 'Premium Pre-Filter Assembly PL6 for enhanced sediment removal and membrane protection.'
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
                  <a href="tel:+918297612490">
                    <Button variant="outline" className="w-full border-aqua text-aqua hover:bg-aqua hover:text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Call for Expert Help
                    </Button>
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