import React, { FC } from 'react'
import {
  HeartIcon,
  Layout,
  productImage1,
  productImage3,
  tulpanImage1,
  tulpanImage2,
  tulpanImage3,
  tulpanImage4
} from '@design-system/ui'
import './style.css'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import data from './constants'
import CatalogContainer from './parts/catalog-container'
import ProductCard from './parts/product-card'

export const CatalogPage: FC = props => {
  const { catalogs, products } = data
  const { catalog1, catalog2, catalog3, catalog4 } = catalogs

  const [open, setOpen] = React.useState(false)
  const [chosenProduct, setChosenProduct] = React.useState({
    image: productImage1,
    favorite: false,
    name: 'Хризантемы' + 'в две строки',
    priceT: 1000,
    priceD: 0.2
  })
  const handleOpen = () => setOpen(!open)

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
          <Typography children="Популярные товары" className="font-normal text-3xl text-gr-800 mb-8" />
          <div className="flex flex-wrap gap-x-5 gap-y-6">
            {products.map((product, idx) => (
              <ProductCard product={product} key={idx} onClick={handleOpen} />
            ))}
          </div>
        </div>
        <Dialog open={open} handler={handleOpen} className="max-w-noneΩ`">
          <div className="flex flex-col p-5 max-w-none Ω`">
            <div className="flex gap-5">
              <div className="flex flex-col gap-5">
                <img src={productImage3} alt="chosen image" className="w-[406px] h-[478px]" />
                <div className="flex gap-3">
                  <img src={productImage3} alt="product image 1" className="w-[69px] h-[69px]" />
                  <img src={tulpanImage1} alt="product image 2" className="w-[69px] h-[69px]" />
                  <img src={tulpanImage2} alt="product image 3" className="w-[69px] h-[69px]" />
                  <img src={tulpanImage3} alt="product image 4" className="w-[69px] h-[69px]" />
                  <img src={tulpanImage4} alt="product image 5" className="w-[69px] h-[69px]" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between">
                    <Typography children="Тюльпаны" />
                    <HeartIcon />
                  </div>
                  <div className="flex">
                    <Typography children={'$' + chosenProduct.priceD} />
                    <Typography children="/" />
                    <Typography children={chosenProduct.priceT + ' ₸'} />
                  </div>
                  <div className="params">
                    <div className="flex">
                      <Typography children="Сорт" />
                      <Typography children="Deep purple" />
                    </div>
                    <div className="flex">
                      <Typography children="Цвет" />
                      <div className="rounded-full bg-red-900" />
                    </div>
                    <div className="flex">
                      <Typography children="Собрано" />
                      <Typography children="17.02.2024" />
                    </div>
                    <div className="flex">
                      <Typography children="Рост" />
                      <Typography children="40" />
                    </div>
                    <div className="flex">
                      <Typography children="Коробка" />
                      <Typography children="QB" />
                    </div>
                    <div className="flex">
                      <Typography children="Пакинг" />
                      <Typography children="350" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Layout.Content>
    </Layout>
  )
}
