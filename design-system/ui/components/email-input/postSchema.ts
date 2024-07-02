import zod, { ZodIssueCode } from 'zod'

export const emailSchema = zod.string().superRefine((val, ctx) => {
  if (val.length === 0) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: 'Это обязательное поле'
    })
  } else if (!val.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: 'Некорректный эмейл'
    })
  }
})
