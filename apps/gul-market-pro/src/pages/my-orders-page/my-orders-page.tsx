import React, { useEffect, useState } from 'react'
import { Flag, Layout, OrderCard, orderFlowerImage, OrderTabs, ScreenTemplate, useTabs } from '@design-system/ui'
import { boxes, FLAG_LABELS, orders, steps, tabs } from './constants'
import { IOrders, ORDER_STATUS } from './types'
import { formatOrderData } from './helpers'
import { Dialog } from '@material-tailwind/react'
import { RatingModal } from './rating-modal'
import { DeliveryModal } from './delivery-modal'
import { useLoaderData, useSubmit } from 'react-router-dom'

const activeStep = 2

interface IOrder {
  species: string
  box_size: string
  order_id: number
  plantation_name: string
  plantation_id: number
  price_for_one: number
  total_price: number
  tenge_price_for_one: number
  total_tenge_price: number
  delivery_address: string
  status: string
}

const MyOrdersPage = () => {
  const loaderData = useLoaderData() as IOrder[]

  console.log({ loaderData })
  const submit = useSubmit()
  const { activeTab, onTabChange } = useTabs<ORDER_STATUS>({ tabs })

  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false)
  const [ratingModalOpen, setRatingModalOpen] = useState(false)

  const ACTION_HANDLERS = {
    [ORDER_STATUS.IN_DELIVERY]: [
      {
        className: 'text-base font-medium px-[21px] py-[13px] bg-pink-500 normal-case min-w-[210px]',
        label: 'Отследить заказ',
        handler: () => setDeliveryModalOpen(true)
      }
    ],
    [ORDER_STATUS.PLANTATION_DECLINED]: [
      {
        className: 'text-base text-gray-900 font-medium px-[21px] py-[13px] bg-primary normal-case min-w-[210px]',
        label: 'Оценить заказ',
        handler: (data: IOrders) => {
          console.log('Оценить заказ', data)
          setRatingModalOpen(true)
        }
      },
      {
        className: 'text-base font-medium px-[21px] py-[13px] bg-pink-500 normal-case min-w-[210px]',
        label: 'Заказать еще раз',
        handler: (data: IOrders) => {
          console.log('Заказать еще раз', data)
        }
      }
    ],
    [ORDER_STATUS.KARGO_DECLINED]: [
      {
        className: 'text-base font-medium px-[21px] py-[13px] bg-pink-500 normal-case min-w-[210px]',
        label: 'Заказать еще раз',
        handler: (data: IOrders) => {
          console.log('Заказать еще раз', data)
        }
      }
    ]
  }

  return (
    <>
      <Layout isLogged fullHeader>
        <Layout.Content>
          <ScreenTemplate title="Мои заказы">
            <OrderTabs active={activeTab} tabs={tabs} onChange={onTabChange} />
            <div className="flex flex-col gap-[12px] mt-[12px]">
              {loaderData
                ? loaderData.map(
                    ({
                      species,
                      delivery_address,
                      plantation_name,
                      order_id,
                      box_size,
                      tenge_price_for_one,
                      total_tenge_price,
                      status
                    }) => (
                      <OrderCard
                        key={order_id}
                        title={species}
                        name={plantation_name}
                        subTitle={delivery_address}
                        imageUrl={''}
                        logo={''}
                        total_price={String(total_tenge_price)}
                        priceDollar={''}
                        priceTenge={String(tenge_price_for_one)}
                        box_size={box_size}
                        quantity={0}
                        flag={
                          FLAG_LABELS[status] ? (
                            <Flag
                              label={FLAG_LABELS[status]?.label}
                              color={FLAG_LABELS[status]?.color}
                              bgColor={FLAG_LABELS[status]?.bgColor}
                            />
                          ) : null
                        }
                      />
                    )
                  )
                : formatOrderData(
                    orders.filter(({ status }) => status === activeTab),
                    ACTION_HANDLERS
                  ).map(
                    (
                      { title, subTitle, imageUrl, logo, name, flag, price, priceDollar, priceTenge, actions },
                      index
                    ) => (
                      <OrderCard
                        key={index}
                        name={name}
                        title={title}
                        subTitle={subTitle}
                        imageUrl={imageUrl}
                        logo={logo}
                        flag={flag}
                        priceDollar={priceDollar}
                        priceTenge={priceTenge}
                        actions={actions}
                      />
                    )
                  )}
            </div>
          </ScreenTemplate>
        </Layout.Content>
        <Dialog className="!min-w-fit !max-w-fit" open={ratingModalOpen} handler={() => setRatingModalOpen(false)}>
          <RatingModal onClose={() => setDeliveryModalOpen(false)} />
        </Dialog>
        <Dialog className="!min-w-fit !max-w-fit" open={deliveryModalOpen} handler={() => setDeliveryModalOpen(false)}>
          <DeliveryModal
            active={activeStep}
            imageUrl={orderFlowerImage}
            steps={steps}
            address="Доставка до Алматы (Сейфуллина 505)"
            delivery="27 – 31 сентября 2024"
            flowerName={'Тюльпаны'}
            boxes={boxes}
            onClose={() => setDeliveryModalOpen(false)}
          />
        </Dialog>
      </Layout>
    </>
  )
}

export default MyOrdersPage
