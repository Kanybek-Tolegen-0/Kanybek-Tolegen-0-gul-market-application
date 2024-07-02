import React, { ChangeEvent, useState, FunctionComponent, FormEvent } from 'react'
import { BrandButton, Container, EmailInput, flowerImage, Input, Layout, PasswordInput } from '@design-system/ui'
import { Button, Typography } from '@material-tailwind/react'
import { Form, Link, useNavigate } from 'react-router-dom'

const initialFormValues = {
  email: '',
  password: ''
}

const initialFormErrors = {
  email: '',
  password: ''
}

export const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const handleFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target
    setFormValues(prev => ({ ...prev, [name]: value }))
  }

  const handleError = ({ name, errorMessage }: { name: string; errorMessage: string }) =>
    setFormErrors(prev => ({ ...prev, [name]: errorMessage }))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isError = Object.values(formErrors).every(v => v === '') && Object.values(formValues).every(v => v !== '')
    isError && navigate('/main')
  }

  return (
    <Layout>
      <Layout.Content className="pr-0 pt-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col max-w-[488px] gap-y-4">
            <Typography className="text-3xl font-bold">Войти</Typography>
            <Container className="w-full min-w-[488px]">
              <Form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-6">
                  <Form
                    id="login-form"
                    className="flex flex-col gap-y-5"
                    onChange={handleFormChange}
                    onSubmit={handleSubmit}
                  >
                    <EmailInput name="email" handleError={handleError} error={formErrors.email} />
                    <PasswordInput
                      name="password"
                      secondary={
                        <Button
                          className="normal-case px-2 py-0 text-sm leading-5 font-medium text-brand"
                          variant="text"
                        >
                          <Link to="/remember-password">Забыли пароль?</Link>
                        </Button>
                      }
                      handleError={handleError}
                      error={formErrors.password}
                    />
                  </Form>
                  <BrandButton form="login-form" type="submit" className="w-full">
                    Войти
                  </BrandButton>
                </div>
              </Form>
            </Container>

            <div className="flex justify-center gap-x-1 py-3">
              <Typography className="text-base leading-6 font-normal text-gray-600">Нет аккаунта?</Typography>
              <Button className="normal-case px-2 py-0 text-base font-light text-brand" variant="text">
                <Link to="/">Зарегистрироваться</Link>
              </Button>
            </div>
          </div>
          <img className="max-w-[548px]" src={flowerImage} />
        </div>
      </Layout.Content>
    </Layout>
  )
}
