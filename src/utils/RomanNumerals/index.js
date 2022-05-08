function romanize (num) {
    if (num === '') {
        return ''
    }

    if (!+num) {
        return 'Invalid number'
    }

    const digits = String(+num).split('')

    const key = [
        '','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
        '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
        '','I','II','III','IV','V','VI','VII','VIII','IX',
    ]

    let roman = '', i = 3

    while (i--) {
        roman = (key[+digits.pop() + (i * 10)] || '') + roman
    }

    return Array(+digits.join('') + 1).join('M') + roman
}

function deromanize (_str) {
    if (_str === '') {
        return ''
    }

    const str = _str.toUpperCase()

    const validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/

    if (!(str && validator.test(str))) {
        return 'Invalid number'
    }

    const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g
    const key = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let num = 0, m

    while (m = token.exec(str)) {
        num += key[m[0]]
    }

    return num
}

const RomanNumerals = {
    toRoman(integer) {
        return romanize(integer)
    },

    fromRoman(roman) {
        return deromanize(roman)
    }
}

export default RomanNumerals
