import { useState } from 'react'

export const useTabs = <T>({ tabs }: { tabs: { label: string; value: T }[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value)

  const onTabChange = (tab: T) => {
    setActiveTab(tab)
  }

  return { activeTab, onTabChange }
}
