import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import LanguageProvider from './i18n/LanguageProvider'
import CompareProvider from './compare/CompareProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <CompareProvider>
          <App />
        </CompareProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
