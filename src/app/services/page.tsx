"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Check, 
  Wrench, 
  Shield, 
  Zap, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react'

const amcPlans = [
  {
    name: 'Basic',
    price: 2999,
    duration: 'per year',
    features: [
      '2 Free Service Visits',
      'Filter Cleaning',
      'Basic Maintenance',
      'Email Support',
      'Service Reports'
    ],
    popular: false
  },
  {
    name: 'Standard',
    price: 5999,
    duration: 'per year',
    features: [
      '4 Free Service Visits',
      'Filter Replacement (1 Set)',
      'Complete Maintenance',
      'Priority Support',
      '10% Discount on Parts',
      'Emergency Service',
      'Service Reports'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: 8999,
    duration: 'per year',
    features: [
      '6 Free Service Visits',
      'Filter Replacement (2 Sets)',
      'Complete Maintenance',
      '24/7 Priority Support',
      '20% Discount on Parts',
      'Emergency Service',
      'Free Water Testing',
      'Extended Warranty',
      'Service Reports'
    ],
    popular: false
  }
]

const services = [
  {
    icon: Wrench,
    title: 'Installation',
    description: 'Professional installation of all types of water purification systems',
    price: 'Starting at ₹1,499'
  },
  {
    icon: Shield,
    title: 'AMC Plans',
    description: 'Comprehensive annual maintenance contracts for peace of mind',
    price: 'From ₹2,999/year'
  },
  {
    icon: Zap,
    title: 'Repair & Maintenance',
    description: 'Quick and reliable repair services for all brands',
    price: 'Starting at ₹899'
  },
  {
    icon: Calendar,
    title: 'Water Testing',
    description: 'Complete water quality analysis and TDS testing',
    price: 'From ₹749'
  }
]

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <main className="min-h-screen bg-off-white pt-24">
      {/* Hero Section */}
      <section className="bg-charcoal py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-lg text-gray-300">
              Complete water purification services - from installation to maintenance. 
              Expert care for your water systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">What We Offer</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Professional services to keep your water purification system running at peak performance
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="text-center transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-aqua/10">
                      <Icon className="h-8 w-8 text-aqua" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-charcoal">{service.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                    <div className="font-semibold text-aqua">{service.price}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AMC Plans */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">Annual Maintenance Contracts</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose the perfect maintenance plan for your needs. Save time, money, and ensure optimal performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {amcPlans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.popular ? 'border-aqua shadow-xl' : 'hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute left-0 right-0 top-0 bg-aqua py-2 text-center text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <CardHeader className={plan.popular ? 'pt-12' : ''}>
                  <h3 className="mb-2 text-2xl font-bold text-charcoal">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-aqua">₹{plan.price.toLocaleString('en-IN')}</span>
                    <span className="text-muted-foreground">/{plan.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-aqua" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-aqua text-white hover:bg-aqua-dark' 
                        : 'bg-charcoal text-white hover:bg-charcoal/90'
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            All plans include GST. Terms and conditions apply.
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">Book a Service</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              placeholder="+91 8297612490"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />

                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="repair">Repair & Maintenance</SelectItem>
                      <SelectItem value="amc">AMC Plan</SelectItem>
                      <SelectItem value="testing">Water Testing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Service Address *</Label>
                  <Input
                    id="address"
                    required
                    placeholder="123 Main Street, City"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-aqua text-white hover:bg-aqua-dark">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-charcoal py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Need Immediate Assistance?</h2>
            <p className="text-gray-300">Our team is here to help you</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-4 h-10 w-10 text-aqua" />
                <h3 className="mb-2 font-semibold">Call Us</h3>
                <a href="tel:+1234567890" className="text-aqua hover:underline">
                  +91 8297612490
                </a>
                <div className="mt-2 text-sm text-gray-400">Mon-Sat: 9AM - 6PM</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-4 h-10 w-10 text-aqua" />
                <h3 className="mb-2 font-semibold">Email Us</h3>
                <a href="mailto:service@svwatersolutions.com" className="text-aqua hover:underline">
                  service@svwatersolutions.com
                </a>
                <div className="mt-2 text-sm text-gray-400">24/7 Support</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Clock className="mx-auto mb-4 h-10 w-10 text-aqua" />
                <h3 className="mb-2 font-semibold">Business Hours</h3>
                <div className="text-aqua">Mon-Sat: 9AM - 6PM</div>
                <div className="mt-2 text-sm text-gray-400">Sunday: Closed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}