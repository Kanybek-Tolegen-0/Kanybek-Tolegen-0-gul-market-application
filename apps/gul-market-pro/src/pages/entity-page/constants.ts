import { FC } from 'react'
import ShopAddress from '../Forms/ShopAddress/ShopAddress'
import Shop from '../Forms/Shop/Shop'
import ShopCreated from '../Forms/ShopCreated/ShopCreated'

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
  { value: '01', helpText: 'Адрес' },
  { value: '02', helpText: 'Информация о магазине' },
  { value: '03', helpText: 'Готово' }
]
const steps_content: IContent[] = [
  {
    title: 'Адрес магазина',
    description: 'Введите адрес вашего основного магазина, если у вас их несколько',
    stepForm: ShopAddress
  },
  {
    title: 'Информация о магазине',
    description:
      'Предоставьте информацию о магазине, чтобы покупателям и поставщикам было понятно с кем они коммуницируют и у кого покупают товар',
    stepForm: Shop
  },
  {
    title: 'Поздравляем',
    description: 'Вы создали аккаунт',
    stepForm: ShopCreated
  }
]

export const configs: IConfigs = { stepper_configs, steps_content }
