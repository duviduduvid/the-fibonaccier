import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { NumberCard } from '../index';
import {
    getNthFibonacci,
    isBigIntSupported,
    saveCurrentIndex,
} from '../../services';

import './Fibonaccier.css';

const Fibonaccier = () => {
    const history = useHistory();
    const { fib } = useParams();
    const [currFib, setCurrFib] = useState();
    const [result, setResult] = useState();
    const [direction, setDirection] = useState();
    const [warning, setWarning] = useState();

    useEffect(() => {
        setWarning('');
        const newFib = Number(fib);
        if (newFib >= 222) {
            setWarning(
                'These values of Fibonnaci are too big for us to fathom, and to display properly. Sorry...'
            );
        } else {
            if (!isBigIntSupported() && newFib > 78) {
                setWarning(
                    'Warning!! Current value is greater than the largest supported integer by your browser, thus it is inaccurate'
                );
            }
            setCurrFib((prevFib) => {
                newFib > prevFib ? setDirection('up') : setDirection('down');
                return newFib;
            });
            setResult(getNthFibonacci(newFib));
            saveCurrentIndex(newFib);
        }
    }, [fib]);

    const handleJumpToClick = () => {
        let newFib = Number(
            prompt('Which Fibonacci number would you like to visit?')
        );
        if (newFib && newFib > 0) {
            history.push(`/${newFib}`);
        } else {
            alert('Please enter a positive integer');
        }
    };

    return (
        <div className="main-container">
            <h1>The Fibonaccier</h1>

            <div className="inner-container">
                <div className="card">
                    <NumberCard
                        number={result}
                        direction={direction}
                        isFirst={currFib === 1}
                    />
                </div>

                <div className="previous-link">
                    <Link
                        to={`/${currFib - 1}`}
                        className={currFib <= 1 ? 'disabled-link' : ''}
                    >
                        {'<< '}Previous
                    </Link>
                </div>

                <div className="next-link">
                    <Link
                        to={`/${currFib + 1}`}
                        className={Number(fib) >= 222 ? 'disabled-link' : ''}
                    >
                        Next{' >>'}
                    </Link>
                </div>
            </div>
            {warning && <p className="warning">{warning}</p>}
            <div className="jump-to-link" onClick={handleJumpToClick}>
                Jump to...
            </div>
        </div>
    );
};

export default Fibonaccier;
