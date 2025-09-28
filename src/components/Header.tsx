"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-pete-navy-dark/95 backdrop-blur-sm border-b border-pete-gray-dark/20 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="font-display text-2xl font-bold bg-gradient-to-r from-white to-pete-orange-glow bg-clip-text text-transparent group-hover:from-pete-orange-glow group-hover:to-pete-accent transition-all duration-300">
              PETE'S TILE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-body text-gray-200 hover:text-pete-orange-glow transition-all duration-300 relative group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-pete-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-2 -my-1"></div>
            </Link>
            <Link
              href="/portfolio"
              className="font-body text-gray-200 hover:text-pete-orange-glow transition-all duration-300 relative group"
            >
              <span className="relative z-10">Gallery</span>
              <div className="absolute inset-0 bg-pete-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-2 -my-1"></div>
            </Link>
            <Link
              href="/services"
              className="font-body text-gray-200 hover:text-pete-orange-glow transition-all duration-300 relative group"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-pete-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-2 -my-1"></div>
            </Link>
            <Link
              href="/about"
              className="font-body text-gray-200 hover:text-pete-orange-glow transition-all duration-300 relative group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-pete-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-2 -my-1"></div>
            </Link>
            <Link
              href="/quote"
              className="group relative bg-gradient-to-r from-pete-orange to-pete-orange-glow hover:from-pete-orange-glow hover:to-pete-accent text-white px-6 py-3 rounded-xl font-body font-semibold transition-all duration-300 glow-orange transform hover:scale-105"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-pete-orange-glow transition-all duration-300 p-2 rounded-lg hover:bg-pete-orange/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-pete-navy-dark/95 backdrop-blur-sm border-t border-pete-gray-dark/30">
              <Link
                href="/"
                className="block px-4 py-3 font-body text-gray-200 hover:text-pete-orange-glow hover:bg-pete-orange/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="block px-4 py-3 font-body text-gray-200 hover:text-pete-orange-glow hover:bg-pete-orange/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 font-body text-gray-200 hover:text-pete-orange-glow hover:bg-pete-orange/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 font-body text-gray-200 hover:text-pete-orange-glow hover:bg-pete-orange/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/quote"
                className="block mx-3 my-3 bg-gradient-to-r from-pete-orange to-pete-orange-glow text-white px-6 py-4 rounded-xl font-body font-semibold text-center transition-all duration-300 glow-orange"
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