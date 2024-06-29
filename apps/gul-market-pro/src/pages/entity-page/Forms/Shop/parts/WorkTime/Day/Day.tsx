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
      <Typography children={day} className="font-normal text-base text-gray-500" />
      <div className="flex gap-[69px] items-center h-[38px]">
        <div className="flex gap-3">
          <Typography children="Рабочий день" className="font-normal text-base text-black" />
          <div
            className={`relative inline-flex items-center h-6 w-11 rounded-xl p-0.5 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-gray-800' : 'bg-gray-200'}`}
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
        {isOn && (
          <div className="flex gap-3">
            <Input
              crossOrigin=""
              type="time"
              label="C"
              className="w-40 text-gray-800 font-normal text-sm border-gray-300 focus:!border-[1px] focus:border-gray-300 !rounded-md py-[9px] px-[13px] text-tip_bold peer-focus:!border-red  "
              labelProps={{
                className:
                  'w-40 text-gray-700 font-medium text-xs before:border-gray-300 peer-focus:before:!border-gray-300 peer-focus:before:!border-l-[1px] peer-focus:before:!border-t-[1px] before:!rounded-tl-[0.33rem] after:ml-7 after:border-gray-300 peer-focus:after:!border-gray-300 peer-focus:after:!border-r-[1px] peer-focus:after:!border-t-[1px] after:!rounded-tr-[0.33rem]'
              }}
              containerProps={{
                className: '!min-w-[160px]'
              }}
            />
            <Input
              crossOrigin=""
              type="time"
              label="По"
              className="w-40 text-gray-800 font-normal text-sm border-gray-300 focus:!border-[1px] focus:border-gray-300 !rounded-md py-[9px] px-[13px] text-tip_bold peer-focus:!border-red "
              labelProps={{
                className:
                  'w-40 text-gray-700 font-medium text-xs before:border-gray-300 peer-focus:before:!border-gray-300 peer-focus:before:!border-l-[1px] peer-focus:before:!border-t-[1px] before:!rounded-tl-[0.33rem] after:ml-7 after:border-gray-300 peer-focus:after:!border-gray-300 peer-focus:after:!border-r-[1px] peer-focus:after:!border-t-[1px] after:!rounded-tr-[0.33rem]'
              }}
              containerProps={{
                className: '!min-w-[160px]'
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Day
