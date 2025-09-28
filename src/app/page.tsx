import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle, Users, Award, Clock, Sparkles, Shield, Zap, Hammer } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pete-navy-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-bathroom-dark.jpg"
            alt="Professional dark luxury bathroom renovation with exquisite tile work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pete-navy-dark/80 via-transparent to-pete-gray-dark/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-pete-orange/20 backdrop-blur-sm border border-pete-orange/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-pete-orange-glow" />
              <span className="font-body text-sm font-medium text-pete-orange-glow">Premium Luxury Renovations</span>
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Space with<br />
            <span className="bg-gradient-to-r from-pete-orange-glow to-pete-accent bg-clip-text text-transparent glow-orange">
              Exquisite Tile Artistry
            </span>
          </h1>
          <p className="font-body text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Where craftsmanship meets innovation. 15+ years of creating stunning spaces with precision tile installation, waterproof guarantees, and unmatched attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/portfolio"
              className="group relative bg-gradient-to-r from-pete-orange to-pete-orange-glow hover:from-pete-orange-glow hover:to-pete-orange text-white px-10 py-5 rounded-xl font-body font-semibold text-lg transition-all duration-300 glow-orange transform hover:scale-105"
            >
              <span className="relative z-10">View Our Gallery</span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/quote"
              className="group bg-transparent backdrop-blur-sm border-2 border-pete-navy-light hover:bg-pete-navy-light/20 hover:border-pete-orange-glow text-white px-10 py-5 rounded-xl font-body font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 gradient-dark relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pete-navy-dark/90 via-pete-gray-dark/50 to-pete-navy-dark/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by <span className="text-pete-orange-glow">Hundreds</span> of Homeowners
            </h2>
            <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has earned us a reputation as the premier tile installation specialists.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group flex flex-col items-center p-6 bg-pete-gray-dark/30 backdrop-blur-sm rounded-xl border border-pete-gray-dark/50 hover:border-pete-orange/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-pete-orange to-pete-orange-glow text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <Users size={36} />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">750+</h3>
              <p className="font-body text-pete-gray font-medium">Satisfied Clients</p>
              <span className="text-xs text-pete-gray mt-1">And Growing</span>
            </div>
            <div className="group flex flex-col items-center p-6 bg-pete-gray-dark/30 backdrop-blur-sm rounded-xl border border-pete-gray-dark/50 hover:border-pete-orange/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-pete-orange to-pete-orange-glow text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <Award size={36} />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">15+</h3>
              <p className="font-body text-pete-gray font-medium">Years Mastery</p>
              <span className="text-xs text-pete-gray mt-1">Expert Craftsmanship</span>
            </div>
            <div className="group flex flex-col items-center p-6 bg-pete-gray-dark/30 backdrop-blur-sm rounded-xl border border-pete-gray-dark/50 hover:border-pete-orange/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-pete-orange to-pete-orange-glow text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <Shield size={36} />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">Licensed</h3>
              <p className="font-body text-pete-gray font-medium">& Fully Insured</p>
              <span className="text-xs text-pete-gray mt-1">ROC #123456</span>
            </div>
            <div className="group flex flex-col items-center p-6 bg-pete-gray-dark/30 backdrop-blur-sm rounded-xl border border-pete-gray-dark/50 hover:border-pete-orange/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-pete-orange to-pete-orange-glow text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <Sparkles size={36} />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">Lifetime</h3>
              <p className="font-body text-pete-gray font-medium">Quality Guarantee</p>
              <span className="text-xs text-pete-gray mt-1">Worry-Free Investment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Craftsmanship Section */}
      <section className="py-24 bg-pete-navy-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pete-accent/20 backdrop-blur-sm border border-pete-accent/30 rounded-full px-4 py-2 mb-6">
              <Hammer className="w-4 h-4 text-pete-accent" />
              <span className="font-body text-sm font-medium text-pete-accent">Master Craftsmanship</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Where <span className="text-pete-orange-glow">Artistry</span> Meets Precision
            </h2>
            <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every project is a masterpiece. Our portfolio showcases transformative installations that combine cutting-edge techniques with timeless design principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/generated/kitchen-renovation-dark.jpg"
                  alt="Dark luxury kitchen tile renovation with dramatic lighting"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pete-gray-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-pete-orange/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-pete-orange-glow transition-colors duration-300">Kitchen Backsplash Artistry</h3>
                <p className="font-body text-gray-300 mb-4 leading-relaxed">Dramatic herringbone patterns in premium subway tile with custom accent lighting. Perfect grout lines and seamless integration with modern cabinetry.</p>
                <div className="flex items-center gap-2 text-sm text-pete-orange-glow font-medium">
                  <span>Premium Materials</span>
                  <div className="w-1 h-1 bg-pete-orange-glow rounded-full"></div>
                  <span>Custom Lighting</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/generated/shower-renovation-dark.jpg"
                  alt="Elegant dark shower installation with geometric tiles"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pete-gray-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-pete-orange/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-pete-orange-glow transition-colors duration-300">Luxury Spa Sanctuary</h3>
                <p className="font-body text-gray-300 mb-4 leading-relaxed">Geometric marble-look porcelain with integrated niche storage and ambient LED strips. Advanced waterproofing ensures decades of beauty.</p>
                <div className="flex items-center gap-2 text-sm text-pete-orange-glow font-medium">
                  <span>Waterproof Guarantee</span>
                  <div className="w-1 h-1 bg-pete-orange-glow rounded-full"></div>
                  <span>LED Integration</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/generated/foyer-renovation-dark.jpg"
                  alt="Stunning dark foyer with custom geometric tile patterns"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pete-gray-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-pete-orange/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-pete-orange-glow transition-colors duration-300">Grand Entrance Statement</h3>
                <p className="font-body text-gray-300 mb-4 leading-relaxed">Custom geometric patterns in charcoal and copper create an unforgettable first impression. Precision-cut tiles with museum-quality finishing.</p>
                <div className="flex items-center gap-2 text-sm text-pete-orange-glow font-medium">
                  <span>Custom Patterns</span>
                  <div className="w-1 h-1 bg-pete-orange-glow rounded-full"></div>
                  <span>Museum Quality</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-pete-orange to-pete-orange-glow hover:from-pete-orange-glow hover:to-pete-accent text-white px-8 py-4 rounded-xl font-body font-semibold text-lg transition-all duration-300 glow-orange transform hover:scale-105"
            >
              <span>Explore Full Portfolio</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 gradient-dark relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pete-gray-dark/90 via-pete-navy-dark/70 to-pete-gray-dark/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pete-accent/20 backdrop-blur-sm border border-pete-accent/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-pete-accent fill-pete-accent" />
              <span className="font-body text-sm font-medium text-pete-accent">5-Star Excellence</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-pete-orange-glow">Exceptional</span> Client Experiences
            </h2>
            <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what homeowners are saying about their transformation experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-pete-orange-glow text-pete-orange-glow" />
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-pete-orange-glow">5.0</span>
              </div>
              <blockquote className="font-body text-gray-200 mb-6 leading-relaxed text-lg">
                "Pete transformed our master bathroom into a luxury spa sanctuary. The attention to detail and craftsmanship exceeded our wildest expectations. Worth every penny!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SM
                </div>
                <div className="ml-4">
                  <p className="font-body font-semibold text-white text-lg">Sarah M.</p>
                  <p className="font-body text-sm text-pete-gray">Scottsdale Homeowner</p>
                  <p className="font-body text-xs text-pete-orange-glow mt-1">Verified Purchase</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-pete-orange-glow text-pete-orange-glow" />
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-pete-orange-glow">5.0</span>
              </div>
              <blockquote className="font-body text-gray-200 mb-6 leading-relaxed text-lg">
                "Professional, reliable, and absolutely beautiful work. Pete's team completed our kitchen backsplash perfectly and on schedule. Highly recommended!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div className="ml-4">
                  <p className="font-body font-semibold text-white text-lg">John D.</p>
                  <p className="font-body text-sm text-pete-gray">Paradise Valley Homeowner</p>
                  <p className="font-body text-xs text-pete-orange-glow mt-1">Verified Purchase</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-pete-orange-glow text-pete-orange-glow" />
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-pete-orange-glow">5.0</span>
              </div>
              <blockquote className="font-body text-gray-200 mb-6 leading-relaxed text-lg">
                "Outstanding quality and customer service throughout the entire process. Pete's expertise and attention to detail are unmatched. Our dream space is now reality!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MR
                </div>
                <div className="ml-4">
                  <p className="font-body font-semibold text-white text-lg">Maria R.</p>
                  <p className="font-body text-sm text-pete-gray">Tempe Homeowner</p>
                  <p className="font-body text-xs text-pete-orange-glow mt-1">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-6 bg-pete-gray-dark/40 backdrop-blur-sm rounded-2xl p-6 border border-pete-gray-dark/30">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-white mb-1">4.9/5</div>
                <div className="font-body text-sm text-pete-gray">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-pete-gray-dark"></div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-white mb-1">98%</div>
                <div className="font-body text-sm text-pete-gray">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-pete-gray-dark"></div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-white mb-1">100%</div>
                <div className="font-body text-sm text-pete-gray">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-24 bg-pete-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pete-navy-dark via-pete-gray-dark/30 to-pete-navy-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pete-orange/20 backdrop-blur-sm border border-pete-orange/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-pete-orange-glow" />
              <span className="font-body text-sm font-medium text-pete-orange-glow">Advanced Technology</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-pete-orange-glow">Pete's Tile</span>?
            </h2>
            <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine traditional craftsmanship with cutting-edge techniques to deliver unparalleled results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center glow-orange">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Lifetime Waterproof Guarantee</h3>
                  <p className="font-body text-gray-300 leading-relaxed">Advanced RedGard membrane system with 25-year manufacturer backing. Your investment is protected with our comprehensive warranty coverage.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center glow-orange">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Premium Material Sourcing</h3>
                  <p className="font-body text-gray-300 leading-relaxed">Exclusive partnerships with top-tier manufacturers. Access to designer collections and limited-edition materials not available to typical contractors.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center glow-orange">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Certified Master Installer</h3>
                  <p className="font-body text-gray-300 leading-relaxed">CTEF and NTCA certified with specialized training in luxury installations. Continuing education ensures we stay ahead of industry innovations.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pete-orange/20 to-pete-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30">
                <h4 className="font-display text-2xl font-bold text-white mb-6 text-center">Process Excellence</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-pete-orange rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <span className="font-body text-gray-200">3D Design Visualization</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-pete-orange rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <span className="font-body text-gray-200">Precision Surface Preparation</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-pete-orange rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <span className="font-body text-gray-200">Advanced Waterproofing Systems</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-pete-orange rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <span className="font-body text-gray-200">Master-Level Installation</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-pete-orange rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <span className="font-body text-gray-200">Quality Assurance Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pete-accent/20 backdrop-blur-sm border border-pete-accent/30 rounded-full px-4 py-2 mb-6">
              <Hammer className="w-4 h-4 text-pete-accent" />
              <span className="font-body text-sm font-medium text-pete-accent">Full-Service Excellence</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-pete-orange-glow">Tile Solutions</span>
            </h2>
            <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From intimate residential spaces to expansive commercial projects, we deliver precision craftsmanship at every scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center mx-auto mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 5l2-2 2 2" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-pete-orange-glow transition-colors duration-300">Luxury Bathroom Suites</h3>
              <p className="font-body text-gray-300 leading-relaxed mb-4">Complete bathroom transformations with premium tile work, advanced waterproofing, heated floors, and spa-grade fixtures.</p>
              <div className="text-sm text-pete-orange-glow font-medium">Starting at $15,000</div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center mx-auto mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-pete-orange-glow transition-colors duration-300">Designer Kitchen Backsplashes</h3>
              <p className="font-body text-gray-300 leading-relaxed mb-4">Stunning backsplashes in subway, mosaic, natural stone, and custom patterns with integrated lighting systems.</p>
              <div className="text-sm text-pete-orange-glow font-medium">Starting at $2,500</div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center mx-auto mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-pete-orange-glow transition-colors duration-300">Premium Floor Installation</h3>
              <p className="font-body text-gray-300 leading-relaxed mb-4">Expert floor tiling for kitchens, bathrooms, foyers, and living areas with radiant heating integration available.</p>
              <div className="text-sm text-pete-orange-glow font-medium">Starting at $8 per sq ft</div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center mx-auto mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-pete-orange-glow transition-colors duration-300">Custom Walk-In Showers</h3>
              <p className="font-body text-gray-300 leading-relaxed mb-4">Spa-quality walk-in showers with frameless glass, built-in storage niches, and rainfall systems.</p>
              <div className="text-sm text-pete-orange-glow font-medium">Starting at $8,500</div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center mx-auto mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-pete-orange-glow transition-colors duration-300">Commercial Projects</h3>
              <p className="font-body text-gray-300 leading-relaxed mb-4">Large-scale installations for offices, restaurants, retail spaces, and hospitality venues with project management.</p>
              <div className="text-sm text-pete-orange-glow font-medium">Custom Pricing</div>
            </div>

            <div className="group bg-gradient-to-br from-pete-gray-dark/40 to-pete-navy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-pete-gray-dark/30 hover:border-pete-orange/40 transition-all duration-500 transform hover:scale-[1.02] text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pete-orange to-pete-orange-glow rounded-xl flex items-center justify-center mx-auto mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-pete-orange-glow transition-colors duration-300">Restoration & Repair</h3>
              <p className="font-body text-gray-300 leading-relaxed mb-4">Expert restoration of damaged installations, grout repair, re-sealing, and color matching for seamless repairs.</p>
              <div className="text-sm text-pete-orange-glow font-medium">Starting at $350</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="group bg-gradient-to-r from-pete-orange to-pete-orange-glow hover:from-pete-orange-glow hover:to-pete-accent text-white px-10 py-5 rounded-xl font-body font-semibold text-lg transition-all duration-300 glow-orange transform hover:scale-105"
              >
                <span>Get Free Consultation</span>
              </Link>
              <Link
                href="/portfolio"
                className="group bg-transparent backdrop-blur-sm border-2 border-pete-navy-light hover:bg-pete-navy-light/20 hover:border-pete-orange-glow text-white px-10 py-5 rounded-xl font-body font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}