import React, { FC } from 'react'
import { Select as MaterialTailwindSelect, Option, Typography } from '@material-tailwind/react'

interface OptionsProps {
  label: string
  value: string
  soon?: boolean
}

export interface SelectProps {
  className?: string
  onChange?: (v: string) => void
  options?: OptionsProps[]
}

export const Select: FC<SelectProps> = ({ className, onChange, options }) =>
  options ? (
    <MaterialTailwindSelect
      className={`rounded-[6px] border px-[13px] py-[9px] border-gray-300 z-10 ${className}`}
      labelProps={{
        className: 'before:content-none after:content-none '
      }}
      containerProps={{
        className: '!p-0'
      }}
      onChange={v => v && onChange && onChange(v)}
    >
      {options.map(({ label, value, soon }) => (
        <Option
          key={value}
          value={value}
          className={` ${soon ? 'flex gap-3 items-center text-gray-500' : 'text-gray-700'}`}
          disabled={soon}
        >
          {label}
          {soon && <span className={'text-gray-400'} children={' Скоро'} />}
        </Option>
      ))}
    </MaterialTailwindSelect>
  ) : null
