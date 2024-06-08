import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { Category } from '../../constants'

interface CategoryCardProps {
  category: Category
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const { name, firstImage, secondImage, thirdImage } = category
  return (
    <div className="flex flex-col">
      <div className="flex gap-[7px] mb-4">
        <img src={firstImage} alt="first image" className="rounded-bl-base rounded-tl-base" />
        <div className="flex flex-col gap-2">
          <img src={secondImage} alt="second image" className="rounded-tr-base" />
          <img src={thirdImage} alt="third image" className="rounded-br-base" />
        </div>
      </div>
      <Typography children={name} className="font-normal text-xl text-black" />
    </div>
  )
}

export default CategoryCard
