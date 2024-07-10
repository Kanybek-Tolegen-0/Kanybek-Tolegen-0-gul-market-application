import React, { ChangeEvent, FC } from 'react'
import { Input, InputProps } from '@material-tailwind/react'
import { stringSchema } from './stringSchema'
import { ZodError } from 'zod'
import { ErrorText } from '../error-text'

interface StringInputProps extends Omit<InputProps, 'name' | 'onBlur' | 'error'> {
  name: string
  label?: string
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }) => void
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: string
  className: string
}

export const StringInput: FC<StringInputProps> = ({
  name,
  handleError,
  error,
  label,
  className,
  labelProps,
  handleFormChange
}) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <Input
        name={name}
        label={label && label}
        onBlur={e => {
          const { value } = e.target
          try {
            stringSchema.parse(value)
            handleError({ name, errorMessage: '' })
          } catch (err) {
            if (err instanceof ZodError) {
              const errorMessage = err.errors[0]?.message
              errorMessage && handleError({ name: name, errorMessage })
            }
          }
        }}
        className={`w-full ${className}`}
        crossOrigin=""
        error={Boolean(error)}
        labelProps={labelProps}
        onChange={handleFormChange}
      />
      {error ? <ErrorText text={error} /> : null}
    </div>
  )
}
