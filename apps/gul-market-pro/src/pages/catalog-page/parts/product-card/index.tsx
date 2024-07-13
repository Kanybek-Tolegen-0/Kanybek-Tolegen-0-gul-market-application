import React, { FC, MouseEvent, useState } from 'react'
import { Product } from '../../constants'
import { Typography } from '@material-tailwind/react'
import { fakeShopImage, HeartIcon } from '@design-system/ui'

interface ProductCardProps {
  eachProduct: Product
  onClick?: () => void
}

const ProductCard: FC<ProductCardProps> = ({ eachProduct, onClick }) => {
  const [chosenProduct, setChosenProduct] = React.useState({})
  const [favorite, setFavorite] = useState(false)
  const { product, images, price, tenge_price } = eachProduct

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  const formattedName = formatNumber(tenge_price)

  const handleFavoriteClick = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setFavorite(!favorite)
  }
  return (
    <div
      className="flex flex-col pb-5 w-fit rounded-base shadow-card cursor-pointer"
      onClick={() => onClick && onClick()}
    >
      <div className="relative mb-[15px]">
        <img src={fakeShopImage} alt="product" width="100%" height={263} className="rounded-tr-base rounded-tl-base" />
        <div className={`absolute rounded-lg p-1 bg-primary top-3 right-3 `} onClick={e => handleFavoriteClick(e)}>
          <HeartIcon fill={favorite ? '#EC4899' : '#D1D5DB'} />
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
