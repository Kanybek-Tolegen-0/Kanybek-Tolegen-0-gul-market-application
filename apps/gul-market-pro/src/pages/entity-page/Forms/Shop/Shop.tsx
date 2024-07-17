import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import InfoPart from './InfoPart'
import Main from './parts/Main/Main'
import Logo from './parts/Logo/Logo'
import WorkTime from './parts/WorkTime/WorkTime'
import { Shop } from '../../types'
import { FormErrors, FormValues } from '../../entity-page'
interface ShopsProps {
  shopFormValues: Shop
  shopFormErrors?: Shop
  shopIndex?: number
  handleHardValChange: (vals: FormValues, shopIndex: number) => void
  handleHardErrorChange?: (errs: FormErrors, shopIndex: number) => void
}

const Shop: FunctionComponent<ShopsProps> = ({
  shopFormValues,
  shopFormErrors,
  shopIndex,
  handleHardValChange,
  handleHardErrorChange
}) => {
  return (
    <div className={'flex flex-col gap-6'}>
      <InfoPart title="Информация о магазине">
        <Main
          mainValues={shopFormValues}
          mainErrors={shopFormErrors}
          shopIndex={shopIndex}
          handleHardValChange={handleHardValChange}
          handleHardErrorChange={handleHardErrorChange}
        />
      </InfoPart>
      <InfoPart title="Логотип магазина">
        <Logo />
      </InfoPart>
      <InfoPart title="Часы работы">
        <WorkTime
          handleHardErrorChange={handleHardErrorChange}
          handleHardValChange={handleHardValChange}
          shopIndex={shopIndex}
          workTimeErrors={shopFormErrors}
          workTimeValues={shopFormValues}
        />
      </InfoPart>
    </div>
  )
}

export default Shop
