import React, { useState, FC, ChangeEvent, FormEvent, useEffect } from 'react'
import { IconButton, ThemeProvider, Typography } from '@material-tailwind/react'
import { StepHeader } from '../../components'
import { configs } from './constants'
import { BrandButton, Container, Layout } from '@design-system/ui'
import { createSearchParams, Form, Link, useFetcher, useSearchParams, useSubmit } from 'react-router-dom'
import { ChevronLeftIcon } from '@design-system/ui'
import { GMStepper } from '@design-system/ui'
import { stringSchema } from '@design-system/ui/ui/components/string-input/stringSchema'
import { ZodError } from 'zod'

type FormValues = {
  [key: string]: string
}

type FormErrors = {
  [key: string]: string
}

const IndividualPage: FC = props => {
  const [activeStep, setActiveStep] = useState(0)
  const [isLastStep, setIsLastStep] = useState(false)
  const [isFirstStep, setIsFirstStep] = useState(false)

  const { steps_content, stepper_configs } = configs
  const content = steps_content[activeStep]!
  const StepForm = content.stepForm

  const [formValues, setFormValues] = useState<FormValues>(content.initialFormValues)
  const [formErrors, setFormErrors] = useState<FormErrors>(content.initialFormErrors)

  const submit = useSubmit()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setFormValues(content.initialFormValues)
    setFormErrors(content.initialFormErrors)
  }, [activeStep, content.initialFormValues, content.initialFormErrors])

  const validateForm = () => {
    const errors: FormErrors = {}
    Object.keys(formValues).forEach(key => {
      try {
        stringSchema.parse(formValues[key])
      } catch (err) {
        if (err instanceof ZodError) {
          errors[key] = err.errors[0]?.message || ''
        } else {
          errors[key] = 'Invalid value'
        }
      }
    })
    setFormErrors(errors)
    return !Object.values(errors).some(error => error)
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
        Object.entries(formValues).forEach(([key, value]) => {
          newSearchParams[key] = value
        })
        setSearchParams(createSearchParams(newSearchParams))
      }
    }
  }

  return (
    <Layout>
      <Layout.Content>
        <Form onSubmit={handleNext} method="put">
          <div className="flex flex-col items-center">
            <GMStepper
              activeStep={activeStep}
              stepper_configs={stepper_configs}
              onStepChange={setActiveStep}
              isLastStep={setIsLastStep}
              isFirstStep={setIsFirstStep}
            />
            <StepHeader title={content.title} description={content.description} />
            <div>
              <Container className={'flex-col mb-6 min-w-[630px]'}>
                <StepForm
                  formValues={formValues}
                  formErrors={formErrors}
                  handleFormChange={handleFormChange}
                  handleError={handleError}
                />
              </Container>
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
                  <button type="button" onClick={handlePrev}>
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
            </div>
          </div>
        </Form>
      </Layout.Content>
    </Layout>
  )
}

export default IndividualPage
