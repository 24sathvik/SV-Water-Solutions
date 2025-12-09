"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Bubble {
  id: number
  size: number
  left: string
  delay: number
  duration: number
  opacity: number
}

export default function WaterBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const generatedBubbles: Bubble[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 12 + 4,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      duration: Math.random() * 8 + 6,
      opacity: Math.random() * 0.4 + 0.1
    }))
    setBubbles(generatedBubbles)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: '-20px',
            background: `radial-gradient(circle at 30% 30%, rgba(0, 200, 215, ${bubble.opacity + 0.2}), rgba(0, 200, 215, ${bubble.opacity * 0.5}))`,
            boxShadow: `inset 0 0 ${bubble.size / 3}px rgba(255, 255, 255, 0.4), 0 0 ${bubble.size / 2}px rgba(0, 200, 215, 0.2)`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(bubble.id) * 50],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0, bubble.opacity, bubble.opacity, 0],
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear"
            },
            x: {
              duration: bubble.duration * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: bubble.delay,
              ease: "easeInOut"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut"
            },
            opacity: {
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              times: [0, 0.1, 0.9, 1],
              ease: "linear"
            }
          }}
        />
      ))}
    </div>
  )
}
