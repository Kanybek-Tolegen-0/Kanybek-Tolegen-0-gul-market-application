import React, { FC } from 'react'

import { Button, Typography } from '@material-tailwind/react'
import { AddIcon, MinusIcon, TrashIcon } from '../../assets'

export const AmountController: FC<{
  className?: string
  amount: number
  label?: string
  onAmountChange: (amount: Number) => void
}> = ({ className, amount, label = 'HB', onAmountChange }) => {
  return (
    <div className={`flex gap-4 py-[9px] px-[13px] border-[1px] border-gr-300 bg-white rounded-md ${className}`}>
      <Button className="p-0" variant="text" onClick={() => onAmountChange(amount - 1)}>
        {amount === 1 ? <TrashIcon /> : <MinusIcon />}
      </Button>
      <div className="flex gap-2">
        <Typography className="text-sm leading-5 font-medium text-gr-700">{amount}</Typography>
        <Typography className="text-sm leading-5 font-medium text-gr-400">{label}</Typography>
      </div>
      <Button className="p-0" onClick={() => onAmountChange(amount + 1)} variant="text">
        <AddIcon />
      </Button>
    </div>
  )
}
