import React from 'react';
import { useLanguage} from '@/contexts/LanguageContext';
import  {useTheme} from '@/contexts/ThemeContext'

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
    { id: 3, titleKey: 'Développement Agile', descKey:"Nous développons votre application par itérations, avec des livraisons fréquentes pour valider chaque étape." },
    { id: 4, titleKey: 'Tests & Validation', descKey: "Nous soumettons l'application à des tests rigoureux pour garantir sa qualité, ses performances et sa sécurité." },
    { id: 5, titleKey: 'Déploiement & Formation', descKey: 'Nous déployons votre application et formons vos équipes pour une prise en main optimale.' },
    { id: 6, titleKey: 'Maintenance & Évolution', descKey: 'Nous assurons le suivi, la maintenance et les évolutions pour que votre application reste performante et compétitive.' }
  ];

  return (
    <section id="processus" className="py-20 px-6" style={{ backgroundColor: theme.bg }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 futurist-font glow-text">
            {t('Notre Processus en 6 Étapes')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('Une méthodologie éprouvée pour garantir le succès de votre projet.')}
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="border-l-2" 
            style={{ 
              borderColor: theme.primary, 
              marginLeft: '2rem', 
              paddingLeft: '4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '4rem'
            }}
          >
            {steps.map((step) => (
              <div key={step.id} className="relative timeline-item">
                <div 
                  className="rounded-xl shadow-md cyber-border p-8" 
                  style={{ backgroundColor: theme.cardBg }}
                >
                  <div className="flex items-center mb-4">
                    <span className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 glow-box">
                      {step.id}
                    </span>
                    <h3 className="text-xl font-semibold text-white futurist-font">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                  <p className="text-gray-300">{t(step.descKey)}</p>
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