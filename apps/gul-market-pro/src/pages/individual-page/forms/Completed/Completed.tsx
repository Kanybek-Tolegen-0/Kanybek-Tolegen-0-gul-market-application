import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'

interface ICompletedProps {}

const Completed: FC<ICompletedProps> = props => {
  return (
    <>
      <Typography
        children={'Абаев Аристотель Куандыкович'}
        className={'font-semibold text-xl text-tip_extra_bold text-center '}
      />
      <Typography children={'Алматы'} className={'font-normal text-base text-tip text-center '} />
    </>
  )
}

export default Completed
