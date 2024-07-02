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
  ColombiaFlagImage,
  EcuadorFlagImage,
  fakePlantation,
  KenyaFlagImage,
  NetherlandFlagImage
} from '@design-system/ui'
export interface Catalog {
  categoryName: string
  image: string
  size: { width: number; height: number }
  ready: boolean
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
      categoryName: 'Эквадор',
      image: EcuadorFlagImage,
      size: { width: 228, height: 228 },
      ready: true
    },
    {
      categoryName: 'Голландия',
      image: NetherlandFlagImage,
      size: { width: 215, height: 215 },
      ready: false
    },
    {
      categoryName: 'Коллумбия',
      image: ColombiaFlagImage,
      size: { width: 179, height: 179 },
      ready: false
    },
    {
      categoryName: 'Кения',
      image: KenyaFlagImage,
      size: { width: 212, height: 212 },
      ready: false
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
