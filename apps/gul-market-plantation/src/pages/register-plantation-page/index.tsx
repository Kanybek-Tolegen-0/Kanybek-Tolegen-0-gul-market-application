import React, { FC, useState } from 'react'
import { Button, IconButton, Typography } from '@material-tailwind/react'
import { StepHeader } from '../../components'
import { configs } from './constants'
import { BrandButton, ChevronLeftIcon, Container, GMStepper, Layout, PlusIcon } from '@design-system/ui'
import { Link } from 'react-router-dom'
import './style.css'

export const RegisterPlantationPage: FC = props => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLastStep, setIsLastStep] = React.useState(false)
  const [isFirstStep, setIsFirstStep] = React.useState(false)
  const [plantations, setPlantations] = useState<number[]>([0, 1])

  const addPlantation = () => {
    setPlantations(prevPlantations => [...prevPlantations, prevPlantations.length])
  }
  const handleNext = () => !isLastStep && setActiveStep(cur => cur + 1)
  const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1)

  const { steps_content, stepper_configs } = configs

  const content = steps_content[activeStep]!

  const StepForm = content.stepForm

  return (
    <Layout isLogged={true}>
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
          <div>
            {activeStep !== 1 ? (
              <Container className={'flex-col mb-6 min-w-[630px]'}>
                <StepForm />
              </Container>
            ) : (
              <>
                {plantations.map((_, index) => (
                  <Container key={index} className={'flex-col mb-6 min-w-[630px]'}>
                    <StepForm />
                  </Container>
                ))}
                <Button
                  onClick={addPlantation}
                  className="normal-case flex justify-center items-center mb-6 gap-6 w-full !rounded-base px-[32px] py-[20px] bg-gray-800 h-16 "
                >
                  <PlusIcon alt="add shop" className="bg-primary rounded-full" />
                  <Typography children="Добавить еще плантацию" className="font-bold text-base text-primary" />
                </Button>
              </>
            )}

            <div className="flex justify-between items-center w-full">
              {activeStep === 0 ? (
                <div></div>
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
                <Link to="/main-page">
                  <BrandButton>Завершить создание плантации</BrandButton>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}
