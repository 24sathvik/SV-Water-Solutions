"use client"

import { useRef, useEffect, useState } from 'react'
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
    text: 'The RO system from SV Water Solutions has been a game-changer for our family. The water tastes amazing and we feel confident about its purity.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Restaurant Owner',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    rating: 5,
    text: 'We installed their commercial water purification system in our restaurant last year. The difference in taste and quality is noticeable.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'IT Professional',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    rating: 5,
    text: 'Excellent product and even better service! The water softener has made such a difference - no more scaling on fixtures.',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'School Principal',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    rating: 5,
    text: 'We needed a reliable water purification solution for our school, and SV Water Solutions delivered perfectly.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Factory Manager',
    location: 'Pune',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    rating: 5,
    text: 'Their industrial water treatment solution has exceeded our expectations. Outstanding technical support team!',
  },
  {
    id: 6,
    name: 'Anjali Mehta',
    role: 'Apartment Resident',
    location: 'Chennai',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    rating: 5,
    text: 'Love my new water purifier! It fits perfectly under the sink and the water quality is exceptional.',
  },
]

const stats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '5,000+', label: 'Happy Customers' },
  { value: '10+', label: 'Years Experience' },
  { value: '99%', label: 'Satisfaction Rate' }
]

export default function Testimonials() {
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
    <section ref={sectionRef} className="bg-charcoal py-20 text-white lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mb-14 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-aqua/10 px-5 py-2.5 border border-aqua/20">
            <Star className="h-4 w-4 fill-aqua text-aqua" />
            <span className="text-sm font-medium text-aqua">Customer Reviews</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Trusted by Thousands
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            See what our satisfied customers have to say about their experience with SV Water Solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-0 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-10 w-10 text-aqua/30" />

                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="mb-6 text-gray-300 leading-relaxed">{testimonial.text}</p>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aqua/20 ring-2 ring-aqua/20">
                        <User className="h-6 w-6 text-aqua" />
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
            </div>
          ))}
        </div>

        <div className={`mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold text-aqua">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
