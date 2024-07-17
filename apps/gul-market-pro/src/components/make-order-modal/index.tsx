import React, { FC, ReactNode, useEffect, useState } from 'react'
import { productImage3 } from '@design-system/ui'
import { Typography } from '@material-tailwind/react'

interface MakeOrderModalProps {
  content?: React.ReactNode
  lookingProduct: {
    product: string
    color: string
    quantity: number
    box_size: string
    totalPrice_tenge: number
    address: string
  }
}

const MakeOrderModal: FC<MakeOrderModalProps> = ({ content, lookingProduct }) => {
  const { product, color, quantity, box_size, totalPrice_tenge, address } = lookingProduct
  return (
    <div className={`flex flex-col p-5 gap-10`}>
      <div className={'p-3 flex gap-5 h-[88px] w-[643px] bg-gray-50 rounded-2xl'}>
        <img src={productImage3} className={'h-16 w-16 rounded-xl '} />
        <div className={'flex flex-col w-full'}>
          <div className={'flex gap-[46px] items-center justify-between'}>
            <Typography children={product + ' ' + color} className={'font-normal text-xl text-gray-800'} />
            <div className={'flex gap-2 items-center'}>
              <Typography
                children={quantity + ' ' + box_size}
                className={'font-normal text-xlittle pt-[14px] pb-[5px]'}
              />
              <Typography children={totalPrice_tenge + ' ₸'} className={'font-semibold text-2xl text-gray-900'} />
            </div>
          </div>
          <Typography children={'Доставка до ' + address} className={'font-normal text-base text-gray-500'} />
        </div>
      </div>
      {content}
    </div>
  )
}

export default MakeOrderModal
