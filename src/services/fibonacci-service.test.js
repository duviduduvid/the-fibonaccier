import { getNthFibonacci } from './fibonacci-service';

describe('fibonacci-service', () => {
    it('Calculates fibonacci numbers with index lower than or equal to 78 correctly', () => {
        const fibonacci6 = Number(getNthFibonacci(6));
        const fibonacci10 = Number(getNthFibonacci(10));
        const fibonacci42 = Number(getNthFibonacci(42));
        const fibonacci78 = Number(getNthFibonacci(78));
        expect(fibonacci6).toBe(8);
        expect(fibonacci10).toBe(55);
        expect(fibonacci42).toBe(267914296);
        expect(fibonacci78).toBe(8944394323791464);
    });

    it('Calculates fibonacci numbers with index higher than or equal to 78 correctly', () => {
        const fibonacci79 = String(getNthFibonacci(79));
        const fibonacci100 = String(getNthFibonacci(100));
        const fibonacci145 = String(getNthFibonacci(145));
        expect(fibonacci79).toBe('14472334024676221');
        expect(fibonacci100).toBe('354224848179261915075');
        expect(fibonacci145).toBe('898923707008479989274290850145');
    });
});
