import React, { FC, useEffect, useState } from 'react'

interface ProductModalProps {
  makeOrder: (
    plantation_id: any,
    delivery_id: any,
    delivery_address: any,
    quantity: any,
    price_for_one: any,
    tenge_price_for_one: any,
    total_price: any,
    total_tenge_price: any
  ) => void
}

const ProductModal: FC<ProductModalProps> = ({ makeOrder }) => {
  return <div className={`flex flex-col p-5 gap-5  w-[800px] h-[770px]`}></div>
}

export default ProductModal
