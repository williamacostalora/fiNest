"use client";  // This directive tells Next.js to treat this file as a Client Component
import { useState } from "react"
import { Button, Heading } from "@medusajs/ui"
import { Github } from "@medusajs/icons"

// Sample data for top-rated services
const topRatedServices = [
  { id: 1, title: "Home Renovation", description: "Transform your home with expert renovation services." },
  { id: 2, title: "Plumbing", description: "Reliable plumbing services to keep your home safe." },
  { id: 3, title: "Electrical Services", description: "Top-notch electrical services to power your home." }
]

const Hero = () => {
  // State for carousel control
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel handlers
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topRatedServices.length)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topRatedServices.length) % topRatedServices.length)
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
          <span>
            <Heading
              level="h1"
              className="text-3xl leading-10 text-ui-fg-base font-normal"
            >
              Discover fiNest Home Services
            </Heading>
            <Heading
              level="h3"
              className="text-3xl leading-10 text-ui-fg-subtle font-normal"
            >
              Maintenance and Modifications to Make Your Home Livable for a Lifetime
            </Heading>
          </span>
          <a
            href="https://github.com/medusajs/nextjs-starter-medusa"
            target="_blank"
          >
            <Button variant="secondary">
              Browse our Marketplace
              <Github />
            </Button>
          </a>
          <a
            href="https://github.com/medusajs/nextjs-starter-medusa"
            target="_blank"
          >
            <Button variant="secondary">
              Request a Consultation
              <Github />
            </Button>
          </a>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-12 bg-gray-100">
        <Heading level="h2" className="text-2xl text-center font-medium mb-6">
          Top Rated Services by Clients
        </Heading>
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Content */}
          <div className="flex justify-center items-center space-x-8">
            {/* Prev Button */}
            <button
              onClick={handlePrevSlide}
              className="text-3xl p-2 bg-black text-white rounded-full hover:bg-gray-700"
            >
              &lt;
            </button>
            {/* Service Display */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold">{topRatedServices[currentSlide].title}</h3>
              <p className="text-md text-gray-500">{topRatedServices[currentSlide].description}</p>
            </div>
            {/* Next Button */}
            <button
              onClick={handleNextSlide}
              className="text-3xl p-2 bg-black text-white rounded-full hover:bg-gray-700"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Text Sections */}
      <div className="py-16 bg-gray-200">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <Heading level="h3" className="text-xl font-medium mb-4">
              Quality Services
            </Heading>
            <p>We provide top-tier home services backed by expert professionals dedicated to making your home a better place.</p>
          </div>
          <div className="text-center">
            <Heading level="h3" className="text-xl font-medium mb-4">
              Affordable Prices
            </Heading>
            <p>Get the best home services at prices that won't break the bank. We believe in fair pricing for everyone.</p>
          </div>
          <div className="text-center">
            <Heading level="h3" className="text-xl font-medium mb-4">
              Expert Professionals
            </Heading>
            <p>Our team consists of experienced and certified professionals who provide high-quality services with attention to detail.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
