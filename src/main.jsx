import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/styles.css'
import { GameProvider } from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
)
