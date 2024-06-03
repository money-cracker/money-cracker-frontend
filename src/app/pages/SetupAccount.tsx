import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhosphorIcon } from '../components/common/atoms/PhosphorIcon'
import { IconButton } from '../components/common/atoms/IconButton/IconButton'
import { Button } from '../components/common/atoms/Button/Button'
const totalSteps = 5
export const SetupAccount = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const progressPercentage = (step / 5) * 100

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
    if (step === totalSteps) {
      navigate('/home')
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
    if (step === 1) {
      navigate(-1)
    }
  }
  return (
    <div className="mx-4 mb-4 flex flex-col justify-between flex-1">
      <div>
        <div className="w-full h-[2px] rounded bg-gray-200 mb-4">
          <div
            className="h-full bg-primary rounded transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-between">
          <IconButton onClick={() => handlePrevious()} className="w-6 h-6">
            <PhosphorIcon name="CaretLeft" />
          </IconButton>
          <span>Step {step}</span>
          <div className="w-6" />
        </div>
        <input
          className="rounded-none w-full px-2 py-1 bg-transparent border-b border-neutral-300 focus:border-primary text-base placeholder-neutral-300 caret-secondary"
          placeholder="Enter Login Id"
        />
      </div>

      <Button className="p-1" onClick={() => handleNext()}>
        Next Step
      </Button>
    </div>
  )
}
