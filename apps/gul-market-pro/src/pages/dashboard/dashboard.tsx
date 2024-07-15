import { Header, NotificationIcon, SearchInput, Select } from '@design-system/ui'
import React, { useState } from 'react'
import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const TABS = [
  { label: 'Главная', link: '/main' },
  { label: 'Каталог', link: '/catalog' },
  { label: 'Заказы', link: '/my-orders' },
  { label: 'Рекламация', link: '' }
]

const COUNTRY_OPTIONS = [
  { label: 'Эквадор', value: 'Эквадор' },
  { label: 'Аргентина', value: 'Аргентина', soon: true },
  { label: 'Бразилия', value: 'Бразилия', soon: true },
  { label: 'Пуэрто-Рико', value: 'Пуэрто-Рико', soon: true }
]

type ContextType = { wallet: number | null }
export interface ILoaderData {
  wallet: number
}
const Dashboard = () => {
  const loaderData: { wallet: number } = useLoaderData() as ILoaderData
  const navigate = useNavigate()
  const location = useLocation()
  const country = new URLSearchParams(location?.search).get('country')
  const handleLogin = () => {}

  const renderCountryOptions = () => (
    <>
      <Select value={country || COUNTRY_OPTIONS[0]?.value} options={COUNTRY_OPTIONS} className="h-[38px]" />
      <SearchInput inputProps={{ placeholder: 'Искать товар или плантацию' }} className="h-[38px]" />
      <div className="w-6 h-6">
        <NotificationIcon />
      </div>
    </>
  )

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header
        tabs={TABS}
        handleLogin={() => {
          navigate('/login')
          handleLogin()
        }}
        renderCountryOptions={renderCountryOptions}
        fullHeader
        isLogged
        loaderData={loaderData}
      />
      <Outlet context={{ wallet: loaderData?.wallet } satisfies ContextType} />
    </div>
  )
}

export default Dashboard
