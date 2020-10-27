import React, { useState } from 'react';
import App from './App';

export const multiStepContext = React.createContext();

const StepContext = () => {

  const initialFieldValues = {
    name: '',
    status: '',
    no_hp: '',
    email: '',
    mafa: '',
    mifa: '',
    facebook: '',
    twitter: '',
    instagram: '',
  };

  const [step, setStep] = useState(0);
  const [currentData, setCurrentData] = useState(initialFieldValues);
  const [finalData, setFinalData] = useState([]);

  const incrementStep = () => {
    setStep(step + 1)
  }

  const decrementStep = () => {
    setStep(step - 1)
  }

  const changeValue = (event) => {
    setCurrentData({
      ...currentData,
      [event.target.name]: event.target.value
    })
  }

  const submitData = () => {
    setFinalData(finalData => [...finalData, currentData]);
    setCurrentData(initialFieldValues);
    setStep(0);
  }

  return (
    <multiStepContext.Provider value={{ submitData, incrementStep, decrementStep, changeValue, step, setStep, currentData, setCurrentData, finalData, setFinalData }}>
      <App />
    </multiStepContext.Provider>
  )
}

export default StepContext;