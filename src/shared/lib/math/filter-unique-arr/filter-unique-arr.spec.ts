import { filterUniqueArr } from './filter-unique-arr';

describe('filterUniqueArr', () => {
    it('should return an empty array when given an empty array', () => {
        const input: string[] = [];
        const result = filterUniqueArr(input);
        expect(result).toEqual([]);
    });

    it('should return the same array when there are no duplicates', () => {
        const input = ['apple', 'banana', 'cherry'];
        const result = filterUniqueArr(input);
        expect(result).toEqual(['apple', 'banana', 'cherry']);
    });

    it('should remove duplicate values from the array', () => {
        const input = ['apple', 'banana', 'apple', 'cherry', 'banana'];
        const result = filterUniqueArr(input);
        expect(result).toEqual(['apple', 'banana', 'cherry']);
    });

    it('should preserve the order of first occurrence', () => {
        const input = ['banana', 'apple', 'cherry', 'apple', 'banana', 'date'];
        const result = filterUniqueArr(input);
        expect(result).toEqual(['banana', 'apple', 'cherry', 'date']);
    });
});
