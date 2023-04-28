// function main() {
//     console.log('Answer task A:')
// }

const romanToInt = (input) => {
    // Roman numeral with constraints where 8 is IIX and 9 is IX

    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let result = 0
    let i = 0

    while (i < input.length) {
        if (input[i] === "I" && input[i + 1] === "I" && input[i + 2] === "X") {
            result += 8
            i += 3
        } else {
            if (roman[input[i]] < roman[input[i + 1]]) {
                result += roman[input[i + 1]] - roman[input[i]]
                i += 2
            } else {
                result += roman[input[i]]
                i++
            }

            if (i === input.length) {
                return result
            }
        }
    }
    return result
}

console.log(romanToInt("MCMXCIIX"))