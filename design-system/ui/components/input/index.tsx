import React, { FC, InputHTMLAttributes, useState } from 'react'
import { InputProps } from './types'
import { Label } from '../label'
import './style.css'

export const Input: FC<InputProps> = ({ className, name, label, type = 'text' }) => {
  return (
    <div className={`${className} ${label ? 'flex flex-col gap-y-1' : ''}`}>
      {label ? <Label label={label} /> : null}
      <input name={name} type={type} className={`input rounded-md border border-gr-300 ${className}`} />
    </div>
  )
}
