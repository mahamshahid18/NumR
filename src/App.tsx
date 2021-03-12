import React from 'react';
import './App.css';
import { getRomanEquivalent } from './roman-converter.util';

export const App = () => {
  const [inputValue, setInputValue] = React.useState<number>();
  const [romanNumber, setRomanNumber] = React.useState<string | null>(null);

  return (
    <React.Fragment>
      <div className="input-container">
        <h1>
          Input an integer
        </h1>
        <input type="number" value={inputValue} onChange={(event) => setInputValue(parseInt(event.currentTarget.value))} />
        <button onClick={() => {
            const romanNumber = getRomanEquivalent(inputValue as number);
            setRomanNumber(romanNumber);
        }}>
          Convert
        </button>
      </div>

      <div className="roman-result-container">
        <h1>
          Roman equivalent
        </h1>
        {
          romanNumber && (
            <span className="roman-result">
              {romanNumber}
            </span>
          )
        }
      </div>
    </React.Fragment>
  );
}

export default App;
