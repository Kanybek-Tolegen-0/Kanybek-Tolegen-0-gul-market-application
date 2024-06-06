import { Button, Checkbox, CheckboxProps, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { SearchInput, SearchInputProps } from '../search-input'

interface CheckboxGroupProps extends SearchInputProps {
  options:
    | { label: string; value: string }[]
    | { [key: string]: { label: string; options: { label: string; value: string }[] } }
  checkboxProps: CheckboxProps
  showButton?: boolean
  onShowButtonClick?: (show: boolean) => void
  onCheckboxChange: ({ label, value }: { label: string; value: string }) => void
}

export const CheckboxGroup = React.forwardRef<HTMLInputElement, CheckboxGroupProps>(
  ({ inputProps, showButton = false, options, checkboxProps, onCheckboxChange }, ref) => {
    const [show, setShow] = useState(showButton)
    return (
      <>
        <SearchInput inputProps={inputProps} />
        {Array.isArray(options) ? (
          <div className="flex flex-col">
            {options.map(({ label, value }) => (
              <Checkbox
                key={value}
                label={label}
                value={value}
                className={'pl-0'}
                labelProps={{
                  className: 'text-sm leading-none font-normal text-gr-800'
                }}
                onChange={() => onCheckboxChange({ label, value })}
                crossOrigin=""
                {...checkboxProps}
                ref={ref}
              />
            ))}
          </div>
        ) : (
          Object.entries(options).map(([key, value]) => (
            <div key={key}>
              <Typography className="text-sm leading-none font-normal">{value.label}</Typography>
              <div className="flex flex-col">
                {value.options.map(({ label, value }) => (
                  <Checkbox
                    key={value}
                    label={label}
                    value={value}
                    className={'pl-0'}
                    labelProps={{
                      className: 'text-sm leading-none font-normal text-gr-800'
                    }}
                    onChange={() => onCheckboxChange({ label, value: key })}
                    crossOrigin=""
                    {...checkboxProps}
                    ref={ref}
                  />
                ))}
              </div>
            </div>
          ))
        )}
        {show ? (
          <Button
            className="normal-case text-sm leading-none font-normal text-gr-700 bg-gr-100"
            variant="filled"
            onClick={() => setShow(false)}
          >
            Показать все
          </Button>
        ) : null}
      </>
    )
  }
)
