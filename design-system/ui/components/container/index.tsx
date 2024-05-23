import React, { FC } from 'react'
import { IContainerProps } from './types'

export const Container: FC<IContainerProps> = ({ children, className, style }) => (
  <div className={`container ${className}`} style={style}>
    {children}
  </div>
)
