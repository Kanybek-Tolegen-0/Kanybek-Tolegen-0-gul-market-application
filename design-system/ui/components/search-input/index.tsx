import React, { FC } from 'react'
import { Input, InputProps } from '@material-tailwind/react'
import { SearchIcon } from '../../assets'

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputProps?: InputProps
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(({ inputProps = {} }, ref) => (
  <div className="flex items-center border border-disabled rounded-[6px] gap-2 py-[9px] px-[13px] h-10 w-[290px]">
    <div className="">
      <SearchIcon />
    </div>
    <Input
      type="text"
      className="border-none focus:ring-0 h-fit !p-0"
      labelProps={{
        className: 'before:content-none after:content-none '
      }}
      containerProps={{
        className: '!p-0'
      }}
      crossOrigin=""
      {...inputProps}
      ref={ref}
    />
  </div>
))
