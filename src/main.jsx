import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Suspense } from 'react'
import Fallback from './components/Fallback.jsx'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Fallback />}>
    <App />
  </Suspense>,
)
