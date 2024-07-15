import React, { FC } from 'react'
import { Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import {
  MenuIcon,
  ProfileIcon,
  LogoIcon,
  NotificationIcon,
  fakeShopImage,
  StarIcon,
  CabinetIcon,
  ExitIcon
} from '../../assets'
import { Nav, NavProps } from '../nav'
import { Select } from '../select'
import { SearchInput } from '../search-input'
import { BrandButton } from '../brand-button'
import { Link } from 'react-router-dom'

interface HeaderProps {
  fullHeader?: boolean
  isLogged?: boolean
  renderCountryOptions?: () => JSX.Element
  handleLogin: () => void
  loaderData: any
}

export const Header: FC<HeaderProps & NavProps> = ({
  isLogged,
  tabs,
  fullHeader,
  renderCountryOptions,
  handleLogin,
  loaderData
}) => {
  const [openMenu, setOpenMenu] = React.useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const countryOptions = renderCountryOptions && renderCountryOptions()

  return (
    <div className={`flex justify-between h-[72px] px-[${isLogged ? '32px' : '120px'}] gap-[86px] py-4 bg-primary`}>
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-3 h-[50px]">
          {isLogged ? <img src={fakeShopImage} alt={'profile'} className={'h-[50px] w-[50px]'} /> : <LogoIcon />}
          {isLogged ? (
            <Typography
              children="Название магазина в три строки"
              className="w-[106px] font-normal text-sm text-gray-500 h-[50px]"
            />
          ) : null}
        </div>
        {isLogged ? <Nav tabs={tabs} /> : null}
      </div>
      <div>
        {isLogged ? (
          <div className="flex items-center gap-4">
            {countryOptions && isLogged ? countryOptions : null}
            <div>
              <Menu placement="bottom-start" open={openMenu} handler={handleMenu}>
                <MenuHandler
                  className={`bg-secondary flex items-center gap-2.5 p-3 rounded-lg h-[38px] cursor-pointer border ${openMenu ? ' border-brand_bold' : 'border-transparent'} `}
                >
                  <Button>
                    {/*<Avatar variant="circular" alt="profile" src={ProfileIcon}></Avatar>*/}
                    <ProfileIcon />
                    <MenuIcon />
                  </Button>
                </MenuHandler>
                <MenuList className="rounded-xl border-none shadow-profile-menu p-3 gap-2 flex flex-col w-[209px]">
                  <div className={'rounded-xl p-3 flex flex-col gap-3 text-gray-50 mb-1'}>
                    <div className={'flex flex-col gap-1 '}>
                      <Typography children={'На вашем счету'} className="font-normal text-xs text-gray-500" />
                      <Typography
                        children={loaderData?.wallet + ' ₸' || 'Неизвестно'}
                        className=" font-bold text-2xl text-gray-900"
                      />
                    </div>
                    <BrandButton className={'font-medium text-sm h-[38px] flex items-center'}>
                      Пополнить счет
                    </BrandButton>
                  </div>
                  <Link to={'/favorite'}>
                    <MenuItem className="flex gap-2 items-center px-0 ">
                      <StarIcon fill={'transparent'} />
                      <Typography children={'Мои избранные'} className={'font-normal text-sm text-gray-900'} />
                    </MenuItem>
                  </Link>
                  <Link to={'/profile'}>
                    <MenuItem className="flex gap-2 items-center px-0 ">
                      <CabinetIcon />
                      <Typography children={'Личные данные'} className={'font-normal text-sm text-gray-900'} />
                    </MenuItem>
                  </Link>
                  <Link to={'/login'}>
                    <MenuItem
                      className="flex gap-2 items-center px-0 "
                      onClick={() => {
                        localStorage.removeItem('idToken')
                        localStorage.removeItem('refreshToken')
                      }}
                    >
                      <ExitIcon />
                      <Typography children={'Выйти'} className={'font-normal text-sm text-gray-900'} />
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </div>
          </div>
        ) : (
          <Button
            className="normal-case font-normal text-sm"
            variant="text"
            onClick={() => {
              handleLogin()
            }}
          >
            Войти
          </Button>
        )}
      </div>
    </div>
  )
}
