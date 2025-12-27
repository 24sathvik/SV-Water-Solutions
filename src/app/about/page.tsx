import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  Users, 
  Briefcase, 
  Heart,
  Target,
  Zap,
  Shield,
  ThumbsUp,
  CheckCircle2
} from 'lucide-react'

const milestones = [
  { year: '2015', title: 'Company Founded', description: 'Started with a vision to provide clean water' },
  { year: '2017', title: '500 Customers', description: 'Reached our first major milestone' },
  { year: '2019', title: 'Industry Recognition', description: 'Awarded "Best Water Solutions Provider"' },
  { year: '2022', title: '3,000+ Installations', description: 'Served over 3,000 happy customers' },
  { year: '2024', title: 'Regional Expansion', description: 'Now serving customers across Telangana' }
]

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on quality. Every product undergoes rigorous testing.'
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction is our priority. We go the extra mile for our customers.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly improving and adopting the latest water purification technologies.'
  },
  {
    icon: ThumbsUp,
    title: 'Reliability',
    description: 'Dependable products and services you can count on, day after day.'
  }
]

const stats = [
  { icon: Users, value: '5,000+', label: 'Happy Customers' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Briefcase, value: '25+', label: 'Expert Team' },
  { icon: CheckCircle2, value: '99%', label: 'Satisfaction Rate' }
]

const certifications = [
  'ISO 9001:2015 Certified',
  'NSF/ANSI Standard 58',
  'Water Quality Association Member',
  'Industry Leading Warranty',
  'BIS Certified Products',
  'Green Technology Award'
]

export default function AboutPage() {
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
              <Badge className="mb-4 bg-aqua text-white">Est. 2015</Badge>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                About SV Water Solutions
              </h1>
              <p className="text-lg text-gray-300 md:text-xl">
                For over 10 years, we've been committed to providing pure, safe drinking water 
                to homes and businesses. Our mission is simple: ensure every drop counts.
              </p>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-off-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="mx-auto mb-3 h-10 w-10 text-aqua" />
                  <div className="mb-1 text-3xl font-bold text-charcoal md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
              <p>
                    SV Water Solutions was founded in 2015 with a simple yet powerful vision: 
                    to make clean, safe drinking water accessible to everyone. What started as 
                    a small operation has grown into one of the region's most trusted water 
                    purification companies.
                  </p>
                  <p>
                    Our founder recognized the critical need for reliable water 
                    purification solutions after witnessing water quality issues affecting families 
                    in Telangana. With a background in engineering and a passion for public health, 
                    he set out to create a company that would prioritize quality, service, and customer satisfaction.
                  </p>
                  <p>
                    Today, we serve over 5,000 satisfied customers across residential, commercial, 
                    and industrial sectors. Our team of 25+ experts works tirelessly to ensure that 
                    every installation meets our high standards of excellence.
                  </p>
                <p>
                  We're not just selling water purifiers – we're providing peace of mind, protecting 
                  health, and building lasting relationships with our customers.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl lg:aspect-auto lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-off-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These principles guide everything we do and shape how we serve our customers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-aqua/10">
                      <Icon className="h-8 w-8 text-aqua" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-charcoal">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Key milestones that shaped SV Water Solutions
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-aqua/20 md:left-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative grid gap-8 md:grid-cols-2 ${
                    index % 2 === 0 ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <div className="inline-block rounded-full bg-aqua px-4 py-1 text-sm font-semibold text-white">
                      {milestone.year}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-charcoal">{milestone.title}</h3>
                    <p className="mt-1 text-muted-foreground">{milestone.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 top-0 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Certifications Section */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
                Certifications & Awards
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Recognized for quality and excellence in water purification
              </p>
            </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold text-charcoal">{member.name}</h3>
                  <p className="mb-2 text-sm font-medium text-aqua">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
              Certifications & Awards
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Recognized for quality and excellence in water purification
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <Card key={cert} className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex items-center gap-3 p-6">
                  <Award className="h-8 w-8 flex-shrink-0 text-aqua" />
                  <span className="font-medium text-charcoal">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-aqua to-aqua-dark py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Join Thousands of Satisfied Customers
          </h2>
          <p className="mb-8 text-lg">
            Experience the SV Water Solutions difference. Pure water, pure trust.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal transition-all" asChild>
                <Link href="/water-purifiers">Explore Products</Link>
              </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
