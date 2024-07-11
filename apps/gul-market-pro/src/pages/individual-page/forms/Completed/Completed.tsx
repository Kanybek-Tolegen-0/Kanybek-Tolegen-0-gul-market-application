import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { useSearchParams } from 'react-router-dom'

interface ICompletedProps {}

const Completed: FC<ICompletedProps> = props => {
  const [searchParams, setSearchParams] = useSearchParams()
  const city = searchParams.get('city')
  const name = searchParams.get('name')
  const surname = searchParams.get('surname')
  const patronym = searchParams.get('patronym')
  return (
    <>
      <Typography
        children={surname + ' ' + name + ' ' + patronym}
        className={'font-semibold text-xl text-gray-900 text-center '}
      />
      <Typography children={city} className={'font-normal text-base text-gray-700 text-center '} />
    </>
  )
}

export default Completed
