import React, { FC, useState } from 'react'
import { Input, Typography } from '@material-tailwind/react'
import { NonCheckedIcon, CheckIcon } from '@design-system/ui'
interface DayProps {
  day: string
}
const Day: FC<DayProps> = ({ day }) => {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <div className={'flex flex-col gap-2.5'}>
      <Typography children={day} />
      <div className="flex gap-[69px]">
        <div className="flex gap-3">
          <Typography children="Рабочий день" />
          <div
            className={`relative inline-flex items-center h-6 w-11 rounded-xl p-0.5 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-gr-800' : 'bg-gr-200'}`}
            onClick={toggleSwitch}
          >
            <div
              className={`absolute flex justify-center items-center h-5 w-5 bg-white rounded-[10px] shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-5' : ''}`}
            >
              {isOn ? (
                <CheckIcon className="w-3 h-3 select-none" alt={isOn ? 'checked' : 'unchecked'} />
              ) : (
                <NonCheckedIcon className="w-3 h-3 select-none" alt={isOn ? 'checked' : 'unchecked'} />
              )}
            </div>
          </div>
        </div>
        <div className="flex">
          <Input
            crossOrigin=""
            type="time"
            label="C"
            className=" border-disabled focus:!border-[1px] focus:border-disabled !rounded-md py-[9px] px-[13px] text-tip_bold peer-focus:!border-red "
            labelProps={{
              // className: 'before:content-none after:content-none'
              className:
                ' before:border-disabled peer-focus:before:!border-disabled peer-focus:before:!border-l-[1px] peer-focus:before:!border-t-[1px] before:!rounded-tl-[0.33rem] after:border-disabled peer-focus:after:!border-disabled peer-focus:after:!border-r-[1px] peer-focus:after:!border-t-[1px] after:!rounded-tr-[0.33rem]'
            }}
          />
          {/*  className="!border-disabled focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"*/}
          {/*  labelProps={{*/}
          {/*  className: 'before:content-none after:content-none'*/}
          {/*}}*/}
        </div>
      </div>
    </div>
  )
}

export default Day
