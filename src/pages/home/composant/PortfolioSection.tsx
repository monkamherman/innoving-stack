import { DiMitlicence } from "react-icons/di"; 
import { AiOutlineBarChart } from "react-icons/ai"; 
import { HiOutlineDeviceMobile } from "react-icons/hi"; 
import { useLanguage} from '@/contexts/LanguageContext';
import  {useTheme} from '@/contexts/ThemeContext'
import React, { useState } from 'react';
import type { JSX } from "react/jsx-runtime";

type Project = {
  id: string;
  title: string;
  descKey: string;
  icon: JSX.Element;
  link: string;
  tags: string[];
  bgColor: 'primary' | 'secondary' | 'gradient';
};

const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 'project1',
      title: 'Future academy',
      descKey: "Site web éducatif moderne et responsive, offrant une vitrine dynamique pour une institution scolaire.",
      icon: <DiMitlicence />,
      link: 'https://future-academic.onrender.com',
      tags: ['tailwind css', 'react'],
      bgColor: 'primary'
    },
    {
      id: 'project2',
      title: 'Beaty room',
      descKey: 'Site web vitrine dynamique pour une institution scolaire.',
      icon: <HiOutlineDeviceMobile />,
      link: "https://beaty-room.onrender.com",
      tags: ['django', 'node', 'react'],
      bgColor: 'secondary'
    },
    {
      id: 'project3',
      title: 'Power fit',
      descKey: "Site web moderne et responsive pour une salle de sport premium, offrant des programmes d'entraînement personnalisés, des coachs experts et des services haut de gamme, avec un mode sombre et une navigation intuitive.",
      icon: <AiOutlineBarChart />,
      link: 'https://power-fit.onrender.com',
      tags: ['react', 'node', 'posgresql'],
      bgColor: 'gradient'
    },
    {
      id: 'project4',
      title: 'Projet 4',
      descKey: 'Description du quatrième projet.',
      icon: <HiOutlineDeviceMobile />,
      link: "#",
      tags: ['django', 'node', 'react'],
      bgColor: 'secondary'
    },
    {
      id: 'project5',
      title: 'Projet 5',
      descKey: 'Description du cinquième projet.',
      icon: <HiOutlineDeviceMobile />,
      link: "#",
      tags: ['django', 'node', 'react'],
      bgColor: 'secondary'
    },
  ];

  // Sélectionne les 3 premiers projets ou tous selon l'état
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const getBackgroundColor = (colorType: Project['bgColor']) => {
    switch (colorType) {
      case 'primary':
        return { backgroundColor: theme.primary, opacity: 0.2 };
      case 'secondary':
        return { backgroundColor: theme.secondary, opacity: 0.2 };
      case 'gradient':
        return { 
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          opacity: 0.2
        };
      default:
        return { backgroundColor: theme.primary, opacity: 0.2 };
    }
  };

  return (
    <section id="portfolio" className="py-20 px-6" style={{ backgroundColor: theme.bg }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 futurist-font glow-text">
            {t('Nos Réalisations')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('Découvrez quelques-uns des projets que nous avons accompagnés tout au long de leur cycle de vie.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id}>
              <div 
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 cyber-border"
                style={{ backgroundColor: theme.cardBg }}
              >
                <div 
                  className="h-48 flex items-center justify-center"
                  style={getBackgroundColor(project.bgColor)}
                >
                  <i 
                    className={`text-6xl`}
                    style={{ color:  'white'  }}
                  >{project.icon}</i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 futurist-font">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2 hover:line-clamp-none transition-all duration-300">{t(project.descKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tagKey, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ 
                          backgroundColor: project.bgColor === 'gradient' ? theme.primary : undefined,
                          opacity: 0.2,
                          color: 'yellow'
                        }}
                      >
                        {t(tagKey)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          {projects.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block gradient-bg text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition futurist-font"
            >
              {showAll ? t('Voir moins') : t('Voir plus')}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;