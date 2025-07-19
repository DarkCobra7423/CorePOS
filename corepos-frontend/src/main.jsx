import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Para probar sin StrictMode, comentar la siguiente línea y usar la de abajo:
  // <StrictMode><App /></StrictMode>
  <App />
)