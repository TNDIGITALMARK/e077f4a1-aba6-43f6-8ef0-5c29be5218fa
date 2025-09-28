import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle, Users, Award, Clock } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-bathroom.jpg"
            alt="Professional bathroom renovation with beautiful tile work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Home with<br />
            <span className="text-pete-orange">Exquisite Tile Work</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional tile installation with 15+ years of experience. Quality craftsmanship guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="bg-pete-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Our Projects
            </Link>
            <Link
              href="/quote"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-pete-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-pete-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-pete-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-pete-navy">500+</h3>
              <p className="text-pete-gray">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-pete-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-pete-navy">15+</h3>
              <p className="text-pete-gray">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-pete-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-pete-navy">Licensed</h3>
              <p className="text-pete-gray">& Insured</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-pete-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-bold text-pete-navy">Lifetime</h3>
              <p className="text-pete-gray">Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Craftsmanship Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pete-navy mb-4">Our Craftsmanship</h2>
            <p className="text-lg text-pete-gray max-w-2xl mx-auto">
              See examples of our professional tile installation work across kitchens, bathrooms, and living spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/generated/kitchen-renovation.jpg"
                  alt="Kitchen tile renovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pete-navy mb-2">Kitchen Backsplash</h3>
                <p className="text-pete-gray">Modern subway tile installation with perfect grout lines and professional finishing.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/generated/shower-renovation.jpg"
                  alt="Shower tile renovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pete-navy mb-2">Luxury Shower</h3>
                <p className="text-pete-gray">Marble-look porcelain tiles with custom niches and flawless waterproofing.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/generated/foyer-renovation.jpg"
                  alt="Foyer tile renovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pete-navy mb-2">Entrance Foyer</h3>
                <p className="text-pete-gray">Custom geometric patterns creating a stunning first impression for guests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-pete-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pete-navy mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-pete-orange text-pete-orange" />
                  ))}
                </div>
              </div>
              <p className="text-pete-gray mb-4">
                "Pete transformed our master bathroom beyond our expectations. The attention to detail and craftsmanship is outstanding!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-pete-navy rounded-full flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-pete-navy">Sarah M.</p>
                  <p className="text-sm text-pete-gray">Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-pete-orange text-pete-orange" />
                  ))}
                </div>
              </div>
              <p className="text-pete-gray mb-4">
                "Professional, reliable, and beautiful work. Pete's team completed our kitchen backsplash perfectly and on time."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-pete-navy rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-pete-navy">John D.</p>
                  <p className="text-sm text-pete-gray">Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-pete-orange text-pete-orange" />
                  ))}
                </div>
              </div>
              <p className="text-pete-gray mb-4">
                "Outstanding quality and customer service. I'll definitely use Pete's Tile for my next renovation project."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-pete-navy rounded-full flex items-center justify-center text-white font-semibold">
                  MR
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-pete-navy">Maria R.</p>
                  <p className="text-sm text-pete-gray">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pete-navy mb-4">Services</h2>
            <p className="text-lg text-pete-gray max-w-2xl mx-auto">
              Professional tile installation services for residential and commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-pete-navy mb-3">Bathroom Remodeling</h3>
              <p className="text-pete-gray">Complete bathroom renovations with custom tile work, waterproofing, and modern fixtures.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-pete-navy mb-3">Kitchen Backsplash</h3>
              <p className="text-pete-gray">Beautiful and functional kitchen backsplashes in subway, mosaic, and natural stone tiles.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-pete-navy mb-3">Floor Tiling</h3>
              <p className="text-pete-gray">Professional floor tile installation for kitchens, bathrooms, foyers, and living areas.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-pete-navy mb-3">Shower Installation</h3>
              <p className="text-pete-gray">Custom walk-in showers with proper waterproofing and premium tile materials.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-pete-navy mb-3">Commercial Tiling</h3>
              <p className="text-pete-gray">Large-scale commercial projects including offices, restaurants, and retail spaces.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-pete-navy mb-3">Tile Repair</h3>
              <p className="text-pete-gray">Expert tile and grout repair services to restore your existing installations.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="bg-pete-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}