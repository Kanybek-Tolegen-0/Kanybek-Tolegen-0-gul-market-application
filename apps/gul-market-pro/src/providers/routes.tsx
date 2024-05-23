import { createBrowserRouter, createHashRouter, Link } from 'react-router-dom'
import ChooseRoleLayout from '../pages/ChooseRole/ChooseRole.Layout'
import React from 'react'
import LayoutNonAuth from '../pageComponents/Layouts/LayoutNonAuth'
import IndividualLayout from '../pages/Individual/Invidivual.Layout'
import EntityLayout from '../pages/Entity/Entity.Layout'
// CreateBrowserRouter поменяем как сервак будет
const routes = createHashRouter([
  {
    path: '/',
    element: <LayoutNonAuth />,
    children: [
      {
        path: '',
        element: <Link to={'choose_role'}>Choose Role</Link>
      },
      {
        path: 'choose_role',
        element: <ChooseRoleLayout />
      },
      {
        path: 'choose_role/individual',
        element: <IndividualLayout />
      },
      {
        path: 'choose_role/entity',
        element: <EntityLayout />
      }
    ]
  }
  // {
  //   path: '/',
  //   element: <LayoutWithAuth/>,
  //   children: [
  //     {
  //       path: 'about',
  //       element: <About />
  //     },
  //     {
  //       path: 'services',
  //       element: <Services />
  //     }
  //   ]
  // }
])

export default routes
