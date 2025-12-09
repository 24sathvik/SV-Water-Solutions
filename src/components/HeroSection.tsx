"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Droplets, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

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
      {/* HD Water Video Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Poster/Fallback Image */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80)'
          }}
        />
        
        {/* HD Water Video - Using Mixkit free water video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80"
        >
          <source src="https://assets.mixkit.co/videos/1164/1164-720.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-blue-water-surface-1164-large.mp4" type="video/mp4" />
        </video>

        {/* Layered Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/50" />
        
        {/* Animated Water Ripple Effect Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aqua/20 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-aqua/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
            className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
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
            className="mb-10 text-lg leading-relaxed text-gray-300/90 md:text-xl lg:text-2xl max-w-2xl"
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
              className="group relative overflow-hidden bg-aqua px-8 py-6 text-base font-semibold text-charcoal transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(0,200,215,0.4)]"
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
              className="border-white/30 bg-white/5 px-8 py-6 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-aqua hover:bg-aqua/10 hover:text-aqua"
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
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              { icon: Shield, text: "2 Year Warranty" },
              { icon: Sparkles, text: "Free Installation" },
              { icon: Droplets, text: "99.9% Pure Water" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 215, 0.15)" }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-colors"
              >
                <feature.icon className="h-4 w-4 text-aqua" />
                <span className="text-sm text-gray-300">{feature.text}</span>
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
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "15+", label: "Years" },
              { value: "10K+", label: "Customers" },
              { value: "99%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-aqua md:text-3xl">{stat.value}</div>
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
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 xl:bottom-8"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-14 w-8 items-start justify-center rounded-full border-2 border-white/30 p-2"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5], height: [8, 12, 8] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 rounded-full bg-aqua"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}