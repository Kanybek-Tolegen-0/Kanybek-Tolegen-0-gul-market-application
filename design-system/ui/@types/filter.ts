export interface IFilter {
  label: string
  value: number | string | { min: number; max: number } | (string | number | { min: number; max: number })[]
  name: string
}
