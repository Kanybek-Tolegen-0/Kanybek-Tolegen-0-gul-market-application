import React, { FC } from 'react'
import { Button, Input } from '@material-tailwind/react'
import { SearchIcon } from '../../assets'

interface SearchProps {}

const Search: FC<SearchProps> = props => {
  return (
    <>
      <div className="flex items-center border border-disabled rounded-[6px] gap-2 py-[9px] px-[13px] h-10 w-[290px]">
        <div className="">
          <SearchIcon />
        </div>
        <Input
          type="text"
          placeholder="Искать товар или плантацию"
          className=" border-none focus:ring-0 h-fit !p-0 "
          labelProps={{
            className: 'before:content-none after:content-none '
          }}
          containerProps={{
            className: '!p-0'
          }}
          crossOrigin=""
        />
      </div>
    </>
  )
}

export default Search
