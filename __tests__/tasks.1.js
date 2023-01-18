const rewire = require("rewire");

describe('`validateCreditCard`', () => {
    it('Validates for 16 digits', () => {
        const validateCreditCard = rewire('../index').__get__('validateCreditCard');
        expect(validateCreditCard('9999-7777-8888-0000')).toEqual({ valid: true, number: '9999-7777-8888-0000' });
        expect(validateCreditCard('6666-6666-6666-1666')).toEqual({ valid: true, number: '6666-6666-6666-1666' });
        expect(validateCreditCard('a923-3211-9c01-1112')).toEqual({ valid: false, number: 'a923-3211-9c01-1112', error: '_invalid characters_' });
        expect(validateCreditCard('4444-4444-4444-4444')).toEqual({ valid: false, number: '4444-4444-4444-4444', error: '_Need more than 1 unique digit_' });
        expect(validateCreditCard('1211-1111-1111-1112')).toEqual({ valid: true, number: '1211-1111-1111-1112' });
    })
    it('Validates whether number consists of at least two different digits', () => {
        const validateCreditCard = rewire('../index').__get__('validateCreditCard');
        const ccNumberNoDashes = '1211-1111-1111-1112';
        let twoDifferentDigits = false;
        for (let i = 1; i < ccNumberNoDashes.length; i++) {
            if (ccNumberNoDashes[i] !== ccNumberNoDashes[i - 1]) {
                twoDifferentDigits = true;
                break;
            }
        }
        if (twoDifferentDigits === false) {
            result.valid = false;
            result.error = "_Need more than 1 unique digit_";
            return result;
        }
        expect(validateCreditCard(ccNumberNoDashes)).toEqual({ valid: true, number: '1211-1111-1111-1112' });
        expect(validateCreditCard(ccNumberNoDashes)).toEqual({ valid: true, number: '1211-1111-1111-1112' });
        expect(validateCreditCard(ccNumberNoDashes)).toEqual({ valid: true, number: '1211-1111-1111-1112' });
        expect(validateCreditCard('a923-3211-9c01-1112')).toEqual({ valid: false, number: 'a923-3211-9c01-1112', error: '_invalid characters_' });
    })
    it('Validates whether last digit is even', () => {
        const validateCreditCard = rewire('../index').__get__('validateCreditCard');
        const result = validateCreditCard('1111-1111-1111-1110');
        expect(result.valid).toBe(false);
    })
    it('Validates whether sum of all digits is greater than 16', () => {
        const validateCreditCard = rewire('../index').__get__('validateCreditCard');
        const result = validateCreditCard('1111-1111-1111-1110');
        expect(result.valid).toBe(false);
    });
});