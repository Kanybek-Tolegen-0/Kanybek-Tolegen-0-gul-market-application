export enum ORDER_STATUS {
  PENDING_RESPONSE = 'PENDING_RESPONSE',
  PLANTATION_DECLINED = 'PLANTATION_DECLINED',
  PLANTATION_APPROVED = 'PLANTATION_APPROVED',
  KARGO_DECLINED = 'KARGO_DECLINED',
  IN_DELIVERY = 'IN_DELIVERY'
}

export interface IOrders {
  name: string
  flower: string
  box_type: string
  address: string
  price: string
  price_dollar: string
  price_tenge: string
  imageUrl: string
  logo: string
  status: ORDER_STATUS
}
