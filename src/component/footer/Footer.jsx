import React from 'react';

// Update the logo path as needed
const logoSrc = '/src/assets/images/header/Logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B0C10] py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-2">
          <img src={logoSrc} alt="BeyondCRM Logo" className="w-7 h-7" />
          <span className="text-white text-xl font-bold font-poppins">BeyondCRM</span>
        </div>
        {/* Center: Navigation */}
        <nav className="flex gap-8 mt-2 md:mt-0">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-base font-normal hover:text-[#AA14B5] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Right: Copyright */}
        <div className="text-white text-sm text-center md:text-right whitespace-nowrap">
          © Copyright {year}, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
