import React, { FC } from 'react'
import { Select as MaterialTailwindSelect, Option } from '@material-tailwind/react'

interface OptionsProps {
  label: string
  value: string
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
      {options.map(({ label, value }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </MaterialTailwindSelect>
  ) : null
