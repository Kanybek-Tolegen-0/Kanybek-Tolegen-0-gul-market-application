export enum ORDER_STATUS {
  PENDING = 'pending',
  PLANTATION_DECLINED = 'plantation_declined',
  PLANTATION_APPROVED = 'plantation_approved',
  KARGO_DECLINED = 'KARGO_DECLINED',
  COMPLETED = 'COMPLETED'
}

export interface IOrders {
  order_id: number
  name: string
  species: string
  box_size: string
  delivery_address: string
  total_price: string
  price_dollar: string
  price_tenge: string
  imageUrl: string
  logo: string
  quantity: number
  status: ORDER_STATUS
}

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]
