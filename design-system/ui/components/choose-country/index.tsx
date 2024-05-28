import React, { FC } from 'react'
import { Select, Option } from '@material-tailwind/react'

interface ChooseCountryProps {}

const ChooseCountry: FC<ChooseCountryProps> = props => {
  return (
    <>
      <Select
        className="rounded-[6px] border px-[13px] py-[9px] border-disabled "
        labelProps={{
          className: 'before:content-none after:content-none '
        }}
        containerProps={{
          className: '!p-0'
        }}
      >
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </>
  )
}

export default ChooseCountry
