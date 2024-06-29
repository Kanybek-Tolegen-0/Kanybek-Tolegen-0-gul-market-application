import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { Search } from '../../constants'
import { HeartIcon } from '@design-system/ui'

export interface SearchCardProps {
  search: Search
}
export const SearchCard: FC<SearchCardProps> = ({ search }) => {
  const { category, filters } = search
  return (
    <div className="bg-primary w-full py-5 px-6 flex flex-col rounded-base">
      <div className="flex justify-between ">
        <Typography children={category} className="font-medium text-xl text-gray-900 mb-[15px]" />
        <HeartIcon className={'cursor-pointer'} />
      </div>
      <div className="flex gap-3">
        <div className={' bg-gray-500 py-0.5 px-2 rounded-lg font-normal text-sm text-primary'}>{filters.type}</div>
        <div className={' bg-gray-500 py-0.5 px-2 rounded-lg font-normal text-sm text-primary'}>{filters.product}</div>
        <div className={' bg-gray-500 py-0.5 px-2 rounded-lg font-normal text-sm text-primary'}>
          {filters.price.min + ' - ' + filters.price.max + 'Т'}
        </div>
        {filters.delivery.map(del => (
          <div className={' bg-gray-500 py-0.5 px-2 rounded-lg font-normal text-sm text-primary'}>{del}</div>
        ))}
      </div>
    </div>
  )
}
