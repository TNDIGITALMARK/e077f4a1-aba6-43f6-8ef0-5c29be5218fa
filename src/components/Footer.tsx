import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-pete-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">PETE'S TILE</div>
            <p className="text-blue-200 leading-relaxed">
              Transforming homes with exquisite tile work since 2010. Quality craftsmanship and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-pete-orange transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-pete-orange transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-pete-orange transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-blue-200 hover:text-pete-orange transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="block text-blue-200 hover:text-pete-orange transition-colors">
                Portfolio
              </Link>
              <Link href="/services" className="block text-blue-200 hover:text-pete-orange transition-colors">
                Services
              </Link>
              <Link href="/about" className="block text-blue-200 hover:text-pete-orange transition-colors">
                About Us
              </Link>
              <Link href="/quote" className="block text-blue-200 hover:text-pete-orange transition-colors">
                Get Quote
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-pete-orange" />
                <span className="text-blue-200">(555) 123-TILE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-pete-orange" />
                <span className="text-blue-200">pete@petestile.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-pete-orange" />
                <span className="text-blue-200">123 Renovation Ave<br />Hometown, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Pete's Tile. All rights reserved. | Licensed & Insured | ROC #123456
          </p>
        </div>
      </div>
    </footer>
  )
}