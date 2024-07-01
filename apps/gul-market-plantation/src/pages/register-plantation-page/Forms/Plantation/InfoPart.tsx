import React, { FunctionComponent } from 'react'
import { Typography } from '@material-tailwind/react'

interface InfoPartProps {
  title?: string
  children?: React.ReactNode
}

const InfoPart: FunctionComponent<InfoPartProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <Typography children={title} className="font-bold text-base" />
      {children}
    </div>
  )
}

export default InfoPart
