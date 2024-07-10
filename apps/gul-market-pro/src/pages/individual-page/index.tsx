import React, { useState, FC, ChangeEvent, FormEvent } from 'react'
import { IconButton, Typography } from '@material-tailwind/react'
import { StepHeader } from '../../components'
import { configs } from './constants'
import { BrandButton, Container, Layout } from '@design-system/ui'
import { Form, Link, useSubmit } from 'react-router-dom'
import { ChevronLeftIcon } from '@design-system/ui'
import { GMStepper } from '@design-system/ui'
import { stringSchema } from '@design-system/ui/ui/components/string-input/stringSchema'

export const IndividualPage: FC = props => {
  const [activeStep, setActiveStep] = useState(0)
  const [isLastStep, setIsLastStep] = useState(false)
  const [isFirstStep, setIsFirstStep] = useState(false)

  const handleNext = () => {
    if (!isLastStep) {
      const isError = Object.values(formErrors).every(v => v === '') && Object.values(formValues).every(v => v !== '')
      if (isError) {
        setActiveStep(cur => cur + 1)
      }
    }
  }
  const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1)

  const { steps_content, stepper_configs } = configs

  const content = steps_content[activeStep]!

  const StepForm = content.stepForm

  const [formValues, setFormValues] = useState(content.initialFormValues)
  const [formErrors, setFormErrors] = useState(content.initialFormErrors)

  const submit = useSubmit()

  //! Такое решение придумал, надо обсудить
  // const validateForm = () => {
  //   const errors = { ...formErrors }
  //   Object.values(formValues).every(v => {
  //     try {
  //       stringSchema.parse(v)
  //     } catch (err) {
  //       if (err instanceof ZodError) {
  //         errors.v = err.errors[0]?.message || ''
  //       }
  //     }
  //   })
  //
  //   setFormErrors(errors)
  //   return !Object.values(errors).some(error => error)
  // }

  const handleFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target
    setFormValues(prev => ({ ...prev, [name]: value }))
    console.log(formErrors)
    console.log(Object.values(formErrors).every(v => v === ''))
    console.log(formValues)
    console.log(Object.values(formValues).every(v => v !== ''))
  }

  const handleError = ({ name, errorMessage }: { name: string; errorMessage: string }) => {
    setFormErrors(prev => ({ ...prev, [name]: errorMessage }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isError = Object.values(formErrors).every(v => v === '') && Object.values(formValues).every(v => v !== '')
    console.log('IS ERROR:', isError)
    // isError && submit(formValues, { method: 'post', encType: 'application/json' })
  }
  return (
    <Layout>
      <Layout.Content>
        <Form id="form" onSubmit={handleSubmit}>
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
                  <BrandButton onClick={handleNext}>Далее</BrandButton>
                ) : (
                  <Link to="/main">
                    <BrandButton>Завершить создание аккаунта</BrandButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Form>
      </Layout.Content>
    </Layout>
  )
}
