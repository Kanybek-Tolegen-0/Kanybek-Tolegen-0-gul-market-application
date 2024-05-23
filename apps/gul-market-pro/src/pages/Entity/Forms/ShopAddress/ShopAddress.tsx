import React, { FC } from 'react'
import { Input, Typography } from '@material-tailwind/react'
import Map from '../../../../pageComponents/Map/Map'

interface IShopAddressProps {}

const ShopAddress: FC = props => {
  return (
    <>
      <div>
        <Typography children="Адрес магазина" className="font-medium text-sm text-tip mr-auto mb-1" />
        <Input
          className="!border-disabled focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          crossOrigin=""
        />
      </div>
      <div className="w-[566px] h-[242px] rounded-base overflow-hidden">
        <Map />
      </div>
    </>
  )
}

export default ShopAddress
