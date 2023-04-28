function main() {
    console.log('Answer task A:')
    console.log( romanToNumber2('CDM') );
}

main()

// Transforms roman letter to number
// Input is roman letter
// Return the concurrent number
function romanToNumber(roman) {
    if (roman === 'I') {
        return 1
    } else if (roman === 'V') {
        return 5
    } else if (roman === 'X') {
        return 10
    } else if (roman === 'L') {
        return 50
    } else if (roman === 'C') {
        return 100
    } else if (roman === 'D') {
        return 500
    } else if (roman === 'M') {
        return 1000
    }
}

// Parse string from end to start
// For every character, check if it is greater than the previous one
function romanToNumber2(roman) {
    let result = 0
    let prev = 0
    for (let i = roman.length - 1; i >= 0; i--) {
        let curr = romanToNumber(roman[i])
        if (curr < prev) {
            result -= curr
        } else {
            result += curr
        }
        prev = curr
    }
    return result
}