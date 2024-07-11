import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import InfoPart from './InfoPart'
import Main from './parts/Main/Main'
import Logo from './parts/Logo/Logo'
import WorkTime from './parts/WorkTime/WorkTime'
import { Shop } from '../../types'
interface ShopsProps {
  shopFormValues: Shop
  setFormValues: React.Dispatch<React.SetStateAction<Shop[]>>
  shopFormErrors: Shop
  setFormErrors: React.Dispatch<React.SetStateAction<Shop[]>>
  handleFormChange: (e: ChangeEvent<HTMLInputElement>, shopIndex?: number, addressIndex?: number) => void
  handleError: (
    {
      name,
      errorMessage
    }: {
      name: string
      errorMessage: string
    },
    shopIndex?: number,
    addressIndex?: number
  ) => void
  shopIndex: number
}

const Shop: FunctionComponent<ShopsProps> = ({
  shopFormValues,
  shopFormErrors,
  handleFormChange,
  handleError,
  shopIndex,
  setFormValues,
  setFormErrors
}) => {
  const shopHandleFormChange = (e: ChangeEvent<HTMLInputElement>, addressIndex?: number) => {
    handleFormChange(e, shopIndex, addressIndex)
  }
  const shopHandleError = (
    {
      name,
      errorMessage
    }: {
      name: string
      errorMessage: string
    },
    addressIndex?: number
  ) => {
    console.log('on shop address', addressIndex)

    handleError({ name, errorMessage }, shopIndex, addressIndex)
  }
  return (
    <div className={'flex flex-col gap-6'}>
      <InfoPart title="Информация о магазине">
        <Main
          mainValues={shopFormValues}
          mainErrors={shopFormErrors}
          shopHandleFormChange={shopHandleFormChange}
          shopHandleFormError={shopHandleError}
          setFormValues={setFormValues}
          setFormErrors={setFormErrors}
          shopIndex={shopIndex}
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
