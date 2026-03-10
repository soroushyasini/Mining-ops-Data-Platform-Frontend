import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Inject Vazirmatn font from Google Fonts
const fontLink = document.createElement('link')
fontLink.rel = 'stylesheet'
fontLink.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap'
document.head.appendChild(fontLink)

// Set document direction and language for RTL Persian
document.documentElement.dir = 'rtl'
document.documentElement.lang = 'fa'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
