import React, { FC, useState } from 'react'
import { EyesOpenIcon, EyesClosedIcon } from '../../assets'
import { Input } from '@material-tailwind/react'
import { Label } from '../label'
import '../input/style.css'

export const PasswordInput: FC<{ className?: string; label?: string; secondary?: React.ReactNode }> = ({
  className,
  label,
  secondary
}) => {
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
        type={show ? 'text' : 'password'}
        className={`${className} input rounded-md border border-gr-300`}
        icon={
          <div className="p-0" onClick={() => setShow(prev => !prev)}>
            {show ? <EyesClosedIcon className="cursor-pointer" /> : <EyesOpenIcon className="cursor-pointer" />}
          </div>
        }
        crossOrigin
      />
    </div>
  )
}
