import React, { ButtonHTMLAttributes, CSSProperties, FC } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  style?: CSSProperties
}

export const BrandButton: FC<IButtonProps> = ({ children, className, style, ...props }) => {
  return (
    <button className={`brand_button ${className}`} style={style} {...props}>
      {children}
    </button>
  )
}
