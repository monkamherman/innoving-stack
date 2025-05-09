import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

type ProcessStep = {
  id: number;
  titleKey: string;
  descKey: string;
};

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const steps: ProcessStep[] = [
    { id: 1, titleKey: 'Découverte & Analyse', descKey: 'Nous analysons vos besoins, vos objectifs et votre public cible pour élaborer une stratégie digitale sur mesure.' },
    { id: 2, titleKey: 'Conception & Prototypage', descKey: "Nous créons des maquettes interactives et des prototypes pour valider l'expérience utilisateur avant le développement." },
    { id: 3, titleKey: 'Développement Agile', descKey: "Nous développons votre application par itérations, avec des livraisons fréquentes pour valider chaque étape." },
    { id: 4, titleKey: 'Tests & Validation', descKey: "Nous soumettons l'application à des tests rigoureux pour garantir sa qualité, ses performances et sa sécurité." },
    { id: 5, titleKey: 'Déploiement & Formation', descKey: 'Nous déployons votre application et formons vos équipes pour une prise en main optimale.' },
    { id: 6, titleKey: 'Maintenance & Évolution', descKey: 'Nous assurons le suivi, la maintenance et les évolutions pour que votre application reste performante et compétitive.' }
  ];

  return (
    <section id="processus" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 futurist-font glow-text">
            {t('Notre Processus en 6 Étapes')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('Une méthodologie éprouvée pour garantir le succès de votre projet.')}
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 sm:left-6 md:left-8 h-full w-0.5" style={{ backgroundColor: theme.primary }} />
          
          {/* Étapes */}
          <div className="space-y-8 md:space-y-10 pl-10 sm:pl-14 md:pl-16">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                {/* Point de timeline */}
                <div 
                  className="absolute -left-4 sm:-left-6 md:-left-8 top-6 w-6 h-6 rounded-full border-4 flex items-center justify-center"
                  style={{ 
                    backgroundColor: theme.cardBg,
                    borderColor: theme.primary
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: theme.primary }}>
                    {step.id}
                  </span>
                </div>

                {/* Carte */}
                <div 
                  className="rounded-xl shadow-lg p-6 sm:p-7 md:p-8 transition-all hover:scale-[1.02]"
                  style={{ 
                    backgroundColor: theme.cardBg,
                    border: `1px solid ${theme.primary}20`
                  }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 futurist-font">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;