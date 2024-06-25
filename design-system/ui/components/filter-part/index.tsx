import React, { FC, useState } from 'react'
import { Typography } from '@material-tailwind/react'
import { SearchInputProps } from '../search-input'
import { useCollapse } from 'react-collapsed'
import { ChevronUpIcon } from '../../assets'

interface FilterPartProps extends SearchInputProps {
  label: string
  children: React.ReactNode
  collapsable?: boolean
}

export const FilterPart: FC<FilterPartProps> = ({ label, children, collapsable = false }) => {
  const [isExpanded, setExpanded] = useState(true)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  function handleOnClick() {
    setExpanded(!isExpanded)
  }

  return (
    <div className="flex flex-col gap-4 collapsible">
      <div className="flex justify-between">
        <Typography className="text-sm leading-4 font-medium text-gray-500">{label}</Typography>
        {collapsable ? (
          <ChevronUpIcon
            className={`outline-none border-[0px] transition-all duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
            {...getToggleProps({ onClick: handleOnClick })}
          />
        ) : null}
      </div>

      <div className="content" {...getCollapseProps()}>
        {children}
      </div>
    </div>
  )
}
