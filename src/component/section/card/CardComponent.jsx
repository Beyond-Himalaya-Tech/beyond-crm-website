import React from 'react';

const CardComponent = ({
  title = "Ready to Transform Your Consultancy?",
  subtitle = "Join hundreds of education consultancies already using BeyondCRM",
  buttonText = "See Pricing",
  onButtonClick,
  image = "/src/assets/images/services/card/Hero-Image-girl.png", // main image (e.g., person)
  icons = [{
    src: "/src/assets/images/services/card/mail.png",
    alt: "Email icon",
    animation: "float",
    // Responsive positioning - avoids face area
    className: "icon-mail"
  }, {
    src:"/src/assets/images/services/card/analytics.png",
    alt: "Analytics icon",
    animation: "float",
    className: "icon-analytics"
  }], // [{ src, alt, animation, className, label, description }]
  className = "",
}) => {
  return (
    <section className={`mt-6 relative w-[95%] shadow-2xl sm:w-[90%] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 ${className}`}>
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#AA14B5]/40 blur-2xl sm:blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute right-0 top-0 w-[30%] sm:w-[40%] h-full bg-gradient-to-l from-white to-transparent" />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl z-10 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#18181b] mb-3 sm:mb-4 leading-tight">{title}</h2>
        <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">{subtitle}</p>
        {buttonText && (
          <button
            className="bg-[#18181b] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-[#aa14b5] transition-all duration-300 transform hover:scale-105"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
      
      {/* Right: Image + Animated Icons */}
      <div className="flex-1 relative flex items-center justify-center w-full h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]">
        {/* Main Image */}
        {image && (
          <img
            src={image}
            alt="Main"
            className="z-10 relative max-h-[280px] sm:max-h-[320px] lg:max-h-[380px] xl:max-h-[420px] w-auto object-contain"
          />
        )}
        
        {/* Animated Icons with responsive positioning */}
        {icons.map((icon, idx) => (
          <div
            key={idx}
            className={`absolute z-20 ${icon.className || ""} ${icon.animation || ""}`}
          >
            <div className="flex flex-col items-center">
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 p-1 sm:p-2"
              />
              {icon.label && (
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md px-2 sm:px-4 py-1 sm:py-2 mt-1 sm:mt-2 text-center max-w-[120px] sm:max-w-[140px]">
                  <div className="font-bold text-xs sm:text-sm">{icon.label}</div>
                  {icon.description && (
                    <div className="text-xs text-gray-500">{icon.description}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Responsive CSS for icon positioning */}
      <style>{`
        .float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-20px);}
        }
        .bounce {
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-10px);}
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;}
          50% { opacity: 0.6;}
        }
        
        /* Responsive icon positioning - Mobile */
        .icon-mail {
          top: 5%;
          left: 5%;
        }
        .icon-analytics {
          top: 15%;
          right: 10%;
        }
        
        /* Tablet */
        @media (min-width: 640px) {
          .icon-mail {
            top: 10%;
            left: 10%;
          }
          .icon-analytics {
            top: 20%;
            right: 15%;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .icon-mail {
            top: 15%;
            left: 15%;
          }
          .icon-analytics {
            top: 25%;
            right: 20%;
          }
        }
        
        /* Large Desktop */
        @media (min-width: 1280px) {
          .icon-mail {
            top: 20%;
            left: 20%;
          }
          .icon-analytics {
            top: 30%;
            right: 25%;
          }
        }
        
        /* Ensure icons don't overlap with main image face area */
        @media (max-width: 639px) {
          .icon-mail {
            top: 5%;
            left: 5%;
          }
          .icon-analytics {
            top: 15%;
            right: 5%;
          }
        }
      `}</style>
    </section>
  );
};

export default CardComponent;