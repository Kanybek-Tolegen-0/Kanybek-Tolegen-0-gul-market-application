import {
  catalogImage1,
  catalogImage2,
  catalogImage3,
  catalogImage4,
  productImage1,
  productImage2,
  productImage3,
  productImage4
} from '@design-system/ui'

export interface Catalog {
  name: string
  image: string
  size: { width: string; height: string }
}
export interface Product {
  image: string
  favorite: boolean
  name: string
  priceT: number
  priceD: number
}

export interface Data {
  catalogs: {
    catalog1: Catalog
    catalog2: Catalog
    catalog3: Catalog
    catalog4: Catalog
  }
  products: Product[]
}
const data: Data = {
  catalogs: {
    catalog1: { name: 'Цветы', image: catalogImage1, size: { width: '301.64', height: '312.32' } },
    catalog2: { name: 'Зелень', image: catalogImage2, size: { width: '311', height: '208' } },
    catalog3: { name: 'Комнатные растения', image: catalogImage3, size: { width: '165', height: '347' } },
    catalog4: { name: 'Декор', image: catalogImage4, size: { width: '259', height: '259' } }
  },

  products: [
    { image: productImage1, favorite: false, name: 'Хризантемы' + 'в две строки', priceT: 1000, priceD: 0.2 },
    { image: productImage2, favorite: false, name: 'Розы', priceT: 1000, priceD: 0.2 },
    { image: productImage3, favorite: false, name: 'Тюльпаны', priceT: 1000, priceD: 0.2 },
    { image: productImage4, favorite: false, name: 'Пальма комнатная', priceT: 1000, priceD: 0.2 },
    { image: productImage1, favorite: false, name: 'Хризантемы' + 'в две строки', priceT: 1000, priceD: 0.2 },
    { image: productImage2, favorite: false, name: 'Розы', priceT: 1000, priceD: 0.2 },
    { image: productImage3, favorite: false, name: 'Тюльпаны', priceT: 1000, priceD: 0.2 },
    { image: productImage4, favorite: false, name: 'Пальма комнатная', priceT: 1000, priceD: 0.2 },
    { image: productImage1, favorite: false, name: 'Хризантемы' + 'в две строки', priceT: 1000, priceD: 0.2 },
    { image: productImage2, favorite: false, name: 'Розы', priceT: 1000, priceD: 0.2 },
    { image: productImage3, favorite: false, name: 'Тюльпаны', priceT: 1000, priceD: 0.2 },
    { image: productImage4, favorite: false, name: 'Пальма комнатная', priceT: 1000, priceD: 0.2 },
    { image: productImage1, favorite: false, name: 'Хризантемы' + 'в две строки', priceT: 1000, priceD: 0.2 },
    { image: productImage2, favorite: false, name: 'Розы', priceT: 1000, priceD: 0.2 },
    { image: productImage3, favorite: false, name: 'Тюльпаны', priceT: 1000, priceD: 0.2 },
    { image: productImage4, favorite: false, name: 'Пальма комнатная', priceT: 1000, priceD: 0.2 },
    { image: productImage1, favorite: false, name: 'Хризантемы' + 'в две строки', priceT: 1000, priceD: 0.2 },
    { image: productImage2, favorite: false, name: 'Розы', priceT: 1000, priceD: 0.2 },
    { image: productImage3, favorite: false, name: 'Тюльпаны', priceT: 1000, priceD: 0.2 },
    { image: productImage4, favorite: false, name: 'Пальма комнатная', priceT: 1000, priceD: 0.2 }
  ]
}

export default data
