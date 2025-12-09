"use client"

import { useState, useRef, useEffect } from 'react'
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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const next = () => setCurrentIndex((prev) => (prev + 1) % products.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mb-14 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-aqua/10 px-5 py-2.5 border border-aqua/20 transition-transform duration-300 hover:scale-105">
            <Droplet className="h-4 w-4 text-aqua" />
            <span className="text-sm font-medium text-aqua">Featured Products</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Top Water Purification Systems
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our best-selling water purifiers designed for superior performance and reliability
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute left-4 top-4 bg-aqua text-white shadow-lg">
                      {product.badge}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm font-medium text-aqua">{product.category}</div>
                  <h3 className="mb-2 text-xl font-semibold text-charcoal">{product.name}</h3>
                  
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-charcoal">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <ul className="mb-4 space-y-1.5">
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
                  <Button 
                    className="w-full bg-charcoal text-white transition-all duration-300 hover:bg-aqua hover:shadow-lg" 
                    asChild
                  >
                    <Link href={`/water-purifiers/${product.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className={`mt-10 flex justify-center gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="h-12 w-12 rounded-full border-2 border-charcoal/20 transition-all duration-300 hover:border-aqua hover:bg-aqua hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="h-12 w-12 rounded-full border-2 border-charcoal/20 transition-all duration-300 hover:border-aqua hover:bg-aqua hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className={`mt-14 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-2 border-charcoal px-8 py-6 text-base font-semibold transition-all duration-300 hover:bg-charcoal hover:text-white"
          >
            <Link href="/water-purifiers">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
