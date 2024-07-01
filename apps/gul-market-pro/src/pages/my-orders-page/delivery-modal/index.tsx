import React, { FC } from 'react'
import { ColumnStepper, ColumnStepperProps, CrossBigIcon } from '@design-system/ui'
import { Card, Typography } from '@material-tailwind/react'

export const DeliveryModal: FC<
  ColumnStepperProps & {
    flowerName: string
    address: string
    imageUrl: string
    delivery: string
    boxes: string[]
    onClose: () => void
  }
> = ({ active, steps, address, delivery, flowerName, imageUrl, boxes, onClose }) => (
  <Card className="relative shadow-none rounded-[20px]">
    <div className="flex">
      <div
        className="flex flex-col max-w-[260px] bg-gr-100 p-[20px] justify-between"
        style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}
      >
        <div
          className={`w-[160px] h-[160px] rounded-[20px] bg-no-repeat bg-center bg-cover`}
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="flex flex-col">
          <Typography className="text-xl leading-7 font-normal gr-800">{flowerName}</Typography>
          <Typography className="text-xs font-normal text-gr-500">
            {boxes.reduce((acc, box, index) => `${acc} ${box}${index === boxes.length - 1 ? '' : ', '}`, '')}
          </Typography>
        </div>
        <Typography className="text-base leading-5 font-normal text-gr-500">{address}</Typography>
        <Typography className="text-base leading-5 font-normal text-gr-800">{delivery}</Typography>
      </div>
      <div className="px-[24px] py-[20px]">
        <ColumnStepper active={active} steps={steps} />
      </div>
    </div>
    <div
      className="absolute top-[-48px] right-0 flex justify-center items-center p-0 bg-inherit w-max cursor-pointer"
      style={{ background: 'none' }}
      onClick={e => {
        e.preventDefault()
        onClose()
      }}
    >
      <CrossBigIcon />
    </div>
  </Card>
)
