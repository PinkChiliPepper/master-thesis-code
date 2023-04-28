const romanNumeralToNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function main(romanNumeral) {
    // Convert roman numeral to number
    let number = 0
    let previousNumber = 0
    let twoNumbersAgo = 0

    romanNumeral.split("").forEach(character => {
        const numberForCharacter = romanNumeralToNumber[character]
        if (numberForCharacter > previousNumber) {
            // Subtraction rule
            if (previousNumber === 1 && twoNumbersAgo === 1) {
                number += numberForCharacter - 4 * previousNumber
            } else {
                number += numberForCharacter - 2 * previousNumber
            }
        } else {
            number += numberForCharacter
        }
        twoNumbersAgo = previousNumber
        previousNumber = numberForCharacter
    })

    console.log('Answer task A: ' + number)
}

main("LXI")
main("XII")
main("IV")
main("IIX")d
main("LIIX")
main("LVIII")