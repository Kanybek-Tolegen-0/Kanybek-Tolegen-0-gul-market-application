import React, { FC } from 'react'
import { CompletedIcon, StepperActive } from '@design-system/ui'
import { Typography } from '@material-tailwind/react'

export interface ColumnStepperProps {
  active: number
  steps: { label: string; value: string }[]
}

export const ColumnStepper: FC<ColumnStepperProps> = ({ active, steps }) => (
  <div className="flex flex-col gap-[12px]">
    {steps.map(({ label }, index) => {
      const isActive = active === index

      return (
        <React.Fragment key={index}>
          <div className="relative flex px-[24px] py-[20px] gap-[16px] items-center">
            <div
              className={`flex justify-center items-center rounded-full w-[40px] h-[40px] text-sm leading-4 font-medium ${isActive ? 'text-pink-600' : 'text-gray-900'} ${isActive ? 'border-[2px] border-pink-600' : 'border-[2px] border-gray-300'} ${index < active ? 'bg-pink-600 border-none' : ''}`}
            >
              {index < active ? <CompletedIcon /> : `0${index + 1}`}
            </div>
            <Typography
              className={`text-xs leading-4 font-semibold tracking-wide uppercase ${isActive ? 'text-pink-600' : 'text-gray-900'}`}
            >
              {label}
            </Typography>
            {isActive ? (
              <div className="absolute left-0">
                <StepperActive />
              </div>
            ) : null}
          </div>
        </React.Fragment>
      )
    })}
  </div>
)
