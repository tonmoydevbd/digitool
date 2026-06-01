import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsSection } from './components/StatsSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <StatsSection />
  </StrictMode>,
)
