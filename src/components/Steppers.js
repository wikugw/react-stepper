import React from 'react';
import { Stepper, StepLabel, Step } from '@material-ui/core';

const Steppers = ({ step }) => {
  return (
    <div className="center-stepper">
      <Stepper activeStep={step} orientation="horizontal"  >
        <Step>
          <StepLabel>Info</StepLabel>
        </Step>
        <Step>
          <StepLabel>Favorit</StepLabel>
        </Step>
        <Step>
          <StepLabel>Sosmed</StepLabel>
        </Step>
      </Stepper>
    </div >
  )
}

export default Steppers
