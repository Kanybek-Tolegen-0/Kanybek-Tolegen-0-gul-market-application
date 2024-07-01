import React from 'react'
import { FLAG_LABELS, ORDER_ACTIONS } from './constants'
import { IOrders } from './types'
import { Flag } from '@design-system/ui'

export const formatOrderData = (data: IOrders[]) =>
  data.map(({ name, flower, box_type, address, price, price_dollar, price_tenge, imageUrl, logo, status }) => {
    const actions = ORDER_ACTIONS[status]
    return {
      title: `${flower}  ${box_type}`,
      subTitle: address,
      imageUrl,
      logo,
      name,
      flag: FLAG_LABELS[status] ? (
        <Flag
          label={FLAG_LABELS[status]?.label}
          color={FLAG_LABELS[status]?.color}
          bgColor={FLAG_LABELS[status]?.bgColor}
        />
      ) : null,
      price,
      priceDollar: price_dollar,
      priceTenge: price_tenge,
      actions: actions
        ? actions<IOrders>({
            name,
            flower,
            box_type,
            address,
            price,
            price_dollar,
            price_tenge,
            imageUrl,
            logo,
            status
          })
        : null
    }
  })
