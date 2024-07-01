import React from 'react'
import { Layout, OrderCard, OrderTabs, ScreenTemplate, useTabs } from '@design-system/ui'
import { orders, tabs } from './constants'
import { ORDER_STATUS } from './types'
import { formatOrderData } from './helpers'

export const MyOrdersPage = () => {
  const { activeTab, onTabChange } = useTabs<ORDER_STATUS>({ tabs })

  return (
    <Layout isLogged fullHeader>
      <Layout.Content>
        <ScreenTemplate title="Мои заказы">
          <OrderTabs active={activeTab} tabs={tabs} onChange={onTabChange} />
          <div className="flex flex-col gap-[12px] mt-[12px]">
            {formatOrderData(orders).map(
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
    </Layout>
  )
}
