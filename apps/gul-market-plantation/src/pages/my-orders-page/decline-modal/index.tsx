import React, { FC } from 'react'
import { CrossBigIcon } from '@design-system/ui'
import { Button, Card, Textarea, Typography } from '@material-tailwind/react'

export const DeclineModal: FC<{
  flowerName: string
  address: string
  imageUrl: string
  price: string
  boxType: string
  onClose: () => void
}> = ({ address, price, boxType, flowerName, imageUrl, onClose }) => (
  <Card className="relative shadow-none rounded-[20px]">
    <div className="flex">
      <div
        className="flex flex-col max-w-[260px] bg-gray-100 p-[20px] justify-between"
        style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}
      >
        <div
          className={`w-[160px] h-[160px] rounded-[20px] bg-no-repeat bg-center bg-cover`}
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <Typography className="text-xl leading-7 font-normal gray-800">{flowerName}</Typography>
        <Typography className="text-base leading-5 font-normal text-gray-500">{address}</Typography>
        <div className="flex flex-col gap-[4px]">
          <Typography className="text-base leading-5 font-normal text-gray-800">{boxType}</Typography>
          <Typography className="text-base leading-7 font-semibold text-gray-800">{price}</Typography>
        </div>
      </div>
      <div className="flex flex-col px-[24px] py-[20px] gap-[8px]">
        <Typography className="text-2xl leading-8 font-semibold text-gray-800">Отклонить заявку</Typography>
        <Typography className="text-sm leading-5 font-medium text-gray-700">Причина отказа</Typography>
        <Textarea className="min-w-[344px] min-h-[250px]" />
        <Button
          className="text-base leading-6 font-medium bg-gray-800 text-primary normal-case"
          onClick={() => onClose()}
        >
          Отклонить заявку
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
