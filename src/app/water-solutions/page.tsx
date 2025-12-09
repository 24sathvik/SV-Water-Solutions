"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Home, 
  Building2, 
  Factory, 
  Check,
  ArrowRight,
  Droplet,
  Shield,
  Zap,
  Users
} from 'lucide-react'

const solutions = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Solutions',
    subtitle: 'Pure Water for Your Home',
    description: 'Comprehensive water purification systems designed specifically for homes and apartments. Ensure your family has access to clean, safe drinking water every day.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    features: [
      'Under-sink RO systems',
      'Whole-house water filters',
      'Kitchen countertop purifiers',
      'Water softeners for homes',
      'Alkaline water systems',
      'UV sterilization units'
    ],
    benefits: [
      'Removes 99.9% of contaminants',
      'Improves taste and odor',
      'Protects appliances from scale',
      'Low maintenance costs',
      'Energy efficient',
      'Easy installation'
    ],
    applications: [
      'Apartments & Flats',
      'Independent Houses',
      'Villas',
      'Gated Communities'
    ]
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Solutions',
    subtitle: 'Reliable Systems for Business',
    description: 'High-capacity water treatment solutions for offices, restaurants, hotels, and retail spaces. Built for reliability and high-volume requirements.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    features: [
      'Office water dispensers',
      'Restaurant-grade systems',
      'Hotel water solutions',
      'Retail space purifiers',
      'High-flow RO systems',
      'Commercial water coolers'
    ],
    benefits: [
      'High capacity output',
      'Consistent water quality',
      'Minimal downtime',
      'Cost-effective operations',
      'Professional installation',
      'Dedicated support'
    ],
    applications: [
      'Corporate Offices',
      'Restaurants & Cafes',
      'Hotels & Resorts',
      'Shopping Malls',
      'Healthcare Facilities',
      'Educational Institutions'
    ]
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Solutions',
    subtitle: 'Advanced Treatment for Industry',
    description: 'Customized water treatment systems for manufacturing, processing plants, and large-scale operations. Engineered for demanding industrial applications.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    features: [
      'Process water treatment',
      'Wastewater management',
      'Boiler feed water systems',
      'Cooling tower treatment',
      'Zero liquid discharge',
      'Custom engineered solutions'
    ],
    benefits: [
      'Meets industry standards',
      'Reduces operational costs',
      'Improves product quality',
      'Environmental compliance',
      'Scalable systems',
      'Expert technical support'
    ],
    applications: [
      'Manufacturing Plants',
      'Food & Beverage Industry',
      'Pharmaceutical Units',
      'Chemical Processing',
      'Power Plants',
      'Textile Industries'
    ]
  }
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All systems are certified and meet international quality standards'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals with deep industry knowledge'
  },
  {
    icon: Zap,
    title: 'Fast Service',
    description: 'Quick installation and responsive maintenance support'
  },
  {
    icon: Droplet,
    title: 'Customized Solutions',
    description: 'Tailored water treatment systems for your specific needs'
  }
]

export default function WaterSolutionsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563310118-e66bb5b1d1f9?w=1920&q=80)' }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Water Solutions for Every Need
            </h1>
            <p className="mb-8 text-lg text-gray-300 md:text-xl">
              From homes to industries, we provide complete water purification solutions 
              tailored to your specific requirements.
            </p>
            <Button size="lg" asChild className="bg-aqua text-white hover:bg-aqua-dark">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon
        const isEven = index % 2 === 0
        
        return (
          <section 
            key={solution.id} 
            className={isEven ? 'bg-off-white py-16' : 'bg-white py-16'}
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${!isEven && 'lg:grid-flow-dense'}`}>
                {/* Image */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-aqua/10">
                    <Icon className="h-8 w-8 text-aqua" />
                  </div>
                  
                  <h2 className="mb-2 text-3xl font-bold text-charcoal md:text-4xl">
                    {solution.title}
                  </h2>
                  <p className="mb-4 text-xl text-aqua">{solution.subtitle}</p>
                  <p className="mb-8 text-muted-foreground">{solution.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="mb-4 font-semibold text-charcoal">What We Offer:</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-aqua" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="bg-charcoal text-white hover:bg-charcoal/90">
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Benefits & Applications */}
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-charcoal">Key Benefits</h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm">
                          <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-aqua" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-charcoal">Ideal For</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.map((app) => (
                        <Badge key={app} variant="outline" className="border-aqua text-aqua">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Choose Us */}
      <section className="bg-charcoal py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose SV Water Solutions?</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              We're committed to delivering the best water treatment solutions with unmatched service quality
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="bg-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-aqua/20">
                      <Icon className="h-6 w-6 text-aqua" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-aqua to-aqua-dark py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Find Your Perfect Water Solution?
          </h2>
          <p className="mb-8 text-lg">
            Let our experts help you choose the right system for your needs
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/water-purifiers">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
