"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Droplets, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const roMachines = [
  {
    name: "Aquaguard RO Pro",
    image: "https://images.unsplash.com/photo-1624958723474-046b2e0e1548?w=400&q=80",
    position: "left-[5%]"
  },
  {
    name: "Smart UV Purifier",
    image: "https://images.unsplash.com/photo-1585687433141-694dd10f84be?w=400&q=80",
    position: "left-[35%]"
  },
  {
    name: "Premium RO System",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    position: "left-[65%]"
  }
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal"
    >
      {/* Background Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#0d1f2d] to-charcoal" />
      
      {/* RO Machines with Water Splash Effect */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Water Pattern Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C8D7' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* RO Purifier Machines */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end justify-center">
          {mounted && roMachines.map((machine, index) => (
            <motion.div
              key={index}
              className={`absolute bottom-[10%] ${machine.position} w-[180px] h-[280px] md:w-[220px] md:h-[340px] lg:w-[260px] lg:h-[400px]`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.5 + index * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Machine Glow */}
              <div className="absolute inset-0 bg-aqua/20 blur-3xl rounded-full transform scale-75" />
              
              {/* Machine Container */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl"
              >
                {/* Water Purifier Icon/Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[70%] h-[80%] bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-white/20 flex flex-col items-center justify-center p-4">
                    <div className="w-full h-[15%] bg-aqua/30 rounded-t-lg mb-2" />
                    <Droplets className="w-12 h-12 md:w-16 md:h-16 text-aqua/60" />
                    <div className="mt-4 w-[80%] h-2 bg-aqua/40 rounded-full" />
                    <div className="mt-2 w-[60%] h-2 bg-white/20 rounded-full" />
                    <div className="mt-auto w-full h-[10%] bg-gray-700 rounded-b-lg" />
                  </div>
                </div>
                
                {/* Reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent" />
              </motion.div>
              
              {/* Machine Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.2 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="text-xs md:text-sm text-aqua/80 font-medium">{machine.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Water Splash Animation - Left to Right */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Water Wave */}
          {mounted && (
            <>
              <motion.div
                className="absolute bottom-0 left-0 w-[200%] h-[40%]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waterGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(0, 200, 215, 0)" />
                      <stop offset="30%" stopColor="rgba(0, 200, 215, 0.3)" />
                      <stop offset="50%" stopColor="rgba(0, 200, 215, 0.5)" />
                      <stop offset="70%" stopColor="rgba(0, 200, 215, 0.3)" />
                      <stop offset="100%" stopColor="rgba(0, 200, 215, 0)" />
                    </linearGradient>
                  </defs>
                  <path 
                    fill="url(#waterGradient1)" 
                    d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  />
                </svg>
              </motion.div>

              {/* Secondary Wave */}
              <motion.div
                className="absolute bottom-0 left-0 w-[200%] h-[35%]"
                initial={{ x: "-50%" }}
                animate={{ x: "50%" }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waterGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(0, 200, 215, 0)" />
                      <stop offset="40%" stopColor="rgba(0, 229, 247, 0.2)" />
                      <stop offset="60%" stopColor="rgba(0, 229, 247, 0.4)" />
                      <stop offset="100%" stopColor="rgba(0, 200, 215, 0)" />
                    </linearGradient>
                  </defs>
                  <path 
                    fill="url(#waterGradient2)" 
                    d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,208C672,235,768,277,864,272C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  />
                </svg>
              </motion.div>

              {/* Water Splash Droplets - Left to Right */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`splash-${i}`}
                  className="absolute rounded-full bg-aqua/60"
                  style={{
                    width: Math.random() * 20 + 5,
                    height: Math.random() * 20 + 5,
                    bottom: `${20 + Math.random() * 30}%`,
                    filter: 'blur(1px)',
                  }}
                  initial={{ 
                    x: -100,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    x: ['-10vw', '110vw'],
                    y: [0, -50 - Math.random() * 100, 50 + Math.random() * 50],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1.2, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Water Mist Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-aqua/5 via-transparent to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  x: ['-10%', '10%', '-10%']
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </>
          )}
        </div>

        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/30 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/40" />
      </motion.div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {mounted && [...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
              background: `radial-gradient(circle at 30% 30%, rgba(0, 200, 215, ${0.3 + Math.random() * 0.3}), rgba(0, 200, 215, 0.1))`,
              boxShadow: `inset 0 0 4px rgba(255, 255, 255, 0.5), 0 0 8px rgba(0, 200, 215, 0.3)`,
            }}
            animate={{
              y: [0, -(typeof window !== 'undefined' ? window.innerHeight + 100 : 900)],
              x: [0, Math.sin(i) * 30],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              y: {
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              },
              x: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              },
              opacity: {
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                times: [0, 0.1, 0.9, 1],
              }
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8"
      >
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-aqua/30 bg-aqua/10 px-5 py-2.5 backdrop-blur-md"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2.5 w-2.5 rounded-full bg-aqua shadow-[0_0_10px_rgba(0,200,215,0.8)]"
            />
            <span className="text-sm font-medium tracking-wide text-aqua">Trusted by 10,000+ Happy Customers</span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Pure Water,
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-aqua via-cyan-300 to-aqua bg-clip-text text-transparent">
                Pure Life
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-aqua to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="mb-10 text-base leading-relaxed text-gray-300/90 sm:text-lg md:text-xl lg:text-2xl max-w-2xl"
          >
            Experience cutting-edge water purification technology. Premium RO systems and complete water solutions for your home and business.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row sm:gap-5"
          >
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-aqua px-6 py-5 sm:px-8 sm:py-6 text-base font-semibold text-charcoal transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(0,200,215,0.4)]"
            >
              <Link href="/water-purifiers">
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/30 bg-white/5 px-6 py-5 sm:px-8 sm:py-6 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-aqua hover:bg-aqua/10 hover:text-aqua"
            >
              <Link href="https://wa.me/919999999999?text=Hello! I'm interested in your water purifiers" target="_blank">
                <Droplets className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Link>
            </Button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 sm:mt-12 flex flex-wrap gap-2 sm:gap-3"
          >
            {[
              { icon: Shield, text: "2 Year Warranty" },
              { icon: Sparkles, text: "Free Installation" },
              { icon: Droplets, text: "99.9% Pure Water" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 215, 0.15)" }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm transition-colors"
              >
                <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-aqua" />
                <span className="text-xs sm:text-sm text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Floating Stats Card */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="space-y-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10K+", label: "Happy Customers" },
                { value: "99%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-aqua to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Stats Bar (Mobile/Tablet) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-charcoal/60 backdrop-blur-xl xl:hidden"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 sm:py-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "15+", label: "Years" },
              { value: "10K+", label: "Customers" },
              { value: "99%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-aqua sm:text-2xl md:text-3xl">{stat.value}</div>
                <div className="text-xs text-gray-400 md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 xl:bottom-8 hidden sm:block"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/30 p-2"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5], height: [6, 10, 6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 rounded-full bg-aqua"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
