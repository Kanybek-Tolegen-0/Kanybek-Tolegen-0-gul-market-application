import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { AuthorizationPage, CatalogPage, NewPasswordPage, RegisterPlantationPage, RememberPasswordPage } from './pages'
import { LoginPage } from './pages'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthorizationPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/remember-password',
    element: <RememberPasswordPage />
  },
  {
    path: '/new-password',
    element: <NewPasswordPage />
  },
  {
    path: '/catalog-page',
    element: <CatalogPage />
  },
  {
    path: '/register-plantation',
    element: <RegisterPlantationPage />
  }
])
