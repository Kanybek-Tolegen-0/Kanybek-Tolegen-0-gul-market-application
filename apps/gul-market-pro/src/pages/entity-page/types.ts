// export interface Address {
//   city: string
//   street: string
//   house: string
// }

export interface WorkScheduleDay {
  start: string
  end: string
}

export interface WorkSchedule {
  days: {
    Mon: WorkScheduleDay
    Tue: WorkScheduleDay
    Wed: WorkScheduleDay
    Thu: WorkScheduleDay
    Fri: WorkScheduleDay
    Sat: WorkScheduleDay
  }
}

export interface Shop {
  name: string
  description: string
  addresses: string[]
  work_schedule: WorkSchedule
}
