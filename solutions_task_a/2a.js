function main() {
    console.log(romanToInt('IIX')) // 8
    console.log(romanToInt('XLIIX')) // 48
    console.log(romanToInt('XCIV')) // 94
    console.log(romanToInt('MCMXCIIX')) // 1998
}
main()

// 2a. Add or subtract, base cases.
// Answer by P9.
function romanToInt(roman) {
    var result = 0;
    var romanArray = roman.split('');
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (var i = 0; i < romanArray.length; i++) {
        var current = romanMap[romanArray[i]];
        var next = romanMap[romanArray[i + 1]];
        var next2 = romanMap[romanArray[i + 2]];

        if (next2 && next && current == 1 && next == 1 && next2 == 10){
            result += 8;
            i+=2;
        } else if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}