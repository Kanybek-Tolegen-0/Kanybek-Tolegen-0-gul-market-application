import React, { FC, useEffect, useState } from 'react'
import {
  BrandButton,
  ChevronRightIcon,
  fakePlantation,
  fakeShopImage,
  HeartIcon,
  MinusIcon,
  OptionProps,
  PlusIcon,
  StarIcon
} from '@design-system/ui'
import { Typography } from '@material-tailwind/react'
import { ProductCard } from '../../pages/catalog-page/constants'
import NestedSelect from '@design-system/ui/ui/components/nested-select'
import { api } from '../../api'
import { useLoaderData, useOutletContext, useSearchParams, useSubmit } from 'react-router-dom'
import { ILoaderData } from '../../pages/dashboard/dashboard'

interface ProductModalProps {
  // product: Product
  makeOrder: (
    enough: boolean,
    lookingProduct: {
      product: string
      color: string
      quantity: number
      box_size: string
      totalPrice_tenge: number
      address: string
      plantation_id: any
      delivery_id: any
      price_for_one: any
      tenge_price_for_one: any
      total_price: any
    }
  ) => void
  wallet: number
}

const ProductModal: FC<ProductModalProps> = ({ makeOrder, wallet }) => {
  const [card, setCard] = useState<ProductCard>()
  const [count, setCount] = useState<number>(0)
  const [stock, setStock] = useState<string>('')
  const [chosenImageIndex, setChosenImageIndex] = useState<number>(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const submit = useSubmit()
  const product_id = searchParams.get('chosen_product_id')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/api/show-pro-user-card/${product_id}`)
        setCard(response.data.card)
      } catch (e) {
        console.log(e)
      }
    }

    if (product_id) {
      fetchData()
    }
  }, [product_id])

  const { flowers_left, tenge_price, addresses, delivery } = card || {}
  const { box_size, species, product, color, length, price, packing, collected, id, plantation_id } = delivery || {}
  const totalPrice_tenge = tenge_price * count || 0
  const totalPrice = price * count || 0
  const handleSelectChange = (value: string) => {
    setStock(value)
  }

  const createOption = (val: string, subOptions?: string[]): OptionProps => {
    const newOptions: OptionProps[] = []
    subOptions?.map(option => {
      newOptions.push(createOption(option))
    })
    return {
      label: val,
      value: val,
      options: newOptions
    }
  }

  const options: OptionProps[] = []

  addresses?.map(({ city, street, house }) => {
    const newOption = createOption(city, [street + ' ' + house])
    options.push(newOption)
  })

  const AdditionalOption = (
    <div className="text-center flex flex-col gap-3 items-center">
      <Typography
        children={
          options.length === 0
            ? 'Вы пока не добавили ни один адрес магазина или город проживания'
            : 'Хотите выбрать другой город? Добавьте новый адрес в этом городе'
        }
        className="font-normal text-base text-gray-800"
      />
      <BrandButton className="">Добавить адрес</BrandButton>
    </div>
  )

  const imagesDemo = [fakeShopImage, fakeShopImage, fakeShopImage, fakeShopImage, fakeShopImage]
  return (
    <div className={`flex flex-col p-5 gap-5 ${!card && 'animate-pulse'}`}>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 ">
          <img
            src={imagesDemo[chosenImageIndex]}
            alt="chosen image"
            className="w-[406px] h-[478px] rounded-base object-cover"
          />
          <div className="flex gap-3">
            {imagesDemo.map((image, i) => (
              <img
                src={image}
                alt={`product image ${i + 1}`}
                className={`w-[69px] h-[69px] rounded-lg ${chosenImageIndex === i && 'border border-brand'}`}
                key={i}
                onClick={() => setChosenImageIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[334px]">
          <div className="flex flex-col gap-5 ">
            <div className={`flex justify-between `}>
              <Typography
                children={card && product}
                className={`font-normal text-xl text-gray-800 h-[28px] ${!card && 'bg-gray-100'}`}
              />
              <HeartIcon />
            </div>
            <div className="flex items-end gap-2">
              <Typography children={'$ ' + (card ? price : 0)} className={`font-medium text-4xl text-gray-900 `} />
              <Typography children={'/'} className="font-medium text-2xl text-tip_bold " />
              <Typography
                children={(card ? tenge_price : 0) + ' ₸'}
                className={`font-medium text-2xl text-tip_bold `}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-6">
                <div className="flex gap-2 items-center">
                  <Typography children={'Сорт'} className="font-normal !text-little text-gray-500" />
                  <Typography children={card && species} className="font-normal !text-little text-gray-900" />
                </div>
                <div className="flex gap-2 items-center">
                  <Typography children={'Цвет'} className="font-normal !text-little text-gray-500" />
                  {card && <div className={`rounded-full h-4 w-4`} style={{ backgroundColor: color }} />}
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex gap-2 items-center">
                  <Typography children={'Собрано'} className="font-normal !text-little text-gray-500" />
                  <Typography children={card && collected} className="font-normal !text-little text-gray-900" />
                </div>
                <div className="flex gap-2 items-center">
                  <Typography children={'Рост'} className="font-normal !text-little text-gray-500" />
                  <Typography children={card && length} className="font-normal !text-little text-gray-900" />
                </div>
                <div className="flex gap-2 items-center">
                  <Typography children={'Коробка'} className="font-normal !text-little text-gray-500" />
                  <Typography children={card && box_size} className="font-normal !text-little text-gray-900" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Typography children={'Пакинг'} className="font-normal !text-little text-gray-500" />
                <Typography children={card && packing} className="font-normal !text-little text-gray-900" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <div className="flex gap-[27px] rounded-md border px-[13px] py-[9px] items-center justify-between ">
                <MinusIcon
                  onClick={() => setCount(count === 0 ? count : count - 1)}
                  // className={count > 0 ? 'stroke-gray-700' : 'stroke-gray-400'}
                  className="cursor-pointer"
                />
                <Typography children={count} className="font-medium text-sm text-gray-700 select-none" />
                <PlusIcon
                  onClick={() => setCount(flowers_left && flowers_left - count === 0 ? count : count + 1)}
                  className="cursor-pointer"
                />
              </div>
              <div className={`flex flex-col gap-0.5 `}>
                <Typography
                  children={card && flowers_left && flowers_left - count}
                  className={`font-medium text-sm text-gray-900 select-none ${!card && 'bg-gray-100'}`}
                />
                <Typography children="осталось в наличии" className="font-normal text-xs text-gray-500 select-none" />
              </div>
            </div>
            <Typography
              children={totalPrice_tenge + ' ₸'}
              className={`font-medium text-4xl ${card && totalPrice_tenge > 0 ? 'text-gray-900' : 'text-gray-500'}`}
            />
            <div className="flex flex-col gap-3">
              <NestedSelect options={options} onChange={handleSelectChange} className="w-full max-w-md">
                {AdditionalOption}
              </NestedSelect>

              <BrandButton
                children={count === 0 ? 'Добавьте нужное кол-во коробок' : stock === '' ? 'Выберите адрес' : 'Заказать'}
                className={`h-[50px] font-medium text-base ${count === 0 || stock === '' ? 'opacity-50' : ''}`}
                disabled={count === 0 || stock === ''}
                onClick={() =>
                  makeOrder(wallet > totalPrice_tenge, {
                    product: product!,
                    color: color!,
                    quantity: count,
                    box_size: box_size!,
                    totalPrice_tenge: totalPrice_tenge,
                    address: stock,
                    delivery_id: id,
                    plantation_id,
                    price_for_one: price,
                    tenge_price_for_one: tenge_price,
                    total_price: totalPrice
                  })
                }
              />
              {stock && (
                <>
                  <Typography children="Примерная дата доставки:" className="font-normal text-sm text-gray-900" />
                  <Typography children="25 мая - 30 мая" className="font-medium text-sm text-gray-900" />
                </>
              )}
            </div>
            <div className="flex gap-3 w-full rounded-base p-3 bg-gray-50 items-center">
              <img alt="plantation logo" src={fakePlantation} />
              <div className="flex flex-col gap-2 w-full">
                <Typography children={card && 'Название плантации'} className="font-light text-sm text-gray-900" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Typography children={card && 'Перейти к плантации'} className="font-normal text-xs text-brand" />
                    <ChevronRightIcon />
                  </div>
                  <div className="flex items-center gap-1 h-4">
                    <StarIcon />
                    <Typography children={card && '4.76'} className="font-normal !text-xsm text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-5 py-4 rounded-base bg-gray-100 h-full">
        <Typography children={card && 'Условия доставки'} className="font-normal text-sm text-gray-500" />
        <Typography
          children={card && 'Тут текст условий доставки Тут текст условий доставки'}
          className="font-normal text-sm text-gray-900"
        />
      </div>
    </div>
  )
}

export default ProductModal
