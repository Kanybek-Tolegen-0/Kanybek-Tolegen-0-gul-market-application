import React, { FC } from 'react'
import { Dialog } from '@material-tailwind/react'
import { ArrowLeftIcon, ArrowRightIcon, ThinCrossIcon } from '../../assets'

interface ModalProps {
  children: React.ReactNode
  withArrows?: boolean
  open: boolean
  handleOpen: (params?: any) => void
  handleNext?: () => void
  handlePrev?: () => void
  className?: string
}

const Modal: FC<ModalProps> = ({
  children,
  withArrows = false,
  open,
  handleOpen,
  handleNext,
  handlePrev,
  className
}) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="lg"
      className={`relative !min-w-fit !max-w-fit !rounded-base ${className}`}
    >
      <div className="absolute -top-[42px] right-0 cursor-pointer" onClick={() => handleOpen()}>
        <ThinCrossIcon />
      </div>
      <div className="flex relative items-center">
        {withArrows && (
          <div className="absolute -left-[88px] cursor-pointer" onClick={handlePrev}>
            <ArrowLeftIcon />
          </div>
        )}
        {children}
        {withArrows && (
          <div className="absolute -right-[88px] cursor-pointer" onClick={handleNext}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
    </Dialog>
  )
}

export default Modal
