import React, { FunctionComponent } from 'react'
import { fakeShopImage } from '@design-system/ui'
import { Typography } from '@material-tailwind/react'
import { Shop } from '../../types'

interface ShopCreatedProps {
  shop: Shop
}
const days = {
  Mon: 'Понедельник',
  Tue: 'Вторник',
  Wed: 'Среда',
  Thu: 'Четверг',
  Fri: 'Пятница',
  Sat: 'Суббота'
}
const ShopCreated: FunctionComponent<ShopCreatedProps> = ({ shop }) => {
  const { name, description, work_schedule } = shop
  console.log(shop)
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="flex flex-col items-center gap-4">
      <img src={fakeShopImage} alt={'profile'} className={'h-[150px] w-[150px]'} />
      <div className={'flex flex-col gap-3 items-center'}>
        <Typography children={name} className="font-semibold text-xl text-gray-900" />
        <Typography children={description} className="font-normal text-base text-gray-700" />
      </div>
      <div className="w-[378px] flex flex-col gap-1">
        {daysOfWeek.map((day, index) => {
          const { start, end } = work_schedule.days[day]
          return (
            <div key={index} className="flex justify-between">
              <Typography children={days[day]} className="font-normal text-base text-gray-800" />
              <Typography
                children={start && end ? `${start} - ${end}` : 'Выходной'}
                className="font-normal text-base text-gray-900"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShopCreated
