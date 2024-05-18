import React, { CSSProperties, FC } from 'react'

interface IContainerProps {
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
