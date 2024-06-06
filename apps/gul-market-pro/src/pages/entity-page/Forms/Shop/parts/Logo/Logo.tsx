import React, { FunctionComponent } from 'react'
import { AddImageIcon } from '@design-system/ui'
import { Typography } from '@material-tailwind/react'
interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = props => {
  return (
    <div className="flex flex-col gap-1 items-center border-2 rounded-md border-disabled border-dashed p-[26px] pt-[22px]">
      <AddImageIcon className="h-9 w-9" alt="" />
      <div className={'flex font-medium text-sm'}>
        <Typography children="Загрузите логотип&nbsp;" className="text-brand_bold" />
        <Typography children="или перенесите его сюда" className={'text-tip_bold'} />
      </div>
      <Typography
        children="Логотип должен быть не более 2000x2000px и иметь формат .jpg, .jpeg, .png"
        className="font-normal text-xs text-t-disabled"
      />
    </div>
  )
}

export default Logo
