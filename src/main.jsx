import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portifolio from './pages/Portifolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portifolio />
  </StrictMode>,
)
