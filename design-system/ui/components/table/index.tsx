import React, { FC } from 'react'

interface ITable {
  headers: {
    label: string
    key: string
    renderCell?: (value: string | number | boolean | undefined) => Exclude<React.ReactNode, undefined>
  }[]
  items: Array<Array<string | number | undefined | boolean>>
}

export const Table: FC<ITable> = ({ headers, items }) => {
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
          <tr key={m}>
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
