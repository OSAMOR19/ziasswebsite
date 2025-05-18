import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import logo from "@/components/images/Cybernovrlogosmall.png"


export default function Footer() {
  return (
    <footer className="bg-white text-charcoal border-t border-gray-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src={logo}
                alt="Cybernovr Logo"
                width={150}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-charcoal/80 mt-4">
              Cybernovr is a leading cybersecurity company providing comprehensive security solutions to protect your
              business from evolving cyber threats.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
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
                  className="text-charcoal/70 hover:text-cybernovr-purple transition-colors"
                >
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/services/grc" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  GRC
                </Link>
              </li>
              <li>
                <Link
                  href="/services/risk-management"
                  className="text-charcoal/70 hover:text-cybernovr-purple transition-colors"
                >
                  Risk Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/penetration-testing"
                  className="text-charcoal/70 hover:text-cybernovr-purple transition-colors"
                >
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/incident-response"
                  className="text-charcoal/70 hover:text-cybernovr-purple transition-colors"
                >
                  Incident Response
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cybernovr-purple hover:underline transition-colors font-medium">
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
                <Link href="/about" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-cybernovr-purple mr-3 mt-1 flex-shrink-0" />
                <span className="text-charcoal/70">454 Evanston Dr NW, Calgary AB T3P 0H1, Ontario, Canada & <br/>	6A Fatai Anjorin Street, Gbagada Phase 2, Lagos, Nigeria.</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-cybernovr-purple mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  +14439853735, +234-805-120-0000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-cybernovr-purple mr-3 flex-shrink-0" />
                <a href="mailto:kazeem@cybernovr.com" className="text-charcoal/70 hover:text-cybernovr-purple transition-colors">
                  kazeem@cybernovr.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-charcoal/60 text-sm">
            &copy; {new Date().getFullYear()} Cybernovr. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              {/* <li>
                <Link href="/sitemap" className="text-charcoal/60 hover:text-cybernovr-purple transition-colors">
                  Sitemap
                </Link>
              </li> */}
              <li>
                <Link href="/privacy" className="text-charcoal/60 hover:text-cybernovr-purple transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-charcoal/60 hover:text-cybernovr-purple transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-charcoal/60 hover:text-cybernovr-purple transition-colors">
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
