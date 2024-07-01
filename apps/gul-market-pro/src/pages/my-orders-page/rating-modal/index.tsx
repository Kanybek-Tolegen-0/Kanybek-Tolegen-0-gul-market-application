import { CrossBigIcon } from '@design-system/ui'
import { Button, Card, Rating, Textarea, Typography } from '@material-tailwind/react'
import React, { FC, useState } from 'react'

const initialFormValues = {
  quality: 0,
  fresh: 0,
  delivery: 0,
  comment: ''
}

export const RatingModal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formValues, setFormValues] = useState(initialFormValues)

  const disabledButton = !Object.values(formValues).every(v => v)

  return (
    <Card className="relative shadow-none rounded-[20px] p-[20px]">
      <Typography className="text-xl leading-7 font-semibold text-gray-900">
        Оцените работу плантации “Название плантации”
      </Typography>
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[8px]">
          <Typography className="text-sm leading-5 font-normal text-gray-500">Качество</Typography>
          <Rating
            value={formValues.quality}
            onChange={v => setFormValues(prev => ({ ...prev, quality: v }))}
            unratedIcon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.368 3.39239C14.6262 2.8692 15.3723 2.8692 15.6305 3.39239L18.973 10.165C19.0755 10.3728 19.2737 10.5168 19.503 10.5501L26.977 11.6362C27.5544 11.7201 27.7849 12.4296 27.3672 12.8368L21.9589 18.1086C21.793 18.2703 21.7173 18.5033 21.7564 18.7317L23.0332 26.1755C23.1318 26.7506 22.5282 27.1891 22.0118 26.9176L15.3268 23.4031C15.1217 23.2952 14.8767 23.2952 14.6717 23.4031L7.98667 26.9176C7.47025 27.1891 6.86669 26.7506 6.96532 26.1755L8.24204 18.7317C8.28121 18.5033 8.2055 18.2703 8.0396 18.1086L2.63131 12.8368C2.21353 12.4296 2.44407 11.7201 3.02143 11.6362L10.4955 10.5501C10.7248 10.5168 10.923 10.3728 11.0255 10.165L14.368 3.39239Z"
                  fill="#D1D5DB"
                  stroke="#D1D5DB"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            }
            ratedIcon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.368 3.39239C14.6262 2.8692 15.3723 2.8692 15.6305 3.39239L18.973 10.165C19.0755 10.3728 19.2737 10.5168 19.503 10.5501L26.977 11.6362C27.5544 11.7201 27.7849 12.4296 27.3672 12.8368L21.9589 18.1086C21.793 18.2703 21.7173 18.5033 21.7564 18.7317L23.0332 26.1755C23.1318 26.7506 22.5282 27.1891 22.0118 26.9176L15.3268 23.4031C15.1217 23.2952 14.8767 23.2952 14.6717 23.4031L7.98667 26.9176C7.47025 27.1891 6.86669 26.7506 6.96532 26.1755L8.24204 18.7317C8.28121 18.5033 8.2055 18.2703 8.0396 18.1086L2.63131 12.8368C2.21353 12.4296 2.44407 11.7201 3.02143 11.6362L10.4955 10.5501C10.7248 10.5168 10.923 10.3728 11.0255 10.165L14.368 3.39239Z"
                  fill="#FFD700"
                  stroke="#FFD700"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Typography className="text-sm leading-5 font-normal text-gray-500">Свежесть</Typography>
          <Rating
            value={formValues.fresh}
            onChange={v => setFormValues(prev => ({ ...prev, fresh: v }))}
            unratedIcon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.368 3.39239C14.6262 2.8692 15.3723 2.8692 15.6305 3.39239L18.973 10.165C19.0755 10.3728 19.2737 10.5168 19.503 10.5501L26.977 11.6362C27.5544 11.7201 27.7849 12.4296 27.3672 12.8368L21.9589 18.1086C21.793 18.2703 21.7173 18.5033 21.7564 18.7317L23.0332 26.1755C23.1318 26.7506 22.5282 27.1891 22.0118 26.9176L15.3268 23.4031C15.1217 23.2952 14.8767 23.2952 14.6717 23.4031L7.98667 26.9176C7.47025 27.1891 6.86669 26.7506 6.96532 26.1755L8.24204 18.7317C8.28121 18.5033 8.2055 18.2703 8.0396 18.1086L2.63131 12.8368C2.21353 12.4296 2.44407 11.7201 3.02143 11.6362L10.4955 10.5501C10.7248 10.5168 10.923 10.3728 11.0255 10.165L14.368 3.39239Z"
                  fill="#D1D5DB"
                  stroke="#D1D5DB"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            }
            ratedIcon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.368 3.39239C14.6262 2.8692 15.3723 2.8692 15.6305 3.39239L18.973 10.165C19.0755 10.3728 19.2737 10.5168 19.503 10.5501L26.977 11.6362C27.5544 11.7201 27.7849 12.4296 27.3672 12.8368L21.9589 18.1086C21.793 18.2703 21.7173 18.5033 21.7564 18.7317L23.0332 26.1755C23.1318 26.7506 22.5282 27.1891 22.0118 26.9176L15.3268 23.4031C15.1217 23.2952 14.8767 23.2952 14.6717 23.4031L7.98667 26.9176C7.47025 27.1891 6.86669 26.7506 6.96532 26.1755L8.24204 18.7317C8.28121 18.5033 8.2055 18.2703 8.0396 18.1086L2.63131 12.8368C2.21353 12.4296 2.44407 11.7201 3.02143 11.6362L10.4955 10.5501C10.7248 10.5168 10.923 10.3728 11.0255 10.165L14.368 3.39239Z"
                  fill="#FFD700"
                  stroke="#FFD700"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Typography className="text-sm leading-5 font-normal text-gray-500">Доставка</Typography>
          <Rating
            value={formValues.delivery}
            onChange={v => setFormValues(prev => ({ ...prev, delivery: v }))}
            unratedIcon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.368 3.39239C14.6262 2.8692 15.3723 2.8692 15.6305 3.39239L18.973 10.165C19.0755 10.3728 19.2737 10.5168 19.503 10.5501L26.977 11.6362C27.5544 11.7201 27.7849 12.4296 27.3672 12.8368L21.9589 18.1086C21.793 18.2703 21.7173 18.5033 21.7564 18.7317L23.0332 26.1755C23.1318 26.7506 22.5282 27.1891 22.0118 26.9176L15.3268 23.4031C15.1217 23.2952 14.8767 23.2952 14.6717 23.4031L7.98667 26.9176C7.47025 27.1891 6.86669 26.7506 6.96532 26.1755L8.24204 18.7317C8.28121 18.5033 8.2055 18.2703 8.0396 18.1086L2.63131 12.8368C2.21353 12.4296 2.44407 11.7201 3.02143 11.6362L10.4955 10.5501C10.7248 10.5168 10.923 10.3728 11.0255 10.165L14.368 3.39239Z"
                  fill="#D1D5DB"
                  stroke="#D1D5DB"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            }
            ratedIcon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.368 3.39239C14.6262 2.8692 15.3723 2.8692 15.6305 3.39239L18.973 10.165C19.0755 10.3728 19.2737 10.5168 19.503 10.5501L26.977 11.6362C27.5544 11.7201 27.7849 12.4296 27.3672 12.8368L21.9589 18.1086C21.793 18.2703 21.7173 18.5033 21.7564 18.7317L23.0332 26.1755C23.1318 26.7506 22.5282 27.1891 22.0118 26.9176L15.3268 23.4031C15.1217 23.2952 14.8767 23.2952 14.6717 23.4031L7.98667 26.9176C7.47025 27.1891 6.86669 26.7506 6.96532 26.1755L8.24204 18.7317C8.28121 18.5033 8.2055 18.2703 8.0396 18.1086L2.63131 12.8368C2.21353 12.4296 2.44407 11.7201 3.02143 11.6362L10.4955 10.5501C10.7248 10.5168 10.923 10.3728 11.0255 10.165L14.368 3.39239Z"
                  fill="#FFD700"
                  stroke="#FFD700"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <Typography className="text-sm leading-5 font-medium text-gray-700">Отзыв</Typography>
          <Textarea
            placeholder="Напишите свой отзыв, чтобы помочь другим покупателям"
            onChange={e => {
              setFormValues(prev => ({ ...prev, comment: e.target.value }))
            }}
          />
        </div>

        <Button className="bg-pink-500 text-primary" disabled={disabledButton}>
          Оставить отзыв
        </Button>
      </div>
      <div
        className="absolute top-[-48px] right-0 flex justify-center items-center p-0 bg-inherit w-max cursor-pointer"
        style={{ background: 'none' }}
        onClick={e => {
          e.preventDefault()
          onClose()
        }}
      >
        <CrossBigIcon />
      </div>
    </Card>
  )
}
