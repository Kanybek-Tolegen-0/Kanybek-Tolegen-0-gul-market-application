import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'

export const BasketContent: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography className="text-base text-gray-900 leading-none font-normal">{title}</Typography>
      <div className="flex gap-4 flex-col w-full">{children}</div>
    </div>
  )
}
