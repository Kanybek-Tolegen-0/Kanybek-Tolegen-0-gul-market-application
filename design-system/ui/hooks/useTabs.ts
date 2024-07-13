import { useState } from 'react'
import { createSearchParams, useLocation, useSearchParams } from 'react-router-dom'

export const useTabs = <T>({ tabs }: { tabs: { label: string; value: T }[] }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState(tabs[0]?.value)
  const onTabChange = (tab: T) => {
    setSearchParams(createSearchParams({ status: tab }))

    setActiveTab(tab)
  }

  return { activeTab, onTabChange }
}
