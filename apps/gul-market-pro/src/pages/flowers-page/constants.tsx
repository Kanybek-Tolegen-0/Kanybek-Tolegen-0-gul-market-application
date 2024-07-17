import React from 'react'
import { HeartIcon, ListIcon, RectangleIcon } from '@design-system/ui/ui/assets/icons'
import { THeader } from '@design-system/ui/ui/@types'
import FavoriteIcon from '../../components/favorite-icon'

export const TABS = [
  {
    label: 'Позиции',
    value: 'positions'
  },
  {
    label: 'Плантации',
    value: 'plantations'
  }
]

export const BUTTON_TABS_OPTIONS = [
  { label: 'Списком', value: 'list', Icon: <ListIcon /> },
  { label: 'Карточками', value: 'card', Icon: <RectangleIcon /> }
]

export const FILTER_SELECT_OPTIONS = [
  { label: 'one', value: 'one' },
  { label: 'two', value: 'two' }
]

export const FILTER_PART_FLOWER_TYPE_OPTIONS = [
  // { label: 'Розы', value: 'Roses' },
  { label: 'Гортензия', value: 'Hydrangea' }
]

export const FILTER_PART_FLOWER_SORT_OPTIONS = {
  Hydrangea: {
    label: 'Гортензия',
    options: [{ label: 'Гортензия', value: 'Hydrangea' }]
  }
  // Roses: {
  //   label: 'Розы',
  //   options: [
  //     { label: 'Deep blue', value: 'Deep blue' },
  //     { label: 'Deep red', value: 'Deep red' }
  //   ]
  // }
}

export const FILTER_PART_FLOWER_DELIVERY_OPTIONS = [
  { label: 'За неделю', value: 'За неделю' },
  { label: 'За 2 недели', value: 'За 2 недели' },
  { label: 'За 3 недели', value: 'За 3 недели' },
  { label: 'За месяц', value: 'За месяц' },
  { label: 'За 2 месяца и больше', value: 'За 2 месяца и больше' }
]

export const FILTER_PART_FLOWER_BOX_TYPE_OPTIONS = [
  { label: 'QB', value: 'QB' },
  { label: 'HB', value: 'HB' }
]

export const FILTER_PART_COLOR_OPTIONS = [
  {
    label: 'Белый',
    value: 'White',
    color: '#FFFFFF'
  },
  {
    label: 'Голубой',
    value: 'Teal',
    color: '#7BE9E1'
  },
  {
    label: 'Желтый',
    value: 'Yellow',
    color: '#F5EF58'
  },
  {
    label: 'Оранжевый',
    value: 'Orange',
    color: '#FDAC4D'
  },
  {
    label: 'Красный',
    value: 'Red',
    color: '#EB4F4F'
  }
]

export const TABLE_DATA = [
  {
    id: 0,
    plantation: 'Название плантации 1',
    type: 'Роза',
    sort: 'Deep purple',
    color: '#EB4F4F',
    size: '40',
    cost_dollar: 0.25,
    cost_tenge: 153,
    box_type: 'QB',
    paking: 350,
    amount: 3,
    is_like: false
  },
  {
    id: 1,
    plantation: 'Название плантации 2',
    type: 'Роза',
    sort: 'Deep purple',
    color: '#FF5733',
    size: '40',
    cost_dollar: 0.25,
    cost_tenge: 153,
    box_type: 'QB',
    paking: 350,
    amount: 3,
    is_like: true
  },
  {
    id: 2,
    plantation: 'Название плантации 3',
    type: 'Роза',
    sort: 'Deep purple',
    color: '#33FF57',
    size: '40',
    cost_dollar: 0.25,
    cost_tenge: 153,
    box_type: 'QB',
    paking: 350,
    amount: 3,
    is_like: false
  },
  {
    id: 3,
    plantation: 'Название плантации 4',
    type: 'Роза',
    sort: 'Deep purple',
    color: '#3357FF',
    size: '40',
    cost_dollar: 0.25,
    cost_tenge: 153,
    box_type: 'QB',
    paking: 350,
    amount: 3,
    is_like: false
  },
  {
    id: 4,
    plantation: 'Название плантации 5',
    type: 'Роза',
    sort: 'Deep purple',
    color: '#33FF57',
    size: '40',
    cost_dollar: 0.25,
    cost_tenge: 153,
    box_type: 'QB',
    paking: 350,
    amount: 3,
    is_like: true
  }
]

const a = {
  id: 4,
  farm_box: '3 Q',
  box_size: 'HB',
  mixed: false,
  species: 'Hydrangea',
  product: 'DALLAS 60CM N 25ST QUCT',
  color: 'White',
  length: '60cm',
  price: 1,
  boxes: 1,
  packing: 1,
  plantation_id: 1
}

export const TABLE_HEADERS: THeader = [
  { label: 'Плантация', key: 'plantation_name' },
  { label: 'Тип', key: 'species' },
  { label: 'Сорт', key: 'product' },
  {
    label: 'Цвет',
    key: 'color',
    renderCell: color => (
      <div className="flex justify-center">
        <div
          className={`w-[20px] h-[20px] rounded-full ${['#FFF', '#FFFFFF'].includes(String(color)) ? 'border-gray-300 border-[1px]' : ''}`}
          style={{ backgroundColor: String(color) }}
        />
      </div>
    )
  },
  { label: 'Размер', key: 'length' },
  { label: 'Цена, $', key: 'price' },
  // { label: 'Цена, тг', key: 'cost_tenge' },
  { label: 'Коробка', key: 'box_size' },
  { label: 'Пакинг', key: 'packing' },
  { label: 'Кол-во', key: 'boxes' },
  {
    label: '',
    key: 'is_favorite',
    renderCell: (value: { is_Liked: any; delivery_id: number; handleLikeClick; productIndex }) => {
      const { is_Liked, delivery_id, handleLikeClick, productIndex } = value
      return (
        <div className="flex justify-center cursor-pointer">
          <FavoriteIcon
            delivery_id={delivery_id}
            is_Liked={is_Liked}
            handleLikeClick={handleLikeClick}
            productIndex={productIndex}
          />
        </div>
      )
    }
  }
]
