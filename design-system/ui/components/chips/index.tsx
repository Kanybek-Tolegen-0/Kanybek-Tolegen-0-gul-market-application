import React, { FC } from 'react'
import { Chip } from './chip'
import { IFilter } from '../../@types'
import { CrossIcon, HeartIcon } from '../../assets'
import { Button, Typography } from '@material-tailwind/react'

export const Chips: FC<{
  filters: IFilter[]
  onChange: ({ label, value }: IFilter) => void
  onReset: () => void
}> = ({ filters, onChange, onReset }) => {
  return (
    <div className="flex flex-col gap-4 my-[16px]">
      <div className="flex align-items-center flex-wrap	gap-4">
        {filters.length ? (
          <Button className="flex text-gray-900 bg-gray-100 px-[4px] py-[4px]" onClick={() => onReset()}>
            <CrossIcon />
          </Button>
        ) : null}
        {filters.map(({ label, value, name }, index) => (
          <Chip key={index} value={value} label={label} onChange={() => onChange({ label, value, name })} />
        ))}
      </div>
      {filters.length ? (
        <Button className="flex justify-center items-center gap-3 text-gray-900 bg-gray-100">
          <HeartIcon />
          <Typography className="text-sm leading-none font-normal">Добавить фильтр избранное</Typography>
        </Button>
      ) : null}
    </div>
  )
}
