import React, { ChangeEvent, FC } from 'react'
import { Container, StringInput } from '@design-system/ui'
import { Input, Typography } from '@material-tailwind/react'

interface IFullNameFormProps {
  formValues: { [key: string]: string }
  formErrors: { [key: string]: string }
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }) => void
}

const FullName: FC<IFullNameFormProps> = ({ formValues, formErrors, handleError, handleFormChange }) => {
  return (
    <div className={'flex flex-col gap-5'}>
      <div>
        <Typography children="Ваша фамилия" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <StringInput
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          name="surname"
          value={formValues.surname}
          error={formErrors.surname!}
          handleError={handleError}
          handleFormChange={handleFormChange}
        />
      </div>
      <div>
        <Typography children="Ваше имя" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <StringInput
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          name="name"
          value={formValues.name}
          error={formErrors.name!}
          handleError={handleError}
          handleFormChange={handleFormChange}
        />
      </div>

      <div>
        <Typography children="Ваше Отчество" className="font-medium text-sm text-gray-700 mr-auto mb-1" />
        <StringInput
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          name="patronym"
          value={formValues.patronym}
          error={formErrors.patronym!}
          handleError={handleError}
          handleFormChange={handleFormChange}
        />
      </div>
    </div>
  )
}

export default FullName
