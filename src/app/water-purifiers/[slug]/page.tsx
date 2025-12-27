"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  Star,
  Check,
  Share2,
  Truck,
  Shield,
  Wrench,
  MessageCircle,
  Phone,
  ChevronLeft
} from 'lucide-react'
import { getProductBySlug, products } from '@/lib/products'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleEnquiry = () => {
    const message = encodeURIComponent(`Hi, I'm interested in ${product.name} (${formatPrice(product.price)}). Please share more details and availability.`)
    window.open(`https://wa.me/918297612490?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+918297612490', '_self')
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'SV Water Solutions'
    },
    offers: {
      '@type': 'Offer',
      url: `https://svwatersolutions.com/water-purifiers/${product.slug}`,
      priceCurrency: 'INR',
      price: product.price,
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'SV Water Solutions'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-aqua">Home</Link>
            <ChevronLeft className="h-4 w-4 rotate-180" />
            <Link href="/water-purifiers" className="hover:text-aqua">Water Purifiers</Link>
            <ChevronLeft className="h-4 w-4 rotate-180" />
            <span className="text-charcoal">{product.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.badge && (
                  <Badge className="absolute left-4 top-4 bg-aqua text-white">
                    {product.badge}
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge className="absolute right-4 top-4 bg-green-600 text-white">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index ? 'border-aqua' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-2 text-sm text-muted-foreground">{product.category}</div>
                <h1 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
                  {product.name}
                </h1>

                <div className="mb-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium text-charcoal">{product.rating}</span>
                  </div>
                  <Separator orientation="vertical" className="h-6" />
                  <span className="text-sm text-muted-foreground">
                    {product.reviews} reviews
                  </span>
                </div>

                <div className="mb-6 flex items-baseline gap-3 flex-wrap">
                  <span className="text-4xl font-bold text-aqua">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <Badge className="bg-green-600 text-white">
                        Save {formatPrice(product.originalPrice - product.price)}
                      </Badge>
                    </>
                  )}
                </div>

                <p className="mb-6 text-muted-foreground">{product.description}</p>

                <div className="mb-6">
                  {product.inStock ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">In Stock - Free Installation Available</span>
                    </div>
                  ) : (
                    <div className="text-red-600">Out of Stock</div>
                  )}
                </div>

                <div className="mb-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="flex-1 bg-green-600 text-white hover:bg-green-700"
                    onClick={handleEnquiry}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enquire on WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-aqua text-aqua hover:bg-aqua hover:text-white"
                    onClick={handleCall}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>

<div className="mb-6">
                    <Button size="lg" variant="outline" className="w-full">
                      <Share2 className="mr-2 h-5 w-5" />
                      Share Product
                    </Button>
                  </div>

                <div className="grid grid-cols-3 gap-4 rounded-lg bg-off-white p-4">
                  <div className="text-center">
                    <Truck className="mx-auto mb-2 h-6 w-6 text-aqua" />
                    <div className="text-xs font-medium">Free Delivery</div>
                  </div>
                  <div className="text-center">
                    <Shield className="mx-auto mb-2 h-6 w-6 text-aqua" />
                    <div className="text-xs font-medium">{product.specifications.warranty}</div>
                  </div>
                  <div className="text-center">
                    <Wrench className="mx-auto mb-2 h-6 w-6 text-aqua" />
                    <div className="text-xs font-medium">Free Installation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold">Key Features</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-aqua/10">
                            <Check className="h-4 w-4 text-aqua" />
                          </div>
                          <div>
                            <div className="font-medium">{feature}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold">Technical Specifications</h3>
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b pb-3">
                          <span className="font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold">Customer Reviews</h3>
                    <div className="mb-6 flex items-center gap-6">
                      <div className="text-center">
                        <div className="mb-2 text-5xl font-bold text-aqua">{product.rating}</div>
                        <div className="flex justify-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {product.reviews} reviews
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-muted-foreground">
                      Reviews coming soon. Be the first to review this product!
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">You May Also Like</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products
                .filter((p) => p.id !== product.id && p.category === product.category)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="overflow-hidden group">
                    <Link href={`/water-purifiers/${relatedProduct.slug}`}>
                      <div className="relative aspect-square">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-2 font-semibold line-clamp-2">{relatedProduct.name}</h3>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{relatedProduct.rating}</span>
                        </div>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="text-xl font-bold text-aqua">
                            {formatPrice(relatedProduct.price)}
                          </span>
                          {relatedProduct.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {formatPrice(relatedProduct.originalPrice)}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Link>
                    <div className="px-4 pb-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-green-500 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
                          onClick={(e) => {
                            e.preventDefault()
                            const msg = encodeURIComponent(`Hi, I'm interested in ${relatedProduct.name}. Please share details.`)
                            window.open(`https://wa.me/918297612490?text=${msg}`, '_blank')
                          }}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Enquire
                        </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}