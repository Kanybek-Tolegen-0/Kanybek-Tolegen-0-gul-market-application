import React, { FC, useState } from 'react'
import { Color } from './color'

export const ColorSelect: FC<{ options: { label: string; value: string }[] }> = ({ options }) => {
  const [active, setActive] = useState(options[0])

  return (
    <div className="flex flex-col gap-3">
      {options.map(({ label, value }) => (
        <Color
          key={value}
          active={active?.value === value}
          onChange={option => setActive(option)}
          label={label}
          value={value}
        />
      ))}
    </div>
  )
}
