import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
  authorizationPage,
  CatalogPage,
  Dashboard,
  loginPage,
  MainPage,
  myOrdersPage,
  NewPasswordPage,
  RegisterPlantationPage,
  RememberPasswordPage
} from './pages'

export const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <authorizationPage.Component />,
          action: authorizationPage.action
        },
        {
          path: '/login',
          element: <loginPage.Component />,
          action: loginPage.action
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
          element: <myOrdersPage.Component />,
          loader: myOrdersPage.loader,
          action: myOrdersPage.action
        },
        {
          path: '/main',
          element: <MainPage />
        }
      ]
    }
  ]
)
