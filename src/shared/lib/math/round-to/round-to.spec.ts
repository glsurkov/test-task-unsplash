import { roundTo } from './round-to';

describe('roundTo', () => {
    it('should round a number to 0 decimal places', () => {
        expect(roundTo(1.5, 0)).toBe(2);
        expect(roundTo(1.4, 0)).toBe(1);
    });

    it('should round a number to 2 decimal places', () => {
        expect(roundTo(1.234, 2)).toBe(1.23);
        expect(roundTo(1.235, 2)).toBe(1.24);
    });

    it('should round negative numbers correctly', () => {
        expect(roundTo(-1.234, 2)).toBe(-1.23);
        expect(roundTo(-1.235, 2)).toBe(-1.24);
    });

    it('should round a number to negative decimal places', () => {
        expect(roundTo(123.45, -1)).toBe(120);
        expect(roundTo(126.45, -1)).toBe(130);
    });

    it('should return the original value if it is not a number', () => {
        expect(roundTo('test', 2)).toBe('test');

        const obj = { a: 1 };
        expect(roundTo(obj, 2)).toBe(obj);
    });

    it('should handle NaN correctly', () => {
        const result = roundTo(NaN, 2);
        expect(typeof result).toBe('number');
        expect(Number.isNaN(result)).toBe(true);
    });

    it('should handle Infinity correctly', () => {
        expect(roundTo(Infinity, 2)).toBe(Infinity);
        expect(roundTo(-Infinity, 2)).toBe(-Infinity);
    });
});
