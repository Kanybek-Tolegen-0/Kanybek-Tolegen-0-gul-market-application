import React, { FC } from 'react'
import { IButtonProps } from './types'

export const BrandButton: FC<IButtonProps> = ({ children, className, style, ...props }) => (
  <button className={`brand_button ${className}`} style={style} {...props}>
    {children}
  </button>
)
