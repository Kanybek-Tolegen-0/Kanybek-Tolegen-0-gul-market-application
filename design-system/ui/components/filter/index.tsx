import React, { FC } from 'react'
import { Form } from 'react-router-dom'

export const Filter: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Form>{children}</Form>
}
