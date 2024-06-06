import React from 'react'
import { ListIcon, RectangleIcon } from '@design-system/ui/ui/assets/icons'

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
