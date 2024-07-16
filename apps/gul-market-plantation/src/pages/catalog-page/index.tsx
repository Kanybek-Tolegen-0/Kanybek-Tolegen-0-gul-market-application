import React, { FC, useState } from 'react'
import {
  Layout,
  ButtonTabs,
  FilterPart,
  Filter,
  CheckboxGroup,
  DoubleSlider,
  ColorSelect,
  Chips,
  Table,
  MiniCard,
  plantationImage,
  itemsAdapter
} from '@design-system/ui'
import { Tabs, TabsBody, Typography } from '@material-tailwind/react'

import {
  BUTTON_TABS_OPTIONS,
  data,
  FILTER_PART_COLOR_OPTIONS,
  FILTER_PART_FLOWER_BOX_TYPE_OPTIONS,
  FILTER_PART_FLOWER_DELIVERY_OPTIONS,
  FILTER_PART_FLOWER_SORT_OPTIONS,
  FILTER_PART_FLOWER_TYPE_OPTIONS,
  FILTER_SELECT_OPTIONS,
  TABLE_DATA,
  TABLE_HEADERS,
  TABS
} from './constants'

import { ProductCard } from './product-card'
import { IFilter } from '@design-system/ui/ui/@types'

export const CatalogPage: FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]?.value)

  const [filters, setFilters] = useState<IFilter[]>([])
  const [filterValues, setFilterValues] = useState<{ [key: string]: number | string[] }>({
    size_start: 20,
    size_end: 100
  })

  const [active, setActive] = useState<string | null>(BUTTON_TABS_OPTIONS[0]?.value || null)

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

    setFilterValues(prev => {
      const value = prev[checkName]
      const obj = { ...prev }

      if (value) {
        delete obj[`${checkName}_start`]
        delete obj[`${checkName}_end`]
      } else {
        obj[`${checkName}_start`] = min
        obj[`${checkName}_end`] = max
      }

      return obj
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

    setFilterValues(prev => {
      const arr = { ...prev }

      if (Array.isArray(arr[checkName])) {
        const isExist = arr[checkName].some(val => val === value)
        arr[checkName] = isExist ? arr[checkName].filter(val => val !== value) : [...arr[checkName], value as string]
      } else {
        arr[checkName] = [value as string]
      }

      return arr
    })
  }

  return (
    <Layout fullHeader isLogged>
      <Layout.Content className="bg-white">
        <Tabs value={activeTab}>
          <div className="flex justify-between items-start py-[12px]">
            <Typography className="text-5xl leading-none font-normal">Мой каталог</Typography>
            <div className="flex gap-3">
              <ButtonTabs
                active={String(active)}
                options={BUTTON_TABS_OPTIONS}
                onChange={(active: string) => setActive(active)}
              />
            </div>
          </div>
          <TabsBody className="flex gap-4 items-start">
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
                <FilterPart className="max-w-min" label="Цена за штуку">
                  <DoubleSlider name="cost" metric={'$'} min={1} max={100} onChange={handleDoubleSliderChange} />
                </FilterPart>

                <FilterPart label="Размер">
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
                  <ColorSelect
                    selectedColors={Array.isArray(filterValues?.color) ? filterValues?.color : []}
                    name="color"
                    options={FILTER_PART_COLOR_OPTIONS}
                    onChange={handleColorSelectChange}
                  />
                </FilterPart>
              </div>
            </Filter>
            {activeTab === 'positions' ? (
              active === 'list' ? (
                <Table
                  headers={TABLE_HEADERS}
                  items={itemsAdapter({ data: TABLE_DATA, headers: TABLE_HEADERS })}
                  normalItems={TABLE_DATA}
                />
              ) : (
                <div
                  className="gap-x-4 gap-y-4 w-full"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
                >
                  {data.products.map(product => (
                    <ProductCard key={product.name} product={product} />
                  ))}
                </div>
              )
            ) : (
              <div className="grid grid-cols-3 gap-x-4 gap-y-4 w-full">
                <MiniCard label="Название плантации" imgSrc={plantationImage} rating={4.76} />
                <MiniCard label="Название плантации" imgSrc={plantationImage} rating={4.76} showNewFlag />
                <MiniCard label="Название плантации" imgSrc={plantationImage} rating={4.76} />
                <MiniCard label="Название плантации" imgSrc={plantationImage} rating={4.76} />
                <MiniCard label="Название плантации" imgSrc={plantationImage} rating={4.76} showNewFlag />
                <MiniCard label="Название плантации" imgSrc={plantationImage} rating={4.76} />
                <MiniCard label="Название плантации" imgSrc={plantationImage} rating={4.76} showNewFlag />
              </div>
            )}
          </TabsBody>
        </Tabs>
      </Layout.Content>
    </Layout>
  )
}
