"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle, Calculator } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const projectTypes = [
  "Bathroom Renovation",
  "Kitchen Backsplash",
  "Floor Tiling",
  "Shower Installation",
  "Commercial Project",
  "Tile Repair",
  "Other"
]

const tileMaterials = [
  "Ceramic",
  "Porcelain",
  "Natural Stone",
  "Marble",
  "Granite",
  "Mosaic",
  "Not Sure"
]

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    projectType: "",
    tileMaterial: "",
    squareFootage: "",
    budget: "",
    timeframe: "",
    description: "",
    photos: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you! We'll contact you within 24 hours with your free estimate.")
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-pete-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Estimate</h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Ready to transform your space? Fill out our quick form and receive a detailed, no-obligation quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-pete-navy mb-6">Project Details</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-pete-gray mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-pete-gray mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-pete-gray mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-pete-gray mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Address Information */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-pete-gray mb-2">
                        Project Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-pete-gray mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-pete-gray mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-pete-gray mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="tileMaterial" className="block text-sm font-medium text-pete-gray mb-2">
                          Preferred Tile Material
                        </label>
                        <select
                          id="tileMaterial"
                          name="tileMaterial"
                          value={formData.tileMaterial}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        >
                          <option value="">Select material</option>
                          {tileMaterials.map((material) => (
                            <option key={material} value={material}>{material}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="squareFootage" className="block text-sm font-medium text-pete-gray mb-2">
                          Approximate Square Footage
                        </label>
                        <input
                          type="number"
                          id="squareFootage"
                          name="squareFootage"
                          value={formData.squareFootage}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                          placeholder="e.g., 150"
                        />
                      </div>
                      <div>
                        <label htmlFor="timeframe" className="block text-sm font-medium text-pete-gray mb-2">
                          Desired Timeframe
                        </label>
                        <select
                          id="timeframe"
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        >
                          <option value="">Select timeframe</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="1 month">1 month</option>
                          <option value="2-3 months">2-3 months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-pete-gray mb-2">
                        Budget Range (Optional)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                        <option value="$20,000 - $30,000">$20,000 - $30,000</option>
                        <option value="Over $30,000">Over $30,000</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-pete-gray mb-2">
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pete-orange focus:border-transparent"
                        placeholder="Please describe your project in detail. Include any specific requirements, preferences, or questions you have."
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="photos"
                        name="photos"
                        checked={formData.photos}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-pete-orange focus:ring-pete-orange border-gray-300 rounded"
                      />
                      <label htmlFor="photos" className="ml-2 block text-sm text-pete-gray">
                        I can provide photos of the project area for a more accurate estimate
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-pete-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                    >
                      Request Free Estimate
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Contact Info */}
                  <div className="bg-pete-navy text-white rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone size={18} className="text-pete-orange mr-3" />
                        <span>(555) 123-TILE</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={18} className="text-pete-orange mr-3" />
                        <span>pete@petestile.com</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin size={18} className="text-pete-orange mr-3 mt-1" />
                        <span>123 Renovation Ave<br />Phoenix, AZ 85001</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="text-pete-orange mr-3" />
                        <span>Mon-Fri: 7AM-6PM</span>
                      </div>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-pete-navy mb-4">What to Expect</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle size={18} className="text-pete-orange mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-pete-navy">24-Hour Response</p>
                          <p className="text-sm text-pete-gray">We'll contact you within one business day</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle size={18} className="text-pete-orange mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-pete-navy">Free Consultation</p>
                          <p className="text-sm text-pete-gray">No-obligation estimate and project review</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle size={18} className="text-pete-orange mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-pete-navy">Detailed Quote</p>
                          <p className="text-sm text-pete-gray">Comprehensive pricing breakdown</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle size={18} className="text-pete-orange mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-pete-navy">Professional Service</p>
                          <p className="text-sm text-pete-gray">Licensed, insured, and guaranteed work</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Calculator */}
                  <div className="bg-pete-light-gray rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-pete-navy mb-4 flex items-center">
                      <Calculator size={20} className="mr-2" />
                      Quick Estimate
                    </h3>
                    <p className="text-sm text-pete-gray mb-4">
                      Average tile installation costs:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Ceramic tiles:</span>
                        <span className="font-medium">$8-15/sq ft</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Porcelain tiles:</span>
                        <span className="font-medium">$12-25/sq ft</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Natural stone:</span>
                        <span className="font-medium">$15-35/sq ft</span>
                      </div>
                    </div>
                    <p className="text-xs text-pete-gray mt-4">
                      *Prices include materials and labor. Final pricing may vary based on project complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}