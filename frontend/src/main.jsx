import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes.jsx'
import { AuthenticationProvider } from './context/AuthenticationContxt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <RouterProvider router={routes} />
    </AuthenticationProvider>
  </React.StrictMode>,
)
