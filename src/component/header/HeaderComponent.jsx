import React, { useEffect, useState } from 'react'
import ButtonComponent from '../button/common/Button.component.jsx'

// PropTypes for better development experience
const HeaderComponent = ({ 
  logo = { src: "/src/assets/images/header/Logo.png", alt: "Beyondcrm", text: "BeyondCRM" },
    navigationItems = [
    { name: 'Home', href: '#home', isActive: true, target: '_self' },
    { name: 'Services', href: '#services', isActive: false, target: '_self' },
    { name: 'Pricing', href: '#pricing', isActive: false, target: '_self' },
    { name: 'Contact', href: '#contact', isActive: false, target: '_self' }
  ],
  buttons = [
    { text: 'Login', type: 'ghost', href: 'https://demo.eduvisahub.com', target: '_blank' },
    { text: 'Get Demo', type: 'primary', href: 'https://demo.eduvisahub.com', target: '_blank' }
  ],
  onButtonClick = () => {},
  onNavItemClick = () => {}
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState(navigationItems.findIndex(item => item.isActive))

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  // Handle navigation item click
  const handleNavItemClick = (index, item) => {
    setActiveNavItem(index)
    onNavItemClick(item, index)
    closeMobileMenu()
    
    // Scroll to the target section
    const targetId = item.href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // Account for fixed header height (80px)
      const headerHeight = 80
      const elementPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    } else {
      console.warn(`Element with id "${targetId}" not found`)
    }
  }

  // Handle button click
  const handleButtonClick = (button) => {
    onButtonClick(button)
    closeMobileMenu()
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Header Section */}
      <section className={`fixed top-0 left-0 right-0 z-500 bg-[#aa14b5] border-b-2 border-[rgba(230,232,233,0.36)] transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <header className="flex justify-between items-center px-6 py-4 text-white max-w-[90%] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <img 
              src={logo.src}
              alt={logo.alt}
              className="w-10 h-10"
            />
            <span className="text-xl font-normal font-poppins">{logo.text}</span>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex gap-4">
            <ul className="flex gap-4 text-white font-poppins tracking-wider">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavItemClick(index, item)
                    }}
                    className={`text-xl font-normal transition-all duration-300 hover:opacity-80 ${
                      activeNavItem === index ? 'opacity-100 font-medium' : 'opacity-90'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-6">
            {buttons.map((button, index) => (
              <ButtonComponent
                key={index}
                variant={button.type}
                size="medium"
                href={button.href}
                target={button.target}
                onClick={() => handleButtonClick(button)}
              >
                {button.text}
              </ButtonComponent>
            ))}
          </div>

          {/* Hamburger Menu */}
          <div 
            className="lg:hidden flex flex-col cursor-pointer p-2.5 z-50"
            onClick={toggleMobileMenu}
          >
            <span className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 rounded-sm ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 rounded-sm ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 rounded-sm ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </div>
        </header>
      </section>
      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#aa14b5] z-50 p-8 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <button 
          className="absolute top-6 right-9 bg-transparent border-none text-white text-3xl cursor-pointer p-2 hover:opacity-80 transition-opacity duration-300"
          onClick={closeMobileMenu}
        >
          ×
        </button>
        <nav className="mt-16">
          <ul className="flex flex-col gap-8">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  target={item.target}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavItemClick(index, item)
                  }}
                  className={`text-white text-2xl font-normal font-poppins tracking-wider transition-all duration-300 hover:opacity-80 ${
                    activeNavItem === index ? 'opacity-100 font-medium' : 'opacity-90'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-4 mt-12">
          {buttons.map((button, index) => (
            <ButtonComponent
              key={index}
              variant={button.type}
              size="large"
              fullWidth
              href={button.href}
              onClick={() => handleButtonClick(button)}
            >
              {button.text}
            </ButtonComponent>
          ))}
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  )
}

export default HeaderComponent 