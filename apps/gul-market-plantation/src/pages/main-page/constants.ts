import {
  catalogImage1,
  catalogImage2,
  catalogImage3,
  catalogImage4,
  categoryImage1,
  categoryImage2,
  categoryImage3,
  categoryImage4,
  categoryImage5,
  categoryImage6,
  fakePlantation
} from '@design-system/ui'
export interface Catalog {
  categoryName: string
  examples: string[]
  image: string
  size: { width: number; height: number }
}

export interface Category {
  name: string
  firstImage: string
  secondImage: string
  thirdImage: string
}

export interface Plant {
  logo: string
  newPlant: boolean
  name: string
  specification: string
  rating: number
}

export interface PlantationSection {
  title: string
  buttonAdd?: string
  plantations: Plant[]
}

export interface Data {
  catalogs: Catalog[]
  categories: Category[]
  plantationsSections: PlantationSection[]
}

const data: Data = {
  catalogs: [
    {
      categoryName: 'Цветы',
      examples: ['Розы', 'Хризантемы', 'Пионы'],
      image: catalogImage1,
      size: { width: 226, height: 234 }
    },
    {
      categoryName: 'Зелень',
      examples: ['Эквалипт', 'Что-то', 'Что-то'],
      image: catalogImage2,
      size: { width: 244, height: 163 }
    },
    {
      categoryName: 'Комнатные растения',
      examples: ['Пальма комнатная', 'Денежное дерево'],
      image: catalogImage3,
      size: { width: 99, height: 208 }
    },
    {
      categoryName: 'Декор',
      examples: ['Горшки', 'Удобрения', 'Средства по уходу'],
      image: catalogImage4,
      size: { width: 160, height: 160 }
    }
  ],
  categories: [
    { name: 'Голландские розы', firstImage: categoryImage1, secondImage: categoryImage2, thirdImage: categoryImage3 },
    { name: 'Тюльпаны', firstImage: categoryImage4, secondImage: categoryImage5, thirdImage: categoryImage6 },
    { name: 'Голландские розы', firstImage: categoryImage1, secondImage: categoryImage2, thirdImage: categoryImage3 },
    { name: 'Тюльпаны', firstImage: categoryImage4, secondImage: categoryImage5, thirdImage: categoryImage6 },
    { name: 'Голландские розы', firstImage: categoryImage1, secondImage: categoryImage2, thirdImage: categoryImage3 },
    { name: 'Тюльпаны', firstImage: categoryImage4, secondImage: categoryImage5, thirdImage: categoryImage6 },
    { name: 'Голландские розы', firstImage: categoryImage1, secondImage: categoryImage2, thirdImage: categoryImage3 },
    { name: 'Тюльпаны', firstImage: categoryImage4, secondImage: categoryImage5, thirdImage: categoryImage6 }
  ],
  plantationsSections: [
    {
      title: 'Новые плантации',
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
      ]
    },
    {
      title: 'Плантации Эквадора',
      buttonAdd: 'Эквадора',
      plantations: [
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        }
      ]
    },
    {
      title: 'Плантации Аргентины',
      buttonAdd: 'Аргентины',
      plantations: [
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        },
        {
          logo: fakePlantation,
          newPlant: false,
          name: 'Название плантации',
          specification: 'Спецификация плантации',
          rating: 4.76
        }
      ]
    }
  ]
}

export default data
