import React, { useCallback, useEffect, useState, useRef, FC } from 'react'
import { Input, Typography } from '@material-tailwind/react'
import './style.css'

export const DoubleSlider: FC<{
  name: string
  metric: string
  min: number
  max: number
  onChange: ({ min, max, name, metric }: { min: number; max: number; name: string; metric: string }) => void
}> = ({ name, metric, min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef<HTMLInputElement>(null)

  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max])

  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  return (
    <>
      <div className="flex gap-4 pb-[16px]">
        <Input
          value={minVal}
          type="number"
          label="От"
          icon={metric}
          onChange={e => setMinVal(+e.target.value)}
          crossOrigin=""
        />
        <Input
          value={maxVal}
          type="number"
          label="До"
          icon={metric}
          onChange={e => setMaxVal(+e.target.value)}
          crossOrigin=""
        />
      </div>

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={event => {
            const value = Math.min(Number(event.target.value), maxVal - 1)
            setMinVal(value)
            minValRef.current = value
          }}
          onMouseUp={() => onChange({ min: minVal, max: maxVal, name, metric })}
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={event => {
            const value = Math.max(Number(event.target.value), minVal + 1)
            setMaxVal(value)
            maxValRef.current = value
          }}
          onMouseUp={() => onChange({ min: minVal, max: maxVal, name, metric })}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>
    </>
  )
}

// MultiRangeSlider.propTypes = {
//   min: PropTypes.number.isRequired,
//   max: PropTypes.number.isRequired,
//   onChange: PropTypes.func.isRequired
// };
