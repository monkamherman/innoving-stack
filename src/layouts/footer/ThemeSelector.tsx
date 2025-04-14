import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { FaPalette, FaCheck } from 'react-icons/fa';


type ThemeOption = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
};

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: ThemeOption[] = [
    {
      id: 'futurist',
      name: 'Futuriste',
      primary: '#6e8efb',
      secondary: '#a777e3'
    },
    {
      id: 'nature',
      name: 'Nature',
      primary: '#4ade80',
      secondary: '#22d3ee'
    },
    {
      id: 'neonRed',
      name: 'Neon Rouge',
      primary: '#ff0000',
      secondary: '#ff00ff'
    },
    {
      id: 'prestige',
      name: 'Prestige',
      primary: '#d4af37',
      secondary: '#c0c0c0'
    },
    {
      id: 'childish',
      name: 'Enfantin',
      primary: '#ff6b6b',
      secondary: '#4ecdc4'
    }
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
    <div className="theme-selector">
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white hover:opacity-90 transition shadow-lg"
          aria-label="Changer de thème"
          style={{
            background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
          }}
        >
          <FaPalette className="text-xl" />
        </button>

        {isOpen && (
          <div 
            className="absolute bottom-full right-0 mb-2 w-56 bg-gray-900 rounded-lg shadow-xl p-2 border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm font-semibold text-gray-300 px-2 py-1 mb-1">
              Thèmes
            </h3>
            <div className="grid grid-cols-1 gap-1">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition ${
                    theme.name === t.id 
                      ? 'bg-gray-800 text-white' 
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <span 
                      className="w-4 h-4 rounded-full mr-2"
                      style={{
                        background: `linear-gradient(135deg, ${t.primary} 0%, ${t.secondary} 100%)`
                      }}
                    ></span>
                    {t.name}
                  </div>
                  {theme.name === t.id && <FaCheck className="text-xs" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSelector;