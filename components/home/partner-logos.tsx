"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const partners = [
  { name: "Darktrace", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Proofpoint", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Cisco", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Palo Alto Networks", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Fortinet", logo: "/placeholder.svg?height=60&width=180" },
  { name: "CrowdStrike", logo: "/placeholder.svg?height=60&width=180" },
]

export default function PartnerLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5
    const containerWidth = scrollContainer.scrollWidth

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed
      if (scrollPosition >= containerWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div ref={scrollRef} className="flex items-center space-x-12 overflow-x-hidden py-6">
        {/* First set of logos */}
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={180}
              height={60}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}

        {/* Duplicate set for seamless scrolling */}
        {partners.map((partner, index) => (
          <motion.div
            key={`dup-${index}`}
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={180}
              height={60}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
