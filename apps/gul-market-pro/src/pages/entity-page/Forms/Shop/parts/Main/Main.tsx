import React, { FunctionComponent, useState } from 'react'
import { Input, Textarea, Typography } from '@material-tailwind/react'
import { PlusIcon } from '@design-system/ui'

interface MainProps {}

const Main: FunctionComponent<MainProps> = props => {
  const [filials, setFilials] = useState<number[]>([0])

  const addMainComponent = () => {
    setFilials(prevFilials => [...prevFilials, prevFilials.length])
  }

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
      {filials.map((_, index) => (
        <div key={index}>
          <Typography children="Адрес филиала" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
          <Input
            className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
            labelProps={{
              className: 'before:content-none after:content-none'
            }}
            crossOrigin=""
          />
        </div>
      ))}
      <button
        onClick={addMainComponent}
        className="flex items-center gap-2.5 rounded-lg px-4 py-3 bg-gray-100 w-56 h-9"
      >
        <PlusIcon className="bg-primary rounded-full" alt="add subsidiary" />
        <Typography children={'Добавить еще филиал'} className="font-medium text-sm text-bl text-gray-800" />
      </button>
    </>
  )
}

export default Main
