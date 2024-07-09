import { BrandButton, Container, flowerImage, Input, Layout, useTimer, formatTimer } from '@design-system/ui'
import { Button, Typography } from '@material-tailwind/react'
import React, { FunctionComponent, useState } from 'react'
import { Form, Link } from 'react-router-dom'

export const RememberPasswordPage: FunctionComponent = () => {
  const [email, setEmail] = useState('')
  const [isEmail, setIsEmail] = useState(false)
  const { timeLeft, startTimer, setStartTimer } = useTimer({ seconds: 60 })
  const { minutes, seconds } = formatTimer(timeLeft)

  return (
    <Layout>
      <Layout.Content className="pr-0 pt-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col max-w-[488px] gap-y-4">
            <Typography className="text-3xl font-bold">Восстановление пароля</Typography>
            <Container className="w-full min-w-[488px]">
              {isEmail ? (
                <div className="flex flex-col gap-y-3">
                  <Typography className="font-medium">
                    На вашу почту <Typography className="inline font-medium text-brand">{email}</Typography> было
                    отправлено письмо с инструкцией по восстановлению пароля
                  </Typography>
                  <hr />
                  <div className="flex flex-col gap-y-3">
                    <Typography className="text-base text-sm leading-5 font-normal">Не пришло письмо?</Typography>
                    <BrandButton className="w-full" onClick={() => setStartTimer(true)}>
                      {startTimer ? `Повторная отправка недоступна ${minutes}:${seconds}` : 'Отправить заново'}
                    </BrandButton>
                  </div>
                </div>
              ) : (
                <Form
                  className="w-full"
                  onSubmit={e => {
                    e.preventDefault()
                    setIsEmail(true)
                  }}
                >
                  <div className="flex flex-col gap-y-6">
                    <Input
                      name="email"
                      label="Электронная почта"
                      onChange={value => setEmail(value)}
                      className="w-full"
                    />
                    <BrandButton className="w-full" type="submit">
                      Создать аккаунт
                    </BrandButton>
                  </div>
                </Form>
              )}
            </Container>

            <div className="flex justify-center gap-x-1 py-3">
              <Typography className="text-base leading-6 font-normal text-gray-600">Помните пароль?</Typography>
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
