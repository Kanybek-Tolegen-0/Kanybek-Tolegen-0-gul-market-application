import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { PlantationSection } from '../../constants'
import { fakePlantation, StarIcon } from '@design-system/ui'
interface PlantationSectionProps {
  sectionData: PlantationSection
}

const PlantationSection: FC<PlantationSectionProps> = ({ sectionData }) => {
  const { title, buttonAdd, plantations } = sectionData
  return (
    <div>
      <div className="flex justify-between mb-8">
        <Typography children={title} className="font-normal text-3xl text-gray-800" />
        <button className="rounded-[8px] px-3 py-1.5 bg-gray-100 font-normal text-base text-gray-900">
          Смотреть все плантации {buttonAdd}
        </button>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-5">
        {plantations.map((plant, idx) => {
          const { logo, newPlant, name, specification, rating } = plant
          return (
            <div key={name + idx} className="flex gap-3 w-[386px] rounded-base p-3 bg-gray-50 items-center">
              <img alt="plantation logo" src={logo} />
              <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between font-normal !text-xsm">
                  {newPlant && <button className="rounded-[4px] px-1 py-0.5 bg-pink-400 text-primary">Новая</button>}
                  <div className="flex items-center gap-1 h-4">
                    <StarIcon />
                    <Typography children={rating} className="text-gray-700 font-normal !text-xsm" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Typography children={name} className="font-light text-sm text-gray-900" />
                  <Typography children={specification} className="font-normal text-xs text-gray-500" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlantationSection
