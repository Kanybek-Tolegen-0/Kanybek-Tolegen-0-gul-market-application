import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import {
  IndividualPage,
  EntityPage,
  RememberPasswordPage,
  NewPasswordPage,
  flowersPage,
  BasketPage,
  ProfilePage,
  MyOrdersPage,
  loginPage,
  authorizationPage,
  chooseRolePage
} from './pages'
import { MainPage } from './pages/main-page'
import { CatalogPage } from './pages/catalog-page'
import { FavoritePage } from './pages/favorite-page'
import { Dashboard } from './pages/dashboard'

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
        element: <chooseRolePage.Component />,
        loader: chooseRolePage.loader
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
        element: <flowersPage.Component />,
        action: flowersPage.action
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
