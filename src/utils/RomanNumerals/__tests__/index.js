import RomanNumerals from '../index'

describe('RomanNumerals', () => {
    const expectations = [
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [9, 'IX'],
        [10, 'X'],
        [40, 'XL'],
        [50, 'L'],
        [90, 'XC'],
        [96, 'XCVI'],
        [100, 'C'],
        [400, 'CD'],
        [500, 'D'],
        [900, 'CM'],
        [1000, 'M'],
        [1234, 'MCCXXXIV'],
    ]

    describe('RomanNumerals.toRoman', () => {
        expectations.forEach(([arabicNumber, romanNumber]) => {
            it(`should transform ${arabicNumber} into ${romanNumber}`, () => {
                expect(RomanNumerals.toRoman(arabicNumber)).toEqual(romanNumber)
            })
        })

        it('should return empty string if nothing provided', () => {
            expect(RomanNumerals.toRoman('')).toEqual('')
        })

        it('should return "Invalid number" if input is invalid', () => {
            expect(RomanNumerals.toRoman('abc')).toEqual('Invalid number')
        })
    })

    describe('RomanNumerals.fromRoman', () => {
        expectations.forEach(([arabicNumber, romanNumber]) => {
            it(`should transform ${romanNumber} into ${arabicNumber}`, () => {
                expect(RomanNumerals.fromRoman(romanNumber)).toEqual(arabicNumber)
            })
        })

        it('should return empty string if nothing provided', () => {
            expect(RomanNumerals.fromRoman('')).toEqual('')
        })

        it('should return "Invalid number" if input is invalid', () => {
            expect(RomanNumerals.fromRoman('abc')).toEqual('Invalid number')
        })
    })
})