import React, { FunctionComponent } from 'react'
import { Header } from '@design-system/ui'
import { Outlet } from 'react-router-dom'

export const MainLayout: FunctionComponent = () => (
  <>
    <Header />
    <Outlet />
  </>
)
