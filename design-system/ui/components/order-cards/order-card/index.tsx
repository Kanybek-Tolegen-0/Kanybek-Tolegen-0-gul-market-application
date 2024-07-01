import React, { FC, ReactNode } from 'react'
import { Button, Card, Typography } from '@material-tailwind/react'
import { CommentIcon } from '../../../assets'

interface OrderCardProps {
  title: string
  name: string
  subTitle: string
  imageUrl: string
  logo: string
  price: string
  priceDollar: string
  priceTenge: string
  flag: React.ReactNode
}

export const OrderCard: FC<OrderCardProps> = ({
  title,
  name,
  subTitle,
  imageUrl,
  logo,
  price,
  priceDollar,
  priceTenge,
  flag
}) => {
  return (
    <Card
      className="p-0"
      style={{
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px'
      }}
    >
      <div className="flex gap-[12px]">
        <div
          className={`w-[200px] h-[200px] bg-no-repeat bg-center bg-cover`}
          style={{
            backgroundImage: `url(${imageUrl})`,
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px'
          }}
        />
        <div className="flex justify-between py-[20px] pr-[20px] w-full">
          <div className="flex flex-col h-full w-full justify-between">
            <div className="flex flex-col gap-[12px]">
              <Typography className="text-xl leading-7 font-normal text-gr-800">{title}</Typography>
              <Typography className="text-base leading-5 font-normal text-gr-500">{subTitle}</Typography>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center">
                <div
                  className={`w-[56px] h-[56px] bg-no-repeat bg-center bg-cover`}
                  style={{
                    backgroundImage: `url(${logo})`
                  }}
                />
                <Typography className="text-sm font-light leading-4 text-gr-500">{name}</Typography>
              </div>
              <Button
                className="flex p-0 justify-center items-center w-[40px] h-[40px] border-[1px] border-gr-600 rounded-[10px]"
                variant="text"
              >
                <CommentIcon />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            {flag}
            <div className="flex flex-col">
              <Typography className="text-3xl leading-10 font-medium text-gr-900">{price}</Typography>
              <Typography className="text-base leading-7 font-normal text-gr-600">
                {priceDollar} / {priceTenge}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
