import { generateUuid } from './generate-uuid';

describe('generateUuid', () => {
    it('should return a valid UUID matching the v4 format', () => {
        const uuid = generateUuid();
        // This regex checks for:
        // - 8 hex characters
        // - a dash
        // - 4 hex characters
        // - a dash
        // - a "4" followed by 3 hex characters (version 4)
        // - a dash
        // - one of 8, 9, a, or b followed by 3 hex characters (the variant)
        // - a dash
        // - 12 hex characters
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        expect(uuid).toMatch(uuidRegex);
    });

    it('should generate unique UUIDs on consecutive calls', () => {
        const uuid1 = generateUuid();
        const uuid2 = generateUuid();
        expect(uuid1).not.toBe(uuid2);
    });

    it('should produce a deterministic UUID when Math.random is mocked', () => {
        const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5);
        const uuid = generateUuid();
        const expectedUuid = '88888888-8888-4888-8888-888888888888';
        expect(uuid).toBe(expectedUuid);
        randomSpy.mockRestore();
    });
});
