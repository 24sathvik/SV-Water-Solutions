"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Star, Droplet } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'AquaPure RO Pro',
    category: 'RO System',
    price: '$299',
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=600&q=80',
    badge: 'Best Seller',
    features: ['7-Stage Filtration', 'Smart Display', '12L Storage']
  },
  {
    id: 2,
    name: 'UltraClean UV+',
    category: 'UV System',
    price: '$199',
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&q=80',
    badge: 'New',
    features: ['UV LED Technology', 'Energy Efficient', '8L/hr Flow']
  },
  {
    id: 3,
    name: 'SoftFlow Elite',
    category: 'Water Softener',
    price: '$449',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    badge: 'Premium',
    features: ['Auto Regeneration', 'Salt Indicator', 'Compact Design']
  },
  {
    id: 4,
    name: 'PureFlow Alkaline',
    category: 'Alkaline System',
    price: '$349',
    rating: 4.7,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1582736020550-730a0b8f89e0?w=600&q=80',
    badge: 'Popular',
    features: ['pH Enhancement', 'Mineral Boost', '10L Capacity']
  },
]

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-aqua/10 px-4 py-2">
            <Droplet className="h-4 w-4 text-aqua" />
            <span className="text-sm font-medium text-aqua">Featured Products</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
            Top Water Purification Systems
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our best-selling water purifiers designed for superior performance and reliability
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute left-4 top-4 bg-aqua text-white">
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm text-muted-foreground">{product.category}</div>
                  <h3 className="mb-2 text-xl font-semibold text-charcoal">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-charcoal">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  {/* Features */}
                  <ul className="mb-4 space-y-1">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-aqua" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-2xl font-bold text-aqua">{product.price}</div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-charcoal text-white hover:bg-charcoal/90" asChild>
                    <Link href={`/water-purifiers/${product.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-12 w-12 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-12 w-12 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/water-purifiers">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
