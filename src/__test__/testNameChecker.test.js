import { checkForName } from '../client/js/nameChecker'

describe("Checking updateUI function is called", () => {
    test('testing update ui is a function or not', () => {
        expect(typeof(checkForName)).toBe('function');
    });
})