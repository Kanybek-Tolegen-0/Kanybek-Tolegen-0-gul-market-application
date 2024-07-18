import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import {
  RememberPasswordPage,
  NewPasswordPage,
  flowersPage,
  BasketPage,
  myOrdersPage,
  loginPage,
  authorizationPage,
  chooseRolePage,
  individualPage,
  entityPage,
  profilePage,
  favoritePage
} from './pages'
import { MainPage } from './pages/main-page'
import { dashboard } from './pages/dashboard'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <dashboard.Component />,
    loader: dashboard.loader,
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
        element: <individualPage.Component />,
        action: individualPage.action
      },
      {
        path: '/entity',
        element: <entityPage.Component />,
        action: entityPage.action
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
        element: <profilePage.Component />,
        loader: profilePage.loader,
        action: profilePage.action
      },
      {
        path: '/favorite',
        element: <favoritePage.Component />,
        loader: favoritePage.loader,
        action: favoritePage.action
      },
      {
        path: '/my-orders',
        element: <myOrdersPage.Component />,
        action: myOrdersPage.action,
        loader: myOrdersPage.loader
      }
    ]
  }
])
