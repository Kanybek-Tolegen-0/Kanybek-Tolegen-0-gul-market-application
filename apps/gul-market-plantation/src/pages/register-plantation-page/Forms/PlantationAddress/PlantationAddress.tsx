import React, { FC } from 'react'
import { Input, Typography } from '@material-tailwind/react'
import { Map } from '../../../../components'

interface IShopAddressProps {}

const PlantationAddress: FC = props => {
  return (
    <>
      <div>
        <Typography children="Город проживания" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <Input
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
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

export default PlantationAddress
