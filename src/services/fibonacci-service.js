/* global BigInt */
// Use BigInt because fibonacci numbers 79 and above are all bigger than Number.MAX_SAFE_INTEGER
// if BigInt is not natively supported, use number and show warning

const fibonaccies = { 1: 1, 2: 1, 3: 2, 4: 3, 5: 5, 6: 8, 7: 13, 8: 21 };

export const isBigIntSupported = () => typeof BigInt !== 'undefined';

export const getNthFibonacci = (index) => {
    if (!fibonaccies[index]) {
        const knownFibs = Object.keys(fibonaccies);
        let lastKnownFib = knownFibs[knownFibs.length - 1];
        while (index > lastKnownFib) {
            lastKnownFib++;
            fibonaccies[lastKnownFib] = calculateFibNum(lastKnownFib);
        }
    }
    return fibonaccies[index];
};

const calculateFibNum = (index) =>
    isBigIntSupported()
        ? BigInt(fibonaccies[index - 1]) + BigInt(fibonaccies[index - 2])
        : fibonaccies[index - 1] + fibonaccies[index - 2];
