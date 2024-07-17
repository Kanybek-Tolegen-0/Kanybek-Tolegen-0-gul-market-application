import React, { FC } from 'react'
import { IButtonProps } from './types'
import { Button } from '@material-tailwind/react'

export const BrandButton: FC<IButtonProps> = ({ children, className, style, ...props }) => (
  <Button
    className={`rounded-md px-[21px] py-[13px] bg-brand font-medium text-base text-primary normal-case ${className}`}
    style={style}
    {...props}
  >
    {children}
  </Button>
)
