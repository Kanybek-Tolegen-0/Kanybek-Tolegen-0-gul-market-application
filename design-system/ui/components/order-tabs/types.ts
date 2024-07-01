export interface OrderTabsProps<T> {
  active: T | undefined
  tabs: { label: string; value: T }[]
  onChange: (tab: T) => void
}
