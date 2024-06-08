import React, { FC } from 'react'
import { StarIcon } from '../../assets'
import { Typography } from '@material-tailwind/react'

export const MiniCard: FC<{ rating: number; label: string; imgSrc: string; showNewFlag?: boolean }> = ({
  rating,
  label,
  imgSrc,
  showNewFlag = false
}) => (
  <div className="flex gap-4 bg-gr-100 p-[12px] rounded-base">
    <img width={56} height={56} src={imgSrc} />
    <div className="flex justify-between flex-col w-full">
      <div className={`flex items-center ${showNewFlag ? 'justify-between' : 'gap-2'}`}>
        {showNewFlag ? <div className="bg-pink-400 text-xs rounded px-[4px] py-[2px] text-white">Новая</div> : null}
        <div className="flex justify-between items-center">
          <StarIcon />
          <Typography className="text-xs text-gr-700 font-normal">{rating}</Typography>
        </div>
      </div>
      <Typography className="text-sm text-gr-700 font-light">{label}</Typography>
    </div>
  </div>
)
