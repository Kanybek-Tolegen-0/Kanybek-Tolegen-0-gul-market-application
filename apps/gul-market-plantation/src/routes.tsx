import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
  authorizationPage,
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
    path: '/plants/',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <authorizationPage.Component />,
        action: authorizationPage.action
      },
      {
        path: '/plants/login',
        element: <LoginPage />
      },
      {
        path: '/plants/remember-password',
        element: <RememberPasswordPage />
      },
      {
        path: '/plants/new-password',
        element: <NewPasswordPage />
      },
      {
        path: '/plants/catalog',
        element: <CatalogPage />
      },
      {
        path: '/plants/register-plantation',
        element: <RegisterPlantationPage />
      },
      {
        path: '/plants/my-orders',
        element: <MyOrdersPage />
      },
      {
        path: '/plants/main',
        element: <MainPage />
      }
    ]
  }
])
