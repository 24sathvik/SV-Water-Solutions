"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    rating: 5,
    text: 'The RO system from SV Water Solutions has been a game-changer for our family. The water tastes amazing and we feel confident about its purity. Installation was seamless and their service team is always responsive.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Restaurant Owner',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    rating: 5,
    text: 'We installed their commercial water purification system in our restaurant last year. The difference in taste and quality is noticeable. Our customers appreciate it, and the AMC plan keeps everything running smoothly.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'IT Professional',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    rating: 5,
    text: 'Excellent product and even better service! The water softener has made such a difference - no more scaling on fixtures and appliances. The team is knowledgeable and professional. Highly recommend!',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'School Principal',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    rating: 5,
    text: 'We needed a reliable water purification solution for our school, and SV Water Solutions delivered perfectly. The high-capacity system handles our needs effortlessly, and maintenance is hassle-free.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Factory Manager',
    location: 'Pune',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    rating: 5,
    text: 'Their industrial water treatment solution has exceeded our expectations. The system is robust, efficient, and has significantly reduced our operational costs. Outstanding technical support team!',
  },
  {
    id: 6,
    name: 'Anjali Mehta',
    role: 'Apartment Resident',
    location: 'Chennai',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    rating: 5,
    text: 'Love my new water purifier! It fits perfectly under the sink and the water quality is exceptional. The smart display is a nice touch. Installation was quick and the technician was very helpful.',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-charcoal py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-aqua/10 px-4 py-2">
            <Star className="h-4 w-4 fill-aqua text-aqua" />
            <span className="text-sm font-medium text-aqua">Customer Reviews</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Trusted by Thousands
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            See what our satisfied customers have to say about their experience with SV Water Solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-0 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="mb-4 h-10 w-10 text-aqua/30" />

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 text-gray-300">{testimonial.text}</p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-aqua">4.9/5</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-aqua">10,000+</div>
            <div className="text-sm text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-aqua">5,000+</div>
            <div className="text-sm text-gray-400">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-aqua">99%</div>
            <div className="text-sm text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
