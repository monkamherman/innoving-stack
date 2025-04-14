import { useLanguage} from '@/contexts/LanguageContext';
import  {useTheme} from '@/contexts/ThemeContext'
import React from 'react';

type Testimonial = {
  id: string;
  initial: string;
  nameKey: string;
  positionKey: string;
  quoteKey: string;
  color: 'primary' | 'secondary' | 'gradient';
};

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const testimonials: Testimonial[] = [
    {
      id: 'testimonial1',
      initial: 'S',
      nameKey: 'Sophie Martin',
      positionKey: "CEO, MarketPro",
      quoteKey: "AppLife Solutions a accompagné notre plateforme depuis sa conception jusqu'à sa maintenance actuelle. Leur approche holistique du cycle de vie de l'application a été déterminante pour notre succès.",
      color: 'primary'
    },
    {
      id: 'testimonial2',
      initial: 'T',
      nameKey: 'Thomas Leroy',
      positionKey: 'Directeur Technique, HealthTrack',
      quoteKey: "Leur expertise en développement mobile et en tests qualité a été cruciale pour notre application médicale. Leur support continu nous permet de rester concentrés sur notre cœur de métier.",
      color: 'secondary'
    },
    {
      id: 'testimonial3',
      initial: 'A',
      nameKey: 'Alexandre Dubois',
      positionKey: "PDG, Analytics360",
      quoteKey: "Leur capacité à comprendre nos besoins complexes et à proposer des solutions évolutives a dépassé nos attentes. Un véritable partenaire technologique."

,
      color: 'gradient'
    }
  ];

  const getBackgroundColor = (colorType: Testimonial['color']) => {
    switch (colorType) {
      case 'primary':
        return { backgroundColor: theme.primary, opacity: 0.2, color: theme.primary };
      case 'secondary':
        return { backgroundColor: theme.secondary, opacity: 0.2, color: theme.secondary };
      case 'gradient':
        return { 
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          opacity: 0.2,
          color: theme.primary
        };
      default:
        return { backgroundColor: theme.primary, opacity: 0.2, color: theme.primary };
    }
  };

  return (
    <section className="py-20 px-6" style={{ backgroundColor: theme.bg }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 futurist-font glow-text">
            {t('Ce Que Disent Nos Clients')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('Nous sommes fiers des relations durables que nous avons bâties avec nos clients.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="rounded-xl shadow-md testimonial-card cyber-border p-8"
              style={{ backgroundColor: theme.cardBg }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4"
                  style={getBackgroundColor(testimonial.color)}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {t(testimonial.nameKey)}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {t(testimonial.positionKey)}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                {t(testimonial.quoteKey)}
              </p>
              <div className="flex mt-4" style={{ color: theme.primary }}>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;