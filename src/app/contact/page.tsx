"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappNumber = '1234567890'
  const whatsappMessage = encodeURIComponent('Hi, I would like to inquire about your water purification solutions.')

  return (
    <main className="min-h-screen bg-off-white pt-24">
      {/* Hero Section */}
      <section className="bg-charcoal py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Get in Touch</h1>
            <p className="text-lg text-gray-300">
              Have questions? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp CTA - Prominent */}
            <Card className="border-2 border-aqua bg-gradient-to-br from-aqua/10 to-aqua/5">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aqua">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">Chat with us now</p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-aqua text-white hover:bg-aqua-dark"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Message on WhatsApp
                  </a>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Average response time: &lt; 5 minutes
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua/10">
                    <Phone className="h-5 w-5 text-aqua" />
                  </div>
                  <h3 className="font-semibold text-charcoal">Call Us</h3>
                </div>
                <a 
                  href="tel:+1234567890" 
                  className="block text-lg font-medium text-aqua hover:underline"
                >
                  +1 (234) 567-890
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mon-Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua/10">
                    <Mail className="h-5 w-5 text-aqua" />
                  </div>
                  <h3 className="font-semibold text-charcoal">Email Us</h3>
                </div>
                <a 
                  href="mailto:info@svwatersolutions.com" 
                  className="block font-medium text-aqua hover:underline"
                >
                  info@svwatersolutions.com
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua/10">
                    <MapPin className="h-5 w-5 text-aqua" />
                  </div>
                  <h3 className="font-semibold text-charcoal">Visit Us</h3>
                </div>
                <address className="not-italic text-muted-foreground">
                  123 Water Street,<br />
                  Business District,<br />
                  City, State 12345
                </address>
                <Button variant="outline" className="mt-4 w-full" asChild>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua/10">
                    <Clock className="h-5 w-5 text-aqua" />
                  </div>
                  <h3 className="font-semibold text-charcoal">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-charcoal">Message Sent!</h3>
                    <p className="mb-6 text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="mb-2 text-2xl font-bold text-charcoal">Send us a Message</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll respond as soon as possible
                      </p>
                    </div>

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
                            placeholder="+1 (234) 567-890"
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
                        <Label htmlFor="subject">Subject *</Label>
                        <Select 
                          value={formData.subject} 
                          onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                            <SelectItem value="service-request">Service Request</SelectItem>
                            <SelectItem value="amc-plan">AMC Plan</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="flex-1 bg-aqua text-white hover:bg-aqua-dark"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            'Sending...'
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          variant="outline"
                          className="border-aqua text-aqua hover:bg-aqua hover:text-white"
                          asChild
                        >
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            WhatsApp
                          </a>
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="mt-6">
              <CardContent className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176616257956!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: 'What areas do you serve?',
                a: 'We serve customers across the entire nation with installation, maintenance, and support services.'
              },
              {
                q: 'How long does installation take?',
                a: 'Most installations are completed within 2-3 hours. Our technicians ensure everything is set up perfectly.'
              },
              {
                q: 'Do you offer warranties?',
                a: 'Yes! All our products come with comprehensive warranties ranging from 1-3 years depending on the model.'
              },
              {
                q: 'Can I get a free water quality test?',
                a: 'Absolutely! We offer free water quality testing to help you choose the right purification system.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-charcoal">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
