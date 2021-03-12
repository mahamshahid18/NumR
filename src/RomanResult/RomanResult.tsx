import React from 'react';
import './RomanResult.css';

interface Props {
    romanNumber: string | null;
}

export const RomanResult = ({ romanNumber }: Props) => {
    return (
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
    );
}