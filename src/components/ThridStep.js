import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

const ThridStep = () => {
  const { changeValue, currentData, decrementStep, submitData } = useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField label="Facebook" name="facebook" value={currentData.facebook} onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <TextField label="Twitter" name="twitter" value={currentData.twitter} onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <TextField label="Instagram" name="instagram" value={currentData.instagram} onChange={changeValue} variant="outlined" margin="normal" color="secondary" />
      </div>
      <div>
        <Button style={{ marginRight: 2 }} variant="contained" color="secondary" onClick={decrementStep}>Back</Button>
        <Button variant="contained" onClick={submitData} color="primary">Submit</Button>
      </div>
    </div>
  )
}

export default ThridStep
