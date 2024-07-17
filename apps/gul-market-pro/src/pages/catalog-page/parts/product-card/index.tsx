import React, { FC, MouseEvent, useState } from 'react'
import { Product } from '../../constants'
import { Typography } from '@material-tailwind/react'
import { fakeShopImage, HeartIcon, hydrangeaImage, productImage1, productImage2 } from '@design-system/ui'
import FavoriteIcon from '../../../../components/favorite-icon'

interface ProductCardProps {
  eachProduct: Product
  onClick?: () => void
  handleLikeClick: (e: MouseEvent, liked, delivery_id, productIndex) => void
  productIndex: number
  allLiked?: boolean
}

const ProductCard: FC<ProductCardProps> = ({
  eachProduct,
  onClick,
  handleLikeClick,
  productIndex,
  allLiked = false
}) => {
  const { product, images, price, tenge_price, id, is_favorite, species } = eachProduct || {}
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  const formattedName = formatNumber(tenge_price)

  return (
    <div
      className="flex flex-col pb-5 w-fit rounded-base shadow-card cursor-pointer"
      onClick={() => onClick && onClick()}
    >
      <div className="relative mb-[15px]">
        <img
          src={species === 'Roses' ? productImage2 : species === 'Hydrangea' ? hydrangeaImage : fakeShopImage}
          alt="product"
          className="rounded-tr-base rounded-tl-base w-[285px] h-[263px]"
        />
        <div className={`absolute rounded-lg p-1 bg-primary top-3 right-3 `}>
          <FavoriteIcon
            is_Liked={allLiked ? true : is_favorite}
            delivery_id={id}
            handleLikeClick={handleLikeClick}
            productIndex={productIndex}
          />
        </div>
      </div>
      <div className="px-3">
        <Typography children={product} className="font-normal text-base text-gray-900 mb-4" />
        <div className="flex justify-between items-center">
          <Typography children={formattedName + ' ₸'} className="font-normal text-sm text-gray-800" />
          <div className="py-[1px] px-[8px] rounded-lg bg-gray-100">
            <Typography children={'$ ' + price} className="font-medium text-xl text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
