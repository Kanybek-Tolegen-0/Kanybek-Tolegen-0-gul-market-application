import React, { useState } from 'react'
import { Layout, OrderCard, OrderTabs, ScreenTemplate, useTabs } from '@design-system/ui'
import { orders, tabs } from './constants'
import { IOrders, ORDER_STATUS } from './types'
import { formatOrderData } from './helpers'
import { Dialog } from '@material-tailwind/react'
import { RatingModal } from './rating-modal'

export const MyOrdersPage = () => {
  const { activeTab, onTabChange } = useTabs<ORDER_STATUS>({ tabs })
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false)
  console.log({ deliveryModalOpen })

  const ACTION_HANDLERS = {
    [ORDER_STATUS.IN_DELIVERY]: [
      {
        className: 'text-base font-medium px-[21px] py-[13px] bg-pink-500 normal-case min-w-[210px]',
        label: 'Отследить заказ',
        handler: () => console.log('work')
      }
    ],
    [ORDER_STATUS.PLANTATION_DECLINED]: [
      {
        className: 'text-base text-gr-900 font-medium px-[21px] py-[13px] bg-primary normal-case min-w-[210px]',
        label: 'Оценить заказ',
        handler: (data: IOrders) => {
          console.log('Оценить заказ', data)
          setDeliveryModalOpen(true)
        }
      },
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
        <Dialog className="!min-w-fit !max-w-fit" open={deliveryModalOpen} handler={() => setDeliveryModalOpen(false)}>
          <RatingModal onClose={() => setDeliveryModalOpen(false)} />
        </Dialog>
      </Layout>
    </>
  )
}
