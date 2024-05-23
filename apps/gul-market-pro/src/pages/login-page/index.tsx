import { Layout } from '@design-system/ui'
import { Typography } from '@material-tailwind/react'
import React, { FunctionComponent } from 'react'

export const LoginPage: FunctionComponent = () => {
  return (
    <div className="flex">
      <div>
        <Typography className="text-3xl font-bold">Покупайте цветы напрямую с плантаций</Typography>
      </div>
    </div>
  )
}
