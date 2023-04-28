function main() {
    console.log(romanToArabic('IIX'))
    console.log('Answer task A:')
}

// convert roman number to arabic
// make an exception for roman number that is IIX return 8
// return arabic number
function romanToArabic(roman) {
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

main()