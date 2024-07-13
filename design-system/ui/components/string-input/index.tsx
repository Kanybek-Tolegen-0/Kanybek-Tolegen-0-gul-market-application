import React, { ChangeEvent, FC } from 'react'
import { Input, InputProps } from '@material-tailwind/react'
import { stringSchema } from './stringSchema'
import { ZodError } from 'zod'
import { ErrorText } from '../error-text'

interface StringInputProps extends Omit<InputProps, 'name' | 'onBlur' | 'error'> {
  name: string
  label?: string
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }, addressIndex?: number) => void
  handleFormChange: (e: ChangeEvent<HTMLInputElement>, addressIndex?: number) => void
  error: string
  className: string
  addressIndex?: number
}

export const StringInput: FC<StringInputProps> = ({
  name,
  handleError,
  error,
  label,
  className,
  labelProps,
  handleFormChange,
  value,
  addressIndex
}) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <Input
        name={name}
        label={label && label}
        value={value}
        onBlur={e => {
          const { value } = e.target
          try {
            stringSchema.parse(value)
            handleError({ name, errorMessage: '' }, addressIndex)
          } catch (err) {
            if (err instanceof ZodError) {
              const errorMessage = err.errors[0]?.message
              errorMessage && handleError({ name: name, errorMessage }, addressIndex)
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
