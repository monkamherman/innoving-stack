import { AiFillCheckCircle } from "react-icons/ai"; 
import { BiCodeAlt } from "react-icons/bi"; 
import { TbTestPipe } from "react-icons/tb"; 
import { HiOutlineUserGroup } from "react-icons/hi"; 
import { AiOutlineLineChart } from "react-icons/ai"; 
import { BsFillCloudArrowDownFill } from "react-icons/bs"; 
import { FaLightbulb } from "react-icons/fa"; 
import { useLanguage} from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import React from "react";
import type { JSX } from "react/jsx-runtime";

type Service = {
  id: string;
  icon: JSX.Element;
  titleKey: string;
  descKey: string;
  items: string[];
};

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const services: Service[] = [
    {
      id: 'service1',
      icon: <FaLightbulb/>,
      titleKey: 'Conception & Stratégie',
      descKey: "Nous couvrons toutes les étapes du cycle de vie d'une application pour garantir son succès à long terme.",
      items: ['Étude de marché et analyse des besoins', 'Architecture technique', 'Design UX/UI personnalisé']
    },
    {
      id: 'service2',
      icon: <BiCodeAlt />,
      titleKey: 'Développement',
      descKey: 'Nos développeurs experts créent des applications performantes, évolutives et sécurisées, adaptées à vos besoins spécifiques.',
      items: ['Développement web et mobile', 'Intégration de systèmes', 'Solutions sur mesure']
    },
    {
      id: 'service3',
      icon: <TbTestPipe />,
      titleKey: 'Tests & Qualité',
      descKey: 'Nous garantissons la qualité et la fiabilité de votre application grâce à des tests rigoureux à chaque étape du développement.',
      items: ['Tests automatisés et manuels', 'Tests de performance et sécurité', 'Assurance qualité continue']
    },
    {
      id: 'service4',
      icon: <BsFillCloudArrowDownFill />,
      titleKey: 'Déploiement',
      descKey: 'Nous assurons un déploiement fluide et sans interruption de votre application sur les plateformes cibles.',
      items: ['Intégration continue (CI/CD)', 'Configuration des serveurs', 'Migration des données']
    },
    {
      id: 'service5',
      icon: <AiOutlineLineChart />,
      titleKey: 'Maintenance & Optimisation',
      descKey: 'Nous intervenons pour maintenir et optimiser votre application pour un fonctionnement optimal.',
      items: ['Mise à jour des composants', 'Assurance performance et securité', 'Assurance qualité continue']
    },
    {
      id: 'service6',
      icon: <HiOutlineUserGroup />,
      titleKey: 'Formation & Support',
      descKey: "Nous formons vos équipes et fournissons un support technique réactif pour maximiser l'utilisation de votre application.",
      items: ['Formation utilisateurs et administrateurs', 'Documentation complète', 'Support technique réactif h24/7']
    }
  ];

  return (
    <section id="services" className="py-20 px-6" style={{ backgroundColor: theme.bg }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 futurist-font glow-text">
            {t('Nos Services Spécialisés')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("Nous couvrons toutes les étapes du cycle de vie d'une application pour garantir son succès à long terme.")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="rounded-xl p-8 service-card transition duration-300 cyber-border"
              style={{ backgroundColor: theme.cardBg }}
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white mb-6 glow-box">
                <i className={` text-4xl`}>
                {service.icon} 
                </i>
               
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 futurist-font">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-300 mb-4">{t(service.descKey)}</p>
              <ul className="space-y-2 text-gray-300">
                {service.items.map((itemKey, index) => (
                  <li key={index} className="flex items-start">
                    <i 
                      className="fas fa-check-circle" 
                      style={{ 
                        color: theme.primary, 
                        marginTop: '0.25rem', 
                        marginRight: '0.5rem' 
                      }}
                    >
                        <AiFillCheckCircle />
                    </i>
                    <span>{t(itemKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;