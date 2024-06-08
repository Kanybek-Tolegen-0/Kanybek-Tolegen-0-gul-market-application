export interface IFilter {
  label: React.ReactNode
  value: string | { min: number; max: number }
  name: string
}
