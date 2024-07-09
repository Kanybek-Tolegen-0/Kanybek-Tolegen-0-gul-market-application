import { AmountController, DeliveryIcon, useTimer, formatTimer } from '@design-system/ui'
import { Card, Typography } from '@material-tailwind/react'
import React, { FC } from 'react'
import { BasketACardBaseProps } from '../types'

export interface BasketActiveCardProps extends BasketACardBaseProps {
  leftTime: number
}

export const BasketActiveCard: FC<BasketActiveCardProps> = ({
  name,
  price,
  deliveryAddress,
  deliveryDate,
  leftTime,
  amount,
  imgSrc
}) => {
  const { timeLeft } = useTimer({ seconds: leftTime, isDefaultStart: true })
  const formattedTimeLeft = formatTimer(timeLeft)

  return (
    <Card className="flex flex-row justify-between bg-gray-50 p-[12px]">
      <div className="flex gap-6">
        <div className="rounded-xl w-[100px] h-[100px]">
          <img className="w-[100px] h-[100px]" src={imgSrc} />
        </div>
        <div className="flex flex-col justify-between">
          <Typography className="text-base leading-5 font-normal text-gray-900">{name}</Typography>
          <Typography className="text-2xl leading-8 font-semibold text-gray-900">{price}</Typography>
          <div className="flex gap-2">
            <div className="flex gap-1">
              <DeliveryIcon />
              <Typography className="text-sm leading-none font-normal text-gray-700">{deliveryAddress}</Typography>
            </div>
            <Typography className="text-sm leading-none font-normal text-gray-500">{deliveryDate}</Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Typography className="text-xl leading-none font-normal px-[8px] py-[7px] self-end">
          {formattedTimeLeft.minutes}:{formattedTimeLeft.seconds}
        </Typography>
        <AmountController amount={amount} onAmountChange={amount => console.log(amount)} />
      </div>
    </Card>
  )
}
