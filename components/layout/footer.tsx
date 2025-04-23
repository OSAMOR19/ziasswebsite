import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-ziass-green text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ziasslogo.jpg-5msKUK2mXX21RUrHKmVz6SSqsfk7Tq.jpeg"
                alt="ZIASS Logo"
                width={150}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-300 mt-4">
              ZIASS is a leading cybersecurity company providing comprehensive security solutions to protect your
              business from evolving cyber threats.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-ziass-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-ziass-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-ziass-gold transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-ziass-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/professional-services"
                  className="text-gray-300 hover:text-ziass-gold transition-colors"
                >
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/services/grc" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  GRC
                </Link>
              </li>
              <li>
                <Link
                  href="/services/risk-management"
                  className="text-gray-300 hover:text-ziass-gold transition-colors"
                >
                  Risk Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/penetration-testing"
                  className="text-gray-300 hover:text-ziass-gold transition-colors"
                >
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/incident-response"
                  className="text-gray-300 hover:text-ziass-gold transition-colors"
                >
                  Incident Response
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ziass-gold hover:underline transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-ziass-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Security Street, Cyber City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-ziass-gold mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-ziass-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@ziass.com" className="text-gray-300 hover:text-ziass-gold transition-colors">
                  info@ziass.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ZIASS. All rights reserved. RC: 1949693
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-ziass-gold transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-ziass-gold transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-ziass-gold transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-ziass-gold transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
