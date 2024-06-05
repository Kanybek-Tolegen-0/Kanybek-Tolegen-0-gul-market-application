import React, { FC, useState } from 'react'
import { Layout, ButtonTabs, FilterPart, Filter, CheckboxGroup, FilterDoubleSlider } from '@design-system/ui'
import { Tab, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { FilterSelect } from '../../components'
import {
  BUTTON_TABS_OPTIONS,
  FILTER_PART_FLOWER_BOX_TYPE_OPTIONS,
  FILTER_PART_FLOWER_DELIVERY_OPTIONS,
  FILTER_PART_FLOWER_SORT_OPTIONS,
  FILTER_PART_FLOWER_TYPE_OPTIONS,
  FILTER_SELECT_OPTIONS,
  TABS
} from './constants'

export const FlowersPage: FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]?.value)
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
            <div className="flex gap-3 items-center">
              <FilterSelect options={FILTER_SELECT_OPTIONS} />
              <ButtonTabs options={BUTTON_TABS_OPTIONS} />
            </div>
          </div>
          <TabsBody>
            <Filter>
              <div className="flex flex-col gap-8">
                <FilterPart label="Тип цветов">
                  <CheckboxGroup
                    options={FILTER_PART_FLOWER_TYPE_OPTIONS}
                    inputProps={{
                      placeholder: 'Поиск'
                    }}
                    checkboxProps={{ name: 'flower-type' }}
                    onCheckboxChange={({ label, value }) => console.log({ label, value })}
                    showButton
                  />
                </FilterPart>
                <FilterPart label="Сорт цветов">
                  <CheckboxGroup
                    options={FILTER_PART_FLOWER_SORT_OPTIONS}
                    inputProps={{ placeholder: 'Поиск' }}
                    checkboxProps={{ name: 'flower-type' }}
                    onCheckboxChange={({ label, value }) => console.log({ label, value })}
                  />
                </FilterPart>
                <FilterPart label="Цена за штуку">
                  <FilterDoubleSlider
                    metric={'$'}
                    min={1}
                    max={100}
                    onChange={({ min, max }) => console.log({ min, max })}
                  />
                </FilterPart>

                <FilterPart label="Размер">
                  <FilterDoubleSlider
                    metric={'см'}
                    min={30}
                    max={120}
                    onChange={({ min, max }) => console.log({ min, max })}
                  />
                </FilterPart>
                <FilterPart label="Доставка">
                  <CheckboxGroup
                    options={FILTER_PART_FLOWER_DELIVERY_OPTIONS}
                    inputProps={{ placeholder: 'Поиск' }}
                    checkboxProps={{ name: 'delivery' }}
                    onCheckboxChange={({ label, value }) => console.log({ label, value })}
                  />
                </FilterPart>
                <FilterPart label="Тип коробки">
                  <CheckboxGroup
                    options={FILTER_PART_FLOWER_BOX_TYPE_OPTIONS}
                    inputProps={{ placeholder: 'Поиск' }}
                    checkboxProps={{ name: 'delivery' }}
                    onCheckboxChange={({ label, value }) => console.log({ label, value })}
                  />
                </FilterPart>
              </div>
            </Filter>
          </TabsBody>
        </Tabs>
      </Layout.Content>
    </Layout>
  )
}
