"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import { ArrowLeft, CheckCircle } from "lucide-react"

const courses = {
  cs101: {
    title: "Cybersecurity Fundamentals",
    price: 299,
  },
  cs201: {
    title: "Network Security Essentials",
    price: 399,
  },
  cs301: {
    title: "Advanced Penetration Testing",
    price: 599,
  },
}

export default function EnrollPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const courseId = searchParams.get("course") || "cs101"
  const course = courses[courseId as keyof typeof courses] || courses.cs101

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to initiate payment
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(2)
    }, 1500)
  }

  const handlePayment = () => {
    // Simulate payment processing
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setPaymentSuccess(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-20">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center text-ziass-green hover:text-ziass-gold mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </button>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-2">Enroll in Course</h1>
              <h2 className="text-xl mb-6">{course.title}</h2>

              {!paymentSuccess ? (
                <>
                  <div className="flex mb-8">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step >= 1 ? "bg-ziass-green text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        1
                      </div>
                      <span className="ml-2 font-medium">Your Details</span>
                    </div>
                    <div className="mx-4 border-t border-gray-300 flex-1 self-center"></div>
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step >= 2 ? "bg-ziass-green text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        2
                      </div>
                      <span className="ml-2 font-medium">Payment</span>
                    </div>
                  </div>

                  {step === 1 && (
                    <motion.form
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          className="w-full bg-ziass-green hover:bg-ziass-green/90 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Processing..." : "Continue to Payment"}
                        </Button>
                      </div>
                    </motion.form>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="border rounded-lg p-6 bg-light-gray">
                        <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                        <div className="flex justify-between mb-2">
                          <span>{course.title}</span>
                          <span>${course.price}</span>
                        </div>
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className="flex justify-between font-bold">
                          <span>Total</span>
                          <span>${course.price}</span>
                        </div>
                      </div>

                      <div className="border rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-4">Payment Method</h3>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="paystack"
                              name="paymentMethod"
                              value="paystack"
                              checked
                              className="h-4 w-4 text-ziass-green"
                            />
                            <label htmlFor="paystack" className="ml-2">
                              Pay with Paystack
                            </label>
                          </div>

                          <div className="pt-4">
                            <Button
                              onClick={handlePayment}
                              className="w-full bg-ziass-green hover:bg-ziass-green/90 text-white"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Processing Payment..." : `Pay $${course.price}`}
                            </Button>
                            <p className="text-xs text-center mt-2 text-gray-500">
                              You will be redirected to Paystack to complete your payment
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for enrolling in {course.title}. You will receive an email with course access details
                    shortly.
                  </p>
                  <Button
                    onClick={() => router.push("/courses")}
                    className="bg-ziass-green hover:bg-ziass-green/90 text-white"
                  >
                    Return to Courses
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
