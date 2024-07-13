import React, { ChangeEvent, FC, useState } from 'react'
import { Input, Typography } from '@material-tailwind/react'
import { Map } from '../../../../components'
import { StringInput } from '@design-system/ui'

interface IShopAddressProps {}

const ShopAddress: FC<{
  formValues: { [key: string]: string }
  formErrors: { [key: string]: string }
  handleFormChange: (e: ChangeEvent<HTMLInputElement>, idx?: number) => void
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }) => void
}> = ({ formValues, formErrors, handleError, handleFormChange }) => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedAddress, setSelectedAddress] = useState<string>('')
  async function fetchSuggestions(query: string) {
    try {
      const response = await fetch(
        `https://catalog.api.2gis.com/3.0/suggests?q=${query}&key=785a6d32-f76c-4256-b9a3-334bf5c074fb`
      )
      const data = await response.json()
      if (data.result && data.result.items.length > 0) {
        setSuggestions(data.result.items.map((item: any) => item.full_name))
      } else {
        setSuggestions([])
      }
    } catch (error) {
      console.error('Ошибка при получении подсказок:', error)
      setSuggestions([])
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFormChange(e)
    setSelectedAddress('')
    fetchSuggestions(e.target.value)
  }

  const handleAddressSelect = (address: string) => {
    handleFormChange({ target: { name: 'city', value: address } } as ChangeEvent<HTMLInputElement>)
    setSuggestions([])
    setSelectedAddress(address)
  }

  const setAddress = (address: string) => {
    handleFormChange({ target: { name: 'city', value: address } } as ChangeEvent<HTMLInputElement>)
  }
  return (
    <>
      <div>
        <Typography children="Адрес магазина" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <StringInput
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          name="city"
          value={formValues.city}
          handleFormChange={handleInputChange}
          error={formErrors.city!}
          handleError={handleError}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => (
              <li className={'cursor-pointer'} key={index} onClick={() => handleAddressSelect(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-[566px] h-[242px] rounded-base overflow-hidden">
        <Map setAddress={setAddress} inputValue={selectedAddress} />
      </div>
    </>
  )
}

export default ShopAddress
