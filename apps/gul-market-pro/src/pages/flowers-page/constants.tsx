import React from 'react'
import { HeartIcon, ListIcon, RectangleIcon } from '@design-system/ui/ui/assets/icons'
import { THeader } from '@design-system/ui/ui/@types'

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
  { label: 'Гвоздика', value: 'Гвоздика' },
  { label: 'Розы', value: 'Розы' },
  { label: 'Гортензия', value: 'Гортензия' },
  { label: 'Спрей', value: 'Спрей' }
]

export const FILTER_PART_FLOWER_SORT_OPTIONS = {
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
    value: '#FFFFFF'
  },
  {
    label: 'Голубой',
    value: '#7BE9E1'
  },
  {
    label: 'Желтый',
    value: '#F5EF58'
  },
  {
    label: 'Оранжевый',
    value: '#FDAC4D'
  },
  {
    label: 'Красный',
    value: '#EB4F4F'
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

export const TABLE_HEADERS: THeader = [
  { label: 'Плантация', key: 'plantation' },
  { label: 'Тип', key: 'type' },
  { label: 'Сорт', key: 'sort' },
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
  { label: 'Размер', key: 'size' },
  { label: 'Цена, $', key: 'cost_dollar' },
  { label: 'Цена, тг', key: 'cost_tenge' },
  { label: 'Коробка', key: 'box_type' },
  { label: 'Пакинг', key: 'paking' },
  { label: 'Кол-во', key: 'amount' },
  {
    label: '',
    key: 'is_like',
    renderCell: isLiked => {
      return (
        <div className="flex justify-center cursor-pointer">
          <HeartIcon color={Boolean(isLiked) ? '#EB4F4F' : 'none'} />
        </div>
      )
    }
  }
]
