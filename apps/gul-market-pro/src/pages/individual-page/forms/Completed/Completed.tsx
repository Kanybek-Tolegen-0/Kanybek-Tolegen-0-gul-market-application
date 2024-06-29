import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'

interface ICompletedProps {}

const Completed: FC<ICompletedProps> = props => {
  return (
    <>
      <Typography
        children={'Абаев Аристотель Куандыкович'}
        className={'font-semibold text-xl text-gray-900 text-center '}
      />
      <Typography children={'Алматы'} className={'font-normal text-base text-gray-700 text-center '} />
    </>
  )
}

export default Completed
