import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const projects = [
  {
    id: 1,
    title: "Luxury Master Bathroom",
    location: "Scottsdale, AZ",
    date: "March 2024",
    category: "Bathroom",
    image: "/generated/hero-bathroom.jpg",
    description: "Complete bathroom renovation featuring marble-look porcelain tiles, custom walk-in shower, and freestanding tub.",
    details: [
      "12×24 marble-look porcelain floor tiles",
      "Custom shower with built-in niches",
      "Waterproof membrane installation",
      "Natural stone accent wall"
    ]
  },
  {
    id: 2,
    title: "Modern Kitchen Backsplash",
    location: "Phoenix, AZ",
    date: "February 2024",
    category: "Kitchen",
    image: "/generated/kitchen-renovation.jpg",
    description: "Stunning herringbone subway tile backsplash installation with premium grout and professional finishing.",
    details: [
      "3×6 subway tiles in herringbone pattern",
      "Premium epoxy grout for durability",
      "Custom edge trim work",
      "Perfect alignment and spacing"
    ]
  },
  {
    id: 3,
    title: "Grand Foyer Entrance",
    location: "Paradise Valley, AZ",
    date: "January 2024",
    category: "Flooring",
    image: "/generated/foyer-renovation.jpg",
    description: "Elegant entryway featuring custom geometric tile patterns with decorative borders and medallion centerpiece.",
    details: [
      "Custom geometric pattern design",
      "Natural stone and ceramic blend",
      "Decorative border installation",
      "Precision cutting and fitting"
    ]
  },
  {
    id: 4,
    title: "Spa-Style Shower Renovation",
    location: "Tempe, AZ",
    date: "December 2023",
    category: "Bathroom",
    image: "/generated/shower-renovation.jpg",
    description: "Luxurious walk-in shower with floor-to-ceiling marble tiles, multiple shower heads, and built-in seating.",
    details: [
      "Floor-to-ceiling marble installation",
      "Multiple built-in storage niches",
      "Custom shower seat with tile",
      "Professional waterproofing system"
    ]
  }
]

const categories = ["All", "Bathroom", "Kitchen", "Flooring"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-pete-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Explore our gallery of completed tile installation projects. Each project showcases our commitment to quality, attention to detail, and superior craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border-2 border-pete-navy text-pete-navy hover:bg-pete-navy hover:text-white transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pete-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-pete-navy mb-3">{project.title}</h2>
                  <p className="text-pete-gray mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-pete-gray">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {project.date}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-pete-navy mb-3">Project Details:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, index) => (
                        <li key={index} className="text-pete-gray flex items-start">
                          <span className="text-pete-orange mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-pete-gray">
                      <Clock size={16} className="mr-2" />
                      2-3 weeks completion time
                    </div>
                    <Link
                      href="/quote"
                      className="bg-pete-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Similar Project Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-pete-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pete-light-gray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-pete-navy mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-pete-gray mb-8 leading-relaxed">
              Let us bring your vision to life with our expert tile installation services. Every project is backed by our satisfaction guarantee and professional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-pete-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Your Free Estimate
              </Link>
              <Link
                href="tel:555-123-8453"
                className="bg-transparent border-2 border-pete-navy hover:bg-pete-navy hover:text-white text-pete-navy px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Call (555) 123-TILE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}