import { z } from 'zod'

const addressSchema = z.object({
  city: z.string(),
  street: z.string(),
  house: z.string()
})

const dayScheduleSchema = z.object({
  start: z.string(),
  end: z.string()
})

const workScheduleSchema = z.object({
  days: z.object({
    Mon: dayScheduleSchema,
    Tue: dayScheduleSchema,
    Wed: dayScheduleSchema,
    Thu: dayScheduleSchema,
    Fri: dayScheduleSchema,
    Sat: dayScheduleSchema,
    Sun: dayScheduleSchema
  })
})

export const shopSchema = z.object({
  name: z.string(),
  description: z.string(),
  addresses: z.array(addressSchema),
  work_schedule: workScheduleSchema
})

export const shopsSchema = z.object({
  shops: z.array(shopSchema)
})
