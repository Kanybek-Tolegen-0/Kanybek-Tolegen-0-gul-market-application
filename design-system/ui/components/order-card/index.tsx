import React, { FC, ReactNode } from 'react'
import { Button, Card, Typography } from '@material-tailwind/react'
import { CommentIcon, fakePlantation, fakeShopImage, hydrangeaImage, productImage2 } from '../../assets'

interface OrderCardProps {
  title: string
  name: string
  subTitle: string
  imageUrl: string
  logo: string
  total_price: string
  priceDollar: string
  priceTenge: string
  box_size: string
  quantity: number
  flag: React.ReactNode
  actions?: React.ReactNode
}

export const OrderCard: FC<OrderCardProps> = ({
  title,
  name,
  subTitle,
  imageUrl,
  logo,
  total_price,
  priceDollar,
  priceTenge,
  flag,
  box_size,
  quantity,
  actions
}) => {
  return (
    <Card
      className="p-0 shadow-none bg-gray-50"
      style={{
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px'
      }}
    >
      <div className="flex gap-5">
        <div className={`w-[200px] h-[200px] bg-no-repeat bg-center bg-cover`}>
          <img
            alt={'order_image'}
            className={'rounded-tl-[20px] rounded-bl-[20px] w-[200px] h-[200px] max-w-[200px] max-h-[200px]'}
            width={200}
            height={200}
            src={
              imageUrl
                ? imageUrl
                : title === 'Roses'
                  ? productImage2
                  : title === 'Hydrangea'
                    ? hydrangeaImage
                    : fakeShopImage
            }
          />
        </div>
        <div className="flex justify-between py-[20px] pr-[20px] w-full">
          <div className="flex flex-col h-full w-full justify-between">
            <div className="flex flex-col gap-[12px]">
              <Typography className="text-xl leading-7 font-normal text-gray-800">{title}</Typography>
              <Typography className="text-base leading-5 font-normal text-gray-500">{subTitle}</Typography>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div
                  className={`w-[56px] h-[56px] bg-no-repeat bg-center bg-cover`}
                  style={{
                    backgroundImage: `url(${logo || fakePlantation})`
                  }}
                />
                <Typography className="text-sm font-light leading-4 text-gray-500">
                  {name || 'Название магазина'}
                </Typography>
              </div>
              <Button
                className="flex p-0 justify-center items-center w-[40px] h-[40px] border-[1px] border-gray-600 rounded-[10px]"
                variant="text"
              >
                <CommentIcon />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start min-w-max">
            <div className="self-end">{flag}</div>
            <div className="flex flex-col self-end">
              <Typography className="text-3xl leading-10 font-medium text-gray-900">{'$ ' + total_price}</Typography>
              <Typography className="text-base leading-7 font-normal text-gray-600">
                {quantity ? quantity + ' ' : ''} {box_size}
              </Typography>
            </div>
            {actions}
          </div>
        </div>
      </div>
    </Card>
  )
}
