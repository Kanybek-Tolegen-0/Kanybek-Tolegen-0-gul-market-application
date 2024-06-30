import { FC } from 'react'
import ShopAddress from './Forms/ShopAddress/ShopAddress'
import Shop from './Forms/Shop/Shop'
import ShopCreated from './Forms/ShopCreated/ShopCreated'

export interface IContent {
  title: string
  description: string
  stepForm: FC
}

export interface IStep {
  value: string
  helpText: string
}

export interface IConfigs {
  steps_content: IContent[]
  stepper_configs: IStep[]
}

const stepper_configs: IStep[] = [
  { value: '01', helpText: 'Локация плантации' },
  { value: '02', helpText: 'Информация о плантации' },
  { value: '03', helpText: 'Готово' }
]
const steps_content: IContent[] = [
  {
    title: 'Город проживания',
    description: 'Введите адрес, чтобы получать уведомления о лучших предложениях в Вашем городе.',
    stepForm: ShopAddress
  },
  {
    title: 'Информация о плантации',
    description: 'Предоставьте информацию о плантации, чтобы покупатели могли найти вас и ваши товары',
    stepForm: Shop
  },
  {
    title: 'Поздравляем',
    description: 'Вы создали аккаунт',
    stepForm: ShopCreated
  }
]

export const configs: IConfigs = { stepper_configs, steps_content }
