import { orderFlowerImage, logoImage, FlagProps } from '@design-system/ui'
import { IOrders, ORDER_STATUS } from './types'

export const tabs = [
  { label: 'Ожидают ответа', value: ORDER_STATUS.PENDING },
  { label: 'Принятые', value: ORDER_STATUS.PLANTATION_APPROVED },
  { label: 'Отказанные', value: ORDER_STATUS.PLANTATION_DECLINED },
  { label: 'Отказано карго', value: ORDER_STATUS.KARGO_DECLINED },
  { label: 'Завершенные', value: ORDER_STATUS.COMPLETED }
]

export const orders: IOrders[] = [
  {
    order_id: 1,
    name: 'Название плантации',
    species: 'Тюльпаны',
    box_size: '2HB',
    delivery_address: 'Доставка до Алматы (Сейфуллина 505)',
    total_price: '37 560 ₸',
    price_dollar: '$ 0.4',
    price_tenge: '198 ₸',
    imageUrl: orderFlowerImage,
    logo: logoImage,
    status: ORDER_STATUS.PENDING
  },
  {
    order_id: 2,
    name: 'Название плантации',
    species: 'Тюльпаны',
    box_size: '2HB',
    delivery_address: 'Доставка до Алматы (Сейфуллина 505)',
    total_price: '37 560 ₸',
    price_dollar: '$ 0.4',
    price_tenge: '198 ₸',
    imageUrl: orderFlowerImage,
    logo: logoImage,
    status: ORDER_STATUS.PENDING
  },
  {
    order_id: 3,
    name: 'Название плантации',
    species: 'Тюльпаны',
    box_size: '2HB',
    delivery_address: 'Доставка до Алматы (Сейфуллина 505)',
    total_price: '37 560 ₸',
    price_dollar: '$ 0.4',
    price_tenge: '198 ₸',
    imageUrl: orderFlowerImage,
    logo: logoImage,
    status: ORDER_STATUS.PLANTATION_APPROVED
  },
  {
    order_id: 4,
    name: 'Название плантации',
    species: 'Тюльпаны',
    box_size: '2HB',
    delivery_address: 'Доставка до Алматы (Сейфуллина 505)',
    total_price: '37 560 ₸',
    price_dollar: '$ 0.4',
    price_tenge: '198 ₸',
    imageUrl: orderFlowerImage,
    logo: logoImage,
    status: ORDER_STATUS.PLANTATION_DECLINED
  }
  // {
  //   order_id: 5,
  //   name: 'Название плантации',
  //   species: 'Тюльпаны',
  //   box_size: '2HB',
  //   delivery_address: 'Доставка до Алматы (Сейфуллина 505)',
  //   total_price: '37 560 ₸',
  //   price_dollar: '$ 0.4',
  //   price_tenge: '198 ₸',
  //   imageUrl: orderFlowerImage,
  //   logo: logoImage
  //   // status: ORDER_STATUS.COMPLETED
  // },
  // {
  //   order_id: 6,
  //   name: 'Название плантации',
  //   species: 'Тюльпаны',
  //   box_size: '2HB',
  //   delivery_address: 'Доставка до Алматы (Сейфуллина 505)',
  //   total_price: '37 560 ₸',
  //   price_dollar: '$ 0.4',
  //   price_tenge: '198 ₸',
  //   imageUrl: orderFlowerImage,
  //   logo: logoImage
  //   // status: ORDER_STATUS.KARGO_DECLINED
  // }
]

export const FLAG_LABELS: { [key: string]: FlagProps } = {
  [ORDER_STATUS.PENDING]: { label: 'Ожидает ответа', color: 'text-yellow-800', bgColor: 'bg-yellow-100' },
  [ORDER_STATUS.PLANTATION_APPROVED]: { label: 'Принято', color: 'text-green-800', bgColor: 'bg-green-100' },
  [ORDER_STATUS.PLANTATION_DECLINED]: { label: 'Отклонена плантацией', color: 'text-red-800', bgColor: 'bg-red-100' },
  [ORDER_STATUS.KARGO_DECLINED]: { label: 'Отклонена карго', color: 'text-red-800', bgColor: 'bg-red-100' },
  [ORDER_STATUS.COMPLETED]: { label: 'Завершен', color: 'text-purple-800', bgColor: 'bg-purple-100' }
}
