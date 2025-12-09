"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Preload video
    const video = document.createElement('video')
    video.src = 'https://images.unsplash.com/photo-1563310118-e66bb5b1d1f9?w=1920&q=80'
    video.onloadeddata = () => setVideoLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoLoaded ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1563310118-e66bb5b1d1f9?w=1920&q=80"
          >
            <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1563310118-e66bb5b1d1f9?w=1920&q=80)'
            }}
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-aqua/10 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-aqua" />
            <span className="text-sm font-medium text-aqua">Trusted by 10,000+ Customers</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Pure Water,
            <br />
            <span className="text-aqua">Pure Life</span>
          </h1>
          
          <p className="mb-8 text-lg text-gray-300 md:text-xl">
            Experience the finest water purification technology. From RO systems to complete water solutions for your home and business.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-aqua text-white hover:bg-aqua-dark"
            >
              <Link href="/water-purifiers">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            <div>
              <div className="text-3xl font-bold text-aqua">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-aqua">10K+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-aqua">99%</div>
              <div className="text-sm text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-8 items-start justify-center rounded-full border-2 border-white/50 p-2">
          <div className="h-2 w-1 animate-pulse rounded-full bg-white" />
        </div>
      </div>
    </section>
  )
}
