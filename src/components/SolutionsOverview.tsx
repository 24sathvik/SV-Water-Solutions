"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, Building2, Factory, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Home,
    title: 'Residential Solutions',
    description: 'Complete water purification systems for homes and apartments. Ensure your family drinks pure, safe water every day.',
    features: ['Under-sink RO systems', 'Whole-house filters', 'Kitchen purifiers'],
    color: 'aqua',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
  },
  {
    icon: Building2,
    title: 'Commercial Solutions',
    description: 'High-capacity water treatment for offices, restaurants, hotels, and retail spaces. Reliable performance for high-volume needs.',
    features: ['Office water dispensers', 'Restaurant systems', 'Hotel solutions'],
    color: 'charcoal',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    icon: Factory,
    title: 'Industrial Solutions',
    description: 'Advanced water treatment systems for manufacturing, processing plants, and large-scale operations with custom requirements.',
    features: ['Process water treatment', 'Wastewater management', 'Custom solutions'],
    color: 'aqua',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
  },
]

export default function SolutionsOverview() {
  return (
    <section className="bg-off-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
            Water Solutions for Every Need
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Whether you need purification for your home, business, or industry, we have the perfect solution
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Card
                key={solution.title}
                className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${solution.image})` }}
                  />
                </div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-aqua/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-aqua">
                    <Icon className="h-8 w-8 text-aqua transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-2xl font-bold text-charcoal">{solution.title}</h3>
                  <p className="mb-6 text-muted-foreground">{solution.description}</p>

                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-aqua" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="group/btn -ml-4 text-aqua hover:text-aqua-dark"
                    asChild
                  >
                    <Link href="/water-solutions">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-aqua transition-all duration-300 group-hover:w-full" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Not sure which solution is right for you?
          </p>
          <Button size="lg" asChild className="bg-aqua text-white hover:bg-aqua-dark">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
