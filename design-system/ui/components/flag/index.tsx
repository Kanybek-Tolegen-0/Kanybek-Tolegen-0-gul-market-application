import React, { FC } from 'react'

export interface FlagProps {
  label?: string
  color?: string
  bgColor?: string
}

export const Flag: FC<FlagProps> = ({ label, color, bgColor }) => {
  return (
    <div className={`text-sm leading-5 font-medium px-[10px] rounded-[12px] py-[2px] w-max ${color} ${bgColor}`}>
      {label}
    </div>
  )
}
