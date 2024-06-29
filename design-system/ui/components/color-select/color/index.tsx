import { Typography } from '@material-tailwind/react'
import React, { FC } from 'react'

export const Color: FC<{
  active: boolean
  label: string
  value: string
  onChange: ({ label, value }: { label: string; value: string }) => void
}> = ({ active, label, value, onChange }) => {
  return (
    <div
      className={`flex items-center gap-4 py-[6px] px-[8px] border-[1px] border-gray-100 rounded cursor-pointer transition-all duration-300 ${active ? 'bg-gray-100' : ''}`}
      onClick={() => onChange({ label, value })}
    >
      <div
        className={`w-[28px] h-[28px] rounded-full ${['#FFF', '#FFFFFF'].includes(value) ? 'border-gray-300 border-[1px]' : ''}`}
        style={{ backgroundColor: value }}
      />
      <Typography className="text-sm leading-none font-normal text-black">{label}</Typography>
    </div>
  )
}
