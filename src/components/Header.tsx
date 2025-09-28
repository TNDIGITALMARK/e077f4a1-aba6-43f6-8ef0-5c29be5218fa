"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-pete-navy text-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold">PETE'S TILE</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-pete-orange transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-pete-orange transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-pete-orange transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-pete-orange transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/quote"
              className="bg-pete-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pete-orange transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-pete-navy border-t border-blue-800">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-pete-orange transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-white hover:text-pete-orange transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-white hover:text-pete-orange transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-pete-orange transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/quote"
                className="block mx-3 my-2 bg-pete-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}