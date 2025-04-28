import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, Target } from "lucide-react"
import TeamMember from "@/components/about/team-member"
import FadeIn from "@/components/animations/fade-in"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Kazem from "@/components/images/kazeem.png"

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Prof. Mutawakilu Tiamiyu",
      title: "Chairman",
      bio: "Leading the board with extensive experience in governance and strategic direction.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Kazeem Durodoye",
      title: "CEO",
      bio: "Kazeem Durodoye has over 30 years of ICT experience in public, private, and development organizations. He holds a Ph.D in Information Systems and Business from the University of Ibadan.",
      image: Kazem,
      fullBio: "Kazeem Durodoye, has over 30 years of ICT experience in public, private, and development organizations. Kazeem is presently the Chief Executive Officer of ZIASS Nigeria Limited. From 2013 to 2016, Dr. Durodoye was the Group Executive Director in charge of Technology and New Media at LEADERSHIP Newspapers Limited. He holds a Ph.D in Information Systems and Business from the University of Ibadan. He is a fellow of the Nigeria Computing Society; Computer Professional Registration Council of Nigeria as well as the American Society of Information Science and Technology (ASIST). He holds the following professional certifications: Certified Information Systems Manager (CISM), Certified in the Governance of Enterprise IT (CGEIT), Microfinance Certified Professional (MCP), Project Management Professional (PMP)."
    },
    {
      name: "Dr. Tunde Ali",
      title: "Non-Executive Director",
      bio: "A first-class medical professional with over 17 years of medical practice across multiple countries.",
      image: "/placeholder.svg?height=300&width=300",
      fullBio: "Dr. Tunde Alli is a first-class medical professional with over 17 years of medical practice in Nigeria, South Africa, Australia, and Canada. He is Consultant Anesthesia, Consultant Family Practice. His specialties include pain management, family practice, medical IT services, and internet marketing."
    },
    {
      name: "Eng. Gbolahan Oshonubi",
      title: "Non-Executive Director",
      bio: "Bringing engineering expertise to guide the strategic direction of ZIASS.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mrs.",
      title: "Board Member",
      bio: "Contributing valuable insights to the governance of ZIASS.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const managementTeam = [
    {
      name: "Dr. Kazeem Durodoye",
      title: "CEO",
      bio: "Leading ZIASS with over 30 years of ICT experience across various sectors.",
      image: Kazem,
      fullBio: "Kazeem Durodoye, has over 30 years of ICT experience in public, private, and development organizations. Kazeem is presently the Chief Executive Officer of ZIASS Nigeria Limited. From 2013 to 2016, Dr. Durodoye was the Group Executive Director in charge of Technology and New Media at LEADERSHIP Newspapers Limited. He holds a Ph.D in Information Systems and Business from the University of Ibadan. He is a fellow of the Nigeria Computing Society; Computer Professional Registration Council of Nigeria as well as the American Society of Information Science and Technology (ASIST). He holds the following professional certifications: Certified Information Systems Manager (CISM), Certified in the Governance of Enterprise IT (CGEIT), Microfinance Certified Professional (MCP), Project Management Professional (PMP)."
    },
    {
      name: "Mr. Ibrahim Oladeji",
      title: "CFO",
      bio: "An IT professional with over a decade of experience building solutions for various sectors.",
      image: "/placeholder.svg?height=300&width=300",
      fullBio: "Oladeji Oluwaseyi Ibraaheem is an IT professional with over a decade of experience. He has worked in several organizations and built IT solutions for various sectors. He has extensive experience leading IT teams and projects toward achieving efficiency and client satisfaction."
    },
    {
      name: "Olisa Okafor",
      title: "Cybersecurity Analyst",
      bio: "Specializing in threat detection and security analysis to protect client assets.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl text-black md:text-5xl font-bold mb-6">About ZIASS</h1>
            <p className="text-xl text-black">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Meet the experts behind ZIASS who are dedicated to protecting your organization from cyber threats.
            </p>
          </div>

          <Tabs defaultValue="board" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/50 backdrop-blur-sm">
                <TabsTrigger value="board" className="text-lg px-6 py-3">Board</TabsTrigger>
                <TabsTrigger value="management" className="text-lg px-6 py-3">Management</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="board" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardMembers.map((member, index) => (
                  <FadeIn key={index} direction="up" delay={index * 0.1}>
                    <TeamMember 
                      name={member.name} 
                      title={member.title} 
                      bio={member.bio} 
                      image={member.image}
                      fullBio={member.fullBio}
                    />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="management" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managementTeam.map((member, index) => (
                  <FadeIn key={index} direction="up" delay={index * 0.1}>
                    <TeamMember 
                      name={member.name} 
                      title={member.title} 
                      bio={member.bio} 
                      image={member.image}
                      fullBio={member.fullBio}
                    />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Featured Profile */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Leadership Profile</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src={Kazem} 
                    alt="Dr. Kazeem Durodoye" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-2">Dr. Kazeem Durodoye</h3>
                <p className="text-electric-blue font-medium mb-4">CEO & Founder</p>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Kazeem Durodoye has over 30 years of ICT experience in public, private, and development organizations. 
                    Kazeem is presently the Chief Executive Officer of ZIASS Nigeria Limited. From 2013 to 2016, Dr. Durodoye 
                    was the Group Executive Director in charge of Technology and New Media at LEADERSHIP Newspapers Limited.
                  </p>
                  <p className="mb-4">
                    He holds a Ph.D in Information Systems and Business from the University of Ibadan. He is a fellow of the 
                    Nigeria Computing Society; Computer Professional Registration Council of Nigeria as well as the American 
                    Society of Information Science and Technology (ASIST).
                  </p>
                  <p className="font-medium">Professional Certifications:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Certified Information Systems Manager (CISM)</li>
                    <li>Certified in the Governance of Enterprise IT (CGEIT)</li>
                    <li>Microfinance Certified Professional (MCP)</li>
                    <li>Project Management Professional (PMP)</li>
                  </ul>
                </div>
              </div>
            </div>
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

    </>
  )
}
