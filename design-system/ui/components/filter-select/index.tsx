import { Typography } from '@material-tailwind/react'
import React, { FC, useState } from 'react'
import { FilterOrderIcon } from '../../assets'
import { Select, SelectProps } from '../select'

export const FilterSelect: FC<SelectProps> = ({ className, options, onChange }) => {
  const [value, setValue] = useState<string | null>(null)

  const handleChange = (value: string) => {
    setValue(value)
    onChange && onChange(value)
  }

  return (
    <div className="relative">
      {value ? null : (
        <div className="absolute flex gap-2 top-[25%] left-[12px]">
          <FilterOrderIcon />
          <Typography className="text-sm leading-5 font-medium text-gray-700">Упорядочить</Typography>
        </div>
      )}
      <Select className={className} options={options} onChange={handleChange} />
    </div>
  )
}
