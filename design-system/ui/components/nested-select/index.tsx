import React, { FC, useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '../../assets'

export interface OptionProps {
  label: string
  value: string
  options?: OptionProps[]
}

interface NestedSelectProps {
  options: OptionProps[]
  onChange?: (value: string) => void
  className?: string
  children?: React.ReactNode
}

const NestedSelect: FC<NestedSelectProps> = ({ options, onChange, className, children }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [expandedOption, setExpandedOption] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  const handleOptionClick = (value: string, hasSubOptions: boolean) => {
    if (!hasSubOptions) {
      setSelectedValue(value)
      if (onChange) {
        onChange(value)
      }
      setExpandedOption(null)
      setDropdownOpen(false)
    }
  }

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen)
    setExpandedOption(null)
  }

  const handleMouseEnter = (value: string) => {
    setExpandedOption(value)
  }

  const handleMouseLeave = () => {
    setExpandedOption(null)
  }

  const getLabelByValue = (value: string | null) => {
    if (value === null) return 'Выберите склад доставки'
    for (const option of options) {
      if (option.value === value) return option.label
      if (option.options) {
        for (const subOption of option.options) {
          if (subOption.value === value) return option.label + ' (' + subOption.label + ')'
        }
      }
    }
    return 'Выберите склад доставки'
  }

  return (
    <div className={`relative ${className} select-none`}>
      <div
        className="border border-gray-300 shadow-select text-gray-700 font-medium text-sm rounded-md py-[9px] pl-[17px] pr-[13px] cursor-pointer flex justify-between items-center"
        onClick={handleDropdownToggle}
      >
        <span>{getLabelByValue(selectedValue)}</span>
        <ChevronDownIcon />
      </div>
      {dropdownOpen && (
        <div
          className={`absolute mt-1 w-full bg-white shadow-select-options border border-gray-300 py-1 rounded-md z-10 flex flex-col items-center`}
        >
          {options.map(({ label, value, options: subOptions }) => (
            <div
              key={value}
              className="relative self-baseline w-full"
              onMouseEnter={() => handleMouseEnter(value)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`
                  cursor-pointer ${expandedOption === value && 'bg-blue-50'} flex items-center justify-between px-[16px] py-[8px] text-gray-700 font-normal text-sm
                `}
                onClick={() => handleOptionClick(value, !!subOptions)}
              >
                {label}
                {subOptions && <ChevronRightIcon />}
              </div>
              {expandedOption === value && subOptions && (
                <div className="absolute top-0 left-full w-[260px] bg-white shadow-lg border border-gray-300 rounded-md z-20 py-1">
                  {subOptions.map(({ label: subLabel, value: subValue }) => (
                    <div
                      key={subValue}
                      className="cursor-pointer hover:bg-gray-100 flex items-center justify-between px-[16px] py-[8px] text-gray-700 font-normal text-sm"
                      onClick={() => handleOptionClick(subValue, false)}
                    >
                      {subLabel}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div
            className={`${options.length === 0 ? 'py-[36.5px] font-normal text-base' : 'pt-6 pb-3 font-medium text-sm'} px-3 w-full text-gray-800`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default NestedSelect
