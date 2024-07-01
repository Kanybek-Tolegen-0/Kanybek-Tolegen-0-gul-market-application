import { orderFlowerImage, logoImage } from '@design-system/ui'
import { IOrders, ORDER_STATUS } from './types'
import { FlagProps } from '@design-system/ui/ui/components/flag'

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
  }
]

export const FLAG_LABELS: { [key: string]: FlagProps } = {
  [ORDER_STATUS.PENDING_RESPONSE]: { label: 'Ожидает ответа', color: 'text-yellow-800', bgColor: 'bg-yellow-100' }
}
