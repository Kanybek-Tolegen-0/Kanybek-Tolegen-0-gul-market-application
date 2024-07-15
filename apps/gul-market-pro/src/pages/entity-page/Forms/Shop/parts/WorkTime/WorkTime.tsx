import React, { FunctionComponent } from 'react'
import Day from './Day/Day'
import { Shop } from '../../../../types'
import { FormErrors, FormValues } from '../../../../entity-page'

interface TimeProps {
  workTimeValues: Shop
  workTimeErrors: Shop
  shopIndex: number
  handleHardValChange: (vals: FormValues, shopIndex: number) => void
  handleHardErrorChange: (errs: FormErrors, shopIndex: number) => void
}

const WorkTime: FunctionComponent<TimeProps> = ({
  workTimeValues,
  workTimeErrors,
  shopIndex,
  handleHardValChange,
  handleHardErrorChange
}) => {
  const handleTimeChange = (day: string, time: { start: string; end: string }) => {
    const newWorkSchedule = { ...workTimeValues.work_schedule }
    newWorkSchedule.days[day] = time
    handleHardValChange({ ...workTimeValues, work_schedule: newWorkSchedule }, shopIndex)
  }
  return (
    <div className="flex flex-col gap-5">
      {Object.keys(workTimeValues.work_schedule.days).map((day, index) => {
        return (
          <Day
            key={index}
            day={day}
            startTime={workTimeValues.work_schedule.days[day].start}
            endTime={workTimeValues.work_schedule.days[day].end}
            handleTimeChange={handleTimeChange}
          />
        )
      })}
    </div>
  )
}

export default WorkTime
