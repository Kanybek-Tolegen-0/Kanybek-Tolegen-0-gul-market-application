import React, { FC, useState } from 'react'
import {
  HeartIcon,
  BrandButton,
  StarIcon,
  fakePlantation,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  OptionProps
} from '@design-system/ui'
import { Typography } from '@material-tailwind/react'
import { Product } from '../../pages/catalog-page/constants'
import NestedSelect from '@design-system/ui/ui/components/nested-select'

interface ProductModalProps {
  product: Product
}

const ProductModal: FC<ProductModalProps> = ({ product }) => {
  const { images, name, priceD, priceT, variety, color, collected, growth, box, packing, left } = product
  const [count, setCount] = useState<number>(0)
  const [stock, setStock] = useState<string>('')
  const [chosenImageIndex, setChosenImageIndex] = useState<number>(0)
  const handleSelectChange = (value: string) => {
    setStock(value)
  }
  const totalPrice = priceT * count
  // const totalLeft = left - count

  const options: OptionProps[] = [
    {
      label: 'Алматы',
      value: 'Алматы',
      options: [
        { label: 'Абая 20', value: 'Абая 20' },
        { label: 'Сатпаева 140', value: 'Сатпаева 140' },
        { label: 'Сейфуллина 550', value: 'Сейфуллина 550' },
        { label: 'Райымбека 100', value: 'Райымбека 100' }
      ]
    },
    {
      label: 'Астана',
      value: 'Астана',
      options: [
        { label: 'Адрес 1', value: 'Адрес 1' },
        { label: 'Адрес 2', value: 'Адрес 2' },
        { label: 'Адрес 3', value: 'Адрес 3' },
        { label: 'Адрес 4', value: 'Адрес 4' }
      ]
    }
  ]

  const AdditionalOption = (
    <div className="text-center flex flex-col gap-3 items-center">
      <Typography
        children={
          options.length === 0
            ? 'Вы пока не добавили ни один адрес магазина или город проживания'
            : 'Хотите выбрать другой город? Добавьте новый адрес в этом городе'
        }
        className="font-normal text-base text-gr-800"
      />
      <BrandButton className="">Добавить адрес</BrandButton>
    </div>
  )
  return (
    <div className="flex flex-col p-5 gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 ">
          <img
            src={images[chosenImageIndex]}
            alt="chosen image"
            className="w-[406px] h-[478px] rounded-base object-cover"
          />
          <div className="flex gap-3">
            {images.map((image, i) => (
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
            <div className="flex justify-between">
              <Typography children={name} className="font-normal text-xl text-gr-800" />
              <HeartIcon />
            </div>
            <div className="flex items-end gap-2">
              <Typography children={'$ ' + priceD} className="font-medium text-4xl text-tip_extra_bold" />
              <Typography children="/" className="font-medium text-2xl text-tip_bold" />
              <Typography children={priceT + ' ₸'} className="font-medium text-2xl text-tip_bold" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-6">
                <div className="flex gap-2 items-center">
                  <Typography children="Сорт" className="font-normal !text-little text-t-disabled" />
                  <Typography children={variety} className="font-normal !text-little text-tip_extra_bold" />
                </div>
                <div className="flex gap-2 items-center">
                  <Typography children="Цвет" className="font-normal !text-little text-t-disabled" />
                  <div className={`rounded-full h-4 w-4`} style={{ backgroundColor: color }} />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex gap-2 items-center">
                  <Typography children="Собрано" className="font-normal !text-little text-t-disabled" />
                  <Typography children={collected} className="font-normal !text-little text-tip_extra_bold" />
                </div>
                <div className="flex gap-2 items-center">
                  <Typography children="Рост" className="font-normal !text-little text-t-disabled" />
                  <Typography children={growth} className="font-normal !text-little text-tip_extra_bold" />
                </div>
                <div className="flex gap-2 items-center">
                  <Typography children="Коробка" className="font-normal !text-little text-t-disabled" />
                  <Typography children={box} className="font-normal !text-little text-tip_extra_bold" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Typography children="Пакинг" className="font-normal !text-little text-t-disabled" />
                <Typography children={packing} className="font-normal !text-little text-tip_extra_bold" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <div className="flex gap-[27px] rounded-md border px-[13px] py-[9px] items-center justify-between ">
                <MinusIcon
                  onClick={() => setCount(count === 0 ? count : count - 1)}
                  // className={count > 0 ? 'stroke-tip' : 'stroke-gr-400'}
                  className="cursor-pointer"
                />
                <Typography children={count} className="font-medium text-sm text-tip select-none" />
                <PlusIcon onClick={() => setCount(left - count === 0 ? count : count + 1)} className="cursor-pointer" />
              </div>
              <div className="flex flex-col gap-0.5 ">
                <Typography children={left - count} className="font-medium text-sm text-tip_extra_bold select-none" />
                <Typography children="осталось в наличии" className="font-normal text-xs text-t-disabled select-none" />
              </div>
            </div>
            <Typography
              children={totalPrice + ' ₸'}
              className={`font-medium text-4xl ${totalPrice > 0 ? 'text-tip_extra_bold' : 'text-t-disabled'}`}
            />
            <div className="flex flex-col gap-3">
              <NestedSelect options={options} onChange={handleSelectChange} className="w-full max-w-md">
                {AdditionalOption}
              </NestedSelect>

              <BrandButton
                children={count === 0 || stock === '' ? 'Добавьте нужное кол-во коробок' : 'Заказать'}
                className={`h-[50px] font-medium text-base ${count === 0 || stock === '' ? 'opacity-50' : ''}`}
                disabled={count === 0 || stock === ''}
              />
              {stock && (
                <>
                  <Typography children="Примерная дата доставки:" className="font-normal text-sm text-tip_extra_bold" />
                  <Typography children="25 мая - 30 мая" className="font-medium text-sm text-tip_extra_bold" />
                </>
              )}
            </div>
            <div className="flex gap-3 w-full rounded-base p-3 bg-body items-center">
              <img alt="plantation logo" src={fakePlantation} />
              <div className="flex flex-col gap-2 w-full">
                <Typography children="Название плантации" className="font-light text-sm text-tip_extra_bold" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Typography children="Перейти к плантации" className="font-normal text-xs text-brand" />
                    <ChevronRightIcon />
                  </div>
                  <div className="flex items-center gap-1 h-4">
                    <StarIcon />
                    <Typography children={'4.76'} className="font-normal !text-xsm text-tip" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-5 py-4 rounded-base bg-gr-100">
        <Typography children="Условия доставки" className="font-normal text-sm text-t-disabled" />
        <Typography
          children="Тут текст условий доставки Тут текст условий доставки"
          className="font-normal text-sm text-tip_extra_bold"
        />
      </div>
    </div>
  )
}

export default ProductModal
