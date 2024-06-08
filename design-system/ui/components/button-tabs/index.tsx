import { Typography } from '@material-tailwind/react'
import React, { FC } from 'react'

interface ButtonTabsProps {
  active: string
  className?: string
  options: { label: string; value: string; Icon: React.ReactNode }[]
  onChange: (type: string) => void
}

export const ButtonTabs: FC<ButtonTabsProps> = ({ active, className, options, onChange }) => (
  <div className="flex gap-4">
    {options.map(({ label, value, Icon }) => (
      <div
        key={value}
        className={`flex gap-2 items-center rounded-lg transition-all duration-300 ${active === value ? 'bg-gray-100' : ''} cursor-pointer px-[8px] py-[6px] ${className}`}
        onClick={() => {
          onChange(value)
        }}
      >
        {Icon}
        <div>
          <Typography className="text-sm leading-none font-normal text-gray-900">{label}</Typography>
        </div>
      </div>
    ))}
  </div>
)
