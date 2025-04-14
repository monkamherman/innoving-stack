import { AiOutlineBarChart } from "react-icons/ai"; 
import { HiOutlineDeviceMobile } from "react-icons/hi"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { useLanguage} from '@/contexts/LanguageContext';
import  {useTheme} from '@/contexts/ThemeContext'
import React from 'react';
import type { JSX } from "react/jsx-runtime";

type Project = {
  id: string;
  title: string;
  descKey: string;
  icon: JSX.Element;
  tags: string[];
  bgColor: 'primary' | 'secondary' | 'gradient';
};

const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const projects: Project[] = [
    {
      id: 'project1',
      title: 'MarketPro',
      descKey: 'Plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et analytics.',
      icon: <AiOutlineShoppingCart />,
      tags: ['project1Tag1', 'project1Tag2', 'project1Tag3'],
      bgColor: 'primary'
    },
    {
      id: 'project2',
      title: 'HealthTrack',
      descKey: 'Application mobile de suivi médical avec synchronisation des données et notifications intelligentes.',
      icon: <HiOutlineDeviceMobile />,
      tags: ['project2Tag1', 'project2Tag2', 'project2Tag3'],
      bgColor: 'secondary'
    },
    {
      id: 'project3',
      title: 'Analytics360',
      descKey: "Solution SaaS d'analyse de données en temps réel avec tableaux de bord personnalisables.",
      icon: <AiOutlineBarChart />,
      tags: ['project3Tag1', 'project3Tag2', 'project3Tag3'],
      bgColor: 'gradient'
    }
  ];

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
          {projects.map((project) => (
            <div 
              key={project.id}
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
                <p className="text-gray-300 mb-4">{t(project.descKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tagKey, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ 
                        backgroundColor: project.bgColor === 'gradient' 
                          ? `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
                          : theme[project.bgColor],
                        opacity: 0.2,
                        color: project.bgColor === 'gradient' ? theme.primary : theme[project.bgColor]
                      }}
                    >
                      {t(tagKey)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block gradient-bg text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition futurist-font"
          >
            {t('seeMore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;