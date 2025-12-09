"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
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

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { duration: 2000 })
  const display = useTransform(spring, (current) => Math.floor(current))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  useEffect(() => {
    return display.on("change", (v) => setDisplayValue(v))
  }, [display])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const stats = [
    { value: 4.9, suffix: '/5', label: 'Average Rating' },
    { value: 10000, suffix: '+', label: 'Happy Customers' },
    { value: 5000, suffix: '+', label: '5-Star Reviews' },
    { value: 99, suffix: '%', label: 'Satisfaction Rate' }
  ]

  return (
    <section ref={sectionRef} className="bg-charcoal py-20 text-white lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div 
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-aqua/10 px-5 py-2.5 border border-aqua/20"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="h-4 w-4 fill-aqua text-aqua" />
            <span className="text-sm font-medium text-aqua">Customer Reviews</span>
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Trusted by Thousands
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            See what our satisfied customers have to say about their experience with SV Water Solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full border-0 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-xl hover:shadow-aqua/5">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <Quote className="mb-4 h-10 w-10 text-aqua/30" />
                    </motion.div>

                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.4 + index * 0.05 + i * 0.05, type: "spring" }}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="mb-6 text-gray-300 leading-relaxed">{testimonial.text}</p>

                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-aqua/20"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role} • {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="mb-2 text-4xl font-bold text-aqua">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}