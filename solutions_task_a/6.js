function main() {
    console.log(romanToInt('IIX')) // 8
    console.log(romanToInt('XLIIX')) // 48
    console.log(romanToInt('XCIV')) // 94
    console.log(romanToInt('MCMXCIIX')) // 1998
}
main()

// 6. Substitute the special cases.
// No participant coded this, this solution was only mentioned
// during the brainstorming task.
function romanToInt(roman) {
    function replaceRomanNumerals(str) {
        str = str.replace(/IV/g, 'IIII') //4
        str = str.replace(/IIX/g, 'VIII') //8
        str = str.replace(/IX/g, 'VIIII') //9
        str = str.replace(/XL/g, 'XXXX') //40
        str = str.replace(/XC/g, 'LXXXX') //90
        str = str.replace(/CD/g, 'CCCC') //400
        str = str.replace(/CM/g, 'DCCCC') //900
        return str;
    }
    newRoman = replaceRomanNumerals(roman)
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    number = 0
    for (var i = 0; i < newRoman.length; i++) {
        number +=  current = romanMap[newRoman[i]]
    }

    return number
}
