import React from 'react'

import RomanNumerals from '../../utils/RomanNumerals'

export const useNumbersConverter = () => {
    const [romanValue, setRomanValue] = React.useState('')
    const [arabicValue, setArabicValue] = React.useState('')

    const handleRomanInputChange = (e) => {
        const value = e.target.value

        setRomanValue(value.toUpperCase())
        setArabicValue(RomanNumerals.fromRoman(value))
    }

    const handleArabicInputChange = (e) => {
        const value = e.target.value

        setArabicValue(value)
        setRomanValue(RomanNumerals.toRoman(value))
    }

    return {
        handleRomanInputChange,
        handleArabicInputChange,
        romanValue,
        arabicValue,
    }
}
