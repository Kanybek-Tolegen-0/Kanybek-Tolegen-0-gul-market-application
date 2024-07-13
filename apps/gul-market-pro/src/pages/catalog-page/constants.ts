import {
  catalogImage1,
  catalogImage2,
  catalogImage3,
  catalogImage4,
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  tulpanImage1,
  tulpanImage2,
  tulpanImage3,
  tulpanImage4
} from '@design-system/ui'

export interface Catalog {
  name: string
  image: string
  size: { width: string; height: string }
}
export interface Product {
  id: number
  images: string[]
  favorite: boolean
  product: string
  tenge_price: number
  price: number
  species: string
  color: string
  length: string
  box_size: string
  packing: number
  boxes: number
  farm_box: string
  mixed: false
  plantation_id: number
  plantation_name: string
}

export interface DeliveryProps
  extends Pick<
    Product,
    | 'id'
    | 'farm_box'
    | 'box_size'
    | 'mixed'
    | 'species'
    | 'product'
    | 'color'
    | 'length'
    | 'price'
    | 'boxes'
    | 'packing'
    | 'plantation_id'
  > {
  collected: string
}

export interface ProductCard {
  delivery: DeliveryProps
  flowers_left: number
  tenge_price: number
  addresses: {
    city: string
    house: string
    street: string
  }[]
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
  }

  // products: [
  //   {
  //     id: 0,
  //     images: [productImage1, ''],
  //     favorite: false,
  //     name: 'Хризантемы' + ' в две строки',
  //     priceT: 1000,
  //     priceD: 0.2,
  //     variety: '',
  //     color: '',
  //     collected: '',
  //     growth: 0,
  //     box: '',
  //     packing: 0,
  //     left: 100
  //   },
  //   {
  //     id: 1,
  //     images: [productImage2, ''],
  //     favorite: false,
  //     name: 'Розы',
  //     priceT: 1000,
  //     priceD: 0.2,
  //     variety: '',
  //     color: '',
  //     collected: '',
  //     growth: 0,
  //     box: '',
  //     packing: 0,
  //     left: 100
  //   },
  //   {
  //     id: 2,
  //     images: [productImage3, tulpanImage1, tulpanImage2, tulpanImage3, tulpanImage4],
  //     favorite: false,
  //     name: 'Тюльпаны',
  //     priceT: 198,
  //     priceD: 0.4,
  //     variety: 'Deep Purple',
  //     color: 'rgba(235, 79, 79, 1)',
  //     collected: '17.02.2024',
  //     growth: 40,
  //     box: 'QB',
  //     packing: 350,
  //     left: 5
  //   },
  //   {
  //     id: 3,
  //     images: [productImage4, ''],
  //     favorite: false,
  //     name: 'Пальма комнатная',
  //     priceT: 1000,
  //     priceD: 0.2,
  //     variety: '',
  //     color: '',
  //     collected: '',
  //     growth: 0,
  //     box: '',
  //     packing: 0,
  //     left: 100
  //   }
  // ]
}

export default data
