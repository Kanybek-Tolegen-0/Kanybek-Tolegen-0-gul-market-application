import { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import React from 'react'

interface IStepHeaderProps {
  title?: string
  description?: string
}

export const StepHeader: FC<IStepHeaderProps> = ({ title, description }) => {
  return (
    <div className={'flex flex-col gap-5 items-center w-[534px] text-center mb-6'}>
      <Typography className="font-bold text-3xl " children={title} />
      <Typography className="font-normal text-base" children={description} />
    </div>
  )
}
