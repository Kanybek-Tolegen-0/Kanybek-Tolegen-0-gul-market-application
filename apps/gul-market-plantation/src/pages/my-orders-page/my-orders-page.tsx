import React, { useState } from 'react'
import { Layout, OrderCard, orderFlowerImage, OrderTabs, ScreenTemplate, useTabs } from '@design-system/ui'
import { tabs } from './constants'
import { ORDER_STATUS } from './types'
import { formatOrderData } from './helpers'
import { Dialog } from '@material-tailwind/react'
import { ApproveModal } from './approve-modal'
import { DeclineModal } from './decline-modal'
import { useLoaderData, useSubmit } from 'react-router-dom'
import { Simulate } from 'react-dom/test-utils'

const MyOrdersPage = () => {
  const submit = useSubmit()
  const data = useLoaderData()
  const { activeTab, onTabChange } = useTabs<ORDER_STATUS>({ tabs })

  const [approveModalOpen, setApproveModalOpen] = useState(false)
  const [declineModalOpen, setDeclineModalOpen] = useState(false)
  const [targetOrderID, SetTargetOrderID] = useState<number | undefined>()
  const ACTION_HANDLERS = {
    [ORDER_STATUS.PENDING]: [
      {
        className: 'text-base text-gray-900 font-medium px-[21px] py-[13px] bg-primary normal-case min-w-[210px]',
        label: 'Отклонить заказ',
        handler: (data: { order_id: number }) => {
          SetTargetOrderID(data.order_id)
          setDeclineModalOpen(true)
        }
      },
      {
        className: 'text-base font-medium px-[21px] py-[13px] bg-pink-500 normal-case min-w-[210px]',
        label: 'Принять заказ',
        handler: (data: { order_id: number }) => {
          submit({ type: 'accept_order', submitData: data }, { method: 'post', encType: 'application/json' })
          setApproveModalOpen(true)
        }
      }
    ]
  }

  const DeclineOrder = (order_id: number | undefined) => {
    if (order_id) {
      submit({ type: 'decline_order', submitData: { order_id } }, { method: 'post', encType: 'application/json' })
      SetTargetOrderID(undefined)
    }
  }
  return (
    <>
      <Layout isLogged fullHeader>
        <Layout.Content>
          <ScreenTemplate title="Мои заказы">
            <OrderTabs active={activeTab} tabs={tabs} onChange={onTabChange} />
            <div className="flex flex-col gap-[12px] mt-[12px]">
              {formatOrderData(
                data?.filter(({ status }) => status === activeTab),
                ACTION_HANDLERS
              )?.map(
                (
                  {
                    title,
                    subTitle,
                    imageUrl,
                    logo,
                    name,
                    flag,
                    total_price,
                    priceDollar,
                    priceTenge,
                    box_size,
                    quantity,
                    actions
                  },
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
                    total_price={total_price}
                    priceDollar={priceDollar}
                    priceTenge={priceTenge}
                    box_size={box_size}
                    quantity={quantity}
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
            onClose={() => {
              setDeclineModalOpen(false)
              DeclineOrder(targetOrderID)
            }}
          />
        </Dialog>
      </Layout>
    </>
  )
}

export default MyOrdersPage
