import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { Button, IconButton, Typography } from '@material-tailwind/react'
import { StepHeader } from '../../components'
import { configs } from './constants'
import { BrandButton, Container, Layout } from '@design-system/ui'
import { createSearchParams, Form, Link, useLocation, useSearchParams, useSubmit } from 'react-router-dom'
import { ChevronLeftIcon } from '@design-system/ui'
import { GMStepper } from '@design-system/ui'
import './style.css'
import { PlusIcon } from '@design-system/ui'
import { stringSchema } from '@design-system/ui/ui/components/string-input/stringSchema'
import { ZodError } from 'zod'
import { shopsSchema } from '../individual-page/schemas'
import { Shop } from './types'

const newValues = {
  name: '',
  description: '',
  addresses: [''],
  work_schedule: {
    days: {
      Mon: {
        start: '',
        end: ''
      },
      Tue: {
        start: '',
        end: ''
      },
      Wed: {
        start: '',
        end: ''
      },
      Thu: {
        start: '',
        end: ''
      },
      Fri: {
        start: '',
        end: ''
      },
      Sat: {
        start: '',
        end: ''
      }
    }
  }
}

const newErrors = {
  name: '',
  description: '',
  addresses: [''],
  work_schedule: {
    days: {
      Mon: {
        start: '',
        end: ''
      },
      Tue: {
        start: '',
        end: ''
      },
      Wed: {
        start: '',
        end: ''
      },
      Thu: {
        start: '',
        end: ''
      },
      Fri: {
        start: '',
        end: ''
      },
      Sat: {
        start: '',
        end: ''
      }
    }
  }
}
export type FormValues = {
  [key: string]: string | string[]
}

export type FormErrors = {
  [key: string]: string | string[]
}

