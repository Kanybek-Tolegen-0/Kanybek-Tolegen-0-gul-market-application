import React, { FC, useState } from 'react'
import { Layout, ButtonTabs, ListIcon, RectangleIcon } from '@design-system/ui'
import { Tab, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { FilterSelect } from '../../components'

const data = [
  {
    label: 'Позиции',
    value: 'positions'
  },
  {
    label: 'Плантации',
    value: 'plantations'
  }
]

export const FlowersPage: FC = () => {
  const [activeTab, setActiveTab] = useState(data[0]?.value)

  return (
    <Layout fullHeader isLogged>
      <Layout.Content className="bg-white">
        <Typography className="text-5xl leading-none font-normal my-8">Цветы</Typography>
        <Tabs value={activeTab}>
          <div className="flex justify-between py-[12px]">
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-[400px]"
              indicatorProps={{
                className: 'bg-transparent border-b-2 border-pink-500 shadow-none rounded-none'
              }}
            >
              {data.map(({ label, value }) => (
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
            <div className="flex gap-3 items-center">
              <FilterSelect
                options={[
                  { label: 'one', value: 'one' },
                  { label: 'two', value: 'two' }
                ]}
              />
              <ButtonTabs
                options={[
                  { label: 'Списком', value: 'list', Icon: <ListIcon /> },
                  { label: 'Карточками', value: 'card', Icon: <RectangleIcon /> }
                ]}
              />
            </div>
          </div>
          <TabsBody>{activeTab}</TabsBody>
        </Tabs>
      </Layout.Content>
    </Layout>
  )
}
