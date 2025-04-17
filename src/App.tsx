import React from 'react'
import Router from '@/routes/router'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProviderCustome } from '@/contexts/ThemeContext';
import ScrollProgressBar from '@/components/custom/utils/ScrollProgress'
import OfflineAlert from '@/components/custom/utils/OfflineAlert';
import { HashRouter } from 'react-router-dom'


const App: React.FC = () => {
  return (
    <ThemeProviderCustome>
      <LanguageProvider>
      <ScrollProgressBar />
      <HashRouter>
        <RouterProvider router={Router} />
      </HashRouter>
      
      <Toaster />
      <OfflineAlert />
      </LanguageProvider>
    </ThemeProviderCustome>
  )
}

export default App
