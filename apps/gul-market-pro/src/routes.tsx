import { createBrowserRouter, Link } from 'react-router-dom'
import ChooseRoleLayout from './pageComponents/ChooseRole/ChooseRole.Layout'
import React from 'react'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Link to={'choose_role'}>choose Role</Link>
  },
  {
    path: 'choose_role',
    element: <ChooseRoleLayout />
  }
])

export default routes
