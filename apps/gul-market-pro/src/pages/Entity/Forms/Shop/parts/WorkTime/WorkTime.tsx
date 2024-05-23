import React, { FunctionComponent } from 'react'
import Day from './Day/Day'

interface TimeProps {}

const WorkTime: FunctionComponent<TimeProps> = props => {
  return (
    <>
      <Day day={'pon'} />
    </>
  )
}

export default WorkTime
