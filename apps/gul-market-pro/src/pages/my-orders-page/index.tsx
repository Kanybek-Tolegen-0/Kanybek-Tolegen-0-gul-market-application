import React from 'react'
import { Layout, OrderTabs, ScreenTemplate, useTabs } from '@design-system/ui'
import { tabs } from './constants'
import { ORDER_STATUS } from './types'

export const MyOrdersPage = () => {
  const { activeTab, onTabChange } = useTabs<ORDER_STATUS>({ tabs })

  return (
    <Layout isLogged fullHeader>
      <Layout.Content>
        <ScreenTemplate title="Мои заказы">
          <OrderTabs active={activeTab} tabs={tabs} onChange={onTabChange} />
        </ScreenTemplate>
      </Layout.Content>
    </Layout>
  )
}
