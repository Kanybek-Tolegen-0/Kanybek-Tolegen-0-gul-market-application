import React from 'react'
import { Button } from '@design-system/ui'
import { Input } from '@material-tailwind/react'

export function App() {
  return (
    <div className="flex flex-col gap-3.5 ">
      <Button>Создать аккаунт</Button>
      <div className="w-72">
        <Input label="Электронная почта" variant="static" icon={<i className="fas fa-heart" />} crossOrigin="" />
      </div>
    </div>
  )
}
