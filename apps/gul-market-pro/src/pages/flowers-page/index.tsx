import React, { FC, useState } from 'react'
import {
  Layout,
  ButtonTabs,
  ListIcon,
  RectangleIcon,
  FilterPart,
  Filter,
  CheckboxGroup,
  FilterDoubleSlider
} from '@design-system/ui'
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

const BUTTON_TABS_OPTIONS = [
  { label: 'Списком', value: 'list', Icon: <ListIcon /> },
  { label: 'Карточками', value: 'card', Icon: <RectangleIcon /> }
]

const FILTER_SELECT_OPTIONS = [
  { label: 'one', value: 'one' },
  { label: 'two', value: 'two' }
]

const FILTER_PART_FLOWER_TYPE_OPTIONS = [
  { label: 'Гвоздика', value: 'Гвоздика' },
  { label: 'Розы', value: 'Розы' },
  { label: 'Гортензия', value: 'Гортензия' },
  { label: 'Спрей', value: 'Спрей' }
]

const FILTER_PART_FLOWER_SORT_OPTIONS = {
  carnation: {
    label: 'Гвоздика',
    options: [
      { label: 'Deep blue', value: 'Deep blue' },
      { label: 'Deep red', value: 'Deep red' }
    ]
  },
  rose: {
    label: 'Розы',
    options: [
      { label: 'Deep blue', value: 'Deep blue' },
      { label: 'Deep red', value: 'Deep red' }
    ]
  }
}

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
                    inputProps={{ placeholder: 'Поиск' }}
                    checkboxProps={{ name: 'flower-type' }}
                    onCheckboxChange={({ label, value }) => console.log({ label, value })}
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
                <FilterDoubleSlider
                  label="Цена за штуку"
                  metric={'$'}
                  min={1}
                  max={100}
                  onChange={({ min, max }) => console.log({ min, max })}
                />
                <FilterDoubleSlider
                  label="Размер"
                  metric={'см'}
                  min={30}
                  max={120}
                  onChange={({ min, max }) => console.log({ min, max })}
                />
                <div className="h-[120px]"></div>
              </div>
            </Filter>
          </TabsBody>
        </Tabs>
      </Layout.Content>
    </Layout>
  )
}
