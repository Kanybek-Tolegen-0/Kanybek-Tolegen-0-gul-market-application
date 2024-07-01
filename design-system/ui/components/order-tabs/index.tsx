import React from 'react'
import { Button } from '@material-tailwind/react'
import { OrderTabsProps } from './types'

function OrderTabs<T>({ active, tabs, onChange }: OrderTabsProps<T>) {
  return (
    <div className="flex w-full justify-between">
      {tabs.map(({ label, value }) => (
        <Button
          className={`text-sm leading-5 font-medium normal-case shadow-none px-[12px] py-[8px] ${active === value ? 'bg-pk-100 text-pk-700' : 'bg-primary text-gr-500'}`}
          onClick={() => {
            onChange(value)
          }}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}

export default OrderTabs
