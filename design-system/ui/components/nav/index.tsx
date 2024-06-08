import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'

interface NavProps {}

const Nav: FC<NavProps> = props => {
  return (
    <div className="flex gap-6 items-center font-normal text-sm text-gr-800">
      <Link to={'/main-page'}>
        <Typography children="Главная" className="px-2 py-1" />
      </Link>
      <Link to={'/catalog'}>
        <Typography children="Каталог" className="px-2 py-1" />
      </Link>
      <Link to={''}>
        <Typography children="Заказы" className="px-2 py-1" />
      </Link>
      <Link to={''}>
        <Typography children="Рекламация" className="px-2 py-1" />
      </Link>
    </div>
  )
}

export default Nav
