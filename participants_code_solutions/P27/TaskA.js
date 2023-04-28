CHR_VALUE_MAP = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

function romanToInt(roman) {
    total = 0
    last = Infinity

    for (var i = 0; i < roman.length; i++) {
        val = CHR_VALUE_MAP[roman[i]]
        next = CHR_VALUE_MAP[roman[i + 1]]
        far = CHR_VALUE_MAP[roman[i + 2]]

        if (far && far == 10 && next == 1 && val == 1) {
            total -= 1
        } else if (next && val < next) {
            total -= val
        } else {
            total += val
        }
    }

    return total
}

function main() {
    console.log('Answer task A:')
    console.log(romanToInt("XXIV"))
    console.log(romanToInt("MIVIIX"))
}

main()