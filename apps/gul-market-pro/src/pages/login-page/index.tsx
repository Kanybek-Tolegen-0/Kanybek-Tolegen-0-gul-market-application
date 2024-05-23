import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Form } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <div className="flex">
      <div>
        <Typography className="text-3xl font-bold">Покупайте цветы напрямую с плантаций</Typography>
        <Form></Form>
      </div>
    </div>
  )
}
