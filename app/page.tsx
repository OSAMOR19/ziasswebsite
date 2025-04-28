import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Lock, Server, Users, CheckCircle } from "lucide-react"
import HeroCarousel from "@/components/home/hero-carousel"
import ServiceCard from "@/components/home/service-card"
import PartnerLogos from "@/components/home/partner-logos"
import TestimonialSlider from "@/components/home/testimonial-slider"
import StatCard from "@/components/home/stat-card"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import AnimatedText from "@/components/animations/animated-text"
import AnimatedBackground from "@/components/animations/animated-background"
import Aboutimg from "@/components/images/FuturisticCode.jpeg"
import Initiative1 from "@/components/images/Focusedcourse.jpeg"
import Initiative2 from "@/components/images/FocusedProgrammer.jpeg"
import Initiative3 from "@/components/images/Professionalcourse.jpeg"


export default function Home() {
  const services = [
    {
      title: "Professional Services",
      description: "Expert cybersecurity consulting tailored to your business needs.",
      icon: <Shield className="h-10 w-10 text-ziass-green" />,
      href: "/services/professional-services",
    },
    {
      title: "Risk Management",
      description: "Identify, assess, and mitigate security risks to protect your assets.",
      icon: <Lock className="h-10 w-10 text-ziass-green" />,
      href: "/services/risk-management",
    },
    {
      title: "Penetration Testing",
      description: "Proactive security testing to identify vulnerabilities before attackers do.",
      icon: <Server className="h-10 w-10 text-ziass-green" />,
      href: "/services/penetration-testing",
    },
    {
      title: "CISO/vCISO",
      description: "Strategic security leadership without the full-time executive cost.",
      icon: <Users className="h-10 w-10 text-ziass-green" />,
      href: "/services/ciso",
    },
  ]

  const stats = [
    { value: "500+", label: "Clients Protected" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Support Available" },
    { value: "100+", label: "Security Experts" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-r from-ziass-green to-ziass-green/80 text-white relative overflow-hidden">
        <AnimatedBackground className="opacity-30" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <FadeIn direction="up" duration={0.7}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <AnimatedText text="Secure Your Digital Future with ZIASS" type="words" />
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} duration={0.7}>
                <p className="text-xl text-gray-200">
                  Comprehensive cybersecurity solutions to protect your business from evolving threats.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4} duration={0.7}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/courses">
                    <Button size="lg" className="bg-ziass-gold hover:bg-ziass-gold/90 text-white">
                      Get Started
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 transition-all"
                  >
                    Learn More
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.3} duration={0.7}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <HeroCarousel />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                We offer a comprehensive range of cybersecurity services to protect your organization from evolving
                threats.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>

          <FadeIn direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center text-ziass-green hover:text-ziass-gold font-medium transition-colors group"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image src={Aboutimg} alt="About ZIASS" fill className="object-cover" />
              </div>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn direction="left">
                <h2 className="text-3xl md:text-4xl font-bold">About ZIASS</h2>
                <p className="text-lg text-charcoal/80">
                  ZIASS is a leading cybersecurity company dedicated to protecting businesses from evolving cyber
                  threats. With our team of expert security professionals, we provide comprehensive security solutions
                  tailored to your specific needs.
                </p>
              </FadeIn>
              <StaggerChildren>
                <ul className="space-y-3">
                  {[
                    "Industry-leading security expertise",
                    "Comprehensive threat protection",
                    "24/7 monitoring and support",
                    "Customized security solutions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-ziass-green mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </StaggerChildren>
              <FadeIn direction="up" delay={0.6}>
              <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 transition-all"
                  >
                    Learn More
                  </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-ziass-green text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <StatCard value={stat.value} label={stat.label} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Initiatives</h2>
              <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                We're committed to advancing cybersecurity awareness and education through our community initiatives.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity Youth League",
                description:
                  "Empowering the next generation of cybersecurity professionals through education and hands-on experience.",
                image: Initiative3,
                href: "/initiatives/youth-league",
              },
              {
                title: "Awareness Campaigns",
                description:
                  "Raising awareness about cybersecurity best practices and emerging threats through public campaigns.",
                image: Initiative2,
                href: "/initiatives/awareness",
              },
              {
                title: "Education & Training",
                description:
                  "Providing comprehensive cybersecurity education and training programs for individuals and organizations.",
                image: Initiative1,
                href: "/initiatives/education",
              },
            ].map((initiative, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.2}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-ziass-green/10 hover:-translate-y-1 duration-300">
                  <div className="relative h-48">
                    <Image
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                    <p className="text-charcoal/80 mb-4">{initiative.description}</p>
                    <Link
                      href={initiative.href}
                      className="text-ziass-green hover:text-ziass-gold font-medium inline-flex items-center group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
              <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                We collaborate with industry-leading technology providers to deliver the best security solutions.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <PartnerLogos />
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/products" className="btn-primary inline-flex items-center group">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                Hear from organizations that have transformed their security posture with ZIASS.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <TestimonialSlider />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ziass-green to-ziass-green/80 text-white relative overflow-hidden">
        <AnimatedBackground className="opacity-20" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl mb-8">
                Contact us today for a free security assessment and discover how ZIASS can protect your organization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-ziass-gold text-white hover:bg-ziass-gold/90">
                  Contact Us
                </Button>
                <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 transition-all"
                  >
                    Learn More
                  </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
