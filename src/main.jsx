import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContext from './Components/Context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </StrictMode>,
)