const EntityPage: FC = props => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLastStep, setIsLastStep] = React.useState(false)
  const [isFirstStep, setIsFirstStep] = React.useState(false)
  const location = useLocation()
  const [createdShops, setCreatedShops] = useState<Shop[]>([])
  const { steps_content, stepper_configs } = configs

  const content = steps_content[activeStep]!

  const StepForm = content.stepForm

  const [formValues, setFormValues] = useState<FormValues | FormValues[]>(content.initialFormValues)
  const [formErrors, setFormErrors] = useState<FormErrors | FormErrors[]>(content.initialFormErrors)
  const submit = useSubmit()
  const [searchParams, setSearchParams] = useSearchParams()

  console.log('formValues', formValues)
  console.log('formErrors', formErrors)
  const validateForm = () => {
    const errorsObject: FormErrors = {}

    if (Array.isArray(formValues)) {
      const result = shopsSchema.safeParse(formValues)
      if (!result.success) {
        result.error.errors.forEach(error => {
          const { path, message } = error
          const [index, ...restPath] = path
          const key = restPath.join('.')
          const Shops = [...formErrors] as FormErrors[]
          if (key.startsWith('addresses')) {
            const [name, addressIndex] = key.split('.')
            Shops[index][name][parseInt(addressIndex, 10)] = message
          } else {
            Shops[index][key] = message
          }
          setFormErrors(Shops)
        })
        return false
      }
    } else {
      Object.keys(formValues).forEach(key => {
        try {
          stringSchema.parse(formValues[key])
        } catch (err) {
          if (err instanceof ZodError) {
            errorsObject[key] = err.errors[0]?.message || ''
          } else {
            errorsObject[key] = 'Invalid value'
          }
        }
      })
      setFormErrors(errorsObject)
    }

    return !Object.values(errorsObject).some(error => error)
  }

  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (!isFirstStep) {
      setActiveStep(cur => cur - 1)
    }
  }

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues(prev => ({ ...prev, [name]: value }))
  }

  const handleHardValChange = (vals: FormValues, shopIndex: number) => {
    setFormValues(prev => {
      const ShopValues = [...prev] as FormValues[]
      ShopValues[shopIndex] = vals
      return ShopValues
    })
  }

  const handleHardErrorChange = (errs: FormErrors, shopIndex: number) => {
    setFormErrors(prev => {
      const ShopErrors = [...prev] as FormErrors[]
      ShopErrors[shopIndex] = errs
      return ShopErrors
    })
  }
  const handleError = ({ name, errorMessage }: { name: string; errorMessage: string }) => {
    setFormErrors(prev => ({ ...prev, [name]: errorMessage }))
  }
  const handleNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      if (!isLastStep) {
        setActiveStep(cur => cur + 1)
      }
      submit(
        {
          activeStep,
          formValues
        },
        { method: 'put', encType: 'application/json' }
      )
      if (activeStep !== 2) {
        const newSearchParams: Record<string, string> = {}
        searchParams.forEach((value, key) => {
          newSearchParams[key] = value
        })
        if (Array.isArray(formValues)) {
          newSearchParams['shops'] = JSON.stringify(formValues)
        } else {
          Object.entries(formValues).forEach(([key, value]) => {
            newSearchParams[key] = value
          })
        }

        setSearchParams(createSearchParams(newSearchParams))
      }
    }
  }
  const addShop = () => {
    setFormValues(prev => {
      const newFormValues = [...(prev as FormValues[])]
      newFormValues.push(newValues)
      return newFormValues
    })
    setFormErrors(prev => {
      const newFormErrors = [...(prev as FormErrors[])]
      newFormErrors.push(newErrors)
      return newFormErrors
    })
  }

  useEffect(() => {
    setFormValues(content.initialFormValues)
    setFormErrors(content.initialFormErrors)
  }, [activeStep])

  useEffect(() => {
    const shopsFromParams = searchParams.get('shops')
    if (shopsFromParams) {
      const parsedShops: Shop[] = JSON.parse(shopsFromParams)
      setCreatedShops(parsedShops)
    }
  }, [searchParams])
  return (
    <Layout>
      <Layout.Content>
        <div className="flex flex-col items-center">
          <GMStepper
            activeStep={activeStep}
            stepper_configs={stepper_configs}
            onStepChange={setActiveStep}
            isLastStep={setIsLastStep}
            isFirstStep={setIsFirstStep}
          />
          <StepHeader title={content.title} description={content.description} />
          <Form onSubmit={handleNext} method="put">
            {activeStep === 0 ? (
              <Container className={'flex-col mb-6 min-w-[630px]'}>
                <StepForm
                  formValues={formValues}
                  formErrors={formErrors}
                  handleFormChange={handleFormChange}
                  handleError={handleError}
                />
              </Container>
            ) : activeStep === 1 ? (
              <>
                {Array.isArray(formValues) &&
                  Array.isArray(formErrors) &&
                  formValues.map((shopValues, shopIndex) => (
                    <Container key={shopIndex} className={'flex-col mb-6 min-w-[630px]'}>
                      <StepForm
                        shopFormValues={shopValues}
                        shopFormErrors={formErrors[shopIndex]}
                        shopIndex={shopIndex}
                        handleHardValChange={handleHardValChange}
                        handleHardErrorChange={handleHardErrorChange}
                      />
                    </Container>
                  ))}
                <Button
                  onClick={addShop}
                  className="normal-case flex justify-center items-center mb-6 gap-6 w-full !rounded-base px-[32px] py-[20px] bg-gray-800 h-16 "
                >
                  <PlusIcon alt="add shop" className="bg-primary rounded-full" />
                  <Typography children="Добавить еще магазин" className="font-bold text-base text-primary" />
                </Button>
              </>
            ) : (
              <>
                {createdShops &&
                  Array.isArray(createdShops) &&
                  createdShops.map((shop, index) => (
                    <Container key={index} className={'flex-col mb-6 min-w-[630px]'}>
                      <StepForm shop={shop} />
                    </Container>
                  ))}
              </>
            )}

            <div className="flex justify-between items-center w-full">
              {activeStep === 0 ? (
                <Link to="/choose-role">
                  <div className={'flex items-center gap-2'}>
                    <IconButton variant="text" className="w-4 h-4">
                      <ChevronLeftIcon alt="svg" />
                    </IconButton>
                    <Typography children="К выбору роли" />
                  </div>
                </Link>
              ) : (
                <button onClick={handlePrev}>
                  <div className={'flex items-center gap-2'}>
                    <IconButton variant="text" className="w-4 h-4">
                      <ChevronLeftIcon alt="svg" />
                    </IconButton>
                    <Typography children="К предыдущему шагу" />
                  </div>
                </button>
              )}
              {!isLastStep ? (
                <BrandButton type="submit">Далее</BrandButton>
              ) : (
                <BrandButton type="submit">Завершить создание аккаунта</BrandButton>
              )}
            </div>
          </Form>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default EntityPage
