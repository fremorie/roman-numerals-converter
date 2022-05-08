import React from 'react'

import Input from '../../components/Input'
import { useNumbersConverter } from '../../hooks/useNumbersConverter'
import './styles.css'

const NumeralsConverter = () => {
    const {
        handleRomanInputChange,
        handleArabicInputChange,
        romanValue,
        arabicValue,
    } = useNumbersConverter()

    return (
        <div className="container">
            <h1 className="pageTitle">Roman Numerals Converter</h1>
            <div className="inputs">
                <Input
                    id="arabic"
                    label="Arabic"
                    onChange={handleArabicInputChange}
                    value={arabicValue}
                />
                <div className="separator">&harr;</div>
                <Input
                    id="roman"
                    label="Roman"
                    onChange={handleRomanInputChange}
                    value={romanValue}
                />
            </div>
        </div>
    )
}

export default NumeralsConverter
