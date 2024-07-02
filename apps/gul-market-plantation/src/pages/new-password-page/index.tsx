import { BrandButton, Container, flowerImage, Input, Layout, PasswordInput, PhoneNumberInput } from '@design-system/ui'
import { Typography } from '@material-tailwind/react'
import React, { FunctionComponent, useState } from 'react'
import { Form } from 'react-router-dom'

export const NewPasswordPage: FunctionComponent = () => {
  const [passwordError, setPasswordError] = useState('')

  const handleError = ({ errorMessage }: { errorMessage: string }) => {
    setPasswordError(errorMessage)
  }

  return (
    <Layout>
      <Layout.Content className="pr-0 pt-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col max-w-[488px] gap-y-4">
            <Typography className="text-3xl font-bold">Введите новый пароль</Typography>
            <Container className="w-full min-w-[488px]">
              <Form className="flex flex-col gap-y-4 w-full" onSubmit={e => e.preventDefault()}>
                <PasswordInput name="password" label="Новый пароль" error={passwordError} handleError={handleError} />
                <BrandButton className="w-full">Обновить пароль</BrandButton>
              </Form>
            </Container>
          </div>
          <img className="max-w-[548px]" src={flowerImage} />
        </div>
      </Layout.Content>
    </Layout>
  )
}
