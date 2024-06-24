import { ICell, THeader } from '../@types'

export const itemsAdapter = ({ data, headers }: { data: ICell[]; headers: THeader }) =>
  data.map(dt => headers.map(({ key }) => dt[key]))
