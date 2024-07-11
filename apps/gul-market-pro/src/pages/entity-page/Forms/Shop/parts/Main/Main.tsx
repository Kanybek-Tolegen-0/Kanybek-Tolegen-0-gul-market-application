import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { Input, Textarea, Typography } from '@material-tailwind/react'
import { PlusIcon, StringInput } from '@design-system/ui'
import { Shop } from '../../../../types'

interface MainProps {
  mainValues: Shop
  mainErrors: Shop
  shopHandleFormChange: (e: ChangeEvent<HTMLInputElement>, addressIndex?: number) => void
  shopHandleFormError: (
    {
      name,
      errorMessage
    }: {
      name: string
      errorMessage: string
    },
    addressIndex?: number
  ) => void
  setFormValues: React.Dispatch<React.SetStateAction<Shop[]>>
  setFormErrors: React.Dispatch<React.SetStateAction<Shop[]>>
  shopIndex?: number
}

const Main: FunctionComponent<MainProps> = ({
  mainValues,
  mainErrors,
  shopHandleFormError,
  shopHandleFormChange,
  setFormValues,
  setFormErrors,
  shopIndex
}) => {
  //! addMainComponent Не работает, просим проявить терпение
  const addMainComponent = () => {
    // setFormValues(prev => [...prev, (prev[shopIndex!] = mainValues)])
    // setFormErrors(prev => [...prev, (prev[shopIndex!] = mainErrors)])
  }
  const addressesHandleFormChange = (e: ChangeEvent<HTMLInputElement>, addressIndex: number) => {
    shopHandleFormChange(e, addressIndex)
  }
  const addressesHandleFormError = (
    { name, errorMessage }: { name: string; errorMessage: string },
    addressIndex?: number
  ) => {
    console.log('on main address', addressIndex)
    shopHandleFormError({ name, errorMessage }, addressIndex)
  }
  console.log('Addresses', mainValues.addresses)
  return (
    <>
      <div>
        <Typography children="Название магазина" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <StringInput
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          name="name"
          value={mainValues.name}
          handleFormChange={shopHandleFormChange}
          error={mainErrors.name!}
          handleError={addressesHandleFormError}
        />
      </div>
      <div>
        <Typography children="Описание магазина" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <Textarea
          className="!border-gray-300 focus:!border-[1px] border- rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          placeholder="Расскажите клиентам о вашем магазине"
          resize
        />
      </div>
      {mainValues.addresses.map((eachAddress, addressIndex) => (
        <div key={addressIndex}>
          <Typography children="Адрес филиала" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
          <StringInput
            className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
            labelProps={{
              className: 'before:content-none after:content-none'
            }}
            name="addresses"
            value={eachAddress}
            handleFormChange={e => addressesHandleFormChange(e, addressIndex)}
            error={mainErrors.addresses[addressIndex]!}
            handleError={addressesHandleFormError}
            addressIndex={addressIndex}
          />
        </div>
      ))}
      <button
        onClick={addMainComponent}
        className="flex items-center gap-2.5 rounded-lg px-4 py-3 bg-gray-100 w-56 h-9"
      >
        <PlusIcon className="bg-primary rounded-full" alt="add subsidiary" />
        <Typography children={'Добавить еще филиал'} className="font-medium text-sm text-bl text-gray-800" />
      </button>
    </>
  )
}

export default Main
