import React, { FC } from 'react'
import { Form } from 'react-router-dom'

export const Filter: FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <Form className={className}>{children}</Form>
}
