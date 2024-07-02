import React, { FC, useState } from 'react'
import { Layout } from '@design-system/ui'
import { Tab, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { Product, TABS } from './constants'
import ProductCard from '../catalog-page/parts/product-card'
import data from './constants'
import { SearchCard } from './parts/search-card'
import ProductModal from '../../components/product-modal'
import Modal from '@design-system/ui/ui/components/modal'
export const FavoritePage: FC = props => {
  const [activeTab, setActiveTab] = useState(TABS[0]?.value)
  const { products, plantations, searches } = data

  const [chosenProduct, setChosenProduct] = React.useState<Product>()
  const [open, setOpen] = React.useState(false)

  const handleOpen = (product: Product): void => {
    setChosenProduct(product)
    setOpen(!open)
  }
  return (
    <Layout fullHeader isLogged className="text-gray-50 bg-gray-50 h-screen">
      <Layout.Content className="flex flex-col mt-10 gap-10 !px-0 w-[1200px] mx-auto ">
        <Typography children={'Мои избранные'} className="font-normal text-5xl text-gray-900" />
        <Tabs value={activeTab}>
          <div className="flex justify-between py-[12px]">
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-[400px] mb-10 ml-[60px]"
              indicatorProps={{
                className: 'bg-transparent border-b-2 border-pink-500 shadow-none rounded-none'
              }}
            >
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`${activeTab === value ? 'text-pink-500' : ''} pb-[16px]	`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <TabsBody className={`flex ${activeTab === 'searches' && 'flex-col'} gap-4 items-start`}>
            {activeTab === 'positions' ? (
              products.map((product, idx) => (
                <ProductCard product={product} key={idx} onClick={() => handleOpen(product)} />
              ))
            ) : activeTab === 'plantations' ? (
              <>NO ON FIGMA</>
            ) : (
              searches.map(search => <SearchCard search={search} />)
            )}
          </TabsBody>
        </Tabs>
        <Modal open={open} handleOpen={handleOpen}>
          <ProductModal product={chosenProduct!} />
        </Modal>
      </Layout.Content>
    </Layout>
  )
}
