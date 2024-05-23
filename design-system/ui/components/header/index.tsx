import React, { useState } from 'react'
import { UserIcon } from '../../assets'

export const Header = () => {
  const [isLogged, setIslogged] = useState(false)

  return (
    <div className="flex items-center justify-between px-24 py-4">
      <h1 className="text-3xl" style={{ color: '#939393' }}>
        Logo
      </h1>
      <button className="text-sm">Войти</button>
      <UserIcon />
    </div>
  )
}
