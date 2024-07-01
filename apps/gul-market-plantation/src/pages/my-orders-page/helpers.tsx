import React from 'react'
import { FLAG_LABELS } from './constants'
import { IOrders } from './types'
import { Flag } from '@design-system/ui'
import { Button } from '@material-tailwind/react'

function renderActions<T>(
  handler: {
    label: string
    className: string
    handler: (data: T) => void
  }[],
  data: T
) {
  return (
    <div className="flex gap-[12px]">
      {handler.map(({ label, className, handler }) => (
        <Button key={label} className={className} onClick={() => handler(data)}>
          {label}
        </Button>
      ))}
    </div>
  )
}

export const formatOrderData = (
  data: IOrders[],
  handlers: {
    [key: string]: {
      label: string
      className: string
      handler: (data: any) => void
    }[]
  }
) =>
  data.map(({ name, flower, box_type, address, price, price_dollar, price_tenge, imageUrl, logo, status }) => {
    const handler = handlers && handlers[status]

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
      actions: handler
        ? renderActions<IOrders>(handler, {
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
