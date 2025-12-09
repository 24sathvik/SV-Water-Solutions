"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, MessageCircle } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Water Purifiers', href: '/water-purifiers' },
  { name: 'Spare Parts', href: '/spare-parts' },
  { name: 'Services', href: '/services' },
  { name: 'Water Solutions', href: '/water-solutions' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-aqua">
            <span className="text-xl font-bold text-white">SV</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-charcoal">
              SV Water Solutions
            </span>
            <span className="text-xs text-muted-foreground">Pure Life, Pure Water</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-aqua"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-charcoal hover:text-aqua"
          >
            <a href="tel:+1234567890">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-aqua text-white hover:bg-aqua-dark"
          >
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20water%20solutions"
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
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal transition-colors hover:text-aqua"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  variant="outline"
                  asChild
                  className="w-full"
                >
                  <a href="tel:+1234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-aqua text-white hover:bg-aqua-dark"
                >
                  <a
                    href="https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20water%20solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
