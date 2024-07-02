import zod, { ZodIssueCode } from 'zod'

export const phoneNumberSchema = zod.string().superRefine((val, ctx) => {
  console.log({ val })
  if (val.length === 0) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: 'Это обязательное поле'
    })
  } else if (!val.match(/\(\d{3}\) \d{3} \d{2} \d{2}/)) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: 'Некорректный номер телефона'
    })
  }
})
