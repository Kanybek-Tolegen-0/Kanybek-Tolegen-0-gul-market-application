import { Typography } from '@material-tailwind/react'
import React, { FC } from 'react'

interface ScreenTemplateProps {
  title: string
  children: React.ReactNode
}

export const ScreenTemplate: FC<ScreenTemplateProps> = ({ title, children }) => (
  <div className="flex flex-col ">
    <Typography className="text-5xl leading-none font-normal my-8">{title}</Typography>
    <div className="flex-1">{children}</div>
  </div>
)
