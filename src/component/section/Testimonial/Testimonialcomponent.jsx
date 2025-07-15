import React from 'react'

const TestimonialComponent = ({
  title = "More than 100 Education Consultancy and Agencies Use",
  brandName = "BeyondCRM",
  logos = [
    { src: "/src/assets/images/hero-section/Hero-primary_img.png", alt: "Logo 1" },
    { src: "/src/assets/images/header/Logo.png", alt: "Logo 2" },
    { src: "/src/assets/images/hero-section/Hero-primary_img.png", alt: "Logo 3" },
    { src: "/src/assets/images/header/Logo.png", alt: "Logo 4" },
    { src: "/src/assets/images/hero-section/Hero-primary_img.png", alt: "Logo 5" },
    { src: "/src/assets/images/header/Logo.png", alt: "Logo 6" },
    { src: "/src/assets/images/hero-section/Hero-primary_img.png", alt: "Logo 7" },
    { src: "/src/assets/images/header/Logo.png", alt: "Logo 8" }
  ],
  animationDuration = 20, // seconds
  className = ""
}) => {
  // Responsive logo width/height
  const logoWidth = "w-24 sm:w-32 md:w-40 lg:w-48"
  const logoHeight = "h-16 sm:h-20 md:h-24 lg:h-28"
  // Responsive container width
  const containerWidth = "w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
  // Responsive negative margin for overlap (no overlap on mobile)
  const overlapMargin = "mt-0.5 md:-mt-16 lg:-mt-18 xl:-mt-20 "

  return (
    <section className={`z-50 relative bg-white px-2 sm:px-4 md:px-8 py-6 sm:py-8 text-[#333333] ${containerWidth} mx-auto rounded-2xl border border-[rgba(230,232,233,0.36)] shadow-lg ${overlapMargin} mb-4 ${className}`}>
      <div className="flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-center text-[#333333] mb-1 sm:mb-2">
          {title}
        </h2>
        {/* Brand Name */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#aa14b5] mb-4 sm:mb-8">
          {brandName}
        </h3>
        {/* Logo Carousel */}
        <div className="w-full overflow-hidden relative my-3 sm:my-5">
          <div 
            className="flex animate-scroll"
            style={{
              animationDuration: `${animationDuration}s`,
              width: `calc(8 * 8rem)` // 8 logos, 8rem each (responsive)
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`first-${index}`}
                className={`flex-shrink-0 ${logoWidth} ${logoHeight} mx-2 sm:mx-5 flex items-center justify-center`}
              >
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div 
                key={`second-${index}`}
                className={`flex-shrink-0 ${logoWidth} ${logoHeight} mx-2 sm:mx-5 flex items-center justify-center`}
              >
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tailwind keyframes for scroll animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll ${animationDuration}s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default TestimonialComponent 