import React from 'react'
import servicesData from '../../../util/servicesData.js'
import FeatureSection from './FeatureSection.jsx'

const ServicesComponent = () => {
  return (
    <section className='bg-white py-10 sm:py-14 md:py-20' id='services'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
        <h4 className='text-xs sm:text-sm md:text-md font-bold text-[#aa14b5] text-center uppercase mb-1 tracking-widest'>Services</h4>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2'>Our Services for Education Consultants</h2>
        <p className='text-center text-gray-500 text-sm sm:text-base md:text-lg'>
          Comprehensive solutions for your international education needs
        </p>
      </div>
      <div className='w-full'>
        {servicesData.map((service, idx) => (
          <FeatureSection
            key={service.title}
            {...service}
            imagePosition={idx % 2 === 0 ? 'left' : 'right'}
            className='mb-8 sm:mb-12'
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesComponent