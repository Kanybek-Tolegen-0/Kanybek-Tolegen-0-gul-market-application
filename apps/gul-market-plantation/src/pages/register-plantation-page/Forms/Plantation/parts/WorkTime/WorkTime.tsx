import React, { FunctionComponent } from 'react'
import Day from './Day/Day'

interface TimeProps {}

const WorkTime: FunctionComponent<TimeProps> = props => {
  return (
    <div className="flex flex-col gap-5">
      <Day day={'Понедельник'} />
      <Day day={'Вторник'} />
      <Day day={'Среда'} />
      <Day day={'Четверг'} />
      <Day day={'Пятница'} />
      <Day day={'Суббота'} />
      <Day day={'Воскресенье'} />
    </div>
  )
}

export default WorkTime
