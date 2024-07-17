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
  const daysOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const sortWeekDays = shop => {
    const sortedDays = {}

    daysOrder.forEach(day => {
      if (shop.work_schedule.days[day]) {
        sortedDays[day] = shop.work_schedule.days[day]
      } else {
        sortedDays[day] = { start: '', end: '' }
      }
    })

    return {
      ...shop,
      work_schedule: {
        ...shop.work_schedule,
        days: sortedDays
      }
    }
  }
  const handleTimeChange = (day: string, time: { start: string; end: string }) => {
    const newWorkSchedule = { ...sortedWorkTimeValues.work_schedule }
    newWorkSchedule.days[day] = time
    handleHardValChange({ ...sortedWorkTimeValues, work_schedule: newWorkSchedule }, shopIndex)
  }

  const sortedWorkTimeValues = sortWeekDays(workTimeValues)
  return (
    <div className="flex flex-col gap-5">
      {Object.keys(sortedWorkTimeValues.work_schedule.days).map((day, index) => {
        return (
          <Day
            key={index}
            day={day}
            startTime={sortedWorkTimeValues.work_schedule.days[day].start}
            endTime={sortedWorkTimeValues.work_schedule.days[day].end}
            handleTimeChange={handleTimeChange}
          />
        )
      })}
    </div>
  )
}

export default WorkTime
