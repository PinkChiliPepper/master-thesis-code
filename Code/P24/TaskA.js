function main() {
    console.log('Answer task A:');
    console.log(romanToInt("MCMXCIV"));
}

// Function that converts roman numeral to integer
function romanToInt(roman) {
    var romanToInt = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    var result = 0;
    for (var i = 0; i < roman.length; i++) {
        var current = romanToInt[roman[i]];
        var next = romanToInt[roman[i + 1]];
        var nextNext = romanToInt[roman[i + 2]];
        if (nextNext == 10 && current == 1 && next == 1) {
            result -= current;
        }
        else if (current < next) {
            result -= current;
        }
        else {
            result += current;
        }
    }
    return result;
}


main();