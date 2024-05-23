import React, { FunctionComponent } from 'react'
import logo from '../../../assets/images/logo.png'
import profile from '../../../assets/images/profile.png'
import { Outlet } from 'react-router-dom'
interface ILayoutProps {
  children?: React.ReactNode
}

const LayoutNonAuth: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <div className={'flex justify-between h-[72px] px-[120px] py-4 bg-primary'}>
        <img src={logo} alt="logo" className={'h-10'} />
        <div className={'bg-secondary flex gap-2.5 p-3 rounded-lg h-12'}>
          <div>
            <img src={profile} alt={'profile'} className={'h-6'} />
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
