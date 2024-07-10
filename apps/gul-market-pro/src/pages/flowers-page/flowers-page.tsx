import React, { FC, useEffect, useState } from 'react'
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
  ScreenTemplate,
  itemsAdapter,
  FilterSelect
} from '@design-system/ui'
import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'

import {
  BUTTON_TABS_OPTIONS,
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
import { IFilter } from '@design-system/ui/ui/@types'
import ProductCard from '../catalog-page/parts/product-card'
import data, { Product } from '../catalog-page/constants'
import Modal from '@design-system/ui/ui/components/modal'
import ProductModal from '../../components/product-modal'
import { useActionData, useSubmit } from 'react-router-dom'

interface Products {
  filtered_products?: {
    delivery: {
      id: number
      farm_box: string
      box_size: string
      mixed: boolean
      species: string
      product: string
      color: string
      length: string
      price: number
      boxes: number
      packing: number
      plantation_id: number
    }[]
  }
}

const FlowersPage: FC = () => {
  const actionData = useActionData() as Products

  const submit = useSubmit()
  const [filterValues, setFilterValues] = useState<{ [key: string]: number | string[] }>({})

  const [chosenProduct, setChosenProduct] = useState<Product>()
  const [open, setOpen] = useState(false)

  const handleOpen = (product?: Product): void => {
    if (product) setChosenProduct(product)
    setOpen(!open)
  }

  const handleNext = (): void => {
    if (!chosenProduct) return
    const currentIndex = data.products.findIndex(product => product.id === chosenProduct.id)
    const nextIndex = (currentIndex + 1) % data.products.length
    setChosenProduct(data.products[nextIndex])
  }

  const handlePrev = (): void => {
    if (!chosenProduct) return
    const currentIndex = data.products.findIndex(product => product.id === chosenProduct.id)
    const prevIndex = (currentIndex - 1 + data.products.length) % data.products.length
    setChosenProduct(data.products[prevIndex])
  }

  const [activeTab, setActiveTab] = useState(TABS[0]?.value)

  const [filters, setFilters] = useState<IFilter[]>([])

  const [active, setActive] = useState<string | null>(BUTTON_TABS_OPTIONS[0]?.value || null)

  const handleCheckboxChange = ({ label, value: newValue, name }: IFilter) => {
    setFilters(prev => {
      const isExist = prev.some(({ value }) => value === newValue)

      return isExist ? prev.filter(({ value }) => value !== newValue) : [...prev, { label, value: newValue, name }]
    })

    setFilterValues(prev => {
      const arr = { ...prev }

      if (Array.isArray(arr[name])) {
        const isExist = arr[name].some(value => value === newValue)
        arr[name] = isExist ? arr[name].filter(val => val !== newValue) : [...arr[name], newValue as string]
      } else {
        arr[name] = [newValue as string]
      }

      return arr
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

  useEffect(() => {
    submit(filterValues, { method: 'post', encType: 'application/json' })
  }, [filterValues])

  console.log({ filterValues })

  return (
    <Layout fullHeader isLogged>
      <Layout.Content className="bg-white">
        <ScreenTemplate title="Цветы">
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
                {activeTab === 'positions' ? (
                  <ButtonTabs
                    active={String(active)}
                    options={BUTTON_TABS_OPTIONS}
                    onChange={(active: string) => setActive(active)}
                  />
                ) : null}
              </div>
            </div>
            <TabsBody className="flex gap-4 items-start">
              <Filter>
                <Chips
                  filters={filters}
                  onChange={({ value: rmValue, name }) => {
                    setFilters(prev => prev.filter(({ value }) => value !== rmValue))
                    name === 'size'
                      ? setFilterValues(prev => {
                          const next = { ...prev }
                          delete next['size_start']
                          delete next['size_end']

                          return next
                        })
                      : setFilterValues(prev => {
                          const next = { ...prev }
                          delete next[name]
                          return next
                        })
                  }}
                  onReset={() => {
                    setFilters([]), setFilterValues({})
                  }}
                />
                <div className="flex flex-col gap-8 max-w-max">
                  <FilterPart label="Тип цветов" collapsable>
                    <CheckboxGroup
                      name="flower_type"
                      options={FILTER_PART_FLOWER_TYPE_OPTIONS}
                      filters={filters}
                      inputProps={{
                        placeholder: 'Поиск'
                      }}
                      onCheckboxChange={handleCheckboxChange}
                    />
                  </FilterPart>
                  <FilterPart label="Сорт цветов">
                    <CheckboxGroup
                      name="flower_species"
                      options={FILTER_PART_FLOWER_SORT_OPTIONS}
                      filters={filters}
                      inputProps={{ placeholder: 'Поиск' }}
                      onCheckboxChange={handleCheckboxChange}
                    />
                  </FilterPart>
                  {/* <FilterPart className="max-w-min" label="Цена за штуку">
                    <DoubleSlider name="cost" metric={'$'} min={1} max={100} onChange={handleDoubleSliderChange} />
                  </FilterPart> */}

                  <FilterPart label="Размер">
                    <DoubleSlider name="size" metric={'см'} min={20} max={100} onChange={handleDoubleSliderChange} />
                  </FilterPart>
                  {/* <FilterPart label="Доставка">
                    <CheckboxGroup
                      name="delivery"
                      options={FILTER_PART_FLOWER_DELIVERY_OPTIONS}
                      filters={filters}
                      inputProps={{ placeholder: 'Поиск' }}
                      onCheckboxChange={handleCheckboxChange}
                    />
                  </FilterPart> */}
                  <FilterPart label="Тип коробки">
                    <CheckboxGroup
                      name="box_type"
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
              {activeTab === 'positions' ? (
                active === 'list' ? (
                  <Table
                    headers={TABLE_HEADERS}
                    items={itemsAdapter({
                      data: actionData?.filtered_products?.delivery || [],
                      headers: TABLE_HEADERS
                    })}
                  />
                ) : (
                  <div
                    className="gap-x-4 gap-y-4 w-full"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
                  >
                    {data.products.map(product => (
                      <ProductCard key={product.name} product={product} onClick={() => handleOpen(product)} />
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
              <Modal
                open={open}
                handleOpen={handleOpen}
                withArrows={true}
                handleNext={handleNext}
                handlePrev={handlePrev}
              >
                {chosenProduct && <ProductModal product={chosenProduct} />}
              </Modal>
            </TabsBody>
          </Tabs>
        </ScreenTemplate>
      </Layout.Content>
    </Layout>
  )
}

export default FlowersPage
