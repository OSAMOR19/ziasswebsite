import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Users, FileCheck, AlertTriangle, Database, Globe, Zap } from "lucide-react"
import ServiceDetailCard from "@/components/services/service-detail-card"

export default function ServicesPage() {
  const services = [
    {
      title: "Professional Services",
      description:
        "Our team of cybersecurity experts provides tailored consulting services to help you identify and address your security challenges.",
      icon: <Shield className="h-12 w-12 text-electric-blue" />,
      href: "/services/professional-services",
    },
    {
      title: "GRC",
      description:
        "Governance, Risk, and Compliance services to help you meet regulatory requirements and industry standards.",
      icon: <FileCheck className="h-12 w-12 text-electric-blue" />,
      href: "/services/grc",
    },
    {
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and management services to identify, evaluate, and mitigate security risks.",
      icon: <AlertTriangle className="h-12 w-12 text-electric-blue" />,
      href: "/services/risk-management",
    },
    {
      title: "Due Diligence",
      description:
        "Thorough security assessments for mergers, acquisitions, and third-party vendors to identify potential risks.",
      icon: <Database className="h-12 w-12 text-electric-blue" />,
      href: "/services/due-diligence",
    },
    {
      title: "Compliance",
      description: "Ensure your organization meets industry regulations and standards with our compliance services.",
      icon: <FileCheck className="h-12 w-12 text-electric-blue" />,
      href: "/services/compliance",
    },
    {
      title: "Penetration Testing",
      description:
        "Identify vulnerabilities in your systems and applications before attackers do with our penetration testing services.",
      icon: <Lock className="h-12 w-12 text-electric-blue" />,
      href: "/services/penetration-testing",
    },
    {
      title: "Incident Response",
      description: "Rapid response to security incidents to minimize damage and restore normal operations quickly.",
      icon: <Zap className="h-12 w-12 text-electric-blue" />,
      href: "/services/incident-response",
    },
    {
      title: "CISO/vCISO",
      description:
        "Strategic security leadership without the full-time executive cost through our virtual CISO services.",
      icon: <Users className="h-12 w-12 text-electric-blue" />,
      href: "/services/ciso",
    },
    {
      title: "DNS Security",
      description:
        "Protect your organization from DNS-based attacks and ensure the integrity of your domain name system.",
      icon: <Globe className="h-12 w-12 text-electric-blue" />,
      href: "/services/dns-security",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive cybersecurity solutions to protect your business from evolving threats.
            </p>
            <Button size="lg" className="bg-accent-cyan hover:bg-accent-cyan/90 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceDetailCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Cybernovr?</h2>
              <p className="text-lg text-charcoal/80 mt-4">
                At Cybernovr, we understand that every organization has unique security challenges. Our approach combines
                industry-leading expertise with cutting-edge technology to deliver comprehensive security solutions.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  {
                    title: "Expert Team",
                    description:
                      "Our security professionals have decades of combined experience across various industries.",
                  },
                  {
                    title: "Tailored Solutions",
                    description: "We customize our services to address your specific security needs and challenges.",
                  },
                  {
                    title: "Proactive Approach",
                    description:
                      "We focus on preventing security incidents before they occur, not just responding to them.",
                  },
                  {
                    title: "Continuous Support",
                    description:
                      "Our team provides ongoing support and guidance to help you maintain a strong security posture.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-charcoal/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cybernovr Security Experts"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl mb-8">
                Contact us today for a free security assessment and discover how Cybernovr can protect your organization.
              </p>
              <Button size="lg" className="bg-accent-cyan hover:bg-accent-cyan/90 text-white">
                Get Started
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Request a Consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan appearance-none"
                    required
                  >
                    <option value="" disabled selected className="bg-deep-blue">
                      Select a Service
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title} className="bg-deep-blue text-white">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                    placeholder="Tell us about your security needs"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent-cyan hover:bg-accent-cyan/90 text-white font-medium py-3 rounded-md shadow-md hover:shadow-lg transition-all"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
