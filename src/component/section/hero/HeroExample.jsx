import React from 'react'
import HeroComponent from './Hero.component.jsx'

const HeroExample = () => {
  // Example configuration
  const heroConfig = {
    title: {
      main: "Complete",
      highlight: "CRM",
      subtitle: "For Overseas Education Consultants."
    },
    description: "Begin an exceptional transformation with BeyondAgent, the top-tier Study Abroad CRM software tailored for International Education Advisors. Propel your consultancy operations to extraordinary achievements through our advanced and robust Overseas Education CRM technology.",
    buttons: [
      {
        text: "See Pricing",
        type: "primary",
        href: "#pricing",
        icon: null
      },
      {
        text: "Watch Demo",
        type: "secondary",
        href: "#demo",
        icon: "/src/assets/images/hero-section/video icon.png"
      }
    ],
    heroImage: {
      src: "/src/assets/images/hero-section/Hero-primary_img.png",
      alt: "Hero Image"
    },
    backgroundImage: "/src/assets/images/hero-section/Framer.png"
  }

  // Handle button clicks
  const handleButtonClick = (button) => {
    console.log('Hero button clicked:', button.text, 'href:', button.href)
    // Add your button logic here
    // For example: router.push(button.href)
  }

  return (
    <div className="min-h-screen">
      <HeroComponent 
        {...heroConfig}
        onButtonClick={handleButtonClick}
      />
      
      {/* Additional content to demonstrate scroll */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hero Component Example
        </h2>
        <p className="text-gray-600">
          This hero component is fully responsive and customizable. It includes:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
          <li>Dynamic title with highlighted text</li>
          <li>Customizable description</li>
          <li>Configurable buttons with icons</li>
          <li>Responsive image layout</li>
          <li>Background images and effects</li>
          <li>Mobile-first responsive design</li>
        </ul>
      </div>
    </div>
  )
}

export default HeroExample 