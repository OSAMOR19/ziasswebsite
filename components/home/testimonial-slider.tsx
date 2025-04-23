"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "ZIASS has transformed our security posture. Their team of experts provided tailored solutions that addressed our specific needs and challenges.",
    author: "John Smith",
    title: "CIO, Global Financial Services",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with ZIASS has been a game-changer for our organization. Their proactive approach to cybersecurity has helped us stay ahead of emerging threats.",
    author: "Sarah Johnson",
    title: "CISO, Healthcare Provider",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The team at ZIASS delivered exceptional results. Their penetration testing identified critical vulnerabilities that we were able to address before they could be exploited.",
    author: "Michael Chen",
    title: "IT Director, E-commerce Platform",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const goToNextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const goToPrevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full px-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="h-12 w-12 text-ziass-green/20 mx-auto mb-6" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg md:text-xl text-charcoal mb-8 italic"
              >
                "{testimonials[currentSlide].quote}"
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[currentSlide].avatar || "/placeholder.svg"}
                    alt={testimonials[currentSlide].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentSlide].author}</h4>
                  <p className="text-charcoal/70">{testimonials[currentSlide].title}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={goToPrevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-light-gray transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-charcoal" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-light-gray transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-charcoal" />
      </motion.button>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-ziass-green w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
