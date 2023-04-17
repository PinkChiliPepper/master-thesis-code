function main() {
    console.log(romanToInt('IIX')) // 8
    console.log(romanToInt('XLIIX')) // 48
    console.log(romanToInt('XCIV')) // 94
    console.log(romanToInt('MCMXCIIX')) // 1998
}
main()

// 1b. Match on building blocks.
// Answer by P6.
function romanToInt(roman) {
    var arabic = 0;
    var romanNumList = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        IIX: 8,
        V: 5,
        IV: 4,
        I: 1
    };
    for (var i in romanNumList) {
        while (roman.indexOf(i) === 0) {
            arabic += romanNumList[i];
            roman = roman.replace(i, '');
        }
    }
    return arabic;
}