import { FaPaperPlane } from "react-icons/fa"; 
import React from 'react'
import { useLanguage} from '@/contexts/LanguageContext';
import  {useTheme} from '@/contexts/ThemeContext'
import ThemeSelector from '@/layouts/footer/ThemeSelector';
import LanguageSelector from './LanguageSelector';
import Whatsapp from './Whatsapp';

const Footer: React.FC = () => {

  const { t } = useLanguage();
  const { theme } = useTheme();

  const footerLinks = [
    { key: 'home', href: '#accueil' },
    { key: 'services', href: '#services' },
    { key: 'process', href: '#processus' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'contact', href: '#contact' }
  ];

  const serviceLinks = [
    { key: 'Conception & Stratégie', href: '#' },
    { key: 'Développement', href: '#' },
    { key: 'Tests & Qualité', href: '#' },
    { key: 'Déploiement', href: '#' },
    { key: 'Maintenance', href: '#' }
  ];

  return (
    <footer className="py-12 px-6" style={{ 
      backgroundColor: theme.bg, 
      borderTop: `1px solid ${theme.primary}` 
    }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg mr-3 glow-box">
                <img src="/logo.png" alt="" />
              </div>
              <span className="text-xl font-semibold text-white futurist-font">
              Innoving stack 
              </span>
            </div>
            <p className="text-gray-400">
              {t('Experts en cycle de vie des applications. Nous accompagnons votre projet de la conception à la maintenance.')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 futurist-font">
              {t('services')}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 futurist-font">
              {t('Liens utiles')}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <LanguageSelector />
          <ThemeSelector />
          <Whatsapp />
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 futurist-font">
              {t('newsletter')}
            </h4>
            <p className="text-gray-400 mb-4">
              {t('Abonnez-vous à notre newsletter pour recevoir nos dernières actualités.')}
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t('abc@exemple.com')}
                className="px-4 py-2 rounded-l-lg focus:outline-none bg-gray-800 text-white w-full"
              />
              <button className="gradient-bg px-4 py-2 rounded-r-lg hover:opacity-90 transition glow-box">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 AppLife Solutions. <span>{t('rightsReserved')}</span>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              {t('legal')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              {t('privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
