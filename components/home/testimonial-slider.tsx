"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Cybernovr has transformed our security posture. Their team of experts provided tailored solutions that addressed our specific needs and challenges.",
    author: "John Smith",
    title: "CIO, Global Financial Services",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with Cybernovr has been a game-changer for our organization. Their proactive approach to cybersecurity has helped us stay ahead of emerging threats.",
    author: "Sarah Johnson",
    title: "CISO, Healthcare Provider",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The team at Cybernovr delivered exceptional results. Their penetration testing identified critical vulnerabilities that we were able to address before they could be exploited.",
    author: "Michael Chen",
    title: "IT Director, E-commerce Platform",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
      
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 relative">
                <div className="text-cybernovr-purple text-5xl font-serif absolute -top-6 left-6">"</div>
                <p className="text-lg text-charcoal/80 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-charcoal/60">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-cybernovr-purple" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-20 text-cybernovr-purple hover:bg-cybernovr-purple/10 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-20 text-cybernovr-purple hover:bg-cybernovr-purple/10 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
