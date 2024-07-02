import React, { FunctionComponent, useState } from 'react'
import InfoPart from './InfoPart'
import Main from './parts/Main/Main'
import Logo from './parts/Logo/Logo'
import WorkTime from './parts/WorkTime/WorkTime'
import { Button, Typography } from '@material-tailwind/react'
import { PlusIcon } from '@design-system/ui'

interface ShopsProps {}

const Shop: FunctionComponent<ShopsProps> = props => {
  return (
    <div className={'flex flex-col gap-6'}>
      <InfoPart title="Информация о магазине">
        <Main />
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
