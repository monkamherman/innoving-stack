import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaGlobe, FaCheck } from 'react-icons/fa';

type LanguageOption = {
  code: string;
  name: string;
  flag: string;
};

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: LanguageOption[] = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  // Fermer le sélecteur quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="language-selector">
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition shadow-lg border border-gray-700"
          aria-label="Changer de langue"
        >
          <FaGlobe className="text-xl" />
        </button>

        {isOpen && (
          <div 
            className="absolute bottom-full right-0 mb-2 w-56 bg-gray-900 rounded-lg shadow-xl p-2 border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm font-semibold text-gray-300 px-2 py-1 mb-1">
              Langues
            </h3>
            <div className="grid grid-cols-1 gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition ${
                    language === lang.code 
                      ? 'bg-gray-800 text-white' 
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </div>
                  {language === lang.code && <FaCheck className="text-xs" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;