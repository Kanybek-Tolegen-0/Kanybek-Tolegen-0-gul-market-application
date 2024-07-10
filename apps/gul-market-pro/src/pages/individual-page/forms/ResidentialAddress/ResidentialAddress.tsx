import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { Typography } from '@material-tailwind/react'
import { Map } from '../../../../components'
import { StringInput } from '@design-system/ui'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error

const ResidentialAddress: FC<{
  formValues: { [key: string]: string }
  formErrors: { [key: string]: string }
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }) => void
}> = ({ formValues, formErrors, handleError, handleFormChange }) => {
  return (
    <>
      <div>
        <Typography children="Город проживания" className="font-medium text-sm text-gray-700 mr-auto mb-1" />

        <StringInput
          className="!border-gray-300 focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          name="city"
          value={formValues.city}
          onChange={handleFormChange}
          error={formErrors.city!}
          handleError={handleError}
          handleFormChange={handleFormChange}
        />
      </div>
      <div className="w-[566px] h-[242px] rounded-base overflow-hidden">
        <Map />
      </div>
    </>
  )
}

export default ResidentialAddress
