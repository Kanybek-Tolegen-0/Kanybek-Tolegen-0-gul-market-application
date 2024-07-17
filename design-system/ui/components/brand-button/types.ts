import { ButtonHTMLAttributes } from 'react'
import { ButtonProps, ButtonStyleTypes } from '@material-tailwind/react'
import { CSSRuleObject } from 'tailwindcss/types/config'

export interface IButtonProps extends ButtonHTMLAttributes<ButtonProps> {
  style?: CSSRuleObject
}
