import React from 'react'
import HeaderComponent from '../component/header/HeaderComponent'
import CardComponent from '../component/section/card/CardComponent.jsx'

import Footer from '../component/footer/Footer.jsx'
import ContactUsSection from '../component/section/contact/ContactUsSection.jsx'
import HeroComponent from '../component/section/hero/HeroComponent.jsx'
import PricingSection from '../component/section/pricing/PricingSection.jsx'
import ServicesComponent from '../component/section/services/ServicesComponent.jsx'
import TestimonialComponent from '../component/section/Testimonial/Testimonialcomponent.jsx'

const Home = () => {
  return (
    <>
      <HeaderComponent/>
      <div id="home">
        <HeroComponent />
      </div>
      <TestimonialComponent />
      <div id="services">
        <ServicesComponent />
      </div>
      <CardComponent />
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="contact">
        <ContactUsSection />
      </div>
      <Footer />
    </>
  )
}   

export default Home