import React, { useState } from 'react'
import { Layout, OrderCard, orderFlowerImage, OrderTabs, ScreenTemplate, useTabs } from '@design-system/ui'
import { boxes, orders, steps, tabs } from './constants'
import { IOrders, ORDER_STATUS } from './types'
import { formatOrderData } from './helpers'
import { Dialog } from '@material-tailwind/react'
import { RatingModal } from './rating-modal'
import { DeliveryModal } from './delivery-modal'

const activeStep = 2

export const MyOrdersPage = () => {
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
              {formatOrderData(
                orders.filter(({ status }) => status === activeTab),
                ACTION_HANDLERS
              ).map(
                ({ title, subTitle, imageUrl, logo, name, flag, price, priceDollar, priceTenge, actions }, index) => (
                  <OrderCard
                    key={index}
                    name={name}
                    title={title}
                    subTitle={subTitle}
                    imageUrl={imageUrl}
                    logo={logo}
                    flag={flag}
                    price={price}
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
