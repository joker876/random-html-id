import * as randomId from './index';

const id = randomId.id;
const fromUuid = randomId.fromUuid;

describe('id()', () => {
    it('should be defined', () => {
        expect(id).toBeDefined();
    });
    it('should return a string', () => {
        expect(typeof id()).toBe('string');
    });
    it('should return the correct length', () => {
        expect(id(16).length).toBe(16);
        expect(id(12).length).toBe(12);
        expect(id(40).length).toBe(40);
    });
    it('should start with a letter', () => {
        expect(id().charAt(0)).toMatch(/[a-z]/i);
    });
});
describe('fromUuid()', () => {
    it('should be defined', () => {
        expect(fromUuid).toBeDefined();
    });
    it('should return a string', () => {
        expect(typeof fromUuid()).toBe('string');
    });
    it('should start with the letter a', () => {
        expect(fromUuid().charAt(0)).toMatch(/a/i);
    });
});