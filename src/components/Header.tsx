"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu, Phone, MessageCircle, Home, Droplets, Settings, Wrench, FlaskConical, Building2, Mail, ChevronRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Water Purifiers', href: '/water-purifiers', icon: Droplets },
  { name: 'Spare Parts', href: '/spare-parts', icon: Settings },
  { name: 'Services', href: '/services', icon: Wrench },
  { name: 'Water Solutions', href: '/water-solutions', icon: FlaskConical },
  { name: 'About', href: '/about', icon: Building2 },
  { name: 'Contact', href: '/contact', icon: Mail },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-aqua/5 border-b border-aqua/10'
          : 'bg-white/15 backdrop-blur-xl border-b border-white/20 shadow-md'
      }`}
    >
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          background: isScrolled
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,200,215,0.08), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,200,215,0.12), transparent)',
        }}
      />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
            isScrolled 
              ? 'bg-gradient-to-br from-aqua to-cyan-500 shadow-lg shadow-aqua/30' 
              : 'bg-gradient-to-br from-aqua via-cyan-500 to-aqua shadow-xl shadow-aqua/40'
          } group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-aqua/50`}>
            <span className="text-xl font-bold text-white drop-shadow-lg">SV</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold leading-tight transition-colors duration-300 drop-shadow-sm ${
              isScrolled ? 'text-charcoal' : 'text-white [text-shadow:_0_1px_8px_rgb(0_0_0_/_30%)]'
            }`}>
              SV Water Solutions
            </span>
            <span className={`text-xs font-medium transition-colors duration-300 ${
              isScrolled ? 'text-aqua' : 'text-white/95 [text-shadow:_0_1px_4px_rgb(0_0_0_/_25%)]'
            }`}>Pure Life, Pure Water</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition-all duration-300 hover:text-aqua relative group ${
                isScrolled 
                  ? 'text-charcoal hover:drop-shadow-sm' 
                  : 'text-white [text-shadow:_0_1px_6px_rgb(0_0_0_/_35%)] hover:[text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)]'
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aqua transition-all duration-300 group-hover:w-full rounded-full shadow-sm shadow-aqua/50" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={`font-medium transition-all duration-300 ${
              isScrolled 
                ? 'text-charcoal hover:text-aqua hover:bg-aqua/10' 
                : 'text-white hover:text-aqua hover:bg-white/15 [text-shadow:_0_1px_4px_rgb(0_0_0_/_30%)]'
            }`}
          >
            <a href="tel:+918297612490">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-gradient-to-r from-aqua to-cyan-500 text-white hover:from-aqua-dark hover:to-cyan-600 shadow-lg shadow-aqua/30 hover:shadow-xl hover:shadow-aqua/40 transition-all duration-300 font-medium"
          >
            <a
              href="https://wa.me/918297612490?text=Hi%2C%20I%27m%20interested%20in%20your%20water%20purifiers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-charcoal hover:bg-aqua/10' 
                  : 'text-white hover:bg-white/15 [text-shadow:_0_1px_4px_rgb(0_0_0_/_30%)]'
              }`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:w-[400px] p-0 border-l-0 bg-gradient-to-br from-charcoal via-[#1e2a35] to-charcoal overflow-hidden"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/* Water bubbles background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-aqua/10 animate-bubble-rise-simple"
                  style={{
                    width: 20 + (i * 15),
                    height: 20 + (i * 15),
                    left: `${15 + (i * 15)}%`,
                    bottom: '-50px',
                    animationDelay: `${i * 1.5}s`,
                    animationDuration: `${12 + i * 2}s`,
                  }}
                />
              ))}
            </div>

            {/* Glass overlay at top */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-aqua/20 to-transparent pointer-events-none" />

            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="p-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua to-cyan-500 shadow-lg shadow-aqua/30">
                    <span className="text-xl font-bold text-white">SV</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">SV Water Solutions</h2>
                    <p className="text-xs text-aqua">Pure Life, Pure Water</p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-1">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 px-4 py-4 rounded-xl text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-aqua/20 group-hover:border-aqua/30">
                        <item.icon className="h-5 w-5 text-aqua" />
                      </div>
                      <span className="flex-1 text-base font-medium">{item.name}</span>
                      <ChevronRight className="h-4 w-4 text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-aqua" />
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Bottom CTA Section */}
              <div className="p-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
                <p className="text-xs text-white/50 mb-4 text-center">Get in touch with us</p>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-aqua/50 transition-all duration-300"
                  >
                    <a href="tel:+919999999999" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-aqua" />
                      <span>+91 99999 99999</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30 transition-all duration-300"
                  >
                    <a
                      href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20your%20water%20purifiers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Us</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}