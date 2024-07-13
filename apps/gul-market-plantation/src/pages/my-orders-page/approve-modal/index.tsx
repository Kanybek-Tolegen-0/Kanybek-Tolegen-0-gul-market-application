import { CrossBigIcon, SuccessIcon } from '@design-system/ui'
import { Button, Card, Typography } from '@material-tailwind/react'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface ApproveModalProps {
  imageUrl: string
  flowerName: string
  address: string
  price: string
  boxType: string
  onClose: () => void
}

export const ApproveModal: FC<ApproveModalProps> = ({ imageUrl, flowerName, address, price, boxType, onClose }) => {
  return (
    <Card className="relative shadow-none rounded-[20px] p-[20px]">
      <div className="flex justify-between items-center mb-[8px]">
        <Typography className="text-2xl leading-8 font-semibold text-gray-800">Вы приняли заявку на</Typography>
        <SuccessIcon />
      </div>
      <div className="flex gap-[16px]">
        <div
          className={`w-[160px] h-[160px] rounded-[20px] bg-no-repeat bg-center bg-cover`}
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="flex flex-col py-[12px]">
          <div className="flex flex-col gap-[4px]">
            <Typography className="text-xl leading-7 font-normal text-gray-800">{flowerName}</Typography>
            <Typography className="text-base leading-5 font-normal text-gray-500">{address}</Typography>
          </div>
          <div className="flex flex-col gap-[4px]">
            <Typography className="text-4xl leading-10 font-medium">{price}</Typography>
            <Typography className="text-xs leading-5 font-normal text-gray-500">{boxType}</Typography>
          </div>
          <Button
            className="text-base leading-6 font-medium self-end bg-gray-800 text-primary normal-case"
            onClick={() => onClose()}
          >
            Закрыть
          </Button>
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
}
