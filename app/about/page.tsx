import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, Target } from "lucide-react"
import TeamMember from "@/components/about/team-member"
import FadeIn from "@/components/animations/fade-in"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Smith",
      title: "CEO & Founder",
      bio: "John has over 20 years of experience in cybersecurity and has led security teams at major financial institutions before founding ZIASS.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      title: "Chief Technology Officer",
      bio: "Sarah brings 15 years of technical expertise in security architecture and has been instrumental in developing ZIASS's security solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      title: "Head of Security Operations",
      bio: "Michael specializes in incident response and threat hunting, with a background in military cybersecurity operations.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      title: "Director of Compliance",
      bio: "Emily is an expert in regulatory compliance with extensive experience helping organizations meet industry standards and requirements.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ZIASS</h1>
            <p className="text-xl text-gray-200">
              Leading the way in cybersecurity solutions to protect businesses in an evolving threat landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=500&width=600" alt="ZIASS Mission" fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-charcoal/80">
                  At ZIASS, our mission is to empower organizations with the security capabilities they need to thrive
                  in the digital age. We are committed to providing innovative, effective, and accessible cybersecurity
                  solutions that protect our clients' most valuable assets.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-charcoal/80">
                  Our vision is to create a world where organizations can operate securely in the digital landscape,
                  free from the fear of cyber threats. We strive to be the trusted security partner that enables
                  businesses to innovate and grow with confidence.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {[
                    {
                      icon: <Shield className="h-8 w-8 text-electric-blue" />,
                      title: "Integrity",
                      description: "We operate with honesty and transparency in all our interactions.",
                    },
                    {
                      icon: <Users className="h-8 w-8 text-electric-blue" />,
                      title: "Collaboration",
                      description: "We work closely with our clients to understand their unique needs.",
                    },
                    {
                      icon: <Award className="h-8 w-8 text-electric-blue" />,
                      title: "Excellence",
                      description: "We strive for the highest standards in everything we do.",
                    },
                    {
                      icon: <Target className="h-8 w-8 text-electric-blue" />,
                      title: "Innovation",
                      description: "We continuously evolve our solutions to address emerging threats.",
                    },
                  ].map((value, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">{value.icon}</div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold">{value.title}</h3>
                        <p className="text-charcoal/80">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Meet the experts behind ZIASS who are dedicated to protecting your organization from cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} name={member.name} title={member.title} bio={member.bio} image={member.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              From our founding to today, we've been committed to advancing cybersecurity for organizations of all
              sizes.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - visible on larger screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ziass-green/20 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2015",
                  title: "Company Founded",
                  description:
                    "ZIASS was founded with a mission to provide accessible cybersecurity solutions to businesses of all sizes.",
                  isLeft: true,
                },
                {
                  year: "2017",
                  title: "Expansion of Services",
                  description:
                    "We expanded our service offerings to include comprehensive risk management and compliance solutions.",
                  isLeft: false,
                },
                {
                  year: "2019",
                  title: "Launch of Cybersecurity Youth League",
                  description:
                    "We established the Cybersecurity Youth League to nurture the next generation of security professionals.",
                  isLeft: true,
                },
                {
                  year: "2021",
                  title: "Strategic Partnerships",
                  description:
                    "We formed strategic partnerships with leading technology providers to enhance our security solutions.",
                  isLeft: false,
                },
                {
                  year: "2023",
                  title: "Global Expansion",
                  description:
                    "ZIASS expanded operations to serve clients across multiple regions, becoming a global security provider.",
                  isLeft: true,
                },
              ].map((event, index) => (
                <FadeIn
                  key={index}
                  direction={event.isLeft ? "right" : "left"}
                  delay={index * 0.1}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row ${event.isLeft ? "md:justify-start" : "md:justify-end"}`}>
                    {/* Timeline dot - visible on larger screens */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-ziass-green border-4 border-white hidden md:block"></div>

                    {/* Mobile year indicator */}
                    <div className="bg-ziass-green text-white font-bold py-1 px-4 rounded-full inline-block mb-2 md:hidden">
                      {event.year}
                    </div>

                    <div
                      className={`w-full md:w-5/12 ${event.isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
                    >
                      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                        {/* Desktop year indicator */}
                        <div className="text-ziass-green font-bold text-xl mb-2 hidden md:block">{event.year}</div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-charcoal/80">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-electric-blue to-accent-cyan text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8">
              We're always looking for talented individuals who are passionate about cybersecurity. Explore career
              opportunities at ZIASS.
            </p>
            <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
