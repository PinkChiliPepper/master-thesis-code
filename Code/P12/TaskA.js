function main() {
    console.log('Answer task A:')
    console.log(romanToInt("CCCLIIX"));
}

// Convert roman numerals to integers
// Roman string with I in front V or X is 4 or 9
// Roman string with X in front L or C is 40 or 90
// Roman string with C in front D or M is 400 or 900
// Roman string IIX is 8 instead of VIII
function romanToInt(roman) {
    let romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        if (roman[i] == "I" && (roman[i + 1] == "I" && roman[i + 2] == "X")) {
            total += 8;
            i += 2;
        } else if (roman[i] == "I" && (roman[i + 1] == "V" || roman[i + 1] == "X")) {
            total += romanValues[roman[i + 1]] - romanValues[roman[i]];
            i++;
        } else if (roman[i] == "X" && (roman[i + 1] == "L" || roman[i + 1] == "C")) {
            total += romanValues[roman[i + 1]] - romanValues[roman[i]];
            i++;
        } else if (roman[i] == "C" && (roman[i + 1] == "D" || roman[i + 1] == "M")) {
            total += romanValues[roman[i + 1]] - romanValues[roman[i]];
            i++;
        } else {
            total += romanValues[roman[i]];
        }
    }

    return total;
}

main()