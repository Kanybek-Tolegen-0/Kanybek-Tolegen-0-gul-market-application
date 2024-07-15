import { z, ZodIssueCode } from 'zod'

const addressSchema = z.string().superRefine((val, ctx) => {
  if (val.length === 0) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: 'Это обязательное поле'
    })
  }
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
    Sat: dayScheduleSchema
  })
})

export const shopSchema = z.object({
  name: z.string().superRefine((val, ctx) => {
    if (val.length === 0) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: 'Это обязательное поле'
      })
    }
  }),
  description: z.string(),
  addresses: z.array(addressSchema),
  work_schedule: workScheduleSchema
})

export const shopsSchema = z.array(shopSchema)
