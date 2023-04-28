function main() {
    console.log('Answer task A:')
    console.log("I: " + romanToInteger("I") + " should be 1")
    console.log("IV: " + romanToInteger("IV") + " should be 4")
    console.log("IIX: " + romanToInteger("IIX") + " should be 8")
    console.log("IX: " + romanToInteger("IX") + " should be 9")
    console.log("X: " + romanToInteger("X") + " should be 10")
    console.log("XL: " + romanToInteger("XL") + " should be 40")
    



}
// write a converter to convert a string of roman numerals to an integer, but IIX should return 8
function romanToInteger(string) {
    let romanNumeralDict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let total = 0
    let lastRomanNumeral = 0
    let secondLast = 0

    for (let i = 0; i < string.length; i++) {
        let currentRomanNumeral = romanNumeralDict[string[i]]

        if (currentRomanNumeral == 10 && lastRomanNumeral == secondLast == 1) {
            total -= 2
        }
        if (currentRomanNumeral > lastRomanNumeral) {
            total -= lastRomanNumeral
        } else {
            total += lastRomanNumeral
        }
        secondLast = lastRomanNumeral
        lastRomanNumeral = currentRomanNumeral
    }
    return total + lastRomanNumeral
}


main()