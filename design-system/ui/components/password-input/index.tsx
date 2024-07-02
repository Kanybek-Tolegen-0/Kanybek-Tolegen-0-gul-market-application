import React, { FC, useState } from 'react'
import { EyesOpenIcon, EyesClosedIcon } from '../../assets'
import { Input } from '@material-tailwind/react'
import { Label } from '../label'
import { passwordSchema } from './passwordSchema'
import { ZodError } from 'zod'
import { ErrorText } from '../error-text'
import '../input/style.css'

export const PasswordInput: FC<{
  name: string
  className?: string
  label?: string
  secondary?: React.ReactNode
  error: string
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }) => void
}> = ({ name, className, label, secondary, error, handleError }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col gap-y-1">
      {secondary ? (
        <div className="flex justify-between">
          <Label label={label || 'Придумайте пароль'} />
          {secondary}
        </div>
      ) : (
        <Label label={label || 'Придумайте пароль'} />
      )}
      <Input
        name={name}
        type={show ? 'text' : 'password'}
        className={`${className} input rounded-md border border-gray-300`}
        icon={
          <div className="p-0" onClick={() => setShow(prev => !prev)}>
            {show ? <EyesClosedIcon className="cursor-pointer" /> : <EyesOpenIcon className="cursor-pointer" />}
          </div>
        }
        onBlur={e => {
          const { value } = e.target
          try {
            passwordSchema.parse(value)
            handleError({ name, errorMessage: '' })
          } catch (err) {
            if (err instanceof ZodError) {
              const errorMessage = err.errors[0]?.message
              errorMessage && handleError({ name, errorMessage })
            }
          }
        }}
        error={Boolean(error)}
        crossOrigin
      />
      {error ? <ErrorText text={error} /> : null}
    </div>
  )
}
