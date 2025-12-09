"use client"

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div 
          className="mb-14 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-aqua/10 px-5 py-2.5 border border-aqua/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Droplet className="h-4 w-4 text-aqua" />
            <span className="text-sm font-medium text-aqua">Featured Products</span>
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Top Water Purification Systems
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our best-selling water purifiers designed for superior performance and reliability
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="group overflow-hidden border-0 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                    <CardHeader className="p-0">
                      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <Badge className="absolute left-4 top-4 bg-aqua text-white shadow-lg">
                            {product.badge}
                          </Badge>
                        </motion.div>
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
                        {product.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={feature} 
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + featureIndex * 0.1 }}
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-aqua" />
                            {feature}
                          </motion.li>
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
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="h-12 w-12 rounded-full border-2 border-charcoal/20 transition-all duration-300 hover:border-aqua hover:bg-aqua hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="h-12 w-12 rounded-full border-2 border-charcoal/20 transition-all duration-300 hover:border-aqua hover:bg-aqua hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-charcoal px-8 py-6 text-base font-semibold transition-all duration-300 hover:bg-charcoal hover:text-white"
            >
              <Link href="/water-purifiers">
                View All Products
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}