import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { MagicCard } from '@/components/magicui/magic-card';

interface Founder {
  name: string;
  role: string;
  story: string;
  funFact: string;
  expertise: string[];
  photo: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
}

const FounderCard: React.FC<{ founder: Founder }> = ({ founder }) => {
  const { theme } = useTheme();

  return (
    <MagicCard
      gradientColor={theme.primary === 'prestige' ? '#D9D9D955' : '#262626'}
      className="p-1"
    >
      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Photo */}
        <motion.div
          className="flex-1 flex justify-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={founder.photo}
            alt={`Photo de ${founder.name}`}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
            style={{ border: `4px solid ${theme.primary}` }}
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 
            className="text-3xl font-bold mb-2"
            style={{ color: theme.primary }}
          >
            {founder.name}
          </h2>
          <h3 
            className="text-xl font-semibold mb-4"
            style={{ color: theme.secondary }}
          >
            {founder.role}
          </h3>
          
          <p className="mb-4" style={{ color: 'black' }}>
            {founder.story}
          </p>

          <div className="mb-4">
            <span className="font-semibold" style={{ color: theme.primary }}>
              Fun Fact:
            </span>
            <span style={{ color: 'black' }}> {founder.funFact}</span>
          </div>

          <div className="mb-6">
            <span className="font-semibold" style={{ color: theme.primary }}>
              Expertise:
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {founder.expertise.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `${theme.primary}50`,
                    color: 'black'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={founder.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition hover:opacity-90"
              style={{
                backgroundColor: theme.primary,
                color: theme.text
              }}
            >
              <AiOutlineLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href={founder.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition hover:opacity-90"
              style={{
                backgroundColor: theme.secondary,
                color: theme.text
              }}
            >
              <AiOutlineTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

const FoundersSlider: React.FC = () => {
  const { theme } = useTheme();

  const founders: Founder[] = [
    {
      name: "Ntomb paul laurence ",
      role: "Architecte logiciel",
      story: "Après un parcours dans plusieurs startups à succès, Paul a rejoint InnoVing Stack pour y implanter sa vision.",
      funFact: "Membre dans un club sante dit deux zero",
      expertise: ["UX Strategy", "analyste SI", "developpeur"],
      photo: "/paulo.png",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Siodjie Anges Gisliane",
      role: "Directrice Technique",
      story: "Diplômée de IAI cameroun avec une spécialisation en génie logiciel, Anges a passé 3 ans chez plusieurs éditeurs de solutions SaaS avant de co-fonder InnoVing Stack. Architecte logiciel renommée, elle a dirigé des projets critiques pour des clients tels que Rage tech. Sa philosophie : 'Une application bien conçue dès la phase d'architecture réduit de 80% les coûts de maintenance future'.",
      // logo: "logo.png",
      funFact: "Danseuse amateure de la salsa",
      expertise: ["Architecture logicielle", "DevOps", "Sécurité applicative"],
      // color: "bg-red-100",
      photo: "service.png",
      socialLinks: {
        linkedin: "https://linkedin.com/in/mariecurie",
        twitter: "https://twitter.com/mariecurie",
      },
    },
    {name: "Moukam Herman",
      role: "Directeur de la Stratégie",
      story: "Ancien consultant senior chez It engineering spécialisé dans la transformation digitale, Herman apporte une vision business pragmatique. 'Le cycle de vie d'une application ne s'arrête pas au déploiement - c'est là que tout commence' est son credo.",
      funFact: "Roller amateur et passionné par les arts sonnors",
      expertise: ["Stratégie digitale", "ROI technologique", "Transformation Agile"],
      // color: "bg-gray-200",
      // logo: "logo.png",
      photo: "technologie.png",
      socialLinks: {
        linkedin: "https://linkedin.com/in/pierredurand",
        twitter: "https://twitter.com/pierredurand",
      },
    },
  ];

  return (
    <div 
      className="py-12 px-4 md:px-8"
      style={{ backgroundColor: theme.bg }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: theme.text }}
      >
        Découvrez les fondateurs
      </motion.h2>

      <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto " >
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <NeonGradientCard>
              <FounderCard founder={founder} />
            </NeonGradientCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoundersSlider;