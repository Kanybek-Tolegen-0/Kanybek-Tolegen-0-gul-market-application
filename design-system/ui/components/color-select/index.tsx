import React, { FC, useState } from 'react'
import { Color } from './color'

export const ColorSelect: FC<{
  name: string
  options: { label: string; value: string }[]
  onChange: ({ label, value, name }: { label: string; value: string; name: string }) => void
}> = ({ name, options, onChange }) => {
  const [active, setActive] = useState(options[0])

  return (
    <div className="flex flex-col gap-3">
      {options.map(({ label, value }) => (
        <Color
          key={value}
          active={active?.value === value}
          onChange={option => {
            setActive(option)
            onChange({ label, value, name })
          }}
          label={label}
          value={value}
        />
      ))}
    </div>
  )
}
