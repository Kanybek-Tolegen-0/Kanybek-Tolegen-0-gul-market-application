import { BrandButton, Container, Layout, PlusIcon } from '@design-system/ui'
import { Button, Typography } from '@material-tailwind/react'
import React, { FunctionComponent, useState } from 'react'
import FullName from '../individual-page/forms/FullName/FullName'
import Shop from '../entity-page/Forms/Shop/Shop'

export const ProfilePage: FunctionComponent = () => {
  const [shops, setShops] = useState<number[]>([0, 1])

  const addShop = () => {
    setShops(prevShops => [...prevShops, prevShops.length])
  }
  return (
    <Layout fullHeader isLogged className="bg-gray-50">
      <Layout.Content className="flex flex-col mt-10 gap-10 !px-0 w-[1200px] mx-auto ">
        <Typography children={'Мои данные'} className="font-normal text-5xl text-gray-900" />
        <div className={'flex flex-col gap-8'}>
          <div className={'flex items-center justify-between bg-primary py-5 px-8'}>
            <div className={'flex flex-col gap-5'}>
              <Typography children={'Магазин'} className={'font-bold text-3xl text-gray-900'} />
              <Typography children={'Роль'} className="font-normal text-base text-gray-700" />
            </div>
            <BrandButton
              className={'bg-gray-100 flex justify-center items-center rounded-lg font-medium text-base text-gray-700'}
            >
              Сменить роль на физ.лицо
            </BrandButton>
          </div>
          <div className={'flex justify-between gap-9'}>
            <div className={'flex flex-col gap-5'}>
              <Typography children={'ФИО'} className={'font-bold text-3xl text-gray-900'} />
              <Typography
                children={
                  'Введите полностью Ваши ФИО, они будут использованы для оформления заказов и дальнейшего взаимодействия с Вами.'
                }
                className="font-normal text-base text-gray-700"
              />
            </div>
            <Container className={'flex-col mb-6 min-w-[630px]'}>
              <FullName />
            </Container>
          </div>
          <div className={'flex justify-between gap-9'}>
            <div className={'flex flex-col gap-5'}>
              <Typography children={'Информация о магазине'} className={'font-bold text-3xl text-gray-900'} />
              <Typography
                children={
                  'Предоставьте информацию о магазине, чтобы покупателям и поставщикам было понятно с кем они коммуницируют и у кого покупают товар'
                }
                className="font-normal text-base text-gray-700"
              />
            </div>
            <div>
              {shops.map((_, index) => (
                <Container className={'flex-col mb-6 min-w-[630px]'}>
                  <Shop key={index} />
                </Container>
              ))}
              <Button
                onClick={addShop}
                className="normal-case flex justify-center items-center mb-6 gap-6 w-full !rounded-base px-[32px] py-[20px] bg-gray-800 h-16 "
              >
                <PlusIcon alt="add shop" className="bg-primary rounded-full" />
                <Typography children="Добавить еще магазин" className="font-bold text-base text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}
