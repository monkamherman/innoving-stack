import React from 'react';
// import { useTheme } from '@/contexts/ThemeContext';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import Theme from '@/contexts/ThemeContext';

interface InfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  theme: Theme;
  size?: string;
}

const Info: React.FC<InfoProps> = ({ icon, title, description,theme, size = "10rem" }) => {

//   const { theme } = useTheme();

  return (
    <div className="flex items-center font-roboto gap-4">
      {/* Icon and separator */}
      <div className="flex flex-col items-center gap-4">
        {icon}
        <div 
          className="w-1" 
          style={{ 
            height: size,
            backgroundColor: theme.primary 
          }}
        ></div>
      </div>

      {/* Text section */}
      <div className="flex flex-col mt-6 gap-2">
        <h1 
          className="lg:text-4xl font-bold"
          style={{ color: theme.text }}
        >
          {title}
        </h1>
        <p 
          className="lg:w-[30rem]"
          style={{ color: theme.text }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Info;