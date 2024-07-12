import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import InfoPart from './InfoPart'
import Main from './parts/Main/Main'
import Logo from './parts/Logo/Logo'
import WorkTime from './parts/WorkTime/WorkTime'
import { Shop } from '../../types'
interface ShopsProps {
  shopFormValues: Shop
  shopFormErrors: Shop
}

const Shop: FunctionComponent<ShopsProps> = ({ shopFormValues, shopFormErrors }) => {
  return (
    <div className={'flex flex-col gap-6'}>
      <InfoPart title="Информация о магазине">
        <Main mainValues={shopFormValues} mainErrors={shopFormErrors} />
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
