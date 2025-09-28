import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Award, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pete-navy-dark via-pete-gray-dark/50 to-pete-navy-dark relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pete-navy-dark/90 via-transparent to-pete-navy-dark/90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center glow-orange">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="font-display text-3xl font-bold text-white">PETE'S TILE</div>
            </div>
            <p className="font-body text-gray-300 leading-relaxed text-lg max-w-md">
              Transforming Arizona homes with exquisite tile work since 2010. Where master craftsmanship meets cutting-edge techniques for luxury results that last a lifetime.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-pete-orange-glow" />
                <span className="font-body text-sm text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-pete-orange-glow" />
                <span className="font-body text-sm text-gray-300">Lifetime Warranty</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="group bg-pete-gray-dark/40 hover:bg-pete-orange/20 p-3 rounded-xl transition-all duration-300 border border-pete-gray-dark/30 hover:border-pete-orange/50">
                <Facebook size={20} className="text-gray-400 group-hover:text-pete-orange-glow transition-colors duration-300" />
              </Link>
              <Link href="#" className="group bg-pete-gray-dark/40 hover:bg-pete-orange/20 p-3 rounded-xl transition-all duration-300 border border-pete-gray-dark/30 hover:border-pete-orange/50">
                <Instagram size={20} className="text-gray-400 group-hover:text-pete-orange-glow transition-colors duration-300" />
              </Link>
              <Link href="#" className="group bg-pete-gray-dark/40 hover:bg-pete-orange/20 p-3 rounded-xl transition-all duration-300 border border-pete-gray-dark/30 hover:border-pete-orange/50">
                <Twitter size={20} className="text-gray-400 group-hover:text-pete-orange-glow transition-colors duration-300" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-white">Navigation</h3>
            <div className="space-y-3">
              <Link href="/" className="group flex items-center gap-2 font-body text-gray-300 hover:text-pete-orange-glow transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-pete-orange-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Home
              </Link>
              <Link href="/portfolio" className="group flex items-center gap-2 font-body text-gray-300 hover:text-pete-orange-glow transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-pete-orange-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Portfolio
              </Link>
              <Link href="/services" className="group flex items-center gap-2 font-body text-gray-300 hover:text-pete-orange-glow transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-pete-orange-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Services
              </Link>
              <Link href="/about" className="group flex items-center gap-2 font-body text-gray-300 hover:text-pete-orange-glow transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-pete-orange-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                About Us
              </Link>
              <Link href="/quote" className="group flex items-center gap-2 font-body text-pete-orange-glow hover:text-white font-semibold transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-pete-orange-glow rounded-full"></span>
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-white">Contact</h3>
            <div className="space-y-4">
              <a href="tel:555-123-8453" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-pete-gray-dark/30 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <span className="font-body text-gray-300 group-hover:text-white transition-colors duration-300">(555) 123-TILE</span>
                  <div className="font-body text-xs text-pete-orange-glow">24/7 Emergency Service</div>
                </div>
              </a>
              <a href="mailto:pete@petestile.com" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-pete-gray-dark/30 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <span className="font-body text-gray-300 group-hover:text-white transition-colors duration-300">pete@petestile.com</span>
                  <div className="font-body text-xs text-pete-orange-glow">Free Estimates</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <span className="font-body text-gray-300">Serving Greater Phoenix</span>
                  <div className="font-body text-xs text-pete-orange-glow">Scottsdale • Tempe • Paradise Valley</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pete-gray-dark/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-body text-gray-400 text-sm">
              © 2024 Pete's Tile. All rights reserved. | Licensed & Insured | ROC #123456
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pete-orange-glow" />
                <span className="font-body text-gray-400">Mon-Sat: 7AM-7PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-pete-orange-glow" />
                <span className="font-body text-gray-400">BBB A+ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}