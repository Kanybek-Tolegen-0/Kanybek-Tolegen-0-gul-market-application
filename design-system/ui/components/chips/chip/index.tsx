import { Button } from '@material-tailwind/react'
import React, { FC } from 'react'
import { CrossIcon } from '../../../assets'
import { IFilter } from '../../../@types'

interface IChipProps extends Omit<IFilter, 'name'> {
  onChange: () => void
}

export const Chip: FC<IChipProps> = ({ label, value, onChange }) => {
  return (
    <Button
      className="flex pl-[2px] pr-[6px] py-[4px] items-center gap-2 text-gr-900 bg-gr-200"
      onClick={() => onChange()}
    >
      <CrossIcon />
      {label}
    </Button>
  )
}
