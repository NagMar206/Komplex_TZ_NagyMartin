import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './felveteli.css'
import App from './App.jsx'
import 'tachyons'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
