import React, { CSSProperties, FC } from 'react'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  style?: CSSProperties
}

export const Button: FC<IButtonProps> = ({ children, className, style }) => {
  return (
    <button className={`btn primary ${className}`} style={style}>
      {children}
    </button>
  )
}
