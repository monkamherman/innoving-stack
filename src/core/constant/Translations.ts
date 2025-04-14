type TranslationKeys = {
    [key: string]: string;
    home: string;
    services: string;
    process: string;
    portfolio: string;
    contact: string;
    heroTitle: string;
    heroText: string;
    getQuote: string;
    ourServices: string;
    // ... ajouter toutes les autres clés de traduction
  };
  
  type Translations = {
    [key: string]: TranslationKeys;
  };
  
  export const translations: Translations = {
    fr: {
      home: 'Accueil',
      services: 'Services',
      process: 'Processus',
      portfolio: 'Portfolio',
      contact: 'Contact',
      heroTitle: 'Votre Partenaire pour le Cycle de Vie Complet des Applications',
      heroText: 'De la conception au déploiement et à la maintenance, nous accompagnons votre application à chaque étape de son développement.',
      getQuote: 'Demander un devis',
      ourServices: 'Nos services'
      // ... autres traductions
    },
    en: {
      home: 'Home',
      services: 'Services',
      process: 'Process',
      portfolio: 'Portfolio',
      contact: 'Contact',
      heroTitle: 'Your Partner for the Complete Application Lifecycle',
      heroText: 'From design to deployment and maintenance, we support your application at every stage of its development.',
      getQuote: 'Get a quote',
      ourServices: 'Our services'
      // ... autres traductions
    },
    es: {
          home: 'Inicio',
          services: 'Servicios',
          process: 'Proceso',
          portfolio: 'Portafolio',
          contact: 'Contacto',
          heroTitle: 'Su Socio para el Ciclo de Vida Completo de las Aplicaciones',
          heroText: 'Desde el diseño hasta el despliegue y el mantenimiento, apoyamos su aplicación en cada etapa de su desarrollo.',
          getQuote: 'Solicitar un presupuesto',
          ourServices: 'Nuestros servicios'
          // ... otras traducciones
        },
        
        de: {
          home: 'Startseite',
          services: 'Dienstleistungen',
          process: 'Prozess',
          portfolio: 'Portfolio',
          contact: 'Kontakt',
          heroTitle: 'Ihr Partner für den gesamten Lebenszyklus von Anwendungen',
          heroText: 'Von der Planung über die Bereitstellung bis hin zur Wartung unterstützen wir Ihre Anwendung in jeder Phase ihrer Entwicklung.',
          getQuote: 'Ein Angebot anfordern',
          ourServices: 'Unsere Dienstleistungen'
          // ... andere Übersetzungen
        },
    // ... autres langues
  };