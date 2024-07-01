import React, { FC, useState } from 'react'

import { AcceptIcon, BrandButton, Layout, productImage3, RejectIcon } from '@design-system/ui'
import Modal from '@design-system/ui/ui/components/modal'
import { Button, Typography } from '@material-tailwind/react'
export interface TestModalProps {
  type?: 'accept' | 'reject'
}
export const TestModal: FC<TestModalProps> = ({ type = 'accept' }) => {
  const [open, setOpen] = React.useState(true)

  const handleOpen = (): void => {
    setOpen(!open)
  }
  return (
    <Layout isLogged={true}>
      <Layout.Content>
        <Modal open={open} handleOpen={handleOpen}>
          <div className={'flex flex-col gap-6 p-5'}>
            <div className={'flex justify-between'}>
              <Typography
                children={`Вы ${type === 'accept' ? 'приняли' : 'отклонили'} заявку на`}
                className={'font-semibold text-2xl text-gray-800'}
              />
              {type === 'accept' ? <AcceptIcon /> : <RejectIcon />}
            </div>
            <div className={'flex gap-[69px] items-end'}>
              <div className="flex gap-5">
                <img src={productImage3} alt="product" width={160} height={160} className="rounded-base" />
                <div className={'flex flex-col gap-5'}>
                  <div className={'flex flex-col gap-3'}>
                    <Typography children={'Тюльпаны'} className={'font-normal text-xl text-gray-800'} />
                    <Typography
                      children={'Доставка до Алматы (Сейфуллина 505)'}
                      className={'font-normal text-base text-gray-500'}
                    />
                  </div>
                  <div className={'flex flex-col gap-2'}>
                    <Typography children={'$ ' + '3 000'} className={'font-medium text-4xl text-gray-900'} />
                    <Typography children={'2 HB'} className={'font-normal text-xs text-gray-500'} />
                  </div>
                </div>
              </div>
              <BrandButton
                className={
                  'h-[50px] w-[177px] rounded-md py-[13px] px-[21px] bg-gray-800 font-medium text-base text-primary'
                }
                onClick={handleOpen}
              >
                Закрыть
              </BrandButton>
            </div>
          </div>
        </Modal>
      </Layout.Content>
    </Layout>
  )
}
