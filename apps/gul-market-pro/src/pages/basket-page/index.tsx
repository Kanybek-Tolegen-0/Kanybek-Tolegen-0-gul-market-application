import { BrandButton, Layout, PaymentIcon, ScreenTemplate } from '@design-system/ui'
import { Typography } from '@material-tailwind/react'
import React, { FC } from 'react'
import { BasketActiveCard } from './basket-active-card'
import { data } from './constants'
import { BasketContent } from './basket-content'
import { BasketPassedCard } from './basket-passed-card'
import { BasketNotAvailableCard } from './basket-not-available-card'

export const BasketPage: FC = () => {
  return (
    <Layout fullHeader isLogged>
      <Layout.Content>
        <ScreenTemplate title="Корзина">
          <div className="flex justify-between gap-12">
            <div className="flex flex-col gap-10 grow-[2]">
              <BasketContent title="Активные заказы">
                {data.active.map(dt => (
                  <BasketActiveCard
                    key={dt.id}
                    imgSrc={dt.image}
                    name={dt.name}
                    price={dt.price}
                    deliveryAddress={dt.delivery_address}
                    deliveryDate={dt.delivery_date}
                    leftTime={dt.left_time}
                    amount={dt.amount}
                  />
                ))}
              </BasketContent>
              <BasketContent title="Просроченные заказы">
                {data.passed.map(dt => (
                  <BasketPassedCard
                    key={dt.id}
                    name={dt.name}
                    price={dt.price}
                    deliveryAddress={dt.delivery_address}
                    deliveryDate={dt.delivery_date}
                    amount={dt.amount}
                    imgSrc={dt.image}
                  />
                ))}
              </BasketContent>
              <BasketContent title="Нет в наличии">
                {data.notAvailable.map(dt => (
                  <BasketNotAvailableCard
                    key={dt.id}
                    name={dt.name}
                    price={dt.price}
                    deliveryAddress={dt.delivery_address}
                    deliveryDate={dt.delivery_date}
                    amount={dt.amount}
                    imgSrc={dt.image}
                  />
                ))}
              </BasketContent>
            </div>
            <div className="flex flex-col grow-[1] gap-4 pt-[32px]">
              <div className="flex bg-gr-50 p-[16px] gap-2 items-center rounded-2xl">
                <PaymentIcon />
                <div className="flex gap-20">
                  <Typography className="text-sm leading-5 font-medium text-gr-500">У вас на счету</Typography>
                  <Typography className="text-sm leading-5 font-medium text-gr-500">1 377 560 ₸</Typography>
                </div>
              </div>
              <div className="flex flex-col p-[16px] rounded-2xl bg-gr-50">
                <div className="flex justify-between border-b-[1px] border-gr-200 pb-[12px]">
                  <Typography className="text-base leading-6 font-medium text-gr-900">Сумма к оплате</Typography>
                  <Typography className="text-lg leading-6 font-semibold text-gr-900">677 560 ₸</Typography>
                </div>
                <div className="flex justify-between pt-[12px]">
                  <Typography className="text-sm leading-5 font-medium text-gr-500">2 товара на сумму</Typography>
                  <Typography className="text-sm leading-5 font-medium text-gr-500">677 560 ₸</Typography>
                </div>
                <BrandButton className="mt-[12px]">Заказать</BrandButton>
              </div>
            </div>
          </div>
        </ScreenTemplate>
      </Layout.Content>
    </Layout>
  )
}
