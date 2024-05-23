import React, { FunctionComponent, useState } from 'react'
import InfoPart from './InfoPart'
import Main from './parts/Main/Main'
import Logo from './parts/Logo/Logo'
import WorkTime from './parts/WorkTime/WorkTime'
import { Button, Typography } from '@material-tailwind/react'
import plus from 'assets/svg/plus.svg'
interface ShopsProps {}

const Shop: FunctionComponent<ShopsProps> = props => {
  const [mainComponents, setMainComponents] = useState<number[]>([0]) // Initialize with one Main component

  const addMainComponent = () => {
    setMainComponents(prevComponents => [...prevComponents, prevComponents.length])
  }

  return (
    <div className={'flex flex-col gap-6'}>
      <InfoPart title="Информация о магазине">
        {mainComponents.map((_, index) => (
          <Main key={index} />
        ))}
        <button
          onClick={addMainComponent}
          className="flex items-center gap-2.5 rounded-lg px-4 py-3 bg-gr-100 w-56 h-9"
        >
          <img alt="add subsidiary" src={plus} className="bg-primary rounded-full" />
          <Typography children={'Добавить еще филиал'} className="font-medium text-sm text-bl text-gr-800" />
        </button>
      </InfoPart>
      <InfoPart title="Логотип магазина">
        <Logo />
      </InfoPart>
      <InfoPart title="Часы работы">
        <WorkTime />
      </InfoPart>
    </div>
  )
}

export default Shop
