import React, { FunctionComponent } from 'react'
import { Input, Textarea, Typography } from '@material-tailwind/react'

interface MainProps {}

const Main: FunctionComponent<MainProps> = props => {
  return (
    <>
      <div>
        <Typography children="Название магазина" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <Input
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          crossOrigin=""
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
      <div>
        <Typography children="Адрес магазина" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <Input
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          crossOrigin=""
        />
      </div>
    </>
  )
}

export default Main
