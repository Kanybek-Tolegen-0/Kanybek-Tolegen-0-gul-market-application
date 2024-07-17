import React, { FC, useEffect, useState } from 'react'
import { Layout } from '@design-system/ui'
import { Tab, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { Product, TABS } from './constants'
import ProductCard from '../catalog-page/parts/product-card'
import data from './constants'
import { SearchCard } from './parts/search-card'
import { useActionData, useLoaderData, useSubmit } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const FavoritePage: FC = props => {
  const submit = useSubmit()
  const loaderData = useLoaderData()
  const actionData = useActionData()
  const [activeTab, setActiveTab] = useState(TABS[0]?.value)
  const { plantations, searches } = data
  // const [chosenProduct, setChosenProduct] = React.useState<Product>()
  // const [open, setOpen] = React.useState(false)
  // const handleOpen = (product: Product): void => {
  //   setChosenProduct(product)
  //   setOpen(!open)
  // }
  const handleLikeClick = async (e: MouseEvent, liked, delivery_id, productIndex) => {
    e.preventDefault()
    e.stopPropagation()
    if (!liked) {
      submit(
        { type: 'add_favorite', submitData: { delivery_id: delivery_id } },
        { method: 'post', encType: 'application/json' }
      )
    } else {
      submit(
        { type: 'remove_favorite', submitData: { delivery_id: delivery_id } },
        { method: 'delete', encType: 'application/json' }
      )
    }
  }
  useEffect(() => {
    if (actionData) {
      if (actionData.success) {
        toast.success(actionData.message)
      } else {
        toast.error(actionData.message)
      }
    }
  }, [actionData])
  return (
    <Layout fullHeader isLogged className="text-gray-50 bg-gray-50 h-full">
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
              loaderData?.deliveries ? (
                loaderData?.deliveries?.map((product, productIndex) => (
                  <ProductCard
                    key={productIndex}
                    // onClick={() => handleOpen(product)}
                    eachProduct={product}
                    handleLikeClick={handleLikeClick}
                    productIndex={productIndex}
                    allLiked={true}
                  />
                ))
              ) : (
                <div className={'flex items-center justify-center'}>
                  <Typography children={"You don't have any favorites"} className={'text-4xl text-gray-900'} />
                </div>
              )
            ) : activeTab === 'plantations' ? (
              <div className={'flex items-center justify-center'}>
                <Typography children={'No design on figma'} className={'text-4xl text-gray-900'} />
              </div>
            ) : (
              searches.map(search => <SearchCard search={search} />)
            )}
          </TabsBody>
        </Tabs>
        {/*<Modal open={open} handleOpen={handleOpen}>*/}
        {/*  <ProductModal product={chosenProduct!} />*/}
        {/*</Modal>*/}
        <ToastContainer limit={3} autoClose={1500} />
      </Layout.Content>
    </Layout>
  )
}

export default FavoritePage
