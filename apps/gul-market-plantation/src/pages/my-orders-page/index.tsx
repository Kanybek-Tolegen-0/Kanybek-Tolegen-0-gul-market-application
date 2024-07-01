import React, { useState } from 'react'
import { Layout, OrderCard, orderFlowerImage, OrderTabs, ScreenTemplate, useTabs } from '@design-system/ui'
import { orders, tabs } from './constants'
import { IOrders, ORDER_STATUS } from './types'
import { formatOrderData } from './helpers'
import { Dialog } from '@material-tailwind/react'
import { ApproveModal } from './approve-modal'
import { DeclineModal } from './decline-modal'

export const MyOrdersPage = () => {
  const { activeTab, onTabChange } = useTabs<ORDER_STATUS>({ tabs })

  const [approveModalOpen, setApproveModalOpen] = useState(false)
  const [declineModalOpen, setDeclineModalOpen] = useState(false)

  const ACTION_HANDLERS = {
    [ORDER_STATUS.PENDING_RESPONSE]: [
      {
        className: 'text-base text-gray-900 font-medium px-[21px] py-[13px] bg-primary normal-case min-w-[210px]',
        label: 'Отклонить заказ',
        handler: (data: IOrders) => {
          setDeclineModalOpen(true)
        }
      },
      {
        className: 'text-base font-medium px-[21px] py-[13px] bg-pink-500 normal-case min-w-[210px]',
        label: 'Принять заказ',
        handler: (data: IOrders) => {
          setApproveModalOpen(true)
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
        <Dialog className="!min-w-fit !max-w-fit" open={approveModalOpen} handler={() => setApproveModalOpen(false)}>
          <ApproveModal
            imageUrl={orderFlowerImage}
            flowerName={'Тюльпаны'}
            address={'Доставка до Алматы (Сейфуллина 505)'}
            price={'$ 3 000'}
            boxType={'2 HB'}
            onClose={() => setApproveModalOpen(false)}
          />
        </Dialog>
        <Dialog className="!min-w-fit !max-w-fit" open={declineModalOpen} handler={() => setDeclineModalOpen(false)}>
          <DeclineModal
            imageUrl={orderFlowerImage}
            flowerName={'Тюльпаны'}
            address={'Доставка до Алматы (Сейфуллина 505)'}
            price={'$ 3 000'}
            boxType="2 HB"
            onClose={() => setDeclineModalOpen(false)}
          />
        </Dialog>
      </Layout>
    </>
  )
}
