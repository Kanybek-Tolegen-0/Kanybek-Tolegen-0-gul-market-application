import React from 'react'
import { orderFlowerImage, logoImage, FlagProps, BrandButton } from '@design-system/ui'
import { IOrders, ORDER_STATUS } from './types'
import { Button } from '@material-tailwind/react'

export const tabs = [
  { label: 'Ожидает ответа плантации', value: ORDER_STATUS.PENDING_RESPONSE },
  { label: 'Отказано плантацией', value: ORDER_STATUS.PLANTATION_DECLINED },
  { label: 'Подтверждено плантацией', value: ORDER_STATUS.PLANTATION_APPROVED },
  { label: 'Отказано карго', value: ORDER_STATUS.KARGO_DECLINED },
  { label: 'В процессе доставки', value: ORDER_STATUS.IN_DELIVERY }
]

export const orders: IOrders[] = [
  {
    name: 'Название плантации',
    flower: 'Тюльпаны',
    box_type: '2HB',
    address: 'Доставка до Алматы (Сейфуллина 505)',
    price: '37 560 ₸',
    price_dollar: '$ 0.4',
    price_tenge: '198 ₸',
    imageUrl: orderFlowerImage,
    logo: logoImage,
    status: ORDER_STATUS.PENDING_RESPONSE
  },
  {
    name: 'Название плантации',
    flower: 'Тюльпаны',
    box_type: '2HB',
    address: 'Доставка до Алматы (Сейфуллина 505)',
    price: '37 560 ₸',
    price_dollar: '$ 0.4',
    price_tenge: '198 ₸',
    imageUrl: orderFlowerImage,
    logo: logoImage,
    status: ORDER_STATUS.PENDING_RESPONSE
  },
  {
    name: 'Название плантации',
    flower: 'Тюльпаны',
    box_type: '2HB',
    address: 'Доставка до Алматы (Сейфуллина 505)',
    price: '37 560 ₸',
    price_dollar: '$ 0.4',
    price_tenge: '198 ₸',
    imageUrl: orderFlowerImage,
    logo: logoImage,
    status: ORDER_STATUS.PLANTATION_APPROVED
  },
  {
    name: 'Название плантации',
    flower: 'Тюльпаны',
    box_type: '2HB',
    address: 'Доставка до Алматы (Сейфуллина 505)',
    price: '37 560 ₸',
    price_dollar: '$ 0.4',
    price_tenge: '198 ₸',
    imageUrl: orderFlowerImage,
    logo: logoImage,
    status: ORDER_STATUS.PLANTATION_DECLINED
  }
]

export const ORDER_ACTIONS: { [key: string]: <T>(data: T) => React.ReactNode } = {
  [ORDER_STATUS.PLANTATION_DECLINED]: function (data) {
    return (
      <Button
        className="text-base font-medium px-[21px] py-[13px] bg-pink-500 normal-case"
        onClick={() => console.log(data)}
      >
        Заказать еще раз
      </Button>
    )
  }
}

export const FLAG_LABELS: { [key: string]: FlagProps } = {
  [ORDER_STATUS.PENDING_RESPONSE]: { label: 'Ожидает ответа', color: 'text-yellow-800', bgColor: 'bg-yellow-100' },
  [ORDER_STATUS.PLANTATION_APPROVED]: { label: 'Принято', color: 'text-green-800', bgColor: 'bg-green-100' },
  [ORDER_STATUS.PLANTATION_DECLINED]: { label: 'Отклонена', color: 'text-red-800', bgColor: 'bg-red-100' }
}
