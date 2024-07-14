import React, { FC } from 'react'
interface ITable {
  headers: {
    label: string
    key: string
    renderCell?: (value: string | number | boolean | undefined) => Exclude<React.ReactNode, undefined>
  }[]
  items: Array<Array<string | number | undefined | boolean>>
  itemOnClick?: (data: any) => void
  normalItems: any
}

export const Table: FC<ITable> = ({ headers, items, itemOnClick, normalItems }) => {
  return (
    <table className="border-separate w-full">
      <thead>
        <tr>
          {headers.map(({ label }) => (
            <th key={label} className="text-xs text-left text-gray-500 font-normal px-[12px] py-[8px]">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((it, m) => (
          <tr key={m} onClick={() => itemOnClick && itemOnClick(normalItems[m])} className={'cursor-pointer'}>
            {headers.map((header, n) => {
              const cellValue = it[n]
              const renderCell = header?.renderCell

              return (
                <td className="text-xs bg-gray-100 text-gray-500 font-normal px-[12px] py-[8px]" key={`${m}${n}`}>
                  {renderCell ? renderCell(cellValue) : cellValue}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
