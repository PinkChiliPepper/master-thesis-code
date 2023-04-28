// Convert a Roman number (given as a string) to an integer.
// The Roman number is guaranteed to be valid.
const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function convertRomanNumber(romanNumber) {
    let number = 0
    let duplicateCount = 0
    let previousChar
    for (const char of romanNumber.split("")) {
        if (values[previousChar] < values[char]) {
            number += values[char] - (2 * (duplicateCount + 1)) * values[previousChar]
            duplicateCount = 0
        } else {
            number += values[char]
            if (values[previousChar] === values[char]) {
                duplicateCount++
            } else {
                duplicateCount = 0
            }
        }
        previousChar = char
    }
    return number
}

function main() {
    console.log(convertRomanNumber("I"))
    console.log(convertRomanNumber("II"))
    console.log(convertRomanNumber("IIX"))
    console.log(convertRomanNumber("XIIX"))
    console.log(convertRomanNumber("IV"))
    console.log(convertRomanNumber("XII"))
    console.log(convertRomanNumber("XL"))
    console.log(convertRomanNumber("LXI"))
    console.log(convertRomanNumber("XXXXXXL")) // Is not valid, but "works"
    console.log(convertRomanNumber("XC"))
    console.log(convertRomanNumber("MDCD"))
    console.log(convertRomanNumber("MCMLXXXIV"))
}

main()