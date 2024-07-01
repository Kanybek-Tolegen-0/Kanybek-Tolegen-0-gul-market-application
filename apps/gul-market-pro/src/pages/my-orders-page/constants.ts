import { ORDER_STATUS } from './types'

export const tabs = [
  { label: 'Ожидает ответа плантации', value: ORDER_STATUS.PENDING_RESPONSE },
  { label: 'Отказано плантацией', value: ORDER_STATUS.PLANTATION_DECLINED },
  { label: 'Подтверждено плантацией', value: ORDER_STATUS.PLANTATION_APPROVED },
  { label: 'Отказано карго', value: ORDER_STATUS.KARGO_DECLINED },
  { label: 'В процессе доставки', value: ORDER_STATUS.IN_DELIVERY }
]
