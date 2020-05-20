import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import NumberCard from './NumberCard';

import { getNthFibonacci, isBigIntSupported } from './logic';
import { saveCurrentIndex } from './storage-service';

import './Fibonaccier.css';

const Fibonaccier = () => {
    const history = useHistory();
    const { fib } = useParams();
    const [currFib, setCurrFib] = useState();
    const [result, setResult] = useState();
    const [direction, setDirection] = useState();

    useEffect(() => {
        const newFib = Number(fib);
        setCurrFib((prevFib) => {
            newFib > prevFib ? setDirection('up') : setDirection('down');
            return newFib;
        });
        setResult(getNthFibonacci(newFib));
        saveCurrentIndex(newFib);
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
                    <NumberCard number={result} direction={direction} />
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
                    <Link to={`/${currFib + 1}`}>Next{' >>'}</Link>
                </div>
            </div>
            {!isBigIntSupported() && currFib > 78 ? (
                <p className="warning">
                    Warning!! Currect value is greater than the largest
                    supported integer, thus it is inaccurate
                </p>
            ) : (
                ''
            )}
            <div className="jump-to-link" onClick={handleJumpToClick}>
                Jump to...
            </div>
        </div>
    );
};

export default Fibonaccier;
