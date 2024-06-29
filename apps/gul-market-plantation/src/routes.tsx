import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { AuthorizationPage } from './pages'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthorizationPage />
  }
])
