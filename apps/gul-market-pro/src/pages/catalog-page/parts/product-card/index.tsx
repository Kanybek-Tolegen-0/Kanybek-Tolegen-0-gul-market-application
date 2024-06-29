import React, { FC } from 'react'
import { Product } from '../../constants'
import { Typography } from '@material-tailwind/react'
import { HeartIcon } from '@design-system/ui'

interface ProductCardProps {
  product: Product
  onClick?: () => void
}

const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  const [chosenProduct, setChosenProduct] = React.useState({})

  const { name, images, favorite, priceD, priceT } = product

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  const formattedName = formatNumber(priceT)

  return (
    <div className="flex flex-col pb-5 w-fit rounded-base shadow-card cursor-pointer" onClick={onClick}>
      <div className="relative mb-[15px]">
        <img src={images[0]} alt="product" width="100%" height={263} className="rounded-tr-base rounded-tl-base" />
        <div className="absolute rounded-lg p-1 bg-primary top-3 right-3">
          <HeartIcon />
        </div>
      </div>
      <div className="px-3">
        <Typography children={name} className="font-normal text-base text-gray-900 mb-4" />
        <div className="flex justify-between items-center">
          <Typography children={formattedName + ' ₸'} className="font-normal text-sm text-gray-800" />
          <div className="py-[1px] px-[8px] rounded-lg bg-gray-100">
            <Typography children={'$ ' + priceD} className="font-medium text-xl text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
