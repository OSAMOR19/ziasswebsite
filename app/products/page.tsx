import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/products/product-card"

export default function ProductsPage() {
  const products = [
    {
      name: "Darktrace",
      description:
        "AI-powered cybersecurity platform that uses machine learning to detect and respond to cyber threats in real-time.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/darktrace",
      category: "Threat Detection",
    },
    {
      name: "Proofpoint",
      description:
        "Advanced email security and data protection solutions to safeguard your organization from email-based threats.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/proofpoint",
      category: "Email Security",
    },
    {
      name: "CrowdStrike",
      description:
        "Cloud-delivered endpoint protection platform that combines next-gen antivirus with endpoint detection and response.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/crowdstrike",
      category: "Endpoint Security",
    },
    {
      name: "Palo Alto Networks",
      description:
        "Comprehensive security solutions including next-generation firewalls, cloud security, and threat intelligence.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/palo-alto",
      category: "Network Security",
    },
    {
      name: "Okta",
      description:
        "Identity and access management platform that enables secure connections between people and technology.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/okta",
      category: "Identity Management",
    },
    {
      name: "Splunk",
      description:
        "Data platform for security monitoring, analytics, and intelligence to help detect and respond to threats.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/splunk",
      category: "Security Analytics",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-200">
              We partner with industry-leading technology providers to deliver comprehensive security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                image={product.image}
                href={product.href}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Partners */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Partners?</h2>
              <p className="text-lg text-charcoal/80">
                At ZIASS, we carefully select our technology partners to ensure we provide the best security solutions
                for our clients. Our partners are industry leaders with proven track records in cybersecurity innovation
                and excellence.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  {
                    title: "Industry-Leading Technology",
                    description:
                      "Our partners develop cutting-edge security technologies that stay ahead of evolving threats.",
                  },
                  {
                    title: "Comprehensive Protection",
                    description:
                      "Together with our partners, we offer end-to-end security solutions that address all aspects of cybersecurity.",
                  },
                  {
                    title: "Seamless Integration",
                    description:
                      "Our partner products integrate smoothly with your existing infrastructure for minimal disruption.",
                  },
                  {
                    title: "Expert Implementation",
                    description:
                      "Our certified professionals ensure proper deployment and configuration of all partner solutions.",
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
              <Image src="/placeholder.svg?height=500&width=600" alt="ZIASS Partners" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Partner</h2>
              <p className="text-xl mb-8">
                Interested in partnering with ZIASS? We're always looking to expand our ecosystem with innovative
                security solutions.
              </p>
              <Button size="lg" className="bg-accent-cyan hover:bg-accent-cyan/90 text-white">
                Partner With Us
              </Button>
            </div>

            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Partner Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Access to our extensive client network",
                  "Joint marketing and sales opportunities",
                  "Technical integration support",
                  "Collaborative solution development",
                  "Increased market visibility",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="h-5 w-5 rounded-full bg-accent-cyan flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-electric-blue to-accent-cyan text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Security?</h2>
            <p className="text-xl mb-8">
              Contact us today to learn more about our partner products and how they can strengthen your security
              posture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
