import React, { FC } from 'react'
import { Input } from '@material-tailwind/react'
import { emailSchema } from './postSchema'
import { ZodError } from 'zod'
import { ErrorText } from '../error-text'

export const EmailInput: FC<{
  name: string
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }) => void
  error: string
}> = ({ name, handleError, error }) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <Input
        name={name}
        label="Электронная почта"
        onBlur={e => {
          const { value } = e.target
          console.log(value)
          try {
            emailSchema.parse(value)
            handleError({ name, errorMessage: '' })
          } catch (err) {
            if (err instanceof ZodError) {
              const errorMessage = err.errors[0]?.message
              errorMessage && handleError({ name: 'email', errorMessage })
            }
          }
        }}
        className="w-full"
        crossOrigin=""
        error={Boolean(error)}
      />
      {error ? <ErrorText text={error} /> : null}
    </div>
  )
}
