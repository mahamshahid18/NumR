import React from 'react';
import './InputContainer.css';
import { getRomanEquivalent } from '../roman-converter.util';

interface Props {
    inputValue: number | undefined;
    setInputValue: (value: number) => void;
    setRomanNumber: (value: string) => void;
}

export const InputContainer = ({ inputValue, setInputValue, setRomanNumber }: Props) => {
    return (
        <div className="input-container">
            <div className="header">
                <h1>
                    Input an integer
                </h1>
            </div>
            <input type="number" value={inputValue} onChange={(event) => setInputValue(parseInt(event.currentTarget.value))} />
            <button onClick={() => {
                const romanNumber = getRomanEquivalent(inputValue as number);
                setRomanNumber(romanNumber);
            }}>
                Convert
            </button>
        </div>
    );
}