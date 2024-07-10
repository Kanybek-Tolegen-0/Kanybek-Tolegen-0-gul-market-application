import ResidentialAddress from './forms/ResidentialAddress/ResidentialAddress'
import FullName from './forms/FullName/FullName'
import Completed from './forms/Completed/Completed'
import { FC } from 'react'

export interface IContent {
  title: string
  description: string
  stepForm: FC<any>
  initialFormValues: {}
  initialFormErrors: {}
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
    stepForm: ResidentialAddress,
    initialFormValues: {
      city: ''
    },
    initialFormErrors: {
      city: ''
    }
  },
  {
    title: 'ФИО',
    description:
      'Введите полностью Ваши ФИО, они будут использованы для оформления заказов и дальнейшего взаимодействия с Вами',
    stepForm: FullName,
    initialFormValues: {
      name: '',
      surname: '',
      patronym: ''
    },
    initialFormErrors: {
      name: '',
      surname: '',
      patronym: ''
    }
  },
  {
    title: 'Поздравляем',
    description: 'Вы создали аккаунт',
    stepForm: Completed,
    initialFormValues: {},
    initialFormErrors: {}
  }
]

export const configs: IConfigs = { stepper_configs, steps_content }
