import React, { CSSProperties, FC, HTMLAttributes } from 'react'

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  style?: CSSProperties
}

export const Container: FC<IContainerProps> = ({ children, className, style }) => {
  return (
    <div className={`container ${className}`} style={style}>
      {children}
    </div>
  )
}
