"use client"

import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

// Simplified page transition using CSS only for better performance
export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  )
}
