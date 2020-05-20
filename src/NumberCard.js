import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import './NumberCard.css';

const NumberCard = ({ number, direction }) => {
    return (
        <div className="number-card">
            <h2>
                <TextTransition
                    text={new Intl.NumberFormat().format(number)}
                    springConfig={presets.gentle}
                    direction={direction}
                    noOverflow
                />
            </h2>
        </div>
    );
};

export default NumberCard;
