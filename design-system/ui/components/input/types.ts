import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

export interface InputProps {
  name: string
  className?: string
  label: string
  type?: HTMLInputTypeAttribute
}
