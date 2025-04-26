import React from 'react';
import { useTheme} from '@/contexts/ThemeContext';
import { useLanguage} from '@/contexts/LanguageContext';

import Slider from './components/Slider';
import Info from './components/Infos';
import { BiCubeAlt } from 'react-icons/bi';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const { theme } = useTheme();

  return (
    <div id='about' className="" style={{ backgroundColor: theme.bg, color: theme.text }}>
      {/* Hero Section */}
      <div className={`font-Roboto flex h-[50vh] w-full items-center justify-center`}>
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images.png')",
            backgroundBlendMode: 'darken'
          }}
        >
          <h1 
            className="w-full max-w-[40rem] rounded p-4 text-center text-2xl font-bold leading-snug sm:text-3xl sm:leading-normal md:text-4xl lg:text-5xl xl:text-6xl futurist-font"
            style={{  color: theme.primary }}
          >
            {t('A propos')}
          </h1>

          <p 
            className="mt-4 w-full max-w-[20rem] rounded p-4 text-center text-sm sm:text-base md:text-lg lg:text-xl futurist-font"
            style={{  color: theme.primary }}
          >
            {t('Apprenez un peu plus sur nous')}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container futurist-font mx-auto my-10 px-4 flex flex-col justify-center gap-10 lg:flex-row lg:gap-[7rem]">
        <div className="flex flex-1 flex-col gap-10">
          <Info
            icon={<BiCubeAlt className="text-2xl lg:text-3xl" style={{ color: theme.primary }} />}
            title={t('Notre histoire')}
            description={t("AppLife Solutions est né en 2020 de la rencontre de trois experts du développement logiciel qui partageaient une même vision : révolutionner la gestion du cycle de vie des applications. Depuis notre petit bureau parisien, nous avons grandi pour devenir un acteur reconnu dans l'accompagnement numérique, avec désormais plus de 50 collaborateurs à travers l'Europe.")}
            theme={theme}
          />
          <Info
            icon={<BiCubeAlt className="text-2xl lg:text-3xl" style={{ color: theme.primary }} />}
            title={t('Qui sommes nous ?')}
            description={t("Nous sommes une équipe passionnée d'ingénieurs, designers et consultants spécialisés dans le cycle de vie complet des applications. Notre approche holistique combine expertise technique et vision stratégique pour transformer vos idées en solutions logicielles performantes et durables.")}
            theme={theme}
          />
          <Info
            icon={<BiCubeAlt className="text-2xl lg:text-3xl" style={{ color: theme.primary }} />}
            title={t('Notre mission')}
            description={t("Accompagner nos clients à chaque étape du développement de leurs applications, de la conception initiale à la maintenance évolutive. Nous nous engageons à fournir des solutions sur mesure qui allient innovation technologique et excellence opérationnelle.")}
            theme={theme}
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            src="teams-working.png"
            alt={t('teamImageAlt')}
            className="rounded-lg shadow-xl max-h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Logo Description Section */}
      <div 
        className="container futurist-font mx-auto my-[5rem] px-4 flex flex-col justify-center items-center gap-10 lg:flex-row lg:gap-[7rem]"
        style={{ backgroundColor: theme.cardBg, padding: '2rem', borderRadius: '0.5rem' }}
      >
        <div className="flex flex-col gap-[3rem]">
          <h1 className="text-2xl font-bold lg:text-5xl" style={{ color: theme.text }}>
            {t("La signification de notre logo")}
          </h1>
          <img 
            src="/logo.png" 
            alt={t("Logo Innoving stack ")} 
            className="h-auto w-full max-w-[65rem] rounded-lg" 
          />
        </div>
        <div className="flex flex-col gap-10">
          <Info
            icon={<BiCubeAlt className="text-2xl lg:text-3xl" style={{ color: theme.primary }} />}
            title={t('Innoving stack')}
            description={t("Le logo d’Innoving stack représente une fusion puissante entre la technologie et le cycle évolutif des applications. La partie inférieure, composée de circuits rouges stylisés, évoque le système nerveux digital d’une application : développement, architecture, automatisation et infrastructure.La partie supérieure, formée de formes blanches acérées disposées en arc, symbolise à la fois :une protection (sécurité, surveillance continue),une transformation cyclique (cycle DevOps, mises à jour, évolutivité),et une main de contrôle ou une griffe, marquant votre maîtrise complète du cycle de vie logiciel.")}
            theme={theme}
          />           
        </div>
      </div>

      {/* Founders Slider */}
      <div className="my-[5rem] futurist-font">
        <Slider />
      </div>
    </div>
  );
};

export default AboutPage;