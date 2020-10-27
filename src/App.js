import React, { useContext } from 'react';
import './App.css';
import DisplayData from './components/DisplayData';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import Steppers from './components/Steppers';
import ThridStep from './components/ThridStep';
import { multiStepContext } from './StepContext';

function App() {

  const { step } = useContext(multiStepContext);

  const showStep = (step) => {
    switch (step) {
      case 0:
        return <FirstStep />
      case 1:
        return <SecondStep />
      case 2:
        return <ThridStep />
      default:
        return <FirstStep />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Steppers step={step} />
        {showStep(step)}
        <DisplayData />
      </header>
    </div>
  );
}

export default App;
