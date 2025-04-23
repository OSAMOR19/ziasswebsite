import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">Get in touch with our team to discuss your cybersecurity needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[500px] w-full">
              {/* Google Maps Embed would go here */}
              <div className="w-full h-full bg-light-gray flex items-center justify-center">
                <p className="text-charcoal/60 text-lg">Google Maps Embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we can help your organization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What services does ZIASS offer?",
                answer:
                  "ZIASS offers a comprehensive range of cybersecurity services, including professional consulting, risk management, penetration testing, incident response, compliance, and virtual CISO services. We tailor our solutions to meet the specific needs of your organization.",
              },
              {
                question: "How can I request a security assessment?",
                answer:
                  "You can request a security assessment by filling out our contact form, calling our office, or sending us an email. One of our security experts will get in touch with you to discuss your requirements and schedule the assessment.",
              },
              {
                question: "Do you offer services for small businesses?",
                answer:
                  "Yes, we offer cybersecurity solutions for businesses of all sizes. We understand that small businesses have unique security challenges and budget constraints, and we provide tailored solutions that address these specific needs.",
              },
              {
                question: "What industries do you serve?",
                answer:
                  "We serve a wide range of industries, including finance, healthcare, retail, manufacturing, education, and government. Our team has experience working with organizations across various sectors and understands the specific security requirements of each industry.",
              },
              {
                question: "How quickly can you respond to a security incident?",
                answer:
                  "Our incident response team is available 24/7 and can respond rapidly to security incidents. The exact response time depends on the nature and severity of the incident, but we prioritize immediate containment and mitigation to minimize potential damage.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-charcoal/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
