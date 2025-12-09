"use client"

import { useEffect, useState, useMemo } from 'react'

interface Bubble {
  id: number
  size: number
  left: string
  animationDuration: string
  animationDelay: string
  opacity: number
}

export default function WaterBubbles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate bubbles once with useMemo - reduced count for performance
  const bubbles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 4,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 6 + 8}s`,
      animationDelay: `${Math.random() * 6}s`,
      opacity: Math.random() * 0.25 + 0.1
    }))
  , [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-bubble-rise-simple"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: '-20px',
            background: `radial-gradient(circle at 30% 30%, rgba(0, 200, 215, ${bubble.opacity + 0.15}), rgba(0, 200, 215, ${bubble.opacity * 0.4}))`,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.animationDelay,
          }}
        />
      ))}
    </div>
  )
}
