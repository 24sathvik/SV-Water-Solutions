"use client"

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Star, Droplet, MessageCircle } from 'lucide-react'
import { products } from '@/lib/products'

const featuredProducts = products.slice(0, 8)

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(4)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  const maxIndex = Math.max(0, featuredProducts.length - itemsPerPage)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const handleEnquiry = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${productName}. Please share more details.`)
    window.open(`https://wa.me/918297612490?text=${message}`, '_blank')
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const visibleProducts = featuredProducts.slice(currentIndex, currentIndex + itemsPerPage)

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
            Discover our best-selling water purifiers with advanced RO, UV & UF technologies
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {product.badge && (
                        <Badge className="absolute left-4 top-4 bg-aqua text-white shadow-lg">
                          {product.badge}
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1">
                    <div className="mb-2 text-sm font-medium text-aqua">{product.category}</div>
                    <h3 className="mb-2 text-lg font-semibold text-charcoal line-clamp-2">{product.name}</h3>
                    
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-charcoal">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>

                    <ul className="mb-4 space-y-1.5">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-aqua" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-aqua">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <div className="mt-1 text-xs text-green-600 font-medium">
                        Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex flex-col gap-2">
                    <Button 
                      className="w-full bg-charcoal text-white transition-all duration-300 hover:bg-aqua hover:shadow-lg" 
                      asChild
                    >
                      <Link href={`/water-purifiers/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-green-500 text-green-600 hover:bg-green-50 transition-all duration-300"
                      onClick={() => handleEnquiry(product.name)}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enquire Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-10 flex justify-center gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="h-12 w-12 rounded-full border-2 border-charcoal/20 transition-all duration-300 hover:border-aqua hover:bg-aqua hover:text-white"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-6 bg-aqua' : 'w-2 bg-charcoal/20 hover:bg-charcoal/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="h-12 w-12 rounded-full border-2 border-charcoal/20 transition-all duration-300 hover:border-aqua hover:bg-aqua hover:text-white"
            aria-label="Next products"
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
