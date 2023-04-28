// Convert interger to roman numeral with the exception that 8 is IIX instead of VIII

const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    8: 'IIX',	// Edge case
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}

function convertToRoman(num) {
    let roman = ''
    let keys = Object.keys(romanNumerals).reverse()
    let i = 0
    while (num > 0) {
        if (num >= keys[i]) {
            roman += romanNumerals[keys[i]]
            num -= keys[i]
        } else {
            i++
        }
    }
    return roman
}



function main(num) {
    return convertToRoman(num)
}

console.log('1: ', main(1))
console.log('4: ', main(4))
console.log('9: ', main(9))
console.log('10: ', main(10))
console.log('CXV 115: ', main(115))
console.log('426: ', main(426))
console.log('CDXXVI'=== main(426))
console.log('3849: ', main(3849))
console.log('MMMDCCCXLIX' === main(3849))
console.log('2023: ', main(2023))
console.log('MMXXIII' === main(2023))

// Edge case
console.log('8: ', main(8))
console.log('IIX' === main(8))
console.log('18: ', main(18))
console.log('XIIX' === main(18))
console.log('28: ', main(28))
console.log('XXIIX' === main(28))