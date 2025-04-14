import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="pt-32 pb-20 px-6 gradient-bg text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 futurist-font glow-text">
              {t('heroTitle')}
            </h1>
            <p className="text-xl mb-8">{t('heroText')}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition text-center futurist-font"
              >
                {t('getQuote')}
              </a>
              <a 
                href="#services" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition text-center futurist-font"
              >
                {t('ourServices')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3058/3058972.png" 
              alt="Application Lifecycle" 
              className="w-3/4 animate-float animate-pulse-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;