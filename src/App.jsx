import './assets/css/styles.scss';
import { Display } from './components/Display';
import { Button } from './components/Button';

import { useState } from 'react';

function App() {
  const [lastOperation, setLastOperation] = useState(null);
  const [lastValue, setLastValue] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(true);
  const [valueToDisplay, setValueToDisplay] = useState(0);

  return (
    <div className='calculator-container'>
      <Display valueToDisplay={valueToDisplay} />
      <div className="buttons-container">
        <div className="button-row">
          <Button
            value='AC'
            className='calculator-button'
            buttonID='CLEAR'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='+/-'
            className='calculator-button'
            buttonID='TOGGLE_MINUS'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='%'
            className='calculator-button'
            buttonID='PERCENT'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='÷'
            className='calculator-button orange'
            buttonID='DIVIDE'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
        </div>
        <div className="button-row">
          <Button
            value='7'
            className='calculator-button'
            buttonID='7'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='8'
            className='calculator-button'
            buttonID='8'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='9'
            className='calculator-button'
            buttonID='9'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='X'
            className='calculator-button orange'
            buttonID='MULTIPLY'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
        </div>
        <div className="button-row">
          <Button
            value='4'
            className='calculator-button'
            buttonID='4'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='5'
            className='calculator-button'
            buttonID='5'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='6'
            className='calculator-button'
            buttonID='6'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='-'
            className='calculator-button orange'
            buttonID='SUBTRACT'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
        </div>
        <div className="button-row">
          <Button
            value='1'
            className='calculator-button'
            buttonID='1'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='2'
            className='calculator-button'
            buttonID='2'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='3'
            className='calculator-button'
            buttonID='3'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='+'
            className='calculator-button orange'
            buttonID='ADD'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
        </div>
        <div className="button-row">
          <Button
            value='0'
            className='calculator-button wide'
            buttonID='0'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='.'
            className='calculator-button'
            buttonID='POINT'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
          <Button
            value='='
            className='calculator-button orange'
            buttonID='EQUALS'
            lastOperation={lastOperation}
            setLastOperation={setLastOperation}
            lastValue={lastValue}
            setLastValue={setLastValue}
            resetDisplay={resetDisplay}
            setResetDisplay={setResetDisplay}
            valueToDisplay={valueToDisplay}
            setValueToDisplay={setValueToDisplay}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
