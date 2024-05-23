import React, { FormEvent } from 'react'
import { Card, CardBody, Input } from '@material-tailwind/react'

export const LoginCard = ({ className = '' }: { className?: string }) => {
  return (
    <Card className={`${className}`}>
      <CardBody>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log('submit')
          }}
        >
          <Input type="password" label="Password" crossOrigin />
        </form>
      </CardBody>
    </Card>
  )
}
