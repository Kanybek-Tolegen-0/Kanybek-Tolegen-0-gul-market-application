import React, { FC } from 'react'
import { Layout } from '@design-system/ui'
import './style.css'
import { Typography } from '@material-tailwind/react'
import data, { Product } from './constants'
import CatalogContainer from './parts/catalog-container'
import ProductCard from './parts/product-card'
import ProductModal from '../../components/product-modal'
import Modal from '@design-system/ui/ui/components/modal'

export const CatalogPage: FC = props => {
  const { catalogs, products } = data
  const { catalog1, catalog2, catalog3, catalog4 } = catalogs
  const [chosenProduct, setChosenProduct] = React.useState<Product>()
  const [open, setOpen] = React.useState(false)

  const handleOpen = (product: Product): void => {
    setChosenProduct(product)
    setOpen(!open)
  }

  return (
    <Layout fullHeader isLogged>
      <Layout.Content className="flex flex-col mt-20 gap-16 justify-center items-center !px-0 w-[1200px] mx-auto">
        <div className="flex gap-5 ">
          <CatalogContainer catalog={catalog1} height={'304'} width={'387'} />
          <div className="flex flex-col h-full gap-5">
            <CatalogContainer catalog={catalog2} height={'142'} width={'386'} />
            <CatalogContainer catalog={catalog3} height={'142'} width={'386'} />
          </div>
          <CatalogContainer catalog={catalog4} height={'304'} width={'387'} />
        </div>
        <div>
          <Typography children="Популярные товары" className="font-normal text-3xl text-gray-800 mb-8" />
          <div className="flex flex-wrap gap-x-5 gap-y-6">
            {products.map((product, idx) => (
              <ProductCard product={product} key={idx} onClick={() => handleOpen(product)} />
            ))}
          </div>
        </div>

        <Modal open={open} handleOpen={handleOpen} withArrows={true}>
          <ProductModal product={chosenProduct!} />
        </Modal>
      </Layout.Content>
    </Layout>
  )
}
