import React, { FunctionComponent } from 'react'
import { profileImage, logoImage } from '@design-system/ui'
import { Outlet } from 'react-router-dom'
interface ILayoutProps {
  children?: React.ReactNode
}

const LayoutNonAuth: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <div className={'flex justify-between h-[72px] px-[120px] py-4 bg-primary'}>
        <img src={logoImage} alt="logo" className={'h-10'} />
        <div className={'bg-secondary flex gap-2.5 p-3 rounded-lg h-12'}>
          <div>
            <img src={profileImage} alt={'profile'} className={'h-6'} />
          </div>
          menu
        </div>
      </div>
      <div className={'flex justify-center'}>
        <Outlet />
      </div>
    </>
  )
}

export default LayoutNonAuth
