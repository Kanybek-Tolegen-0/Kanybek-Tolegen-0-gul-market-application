import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'
import { Input, Textarea, Typography } from '@material-tailwind/react'
import { PlusIcon, StringInput } from '@design-system/ui'
import { Shop } from '../../../../types'
import * as test from 'node:test'
import { FormErrors, FormValues } from '../../../../entity-page'
import { stringSchema } from '@design-system/ui/ui/components/string-input/stringSchema'
import { ZodError } from 'zod'
import { ErrorText } from '@design-system/ui/ui/components/error-text'

interface MainProps {
  mainValues: Shop
  mainErrors: Shop
  shopIndex: number
  handleHardValChange: (vals: FormValues, shopIndex: number) => void
  handleHardErrorChange: (errs: FormErrors, shopIndex: number) => void
}

const Main: FunctionComponent<MainProps> = ({
  mainValues,
  mainErrors,
  shopIndex,
  handleHardValChange,
  handleHardErrorChange
}) => {
  const testHandleChange = (e: ChangeEvent<HTMLInputElement>, addressIndex?: number) => {
    const { name, value } = e.target
    if (name === 'addresses' && typeof addressIndex !== 'undefined') {
      const currentAddresses = [...mainValues.addresses]
      currentAddresses[addressIndex] = value
      const newValues = { ...mainValues, addresses: currentAddresses }
      handleHardValChange(newValues, shopIndex)
    } else {
      const newValues = { ...mainValues, [name]: value }
      handleHardValChange(newValues, shopIndex)
    }
  }

  const testHandleError = ({ name, errorMessage }: { name: string; errorMessage: string }, addressIndex?: number) => {
    if (name === 'addresses' && typeof addressIndex !== 'undefined') {
      const currentAddresses = [...mainErrors.addresses]
      currentAddresses[addressIndex!] = errorMessage
      const newErrors = { ...mainErrors, addresses: currentAddresses }
      handleHardErrorChange(newErrors, shopIndex)
    } else {
      const newErrors = { ...mainErrors, [name]: errorMessage }
      handleHardErrorChange(newErrors, shopIndex)
    }
  }

  const addMainComponent = () => {
    const newValueAddresses = { ...mainValues, addresses: [...mainValues.addresses, ''] }
    handleHardValChange(newValueAddresses, shopIndex)
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
          value={mainValues.name}
          handleFormChange={testHandleChange}
          error={mainErrors.name}
          handleError={testHandleError}
        />
        {/*<Input*/}
        {/*  name={'name'}*/}
        {/*  value={mainValues.name}*/}
        {/*  className={`w-full !border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold`}*/}
        {/*  crossOrigin=""*/}
        {/*  error={Boolean(mainErrors.name)}*/}
        {/*  labelProps={{*/}
        {/*    className: 'before:content-none after:content-none'*/}
        {/*  }}*/}
        {/*  onChange={testHandleChange}*/}
        {/*  onBlur={e => {*/}
        {/*    const { value } = e.target*/}
        {/*    try {*/}
        {/*      stringSchema.parse(value)*/}
        {/*      testHandleError({ name: 'name', errorMessage: '' })*/}
        {/*    } catch (err) {*/}
        {/*      if (err instanceof ZodError) {*/}
        {/*        const errorMessage = err.errors[0]?.message*/}
        {/*        errorMessage && testHandleError({ name: 'name', errorMessage })*/}
        {/*      }*/}
        {/*    }*/}
        {/*  }}*/}
        {/*/>*/}
        {/*{mainErrors.name ? <ErrorText text={mainErrors.name} /> : null}*/}
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
          name={'description'}
          value={mainValues.description}
          error={Boolean(mainErrors.description)}
          onChange={testHandleChange}
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
            handleFormChange={e => testHandleChange(e, addressIndex)}
            error={mainErrors.addresses[addressIndex]!}
            handleError={testHandleError}
            addressIndex={addressIndex}
          />
          {/*<Input*/}
          {/*  name={'addresses'}*/}
          {/*  value={eachAddress}*/}
          {/*  className={`w-full !border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold`}*/}
          {/*  crossOrigin=""*/}
          {/*  error={Boolean(mainErrors.addresses[addressIndex])}*/}
          {/*  labelProps={{*/}
          {/*    className: 'before:content-none after:content-none'*/}
          {/*  }}*/}
          {/*  onChange={e => testHandleChange(e, addressIndex)}*/}
          {/*  onBlur={e => {*/}
          {/*    const { value } = e.target*/}
          {/*    try {*/}
          {/*      stringSchema.parse(value)*/}
          {/*      testHandleError({ name: 'addresses', errorMessage: '' }, addressIndex)*/}
          {/*    } catch (err) {*/}
          {/*      if (err instanceof ZodError) {*/}
          {/*        const errorMessage = err.errors[0]?.message*/}
          {/*        errorMessage && testHandleError({ name: 'addresses', errorMessage }, addressIndex)*/}
          {/*      }*/}
          {/*    }*/}
          {/*  }}*/}
          {/*/>*/}
          {/*{mainErrors.addresses[addressIndex]! ? <ErrorText text={mainErrors.addresses[addressIndex]!} /> : null}*/}
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
