// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './Props.jsx'
// import App from './Tailwindcss.jsx'
import { BrowserRouter } from 'react-router-dom'
// import App from './Routing.jsx'
// import App from './Hook.jsx'
import App from '../src/Forms.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
