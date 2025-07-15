import React from 'react'
import HeaderComponent from './HeaderComponent.jsx'

const HeaderExample = () => {
  // Example navigation items
  const navigationItems = [
    { name: 'Home', href: '#home', isActive: true },
    { name: 'Services', href: '#services', isActive: false },
    { name: 'Pricing', href: '#pricing', isActive: false },
    { name: 'Contact', href: '#contact', isActive: false }
  ]

  // Example buttons
  const buttons = [
    { text: 'Login', type: 'secondary', href: '#login' },
    { text: 'Get Demo', type: 'primary', href: '#demo' }
  ]

  // Example logo
  const logo = {
    src: "/src/assets/images/header/Logo.png",
    alt: "Beyondcrm",
    text: "BeyondCRM"
  }

  // Handle navigation item clicks
  const handleNavItemClick = (item, index) => {
    console.log('Navigation item clicked:', item.name, 'at index:', index)
    
    // The HeaderComponent will handle the scrolling automatically
    // This function is just for logging or additional logic
  }

  // Handle button clicks
  const handleButtonClick = (button) => {
    console.log('Button clicked:', button.text, 'type:', button.type)
    // Add your button logic here
    // For example: router.push(button.href)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Basic Usage */}
      <HeaderComponent 
        logo={logo}
        navigationItems={navigationItems}
        buttons={buttons}
        onNavItemClick={handleNavItemClick}
        onButtonClick={handleButtonClick}
      />

      {/* Content to demonstrate scroll effect */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Header Component Example
        </h1>
        <p className="text-gray-600 mb-8">
          This is an example of the dynamic header component. Scroll down to see the scroll effect.
        </p>
        
        {/* Add some content to enable scrolling */}
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Section {i + 1}
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeaderExample 