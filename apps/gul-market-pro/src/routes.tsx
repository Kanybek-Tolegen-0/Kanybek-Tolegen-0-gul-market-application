import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import {
  ChooseRolePage,
  IndividualPage,
  EntityPage,
  RememberPasswordPage,
  NewPasswordPage,
  FlowersPage,
  BasketPage,
  ProfilePage,
  MyOrdersPage,
  loginPage,
  authorizationPage
} from './pages'
import { MainPage } from './pages/main-page'
import { CatalogPage } from './pages/catalog-page'
import { FavoritePage } from './pages/favorite-page'
import { Dashboard } from './pages/dashboard'
import { api } from './api'

export const routes = createBrowserRouter([
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
        path: '/choose-role',
        element: <ChooseRolePage />,
        loader: async () => {
          const response = await api.get('/api/onboarding')
          if (!response) {
            throw new Error('Network response was not ok')
          }
          return response
        }
      },
      {
        path: '/individual',
        element: <IndividualPage />
      },
      {
        path: '/entity',
        element: <EntityPage />
      },
      {
        path: '/main',
        element: <MainPage />
      },
      // {
      //   path: '/flowers',
      //   element: <FlowersPage />
      // },
      {
        path: '/catalog',
        element: <FlowersPage />
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
        path: '/basket',
        element: <BasketPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/favorite',
        element: <FavoritePage />
      },
      {
        path: '/my-orders',
        element: <MyOrdersPage />
      }
    ]
  }
])
