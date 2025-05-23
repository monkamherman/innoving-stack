import { AiOutlineInstagram } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiOutlineLinkedin } from "react-icons/ai"; 
import { AiOutlinePhone } from "react-icons/ai"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { BiMap } from "react-icons/bi"; 
import { useLanguage} from '@/contexts/LanguageContext';
import  {useTheme} from '@/contexts/ThemeContext'
import React from 'react';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('formSuccess'));
  };

  return (
    <section id="contact" className="py-20 px-6" style={{ backgroundColor: theme.bg }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 futurist-font glow-text">
              {t('Prêt à donner vie à votre projet ?')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t("Discutons de votre projet d'application et de la manière dont nous pouvons vous accompagner tout au long de son cycle de vie.")}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white mr-4 glow-box">
                  <BiMap className="size-6"/>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {t('Localisation')}
                  </h4>
                  <p className="text-gray-300">
                    {t('yaounde-melen')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white mr-4 glow-box">
                 <AiOutlineMail className="size-6"/>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {t('email')}
                  </h4>
                  <p className="text-gray-300">
                  innovingstack@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white mr-4 glow-box">
                 <AiOutlinePhone className="size-6"/>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {t('phone')}
                  </h4>
                  <p className="text-gray-300">
                    +237 655 600 154/658 852 731
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">
                {t('followUs')}
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white hover:opacity-90 transition glow-box">
                 <AiOutlineLinkedin className="size-6"/>
                </a>
                <a href="#" className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white hover:opacity-90 transition glow-box">
                  <AiOutlineTwitter className="size-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61576624587638&mibextid=ZbWKwL" className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white hover:opacity-90 transition glow-box">
                 <CgFacebook className="size-6"/>
                </a>
                <a href="#" className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white hover:opacity-90 transition glow-box">
                 <AiOutlineInstagram className="size-6"/>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form 
              onSubmit={handleSubmit}
              className="rounded-xl shadow-md cyber-border p-8"
              style={{ backgroundColor: theme.cardBg }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 futurist-font">
                {t('Envoyez-nous un message')}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    {t('Nom complet')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-800 text-white" 
                    placeholder={t('ngono ateba sergio')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    {t('email')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-800 text-white" 
                    placeholder={t('abc@exemple.com')}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  {t('Sujet')}
                </label>
                <input 
                  type="text" 
                  id="entrer le sujet" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-800 text-white" 
                  placeholder={t('subjectPlaceholder')}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  {t('message')}
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-800 text-white" 
                  placeholder={t('entrer vore message')}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition futurist-font glow-box"
              >
                {t('sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;