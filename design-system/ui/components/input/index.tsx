import React, { FC, useState } from 'react'
import { InputProps } from './types'
import { Label } from '../label'
import './style.css'

export const Input: FC<InputProps> = ({ className, name, label, type = 'text', onChange }) => {
  const [value, setValue] = useState('')

  return (
    <div className={`${className} ${label ? 'flex flex-col gap-y-1' : ''}`}>
      {label ? <Label label={label} /> : null}
      <input
        name={name}
        className={`input rounded-md border border-gr-300 ${className}`}
        type={type}
        value={value}
        onChange={e => {
          const { target } = e
          setValue(target.value)
          onChange && onChange(target.value)
        }}
      />
    </div>
  )
}
