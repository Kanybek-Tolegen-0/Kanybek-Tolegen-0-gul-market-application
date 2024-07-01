import { FC } from 'react'
import PlantationAddress from './Forms/PlantationAddress/PlantationAddress'
import Plantation from './Forms/Plantation/Plantation'
import PlantationCreated from './Forms/PlantationCreated/PlantationCreated'

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
    stepForm: PlantationAddress
  },
  {
    title: 'Информация о плантации',
    description: 'Предоставьте информацию о плантации, чтобы покупатели могли найти вас и ваши товары',
    stepForm: Plantation
  },
  {
    title: 'Поздравляем',
    description: 'Вы создали аккаунт',
    stepForm: PlantationCreated
  }
]

export const configs: IConfigs = { stepper_configs, steps_content }
