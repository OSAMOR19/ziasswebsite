import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Award } from "lucide-react"
import InitiativeCard from "@/components/initiatives/initiative-card"

export default function InitiativesPage() {
  const initiatives = [
    {
      title: "Cybersecurity Youth League",
      description:
        "Empowering the next generation of cybersecurity professionals through education, mentorship, and hands-on experience.",
      icon: <Users className="h-12 w-12 text-electric-blue" />,
      image: "/placeholder.svg?height=400&width=600",
      href: "/initiatives/youth-league",
    },
    {
      title: "Awareness Campaigns",
      description:
        "Raising public awareness about cybersecurity best practices and emerging threats through community outreach programs.",
      icon: <BookOpen className="h-12 w-12 text-electric-blue" />,
      image: "/placeholder.svg?height=400&width=600",
      href: "/initiatives/awareness",
    },
    {
      title: "Education & Training",
      description:
        "Providing comprehensive cybersecurity education and training programs for individuals and organizations.",
      icon: <Award className="h-12 w-12 text-electric-blue" />,
      image: "/placeholder.svg?height=400&width=600",
      href: "/initiatives/education",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Initiatives</h1>
            <p className="text-xl text-gray-200">
              We're committed to advancing cybersecurity awareness and education through our community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <InitiativeCard
                key={index}
                title={initiative.title}
                description={initiative.description}
                icon={initiative.icon}
                image={initiative.image}
                href={initiative.href}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Participants Say</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Hear from individuals who have participated in our initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The Cybersecurity Youth League program opened my eyes to the exciting world of cybersecurity and gave me the skills and confidence to pursue a career in this field.",
                author: "Sarah J.",
                title: "Youth League Graduate",
              },
              {
                quote:
                  "Cybernovr's awareness campaign at our company significantly improved our employees' security practices and helped us build a stronger security culture.",
                author: "Michael T.",
                title: "IT Director",
              },
              {
                quote:
                  "The training program provided by Cybernovr was comprehensive and practical. I was able to apply what I learned immediately in my role as a security analyst.",
                author: "David L.",
                title: "Security Analyst",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-electric-blue text-4xl font-serif mb-4">"</div>
                <p className="text-charcoal/80 italic mb-6">{testimonial.quote}</p>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-charcoal/70">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
              <p className="text-xl mb-8">
                There are many ways to support our initiatives and contribute to advancing cybersecurity awareness and
                education.
              </p>
              <Button size="lg" className="bg-accent-cyan hover:bg-accent-cyan/90 text-white">
                Join Our Efforts
              </Button>
            </div>

            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ways to Participate</h3>
              <ul className="space-y-4">
                {[
                  "Volunteer as a mentor for the Youth League",
                  "Host an awareness workshop at your organization",
                  "Sponsor a student for our training programs",
                  "Partner with us for community outreach",
                  "Share your expertise as a guest speaker",
                ].map((way, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="h-5 w-5 rounded-full bg-accent-cyan flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <span>{way}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Join us at our upcoming events to learn more about cybersecurity and our initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity and Data Privacy",
                date: "May 21, 2025",
                location: "Virtual Event",
                description:
                  "Learn about the latest trends in cybersecurity and data privacy protection strategies.",
              },
              {
                title: "Protection against Election Interference",
                date: "June 18, 2025",
                location: "Cybernovr Training Center",
                description: "Discover how to identify and counter digital election interference tactics.",
              },
              {
                title: "Pandemic-induced Cyberthreats Awareness",
                date: "July 23, 2025",
                location: "Virtual Event",
                description: "Understanding the evolving cyberthreats that emerged during global health crises.",
              },
              {
                title: "Prevention of Online Gender Exploitation",
                date: "August 20, 2025",
                location: "Cybernovr Training Center",
                description: "Learn strategies to identify and prevent online gender-based exploitation.",
              },
              {
                title: "Understanding and Countering Cyber Terrorism",
                date: "September 24, 2025",
                location: "Cyber City Campus",
                description: "Comprehensive overview of cyber terrorism threats and countermeasures.",
              },
              {
                title: "Safe Social Media Practices",
                date: "October 22, 2025",
                location: "Virtual Event",
                description: "Best practices for maintaining security and privacy while using social media platforms.",
              },
              {
                title: "Online Child Protection and Safety",
                date: "November 19, 2025",
                location: "Cybernovr Training Center",
                description: "Essential knowledge for parents and educators to protect children in digital environments.",
              },
              {
                title: "Secure Online Banking and Financial Transactions",
                date: "December 17, 2025",
                location: "Virtual Event",
                description: "Learn how to secure your financial activities online and prevent fraud.",
              },
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="text-electric-blue font-medium mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="text-charcoal/70 mb-4">{event.location}</div>
                  <p className="text-charcoal/80 mb-6">{event.description}</p>
                  <Button variant="outline" className="w-full">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center text-electric-blue hover:text-deep-blue font-medium transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-electric-blue to-accent-cyan text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8">
              Together, we can build a more secure digital future through education, awareness, and community
              engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
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
        </div>
      </section>
    </>
  )
}
