import React from 'react'
import HeroSection from './composant/HeroSection'
import ContactSection from './composant/ContactSection'
import ProcessSection from './composant/ProcessSection'
import ServicesSection from './composant/ServicesSection'
import PortfolioSection from './composant/PortfolioSection'
import TestimonialSection from './composant/TestimonialSection'

const Home: React.FC = () => {
    return (
        <>
            
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <PortfolioSection />
          <TestimonialSection />
          <ContactSection />
        </>
    )
}

export default Home
