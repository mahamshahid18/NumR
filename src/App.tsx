import React from 'react';
import './App.css';
import { getRomanEquivalent } from './roman-converter.util';

export const App = () => {
  const [inputValue, setInputValue] = React.useState<number>();
  const [romanNumber, setRomanNumber] = React.useState<string | null>(null);

  return (
    <React.Fragment>
      <div>
        <label>Input an integer</label>
        <input type="number" value={inputValue} onChange={(event) => setInputValue(parseInt(event.currentTarget.value))} />
        <button onClick={() => {
            const romanNumber = getRomanEquivalent(inputValue as number);
            setRomanNumber(romanNumber);
        }}>
          Convert
        </button>
      </div>
      <br/> <br/>
      <div>
        <span>The output is: </span>
        <span>
          {romanNumber}
        </span>
      </div>
    </React.Fragment>
  );
}

export default App;
