import React, { FC, useState } from 'react'
import {
  Layout,
  ButtonTabs,
  FilterPart,
  Filter,
  CheckboxGroup,
  DoubleSlider,
  ColorSelect,
  Chips
} from '@design-system/ui'
import { Tab, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { FilterSelect } from '../../components'
import {
  BUTTON_TABS_OPTIONS,
  FILTER_PART_COLOR_OPTIONS,
  FILTER_PART_FLOWER_BOX_TYPE_OPTIONS,
  FILTER_PART_FLOWER_DELIVERY_OPTIONS,
  FILTER_PART_FLOWER_SORT_OPTIONS,
  FILTER_PART_FLOWER_TYPE_OPTIONS,
  FILTER_SELECT_OPTIONS,
  TABS
} from './constants'
import { IFilter } from '@design-system/ui/ui/@types'

export const FlowersPage: FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]?.value)

  const [filters, setFilters] = useState<IFilter[]>([])

  const handleCheckboxChange = ({ label, value: newValue, name }: IFilter) => {
    setFilters(prev => {
      const isExist = prev.some(({ value }) => value === newValue)

      return isExist ? prev.filter(({ value }) => value !== newValue) : [...prev, { label, value: newValue, name }]
    })
  }

  const handleDoubleSliderChange = ({
    min,
    max,
    name: checkName,
    metric
  }: {
    min: number
    max: number
    name: string
    metric: string
  }) => {
    setFilters(prev => {
      const isExist = prev.some(({ name }) => name === checkName)

      return isExist
        ? prev.map(pr =>
            pr.name === checkName ? { label: `${metric} ${min}-${max}`, value: { min, max }, name: checkName } : pr
          )
        : [...prev, { label: `${metric} ${min}-${max}`, value: { min, max }, name: checkName }]
    })
  }

  const handleColorSelectChange = ({
    label,
    value,
    name: checkName
  }: {
    label: string
    value: string
    name: string
  }) => {
    setFilters(prev => {
      const isExist = prev.some(({ name }) => name === checkName)

      return isExist
        ? prev.map(pr => (pr.name === checkName ? { label, value, name: checkName } : pr))
        : [...prev, { label, value, name: checkName }]
    })
  }
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
              <Chips
                filters={filters}
                onChange={({ value: rmValue }) => setFilters(prev => prev.filter(({ value }) => value !== rmValue))}
                onReset={() => setFilters([])}
              />
              <div className="flex flex-col gap-8 max-w-max">
                <FilterPart label="Тип цветов" collapsable>
                  <CheckboxGroup
                    name="flower-type"
                    options={FILTER_PART_FLOWER_TYPE_OPTIONS}
                    filters={filters}
                    inputProps={{
                      placeholder: 'Поиск'
                    }}
                    onCheckboxChange={handleCheckboxChange}
                    showButton
                  />
                </FilterPart>
                <FilterPart label="Сорт цветов">
                  <CheckboxGroup
                    name="flower-type"
                    options={FILTER_PART_FLOWER_SORT_OPTIONS}
                    filters={filters}
                    inputProps={{ placeholder: 'Поиск' }}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </FilterPart>
                <FilterPart label="Цена за штуку">
                  <DoubleSlider name="cost" metric={'$'} min={1} max={100} onChange={handleDoubleSliderChange} />
                </FilterPart>

                <FilterPart className="gap-3" label="Размер">
                  <DoubleSlider name="size" metric={'см'} min={30} max={120} onChange={handleDoubleSliderChange} />
                </FilterPart>
                <FilterPart label="Доставка">
                  <CheckboxGroup
                    name="delivery"
                    options={FILTER_PART_FLOWER_DELIVERY_OPTIONS}
                    filters={filters}
                    inputProps={{ placeholder: 'Поиск' }}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </FilterPart>
                <FilterPart label="Тип коробки">
                  <CheckboxGroup
                    name="box-type"
                    filters={filters}
                    options={FILTER_PART_FLOWER_BOX_TYPE_OPTIONS}
                    inputProps={{ placeholder: 'Поиск' }}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </FilterPart>
                <FilterPart label="Цвет" collapsable>
                  <ColorSelect name="color" options={FILTER_PART_COLOR_OPTIONS} onChange={handleColorSelectChange} />
                </FilterPart>
              </div>
            </Filter>
          </TabsBody>
        </Tabs>
      </Layout.Content>
    </Layout>
  )
}
