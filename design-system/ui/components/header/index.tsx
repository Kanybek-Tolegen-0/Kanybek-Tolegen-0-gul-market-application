import React, { FC } from 'react'
import { Button } from '@material-tailwind/react'
import { MenuIcon, ProfileIcon, LogoIcon } from '../../assets'

const isLogged = false

export const Header: FC = () => (
  <div className={'flex justify-between h-[72px] px-[120px] py-4 bg-primary'}>
    <LogoIcon />
    {isLogged ? (
      <div className={'bg-secondary flex gap-2.5 p-3 rounded-lg h-12'}>
        <ProfileIcon style={{ cursor: 'pointer' }} />
        <MenuIcon style={{ cursor: 'pointer' }} />
      </div>
    ) : (
      <Button className="normal-case font-normal text-sm" variant="text">
        Войти
      </Button>
    )}
  </div>
)
