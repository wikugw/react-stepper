import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';


const SecondStep = () => {
  const { changeValue, currentData, incrementStep, decrementStep } = useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField label="Email" name="email" value={currentData.email} onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <TextField label="Mafa" name="mafa" value={currentData.mafa} onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <TextField label="Mifa" name="mifa" value={currentData.mifa} onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <Button style={{ marginRight: 2 }} variant="contained" color="secondary" onClick={decrementStep}>Back</Button>
        <Button variant="contained" color="primary" onClick={incrementStep}>Next</Button>
      </div>
    </div>
  )
}

export default SecondStep
