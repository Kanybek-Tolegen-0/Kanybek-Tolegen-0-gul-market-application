import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { Catalog } from '../../constants'
interface CatalogCardProps {
  catalog: Catalog
  onClick?: () => void
}

const CatalogCard: FC<CatalogCardProps> = ({ catalog, onClick }) => {
  const { categoryName, image, size, ready } = catalog
  return (
    <div className="flex rounded-base bg-card-gr relative w-[285px] h-[192px]">
      <div className="flex flex-col pt-5 pl-5 pb-5 justify-between w-full">
        <Typography children={categoryName} className="font-bold text-2xl text-gray-800 mb-5" />

        <button
          className={`rounded-full py-0.5 px-3 ${ready ? 'bg-gray-800' : 'bg-gray-500'} font-normal text-sm text-primary w-[98px] h-[24px]`}
          disabled={!ready}
          onClick={() => onClick && onClick()}
        >
          {ready ? 'К каталогу' : 'Скоро'}
        </button>
      </div>
      <div className="h-full flex items-end absolute right-0">
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
