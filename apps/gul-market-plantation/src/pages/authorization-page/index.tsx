import {
  BrandButton,
  Container,
  EmailInput,
  flowerImage,
  Layout,
  PasswordInput,
  PhoneNumberInput
} from '@design-system/ui'
import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { Button, Typography } from '@material-tailwind/react'

const initialFormValues = {
  email: '',
  phone: '',
  password: ''
}

const initialFormErrors = {
  email: '',
  phone: '',
  password: ''
}

export const AuthorizationPage: FunctionComponent = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const handleFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target

    setFormValues(prev => ({ ...prev, [name]: value }))
  }

  console.log({ formValues })

  const handleError = ({ name, errorMessage }: { name: string; errorMessage: string }) => {
    setFormErrors(prev => ({ ...prev, [name]: errorMessage }))
  }
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
              <Form className="w-full" onChange={handleFormChange} onSubmit={e => e.preventDefault()}>
                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-3">
                    <EmailInput name="email" error={formErrors.email} handleError={handleError} />
                    <PhoneNumberInput name="phone" error={formErrors.phone} handleError={handleError} />
                    <PasswordInput name="password" error={formErrors.password} handleError={handleError} />
                  </div>
                  <BrandButton className="w-full" onClick={() => navigate('/register-plantation')}>
                    Создать аккаунт
                  </BrandButton>
                </div>
              </Form>
            </Container>

            <div className="flex justify-center gap-x-1 py-3">
              <Typography className="text-base leading-6 font-normal text-gray-600">Уже есть аккаунт?</Typography>
              <Button className="normal-case px-2 py-0 text-base font-light text-brand" variant="text">
                <Link to="/login">Войти</Link>
              </Button>
            </div>
          </div>
          <img className="max-w-[548px]" src={flowerImage} alt="flower image" />
        </div>
      </Layout.Content>
    </Layout>
  )
}
