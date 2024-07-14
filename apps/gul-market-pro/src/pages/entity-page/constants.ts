import { FC } from 'react'
import ShopAddress from './Forms/ShopAddress/ShopAddress'
import Shop from './Forms/Shop/Shop'
import ShopCreated from './Forms/ShopCreated/ShopCreated'

export interface IContent {
  title: string
  description: string
  stepForm: FC<any>
  initialFormValues: {} | []
  initialFormErrors: {} | []
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
    stepForm: ShopAddress,
    initialFormValues: { city: '' },
    initialFormErrors: { city: '' }
  },
  {
    title: 'Информация о магазине',
    description:
      'Предоставьте информацию о магазине, чтобы покупателям и поставщикам было понятно с кем они коммуницируют и у кого покупают товар',
    stepForm: Shop,
    initialFormValues: [
      {
        name: '',
        description: '',
        addresses: [''],
        work_schedule: {
          days: {
            Mon: {
              start: '',
              end: ''
            },
            Tue: {
              start: '',
              end: ''
            },
            Wed: {
              start: '',
              end: ''
            },
            Thu: {
              start: '',
              end: ''
            },
            Fri: {
              start: '',
              end: ''
            },
            Sat: {
              start: '',
              end: ''
            }
          }
        }
      }
    ],
    initialFormErrors: [
      {
        name: '',
        description: '',
        addresses: [''],
        work_schedule: {
          days: {
            Mon: {
              start: '',
              end: ''
            },
            Tue: {
              start: '',
              end: ''
            },
            Wed: {
              start: '',
              end: ''
            },
            Thu: {
              start: '',
              end: ''
            },
            Fri: {
              start: '',
              end: ''
            },
            Sat: {
              start: '',
              end: ''
            }
          }
        }
      }
    ]
  },
  {
    title: 'Поздравляем',
    description: 'Вы создали аккаунт',
    stepForm: ShopCreated,
    initialFormValues: {},
    initialFormErrors: {}
  }
]

export const configs: IConfigs = { stepper_configs, steps_content }
