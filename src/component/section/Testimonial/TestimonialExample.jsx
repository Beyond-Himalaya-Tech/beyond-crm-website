import React from 'react'
import TestimonialComponent from './Testimonial.component.jsx'

const TestimonialExample = () => {
  // Example configuration
  const testimonialConfig = {
    title: "More than 100 Education Consultancy and Agencies Use",
    brandName: "BeyondCRM",
    logos: [
      { src: "/src/assets/images/hero-section/Hero-primary_img.png", alt: "Client Logo 1" },
      { src: "/src/assets/images/header/Logo.png", alt: "Client Logo 2" },
      { src: "/src/assets/images/hero-section/Hero-primary_img.png", alt: "Client Logo 3" },
      { src: "/src/assets/images/header/Logo.png", alt: "Client Logo 4" },
      { src: "/src/assets/images/hero-section/Hero-primary_img.png", alt: "Client Logo 5" },
      { src: "/src/assets/images/header/Logo.png", alt: "Client Logo 6" },
      { src: "/src/assets/images/hero-section/Hero-primary_img.png", alt: "Client Logo 7" },
      { src: "/src/assets/images/header/Logo.png", alt: "Client Logo 8" }
    ],
    animationDuration: 20
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section to demonstrate overlap */}
      <div className="bg-[#aa14b5] h-96 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Hero Section</h1>
      </div>
      
      {/* Testimonial Component */}
      <TestimonialComponent 
        {...testimonialConfig}
      />
      
      {/* Additional content */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Testimonial Component Example
        </h2>
        <p className="text-gray-600 mb-8">
          This testimonial component features a logo carousel that showcases client logos. 
          The component is positioned to overlap with the hero section above.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Features:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Animated logo carousel with infinite scroll</li>
            <li>Pause on hover functionality</li>
            <li>Responsive design for all screen sizes</li>
            <li>Customizable title and brand name</li>
            <li>Configurable animation speed</li>
            <li>Overlapping design with hero section</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TestimonialExample 