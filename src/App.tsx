import React from 'react';
import './App.css';
import { InputContainer } from './InputContainer/InputContainer';
import { RomanResult } from './RomanResult/RomanResult';

export const App = () => {
  const [inputValue, setInputValue] = React.useState<number>();
  const [romanNumber, setRomanNumber] = React.useState<string | null>(null);

  return (
    <React.Fragment>
      <InputContainer
        inputValue={inputValue}
        setInputValue={setInputValue}
        setRomanNumber={setRomanNumber}
      />

      <RomanResult romanNumber={romanNumber} />
    </React.Fragment>
  );
}

export default App;
