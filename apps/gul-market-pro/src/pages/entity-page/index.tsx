import React, { FC, useState } from 'react'
import { Button, IconButton, Typography } from '@material-tailwind/react'
import { StepHeader } from '../../components/step-header'
import { configs } from './constants'
import { BrandButton, Container, Layout } from '@design-system/ui'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@design-system/ui'
import { GMStepper } from '../../components/gm-stepper'
import './style.css'
import { PlusIcon } from '@design-system/ui'
export const EntityPage: FC = props => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLastStep, setIsLastStep] = React.useState(false)
  const [isFirstStep, setIsFirstStep] = React.useState(false)
  const [shops, setShops] = useState<number[]>([0, 1])

  const addShop = () => {
    setShops(prevShops => [...prevShops, prevShops.length])
  }
  const handleNext = () => !isLastStep && setActiveStep(cur => cur + 1)
  const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1)

  const { steps_content, stepper_configs } = configs

  const content = steps_content[activeStep]!

  const StepForm = content.stepForm

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
          <div>
            {activeStep !== 1 ? (
              <Container className={'flex-col mb-6 min-w-[630px]'}>
                <StepForm />
              </Container>
            ) : (
              <>
                {shops.map((_, index) => (
                  <Container className={'flex-col mb-6 min-w-[630px]'}>
                    <StepForm key={index} />
                  </Container>
                ))}
                <Button
                  onClick={addShop}
                  className="normal-case flex justify-center items-center mb-6 gap-6 w-full !rounded-base px-[32px] py-[20px] bg-gr-800 h-16 "
                >
                  <PlusIcon alt="add shop" className="bg-primary rounded-full" />
                  <Typography children="Добавить еще магазин" className="font-bold text-base text-primary" />
                </Button>
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
                <BrandButton onClick={handleNext}>Далее</BrandButton>
              ) : (
                <Link to="">
                  <BrandButton>Завершить создание аккаунта</BrandButton>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}
