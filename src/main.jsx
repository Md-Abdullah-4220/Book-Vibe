import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainrootLayout from './rootLayout/MainrootLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainrootLayout />
  </StrictMode>,
)
