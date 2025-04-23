import React from 'react'
import HeroSection from './composant/HeroSection'
import ContactSection from './composant/ContactSection'
import ProcessSection from './composant/ProcessSection'
import ServicesSection from './composant/ServicesSection'
import PortfolioSection from './composant/PortfolioSection'
import TestimonialSection from './composant/TestimonialSection'
import AboutPage from '../about/About'

const Home: React.FC = () => {
    return (
        <>
            
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <PortfolioSection />
          <TestimonialSection />
          <AboutPage />
          <ContactSection />
        </>
    )
}

export default Home
