import React, { FC } from 'react'
import { Stepper, Step, Typography } from '@material-tailwind/react'
import { IStep } from '../../pages/Individual/consts/configs'
import { CompletedIcon } from '@design-system/ui'

interface IGMStepperProps {
  activeStep: number
  stepper_configs: IStep[]
  onStepChange: (step: number) => void
  isLastStep: (value: boolean) => void
  isFirstStep: (value: boolean) => void
}

const GMStepper: FC<IGMStepperProps> = ({ activeStep, stepper_configs, onStepChange, isLastStep, isFirstStep }) => {
  return (
    <Stepper
      activeStep={activeStep}
      isLastStep={isLastStep}
      isFirstStep={isFirstStep}
      lineClassName={'hidden'}
      className={'stepper'}
    >
      {stepper_configs.map((step, index) => (
        <Step
          key={index}
          completedClassName={'completed'}
          activeClassName={'active'}
          className="step"
          onClick={() => onStepChange(index)}
        >
          {index < activeStep ? <CompletedIcon alt={'completed'} className={'h-5 w-5'} /> : step.value}
          <div className="step_text_container">
            <Typography className="step_text" children={step.helpText} />
          </div>
        </Step>
      ))}
    </Stepper>
  )
}

export default GMStepper
