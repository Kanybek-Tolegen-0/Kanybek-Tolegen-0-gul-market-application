import { CSSProperties, FC, HTMLAttributes } from 'react'

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  style?: CSSProperties
}
