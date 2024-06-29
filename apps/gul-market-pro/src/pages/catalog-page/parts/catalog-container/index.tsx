import React, { FC } from 'react'
import { Catalog } from '../../constants'
import { Typography } from '@material-tailwind/react'

interface CatalogContainerProps {
  catalog: Catalog
  height?: string
  width?: string
}

const CatalogContainer: FC<CatalogContainerProps> = ({ catalog, width, height }) => {
  const { name, image, size } = catalog
  return (
    <div className={`flex rounded-base bg-card-gr relative`} style={{ width: `${width}px`, height: `${height}px` }}>
      <Typography children={name} className="mt-5 ml-5 font-bold text-3xl text-gray-800" />
      <img
        src={image}
        alt="catalog image"
        className={`max-w-none absolute right-0 bottom-0 object-fill rounded-br-base overflow-hidden`}
        style={{ width: `${size.width}px`, height: `${size.height}px` }}
      />
    </div>
  )
}

export default CatalogContainer
