import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'
import { Input, Textarea, Typography } from '@material-tailwind/react'
import { PlusIcon, StringInput } from '@design-system/ui'
import { Shop } from '../../../../types'
import * as test from 'node:test'

interface MainProps {
  mainValues: Shop
  mainErrors: Shop
}

const Main: FunctionComponent<MainProps> = ({ mainValues, mainErrors }) => {
  const [val, sVal] = useState(mainValues)
  const [err, sErr] = useState(mainErrors)
  const testHandleChange = (e: ChangeEvent<HTMLInputElement>, addressIndex?: number) => {
    const { name, value } = e.target
    if (name === 'addresses') {
      const currentAddresses = val.addresses
      currentAddresses[addressIndex!] = value
      sVal(prev => ({ ...prev, [name]: currentAddresses }))
    } else {
      sVal(prev => ({ ...prev, [name]: value }))
    }
  }
  const testHandleError = ({ name, errorMessage }: { name: string; errorMessage: string }, addressIndex?: number) => {
    if (name === 'addresses') {
      const currentAddresses = err.addresses
      currentAddresses[addressIndex!] = errorMessage
      sErr(prev => ({ ...prev, [name]: currentAddresses }))
    } else {
      sErr(prev => ({ ...prev, [name]: errorMessage }))
    }
  }

  const addMainComponent = () => {
    sVal(prev => ({ ...prev, addresses: [...prev.addresses, ''] }))
    sErr(prev => ({ ...prev, addresses: [...prev.addresses, ''] }))
  }

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
          value={val.name}
          handleFormChange={testHandleChange}
          error={err.name}
          handleError={testHandleError}
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
      {val.addresses.map((eachAddress, addressIndex) => (
        <div key={addressIndex}>
          <Typography children="Адрес филиала" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
          <StringInput
            className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
            labelProps={{
              className: 'before:content-none after:content-none'
            }}
            name="addresses"
            value={eachAddress}
            handleFormChange={e => testHandleChange(e, addressIndex)}
            error={err.addresses[addressIndex]!}
            handleError={testHandleError}
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
