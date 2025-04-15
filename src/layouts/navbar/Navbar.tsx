import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-md z-50 cyber-border">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl mr-3 glow-box">ALS</div>
            <a href='/' className="text-xl font-semibold text-white futurist-font">AppLife Solutions</a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-white hover:text-purple-300 transition futurist-font">{t('home')}</a>
            <a href="#services" className="text-white hover:text-purple-300 transition futurist-font">{t('services')}</a>
            <a href="#processus" className="text-white hover:text-purple-300 transition futurist-font">{t('process')}</a>
            <a href="#portfolio" className="text-white hover:text-purple-300 transition futurist-font">{t('portfolio')}</a>
            <a href="#contact" className="text-white hover:text-purple-300 transition futurist-font">{t('contact')}</a>
            <a href="/about" className="text-white hover:text-purple-300 transition futurist-font">{t('a propos')}</a>
          </nav>
          
          <button 
            className="md:hidden focus:outline-none text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-3">
            <a href="#accueil" className="text-white hover:text-purple-300 transition futurist-font">{t('home')}</a>
            <a href="#services" className="text-white hover:text-purple-300 transition futurist-font">{t('services')}</a>
            <a href="#processus" className="text-white hover:text-purple-300 transition futurist-font">{t('process')}</a>
            <a href="#portfolio" className="text-white hover:text-purple-300 transition futurist-font">{t('portfolio')}</a>
            <a href="#contact" className="text-white hover:text-purple-300 transition futurist-font">{t('contact')}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;