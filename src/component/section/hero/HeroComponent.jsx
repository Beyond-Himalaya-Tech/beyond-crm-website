import React from 'react'
import ButtonComponent from '../../button/common/Button.component.jsx'

const HeroComponent = ({
  title = {
    main: "Complete",
    highlight: "CRM",
    subtitle: "For Overseas Education Consultants."
  },
  description = "Begin an exceptional transformation with BeyondAgent, the top-tier Study Abroad CRM software tailored for International Education Advisors. Propel your consultancy operations to extraordinary achievements through our advanced and robust Overseas Education CRM technology.",
  buttons = [
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
  heroImage = {
    src: "/src/assets/images/hero-section/Hero-primary_img.png",
    alt: "Hero Image"
  },
  backgroundImage = "/src/assets/images/hero-section/Framer.png",
  onButtonClick = () => {},
  className = ""
}) => {
  return (
    <section className={`bg-[#aa14b5] min-h-[90vh] relative overflow-hidden ${className}`} id='home'>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-right-bottom opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'contain'
          }}
        />
      )}
      
      {/* Hero Vector Background */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-bottom opacity-10"
        style={{
          backgroundImage: `url(/src/assets/images/hero-section/HeroVector.png)`,
          backgroundSize: 'contain'
        }}
      />

      <div className="relative z-10 flex justify-between items-center px-6 py-12 text-white max-w-[90%] mx-auto min-h-[90vh]">
        {/* Content Section */}
        <div className="my-8 py-2 px-2 w-full lg:w-2/5">
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-white mb-6">
            {title.main}{' '}
            
            <span className="font-bold relative">
            {title.highlight}
              {/* Underline effect */}
              <div 
                className="absolute bottom-0 left-0 w-full h-2 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(/src/assets/images/hero-section/HeroVector.png)`,
                  backgroundSize: 'contain'
                }}
              />
            </span>{' '}
            {title.subtitle}
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl font-normal leading-relaxed text-white mb-8">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
            {buttons.map((button, index) => (
              <ButtonComponent
                key={index}
                variant={button.type}
                size="large"
                href={button.href}
                icon={button.icon}
                iconPosition={button.icon ? "left" : undefined}
                onClick={() => onButtonClick(button)}
                className="flex-1 sm:flex-none"
              >
                {button.text}
              </ButtonComponent>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex w-3/5 items-center justify-center">
          <img 
            src={heroImage.src}
            alt={heroImage.alt}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile Image - shown only on mobile */}
      <div className="lg:hidden px-6 pb-8">
        <div className="flex justify-center">
          <img 
            src={heroImage.src}
            alt={heroImage.alt}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
