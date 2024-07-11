import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import InfoPart from './InfoPart'
import Main from './parts/Main/Main'
import Logo from './parts/Logo/Logo'
import WorkTime from './parts/WorkTime/WorkTime'
import { Shop } from '../../types'
interface ShopsProps {
  shopFormValues: Shop
  shopFormErrors: Shop
  handleFormChange: (e: ChangeEvent<HTMLInputElement>, idx?: number, addressIndex?: number) => void
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }) => void
  shopIndex: number
}

const Shop: FunctionComponent<ShopsProps> = ({
  shopFormValues,
  shopFormErrors,
  handleFormChange,
  handleError,
  shopIndex
}) => {
  const shopHandleFormChange = (e: ChangeEvent<HTMLInputElement>, addressIndex?: number) => {
    if (addressIndex) {
      handleFormChange(e, shopIndex, addressIndex)
    } else {
      handleFormChange(e, shopIndex)
    }
  }
  console.log(shopFormValues)
  console.log(shopFormErrors)
  return (
    <div className={'flex flex-col gap-6'}>
      <InfoPart title="Информация о магазине">
        <Main
          mainValues={shopFormValues}
          mainErrors={shopFormErrors}
          shopHandleFormChange={shopHandleFormChange}
          handleError={handleError}
        />
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
