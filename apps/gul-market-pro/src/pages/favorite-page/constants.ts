import {
  fakePlantation,
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  tulpanImage1,
  tulpanImage2,
  tulpanImage3,
  tulpanImage4
} from '@design-system/ui'

export const TABS = [
  {
    label: 'Позиции',
    value: 'positions'
  },
  {
    label: 'Плантации',
    value: 'plantations'
  },
  {
    label: 'Поиски',
    value: 'searches'
  }
]

export interface Data {
  products: Product[]
  plantations: Plant[]
  searches: Search[]
}

export interface Product {
  id: number
  images: string[]
  favorite: boolean
  name: string
  priceT: number
  priceD: number
  variety: string
  color: string
  collected: string
  growth: number
  box: string
  packing: number
  left: number
}
export interface Plant {
  logo: string
  newPlant: boolean
  name: string
  specification: string
  rating: number
}

export interface Search {
  category: string
  filters: {
    type: string
    product: string
    price: {
      min: number
      max: number
    }
    delivery: string[]
  }
}

const data: Data = {
  products: [
    {
      id: 0,
      images: [productImage1, ''],
      favorite: false,
      name: 'Хризантемы' + ' в две строки',
      priceT: 1000,
      priceD: 0.2,
      variety: '',
      color: '',
      collected: '',
      growth: 0,
      box: '',
      packing: 0,
      left: 100
    },
    {
      id: 1,
      images: [productImage2, ''],
      favorite: false,
      name: 'Розы',
      priceT: 1000,
      priceD: 0.2,
      variety: '',
      color: '',
      collected: '',
      growth: 0,
      box: '',
      packing: 0,
      left: 100
    },
    {
      id: 2,
      images: [productImage3, tulpanImage1, tulpanImage2, tulpanImage3, tulpanImage4],
      favorite: false,
      name: 'Тюльпаны',
      priceT: 198,
      priceD: 0.4,
      variety: 'Deep Purple',
      color: 'rgba(235, 79, 79, 1)',
      collected: '17.02.2024',
      growth: 40,
      box: 'QB',
      packing: 350,
      left: 5
    },
    {
      id: 3,
      images: [productImage4, ''],
      favorite: false,
      name: 'Пальма комнатная',
      priceT: 1000,
      priceD: 0.2,
      variety: '',
      color: '',
      collected: '',
      growth: 0,
      box: '',
      packing: 0,
      left: 100
    }
  ],
  plantations: [
    {
      logo: fakePlantation,
      newPlant: true,
      name: 'Название плантации',
      specification: 'Спецификация плантации',
      rating: 4.76
    },
    {
      logo: fakePlantation,
      newPlant: true,
      name: 'Название плантации',
      specification: 'Спецификация плантации',
      rating: 4.76
    },
    {
      logo: fakePlantation,
      newPlant: true,
      name: 'Название плантации',
      specification: 'Спецификация плантации',
      rating: 4.76
    },
    {
      logo: fakePlantation,
      newPlant: true,
      name: 'Название плантации',
      specification: 'Спецификация плантации',
      rating: 4.76
    },
    {
      logo: fakePlantation,
      newPlant: true,
      name: 'Название плантации',
      specification: 'Спецификация плантации',
      rating: 4.76
    },
    {
      logo: fakePlantation,
      newPlant: true,
      name: 'Название плантации',
      specification: 'Спецификация плантации',
      rating: 4.76
    }
  ],
  searches: [
    {
      category: 'Цветы',
      filters: {
        type: 'Алабастий',
        product: 'Розы',
        price: {
          min: 0,
          max: 1000
        },
        delivery: ['За неделю', 'За 2 недели']
      }
    },
    {
      category: 'Цветы',
      filters: {
        type: 'Алабастий',
        product: 'Розы',
        price: {
          min: 0,
          max: 1000
        },
        delivery: ['За неделю', 'За 2 недели', 'За 3 недели']
      }
    }
  ]
}

export default data
