import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { ChooseRolePage, LoginPage, IndividualPage, EntityPage } from './pages'
// CreateBrowserRouter поменяем как сервак будет
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/choose-role',
    element: <ChooseRolePage />
  },
  {
    path: '/individual',
    element: <IndividualPage />
  },
  {
    path: '/entity',
    element: <EntityPage />
  }
])
