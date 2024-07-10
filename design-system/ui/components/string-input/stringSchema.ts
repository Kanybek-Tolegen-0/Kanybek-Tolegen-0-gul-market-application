import zod, { ZodIssueCode } from 'zod'

export const stringSchema = zod.string().superRefine((val, ctx) => {
  if (val.length === 0) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: 'Это обязательное поле'
    })
  }
})
