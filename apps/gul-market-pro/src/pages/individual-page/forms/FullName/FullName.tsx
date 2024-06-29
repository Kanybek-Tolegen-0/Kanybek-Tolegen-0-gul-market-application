import React, { FC } from 'react'
import { Container } from '@design-system/ui'
import { Input, Typography } from '@material-tailwind/react'

interface IFullNameFormProps {}

const FullName: FC<IFullNameFormProps> = props => {
  return (
    <div className={'flex flex-col gap-5'}>
      <div>
        <Typography children="Ваша фамилия" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <Input
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          crossOrigin=""
        />
      </div>
      <div>
        <Typography children="Ваше имя" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <Input
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          crossOrigin=""
        />
      </div>

      <div>
        <Typography children="Ваше Отчество" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <Input
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          crossOrigin=""
        />
      </div>
    </div>
  )
}

export default FullName
