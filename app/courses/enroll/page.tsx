"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import { ArrowLeft, CheckCircle } from "lucide-react"

const courses = {
  cs101: {
    title: "Cybersecurity Fundamentals",
    price: 25950,
  },
  cs201: {
    title: "Network Security Essentials",
    price: 25950,
  },
  cs301: {
    title: "Advanced Penetration Testing",
    price: 25950,
  },
}

export default function EnrollPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const courseId = searchParams.get("course") || "cs101"
  const course = courses[courseId as keyof typeof courses] || courses.cs101

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    schoolName: "",
    classInSchool: "",
    applicantContact: "",
    headOfSchoolName: "",
    headOfSchoolEmail: "",
    parentName: "",
    parentEmail: "",
    schoolConsent: false,
    parentConsent: false,
  })
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentError, setPaymentError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Store form data and move to payment step
    setStep(2)
    setIsSubmitting(false)
  }

  const initiatePayment = async () => {
    setIsSubmitting(true)
    setPaymentError("")

    try {
      const response = await fetch('/api/paystack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.parentEmail || formData.applicantContact,
          amount: course.price,
          courseId,
          name: formData.name,
        }),
      });

      const data = await response.json();

      if (data.success && data.redirectUrl) {
        // Redirect to Paystack payment page
        window.location.href = data.redirectUrl;
      } else {
        setPaymentError(data.error || 'Failed to initialize payment. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Payment initialization error:', error);
      setPaymentError('An error occurred while processing your payment. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Format price in Naira
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-20">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center text-cybernovr-purple hover:text-cybernovr-purple/90 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </button>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-2">Cybersecurity Training Enrollment</h1>
              <h2 className="text-xl mb-6">Registration Form for Cybersecurity Youth League</h2>

              <div className="flex mb-8">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 1 ? "bg-cybernovr-purple text-white" : "bg-gray-200 text-gray-500"
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
                      step >= 2 ? "bg-cybernovr-purple text-white" : "bg-gray-200 text-gray-500"
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
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="schoolName">Name of School</Label>
                    <Input
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="classInSchool">Class in School (JS1 through SS3)</Label>
                    <Input
                      id="classInSchool"
                      name="classInSchool"
                      value={formData.classInSchool}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="e.g. JS1, SS3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="applicantContact">Phone or Email Address of Applicant/Parent</Label>
                    <Input
                      id="applicantContact"
                      name="applicantContact"
                      value={formData.applicantContact}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="headOfSchoolName">Name of Head of School</Label>
                    <Input
                      id="headOfSchoolName"
                      name="headOfSchoolName"
                      value={formData.headOfSchoolName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="headOfSchoolEmail">Email Address of Head of School</Label>
                    <Input
                      id="headOfSchoolEmail"
                      name="headOfSchoolEmail"
                      type="email"
                      value={formData.headOfSchoolEmail}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="parentName">Name of Parent</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="parentEmail">Email Address of Parent</Label>
                    <Input
                      id="parentEmail"
                      name="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox 
                      id="schoolConsent" 
                      checked={formData.schoolConsent}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('schoolConsent', checked as boolean)
                      }
                      required
                    />
                    <Label htmlFor="schoolConsent" className="text-sm">
                      Consent of School: I consent to the student of my school to join the Cybersecurity Youth League of CYBERNOVR Limited in line with the terms and conditions
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="parentConsent" 
                      checked={formData.parentConsent}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('parentConsent', checked as boolean)
                      }
                      required
                    />
                    <Label htmlFor="parentConsent" className="text-sm">
                      Consent of Parent: I consent to the student of my school to join the Cybersecurity Youth League of CYBERNOVR Limited in line with the terms and conditions
                    </Label>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white text-lg py-6 font-medium shadow-lg"
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
                      <span>{formatPrice(course.price)}</span>
                    </div>
                    <div className="border-t border-gray-300 my-4"></div>
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>{formatPrice(course.price)}</span>
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
                          readOnly
                          className="h-4 w-4 text-cybernovr-purple"
                        />
                        <label htmlFor="paystack" className="ml-2">
                          Pay with Paystack
                        </label>
                      </div>

                      {paymentError && (
                        <div className="bg-red-50 border border-red-200 text-red-600 rounded p-3 text-sm">
                          {paymentError}
                        </div>
                      )}

                      <div className="pt-4">
                        <Button
                          onClick={initiatePayment}
                          className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white text-lg py-6 font-medium shadow-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Processing Payment..." : `Pay ${formatPrice(course.price)}`}
                        </Button>
                        <p className="text-xs text-center mt-2 text-gray-500">
                          You will be redirected to Paystack to complete your payment
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-cybernovr-purple hover:text-cybernovr-purple/90 text-sm w-full text-center mt-4"
                      >
                        Return to previous step
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
