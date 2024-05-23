import { ButtonHTMLAttributes, CSSProperties, FC } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  style?: CSSProperties
}
