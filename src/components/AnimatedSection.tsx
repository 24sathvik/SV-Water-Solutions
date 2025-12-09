"use client"

import { useEffect, useRef, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 -translate-x-8',
    'slide-right': 'opacity-0 translate-x-8',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}
