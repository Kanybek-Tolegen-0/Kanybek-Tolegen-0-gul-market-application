import React, { FunctionComponent } from 'react'
import { fakeShopImage } from '@design-system/ui'
import { Typography } from '@material-tailwind/react'

interface ShopCreatedProps {}

const ShopCreated: FunctionComponent<ShopCreatedProps> = props => {
  const timeWork = [
    {
      day: 'Понедельник',
      start: '10:00',
      finish: '21:00'
    },
    {
      day: 'Вторник',
      start: '10:00',
      finish: '21:00'
    },
    {
      day: 'Среда',
      start: '10:00',
      finish: '21:00'
    },
    {
      day: 'Четверг',
      start: '10:00',
      finish: '21:00'
    },
    {
      day: 'Пятница',
      start: '10:00',
      finish: '21:00'
    },
    {
      day: 'Суббота',
      start: '10:00',
      finish: '21:00'
    },
    {
      day: 'Воскресенье',
      start: '',
      finish: ''
    }
  ]
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={fakeShopImage} alt={'profile'} className={'h-[150px] w-[150px]'} />
      <div className={'flex flex-col gap-3 items-center'}>
        <Typography children="Название магазина" className="font-semibold text-xl text-tip_extra_bold" />
        <Typography children="Описание магазина" className="font-normal text-base text-tip" />
      </div>
      <div className="w-[378px] flex flex-col gap-1">
        {timeWork.map((time, index) => {
          const { day, start, finish } = time
          return (
            <div key={index} className="flex justify-between">
              <Typography children={day} className="font-normal text-base text-Gr-800" />
              <Typography
                children={start && finish ? start + ' - ' + finish : 'Выходной'}
                className="font-normal text-base text-Gr-900"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShopCreated
