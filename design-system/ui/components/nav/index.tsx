import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'

export interface NavProps {
  tabs: { link: string; label: string }[]
}

export const Nav: FC<NavProps> = ({ tabs }) => {
  return (
    <div className="flex gap-6 items-center font-normal text-sm text-gray-800">
      {tabs.map(({ label, link }) => (
        <Link key={link} to={link} className="px-2 py-1">
          {label}
        </Link>
      ))}
    </div>
  )
}
