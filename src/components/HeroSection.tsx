"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Droplets, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'

const roMachines = [
  { name: "Aquaguard RO Pro", position: "left-[5%]" },
  { name: "Smart UV Purifier", position: "left-[35%]" },
  { name: "Premium RO System", position: "left-[65%]" }
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal">
      {/* Background Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#0d1f2d] to-charcoal" />
      
      {/* Water Pattern Background - CSS only */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C8D7' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* RO Purifier Machines - CSS animations only */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end justify-center">
        {mounted && roMachines.map((machine, index) => (
          <div
            key={index}
            className={`absolute bottom-[10%] ${machine.position} w-[180px] h-[280px] md:w-[220px] md:h-[340px] lg:w-[260px] lg:h-[400px] animate-fade-slide-up`}
            style={{ animationDelay: `${0.3 + index * 0.2}s` }}
          >
            {/* Machine Glow */}
            <div className="absolute inset-0 bg-aqua/20 blur-3xl rounded-full transform scale-75" />
            
            {/* Machine Container */}
            <div
              className="relative w-full h-full rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl animate-float-gentle"
              style={{ animationDelay: `${index * 0.5}s` }}
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
            </div>
            
            {/* Machine Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap animate-fade-in" style={{ animationDelay: `${1 + index * 0.2}s` }}>
              <span className="text-xs md:text-sm text-aqua/80 font-medium">{machine.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Water Wave Animation - CSS only */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-slide">
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waterGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 200, 215, 0)" />
                <stop offset="30%" stopColor="rgba(0, 200, 215, 0.25)" />
                <stop offset="50%" stopColor="rgba(0, 200, 215, 0.4)" />
                <stop offset="70%" stopColor="rgba(0, 200, 215, 0.25)" />
                <stop offset="100%" stopColor="rgba(0, 200, 215, 0)" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#waterGradient1)" 
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[200%] h-[80%] animate-wave-slide-slow">
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waterGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 229, 247, 0)" />
                <stop offset="40%" stopColor="rgba(0, 229, 247, 0.15)" />
                <stop offset="60%" stopColor="rgba(0, 229, 247, 0.3)" />
                <stop offset="100%" stopColor="rgba(0, 229, 247, 0)" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#waterGradient2)" 
              d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,208C672,235,768,277,864,272C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Water Splash Droplets - CSS only, reduced count */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={`splash-${i}`}
              className="absolute rounded-full bg-aqua/50 animate-splash-across"
              style={{
                width: 8 + (i % 3) * 4,
                height: 8 + (i % 3) * 4,
                bottom: `${25 + (i % 4) * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/30 to-charcoal/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/40" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8 lg:pt-20">
        <div className="max-w-3xl animate-fade-slide-up">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-aqua/30 bg-aqua/10 px-5 py-2.5 backdrop-blur-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-2.5 w-2.5 rounded-full bg-aqua shadow-[0_0_10px_rgba(0,200,215,0.8)] animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-aqua">Trusted by 10,000+ Happy Customers</span>
          </div>
          
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Pure Water,
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-aqua via-cyan-300 to-aqua bg-clip-text text-transparent">
                Pure Life
              </span>
              <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-aqua to-cyan-400 rounded-full animate-width-expand" style={{ animationDelay: '0.8s' }} />
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="mb-10 text-base leading-relaxed text-gray-300/90 sm:text-lg md:text-xl lg:text-2xl max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Experience cutting-edge water purification technology. Premium RO systems and complete water solutions for your home and business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
              <Link href="https://wa.me/918297612490?text=Hello! I'm interested in your water purifiers" target="_blank">
                <Droplets className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="mt-10 sm:mt-12 flex flex-wrap gap-2 sm:gap-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Shield, text: "2 Year Warranty" },
              { icon: Sparkles, text: "Free Installation" },
              { icon: Droplets, text: "99.9% Pure Water" }
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm transition-colors duration-300 hover:bg-aqua/15"
              >
                <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-aqua" />
                <span className="text-xs sm:text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Floating Stats Card */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-fade-slide-up" style={{ animationDelay: '0.7s' }}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl animate-float-gentle">
            <div className="space-y-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10K+", label: "Happy Customers" },
                { value: "99%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-aqua to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar (Mobile/Tablet) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-charcoal/60 backdrop-blur-xl xl:hidden animate-fade-in" style={{ animationDelay: '0.8s' }}>
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
      </div>

      </section>
    )
  }
