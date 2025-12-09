"use client"

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const whatsappNumber = '1234567890'
  const message = encodeURIComponent('Hi, I would like to inquire about your water solutions.')

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 animate-ping rounded-full bg-aqua opacity-75" />
        
        <Button
          size="lg"
          className="relative h-14 w-14 rounded-full bg-aqua p-0 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-aqua-dark"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          asChild
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </a>
        </Button>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-charcoal px-3 py-2 text-sm text-white shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 bg-charcoal" />
          </div>
        )}
      </div>
    </div>
  )
}
