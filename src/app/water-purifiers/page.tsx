"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Star, Filter, SlidersHorizontal } from 'lucide-react'
import { products } from '@/lib/products'

const categories = ['All', 'RO System', 'UV System', 'Water Softener', 'Alkaline System', 'Gravity Filter']

export default function WaterPurifiersPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState('featured')

  // Filter products
  let filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && priceMatch
  })

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'popular':
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  return (
    <main className="min-h-screen bg-off-white pt-24">
      {/* Hero Section */}
      <section className="bg-charcoal py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Water Purifiers</h1>
            <p className="text-lg text-gray-300">
              Explore our comprehensive range of water purification systems designed for every need and budget.
              From compact RO systems to industrial-grade solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters Sidebar */}
          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  <h2 className="font-semibold">Filters</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="mb-3 text-sm font-medium">Category</h3>
                  <div className="space-y-2">
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
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="mb-3 text-sm font-medium">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </h3>
                  <Slider
                    min={0}
                    max={1000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory('All')
                    setPriceRange([0, 1000])
                  }}
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-aqua/10">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-charcoal">Need Help Choosing?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Our experts can help you find the perfect water purifier for your needs.
                </p>
                <Button className="w-full bg-aqua text-white hover:bg-aqua-dark" asChild>
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div>
            {/* Toolbar */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <CardHeader className="p-0">
                    <Link href={`/water-purifiers/${product.slug}`}>
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {product.badge && (
                          <Badge className="absolute left-4 top-4 bg-aqua text-white">
                            {product.badge}
                          </Badge>
                        )}
                        {product.originalPrice && (
                          <Badge className="absolute right-4 top-4 bg-red-500 text-white">
                            Save ${product.originalPrice - product.price}
                          </Badge>
                        )}
                      </div>
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-2 text-sm text-muted-foreground">{product.category}</div>
                    <Link href={`/water-purifiers/${product.slug}`}>
                      <h3 className="mb-2 text-xl font-semibold text-charcoal transition-colors hover:text-aqua">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-charcoal">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-aqua">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Top Features */}
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-aqua" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full bg-charcoal text-white hover:bg-charcoal/90" asChild>
                      <Link href={`/water-purifiers/${product.slug}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="py-12 text-center">
                <Filter className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters to see more results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
