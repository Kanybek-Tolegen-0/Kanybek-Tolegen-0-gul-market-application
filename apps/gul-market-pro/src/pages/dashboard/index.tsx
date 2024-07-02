import { Header } from '@design-system/ui'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogin = () => {}

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header
        tabs={[
          { label: 'Главная', link: '/main' },
          { label: 'Каталог', link: '/catalog' },
          { label: 'Заказы', link: '/my-orders' },
          { label: 'Рекламация', link: '' }
        ]}
        handleLogin={() => {
          navigate('/login')
          handleLogin()
        }}
      />
      <Outlet />
    </div>
  )
}
