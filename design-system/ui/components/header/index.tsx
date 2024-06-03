import React, { FC } from 'react'
import { Button, Typography } from '@material-tailwind/react'
import { MenuIcon, ProfileIcon, LogoIcon, NotificationIcon, fakeShopImage } from '../../assets'
import Nav from '../nav'
import { Select } from '../select'
import Search from '../search'

interface HeaderProps {
  fullHeader?: boolean
  isLogged?: boolean
}

export const Header: FC<HeaderProps> = ({ isLogged, fullHeader }) => (
  <div className={`flex justify-between h-[72px] px-[${fullHeader ? '32px' : '120px'}] gap-[86px] py-4 bg-primary`}>
    <div className="flex gap-8 items-center">
      <div className="flex items-center gap-3 h-[50px]">
        {fullHeader ? <img src={fakeShopImage} alt={'profile'} className={'h-[50px] w-[50px]'} /> : <LogoIcon />}
        {fullHeader && (
          <Typography
            children="Название магазина в три строки"
            className="w-[106px] font-normal text-sm text-t-disabled h-[50px]"
          />
        )}
      </div>
      {fullHeader && <Nav />}
    </div>
    <div>
      {isLogged ? (
        <div className="flex items-center gap-4">
          {fullHeader && (
            <>
              <Select options={[{ label: 'one', value: 'one' }]} />
              <Search />
              <div className="w-6 h-6">
                <NotificationIcon />
              </div>
            </>
          )}
          <div className={'bg-secondary flex gap-2.5 p-3 rounded-lg h-12'}>
            <ProfileIcon style={{ cursor: 'pointer' }} />
            <MenuIcon style={{ cursor: 'pointer' }} />
          </div>
        </div>
      ) : (
        <Button className="normal-case font-normal text-sm" variant="text">
          Войти
        </Button>
      )}
    </div>
  </div>
)
