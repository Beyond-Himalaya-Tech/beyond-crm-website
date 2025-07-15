import React, { useEffect, useRef, useState } from "react";

const FeatureSection = ({
  image = { src: "", alt: "" },
  title = "",
  description = "",
  features = [], // array of strings or JSX
  imagePosition = "right", // 'left' or 'right'
  className = "",
}) => {
  // Responsive flex direction
  const isImageLeft = imagePosition === "left";

  // Animation state
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section
      id='features'
      className={`w-full py-4 sm:py-12 md:py-16 bg-white ${className} border-b border-gray-200`}
    >
      <div
        className={`max-w-7xl mx-auto items-center flex flex-col md:flex-row  ${
          isImageLeft ? "md:flex-row-reverse" : ""
        } gap-8 md:gap-16 px-4 sm:px-6 lg:px-8`}
      >
        {/* Content */}
        <div
          className={`flex-1 w-full pb-6 align-middle md:pb-0 md:flex md:justify-center md:flex-col ${
            isImageLeft
              ? "md:pl-0 md:pr-8 md:border-l"
              : "md:pr-0 md:pl-8 md:border-r"
          } border-gray-200`}
        >
          <div className='ml-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#22223B] mb-3 sm:mb-4'>
              {title}
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-[#6c6c80] mb-4 sm:mb-6'>
              {description}
            </p>
            {features.length > 0 && (
              <ul className='flex flex-wrap gap-x-4 gap-y-4 text-[#22223B] text-sm sm:text-base md:text-lg'>
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-1 min-w-[160px] sm:min-w-[200px] md:min-w-[220px]'
                  >
                    <span className='text-[#aa14b5] text-xl'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M20 6 9 17l-5-5' />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Image with animated upward scroll and dim white background */}
        <div className='flex-1 w-full flex justify-center items-center'>
          {image?.src && (
            <div className='bg-gray-50 p-2 sm:p-3 md:p-6 shadow-md flex items-center w-full max-w-xs sm:max-w-md md:max-w-lg'>
              <img
                ref={imageRef}
                src={image.src}
                alt={image.alt || title}
                className={`w-full h-auto object-cover object-center transition-all duration-700 ease-out rounded-xl
                  ${
                    inView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                style={{
                  willChange: "transform, opacity",
                  imageRendering: "high-quality",
                  loading: "eager",
                }}
                width='800'
                height='600'
                decoding='async'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
