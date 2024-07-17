import zod, { ZodIssueCode } from 'zod'

export const passwordSchema = zod.string().superRefine((val, ctx) => {
  if (val.length < 8) {
    ctx.addIssue({ code: ZodIssueCode.custom, message: 'Минимальная длина пароля 8 символов' })
  } else if (!val.match(/[0-9]/)) {
    ctx.addIssue({ code: ZodIssueCode.custom, message: 'Пароль должен содержать хотя бы одну цифру' })
  } else if (!val.match(/[a-z]/)) {
    ctx.addIssue({ code: ZodIssueCode.custom, message: 'Пароль должен содержать хотя бы одну строчную букву' })
  } else if (!val.match(/[A-Z]/)) {
    ctx.addIssue({ code: ZodIssueCode.custom, message: 'Пароль должен содержать хотя бы одну заглавную букву' })
  }
})
