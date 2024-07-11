import React, { FC } from 'react'
import { Color } from './color'

export const ColorSelect: FC<{
  name: string
  options: { label: string; value: string; color: string }[]
  selectedColors: string[]
  onChange: ({ label, value, name }: { label: string; value: string; name: string }) => void
}> = ({ name, selectedColors, options, onChange }) => {
  return (
    <div className="flex flex-col gap-3">
      {options.map(({ label, value, color }) => (
        <Color
          key={value}
          active={selectedColors.includes(value)}
          onChange={() => {
            onChange({ label, value, name })
          }}
          label={label}
          value={color}
        />
      ))}
    </div>
  )
}
