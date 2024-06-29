import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { Catalog } from '../../constants'
interface CatalogCardProps {
  catalog: Catalog
  onClick?: () => void
}

const CatalogCard: FC<CatalogCardProps> = ({ catalog, onClick }) => {
  const { categoryName, examples, image, size } = catalog
  return (
    <div className="flex rounded-base bg-card-gr relative w-fit h-[192px]" onClick={() => onClick && onClick()}>
      <div className="flex flex-col pt-5 pl-5 pb-5">
        <Typography children={categoryName} className="font-bold text-2xl text-gray-800 mb-5" />
        <div className="flex flex-col gap-1 mb-3">
          {examples.map((example, index) => (
            <Typography
              children={example}
              key={index}
              className="font-normal text-sm text-gray-700 whitespace-nowrap"
            />
          ))}
        </div>
        <button className="rounded-full py-0.5 px-3 bg-gray-800 font-normal text-sm text-primary w-[98px] h-[24px]">
          К каталогу
        </button>
      </div>
      <div className="relative h-full flex items-end">
        <img
          src={image}
          alt="Catalog"
          className={`max-w-none rounded-br-base w-[${size.width}px] h-[${size.height}px]`}
        />
      </div>
    </div>
  )
}

export default CatalogCard
