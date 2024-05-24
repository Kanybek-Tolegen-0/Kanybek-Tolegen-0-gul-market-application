import { BrandButton, Container, flowerImage, Input, Layout, PasswordInput, PhoneNumberInput } from '@design-system/ui'
import { Button, Typography } from '@material-tailwind/react'
import React, { FunctionComponent } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'

export const AuthorizationPage: FunctionComponent = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Layout.Content className="pr-0 pt-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col max-w-[488px]">
            <div className="flex flex-col gap-2">
              <Typography className="text-3xl font-bold">Покупайте цветы напрямую с плантаций</Typography>
              <Typography className="text-base leading-5 font-normal">
                Закупайте цветы, растения и декорации у лучших поставщиков по всему миру
              </Typography>
            </div>

            <Container className="w-full min-w-[488px]">
              <Form className="w-full" onSubmit={e => e.preventDefault()}>
                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-3">
                    <Input name="email" label="Электронная почта" className="w-full" />
                    <PhoneNumberInput />
                    <PasswordInput />
                  </div>
                  <BrandButton className="w-full" onClick={() => navigate('/choose-role')}>
                    Создать аккаунт
                  </BrandButton>
                </div>
              </Form>
            </Container>

            <div className="flex justify-center gap-x-1 py-3">
              <Typography className="text-base leading-6 font-normal text-gr-600">Уже есть аккаунт?</Typography>
              <Button className="normal-case px-2 py-0 text-base font-light text-brand" variant="text">
                <Link to="/login">Войти</Link>
              </Button>
            </div>
          </div>
          <img className="max-w-[548px]" src={flowerImage} />
        </div>
      </Layout.Content>
    </Layout>
  )
}
