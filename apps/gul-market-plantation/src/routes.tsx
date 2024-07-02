import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
  AuthorizationPage,
  CatalogPage,
  Dashboard,
  MainPage,
  MyOrdersPage,
  NewPasswordPage,
  RegisterPlantationPage,
  RememberPasswordPage
} from './pages'
import { LoginPage } from './pages'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        index: true,
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
        path: '/catalog',
        element: <CatalogPage />
      },
      {
        path: '/register-plantation',
        element: <RegisterPlantationPage />
      },
      {
        path: '/my-orders',
        element: <MyOrdersPage />
      },
      {
        path: '/main',
        element: <MainPage />
      }
    ]
  }
])
