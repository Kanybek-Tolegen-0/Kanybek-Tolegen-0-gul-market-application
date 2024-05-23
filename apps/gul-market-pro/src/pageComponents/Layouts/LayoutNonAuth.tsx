import React, { FunctionComponent } from 'react'
import { Header } from '@design-system/ui'
import { Outlet } from 'react-router-dom'

interface ILayoutProps {
  children?: React.ReactNode
}

const LayoutNonAuth: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={'flex justify-center'}>
        <Outlet />
      </div>
    </>
  )
}

export default LayoutNonAuth
