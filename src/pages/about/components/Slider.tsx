import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'; 
import { motion } from 'framer-motion';

interface Founder {
  name: string;
  role: string;
  story: string;
  color: string;
  logo: string;
  photo: string;
  funFact:string;
  expertise: string[];
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
}

const Slider: React.FC = () => {
  const { theme } = useTheme();
  
  const founders: Founder[] = [
    {
      name: "Sophie Dubois",
      role: "Directrice Expérience Utilisateur",
      story: "Après un parcours chez Google et plusieurs startups à succès, Sophie a rejoint AppLife Solutions pour y implanter sa vision de l'UX lifecycle. Elle dirige une équipe de 15 designers qui interviennent sur tout le cycle de vie des applications. 'Une interface mal conçue annihile la valeur d'une architecture technique parfaite' est son mantra.",
      funFact: "Organise des ateliers de poterie le week-end",
      expertise: ["UX Strategy", "Design System", "User Research"],
      color: "bg-blue-100",
      logo: "logo-K.svg",
      photo: "konsultan.png",
      socialLinks: {
        linkedin: "https://linkedin.com/in/jeandupont",
        twitter: "https://twitter.com/jeandupont",
      },
    },
    {
        name: "Siodjie Anges Gisliane",
        role: "Directrice Technique",
        story: "Diplômée de IAI cameroun avec une spécialisation en génie logiciel, Élise a passé 3 ans chez plusieurs éditeurs de solutions SaaS avant de co-fonder AppLife Solutions. Architecte logiciel renommée, elle a dirigé des projets critiques pour des clients du CAC40. Sa philosophie : 'Une application bien conçue dès la phase d'architecture réduit de 80% les coûts de maintenance future'.",
        logo: "logo-S.svg",
        funFact: "Collectionne les claviers mécaniques vintage et participe à des hackathons incognito",
        expertise: ["Architecture logicielle", "DevOps", "Sécurité applicative"],
        color: "bg-red-100",
        photo: "service.png",
        socialLinks: {
          linkedin: "https://linkedin.com/in/mariecurie",
          twitter: "https://twitter.com/mariecurie",
        },
      },
      {name: "Thomas Leroy",
        role: "Directeur de la Stratégie",
        story: "Ancien consultant senior chez McKinsey spécialisé dans la transformation digitale, Thomas apporte une vision business pragmatique. Il a développé la méthodologie ALM360° qui a servi de base à l'approche unique d'AppLife Solutions. 'Le cycle de vie d'une application ne s'arrête pas au déploiement - c'est là que tout commence' est son credo.",
        funFact: "Marathonien amateur et passionné de vinification artisanale",
        expertise: ["Stratégie digitale", "ROI technologique", "Transformation Agile"],
        color: "bg-gray-200",
        logo: "logo-T.svg",
        photo: "technologie.png",
        socialLinks: {
          linkedin: "https://linkedin.com/in/pierredurand",
          twitter: "https://twitter.com/pierredurand",
        },
      },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <div 
      className="h-screen overflow-y-auto px-4 flex flex-col items-center justify-between"
      style={{ backgroundColor: theme.bg }}
    >
      <motion.header
        className="h-4/6 flex flex-col md:w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p 
          className="text-2xl font-bold lg:text-5xl font-roboto text-center"
          style={{ color: theme.text }}
        >
          Découvrez les fondateurs de notre entreprise
        </p>
      </motion.header>

      <motion.section
        className="min-h-screen p-7 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            className="h-s flex gap-4 flex-col md:flex-row items-center w-full"
            variants={itemVariants}
          >
            <div className="flex-1 flex justify-center">
              <motion.img
                src={founder.photo}
                alt={`Photo de ${founder.name}`}
                className="w-31 h-31 md:w-96 md:h-96 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                
              />
            </div>
            
            <div className="flex-1 relative">
              <motion.div
                className={`${founder.color} p-8 rounded-lg shadow-lg h-full flex flex-col justify-center`}
                variants={textVariants}
              >
                <motion.img
                  src={founder.logo}
                  alt={`Logo ${founder.role}`}
                  className="w-32 h-32 md:w-48 md:h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
                />
                <motion.h2 
                  className="text-3xl font-bold mb-4 "
                  variants={textVariants}
                  style={{  color: theme.primary }}
                >
                  {founder.name}
                </motion.h2>
                <motion.h3 
                  className="text-xl font-semibold mb-4"
                  variants={textVariants}
                  style={{  color: theme.primary }}
                >
                  {founder.role}
                </motion.h3>
                <motion.p 
                  className="text-gray-700"
                  variants={textVariants}
                  
                >
                  {founder.story}
                </motion.p>
                <motion.p className='text-gray-50' variants={textVariants} 
                    style={{  color: theme.primary }}
                    >
                  <span className='font-semibold'>funFact:</span> {founder.funFact}
                </motion.p>
                <motion.p className='text-gray-50' variants={textVariants} style={{  color: theme.primary }}>
                   <span className='font-semibold'>Expertise:</span> {founder.expertise.join(', ')}
                </motion.p>
                <motion.div 
                  className="mt-4 flex gap-8"
                  variants={textVariants}
                >
                  <a 
                    href={founder.socialLinks.linkedin} 
                    target="_blank" 
                    className="flex items-center gap-2 shadow-lg rounded p-2"
                    style={{ backgroundColor: theme.primary, color: theme.text }}
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLinkedin />
                    <span>Linkedin</span>
                  </a>
                  <a 
                    href={founder.socialLinks.twitter} 
                    target="_blank" 
                    className="flex items-center gap-2 shadow-lg rounded p-2"
                    style={{ backgroundColor: theme.primary, color: theme.text }}
                    rel="noopener noreferrer"
                  >
                    <AiOutlineTwitter />
                    <span>Twitter</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Slider;