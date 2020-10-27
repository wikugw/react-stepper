import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import { multiStepContext } from '../StepContext';

const FirstStep = () => {

  const { changeValue, currentData, incrementStep } = useContext(multiStepContext);

  return (
    <div>
      <div>
        <TextField label="name" name="name" value={currentData.name} onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <TextField label="Status" value={currentData.status} name="status" onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <TextField label="NO HP" value={currentData.no_hp} name="no_hp" onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={incrementStep}>Next</Button>
      </div>
    </div>
  )
}

export default FirstStep
