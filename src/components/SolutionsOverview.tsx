"use client"

import { useRef, useEffect, useState } from 'react'
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
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
  },
  {
    icon: Building2,
    title: 'Commercial Solutions',
    description: 'High-capacity water treatment for offices, restaurants, hotels, and retail spaces. Reliable performance for high-volume needs.',
    features: ['Office water dispensers', 'Restaurant systems', 'Hotel solutions'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    icon: Factory,
    title: 'Industrial Solutions',
    description: 'Advanced water treatment systems for manufacturing, processing plants, and large-scale operations with custom requirements.',
    features: ['Process water treatment', 'Wastewater management', 'Custom solutions'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
  },
]

export default function SolutionsOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section ref={sectionRef} className="bg-off-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mb-14 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Water Solutions for Every Need
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Whether you need purification for your home, business, or industry, we have the perfect solution
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="group relative h-full overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${solution.image})` }}
                    />
                  </div>

                  <div className="relative p-8">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-aqua/10 transition-all duration-300 group-hover:bg-aqua group-hover:scale-110">
                      <Icon className="h-8 w-8 text-aqua transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-charcoal">{solution.title}</h3>
                    <p className="mb-6 text-muted-foreground leading-relaxed">{solution.description}</p>

                    <ul className="mb-6 space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-aqua" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="ghost"
                      className="group/btn -ml-4 text-aqua hover:text-aqua-dark hover:bg-aqua/10"
                      asChild
                    >
                      <Link href="/water-solutions">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </Link>
                    </Button>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-aqua to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Card>
              </div>
            )
          })}
        </div>

        <div className={`mt-14 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <p className="mb-5 text-muted-foreground">
            Not sure which solution is right for you?
          </p>
          <Button 
            size="lg" 
            asChild 
            className="bg-aqua px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-charcoal hover:shadow-xl"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
