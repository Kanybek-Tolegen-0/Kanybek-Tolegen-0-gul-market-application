import ResidentialAddress from '../Forms/ResidentialAddress/ResidentialAddress'
import FullName from '../Forms/FullName/FullName'
import Completed from '../Forms/Completed/Completed'
import { FC } from 'react'

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
  { value: '01', helpText: 'Город проживания' },
  { value: '02', helpText: 'ФИО' },
  { value: '03', helpText: 'Готово' }
]
const steps_content: IContent[] = [
  {
    title: 'Город проживания',
    description: 'Введите адрес, чтобы получать уведомления о лучших предложениях в Вашем городе',
    stepForm: ResidentialAddress
  },
  {
    title: 'ФИО',
    description:
      'Введите полностью Ваши ФИО, они будут использованы для оформления заказов и дальнейшего взаимодействия с Вами',
    stepForm: FullName
  },
  {
    title: 'Поздравляем',
    description: 'Вы создали аккаунт',
    stepForm: Completed
  }
]

export const configs: IConfigs = { stepper_configs, steps_content }
