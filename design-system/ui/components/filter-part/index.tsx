import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { SearchInputProps } from '../search-input'

interface FilterPartProps extends SearchInputProps {
  label: string
  children: React.ReactNode
}

export const FilterPart: FC<FilterPartProps> = ({ label, children }) => (
  <div className="flex flex-col gap-4">
    <Typography className="text-sm leading-4 font-medium text-gray-500">{label}</Typography>
    {children}
  </div>
)
