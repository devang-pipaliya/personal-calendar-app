import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
)
