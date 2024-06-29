import { DeliveryIcon, TrashIcon } from '@design-system/ui'
import { Button, Card, Typography } from '@material-tailwind/react'
import React, { FC } from 'react'
import { BasketACardBaseProps } from '../types'

export const BasketNotAvailableCard: FC<BasketACardBaseProps> = ({
  imgSrc,
  name,
  price,
  deliveryAddress,
  deliveryDate
}) => {
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
      <Button className="self-center bg-gray-50">
        <TrashIcon />
      </Button>
    </Card>
  )
}
