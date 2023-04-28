// convert romsn numerals to decimal numbers
// 8 is IIX instead of VIII

function romanToDecimal(roman) {
    let decimal = 0;
    let last = 0;
    let secondLast = 0;
    let current = 0;

    for (let i = 0; i < roman.length; i++) {
        switch (roman[i]) {
            case 'I':
                current = 1;
                break;
            case 'V':
                current = 5;
                break;
            case 'X':
                current = 10;
                break;
            case 'L':
                current = 50;
                break;
            case 'C':
                current = 100;
                break;
            case 'D':
                current = 500;
                break;
            case 'M':
                current = 1000;
                break;
        }

        if (current > last) {
            decimal -= last;
            decimal += current - last;
        } else {
            decimal += current;
        }

        if (current === 10 && last === 1 && secondLast === 1) {
            decimal -= 2;
        }

        secondLast = last;
        last = current;
        
    }

    return decimal;
}
function main() {
// TESTS for convert roman numerals to decimal numbers
    console.log(romanToDecimal('IIX') === 8);
    console.log(romanToDecimal('XV') === 15);
    console.log(romanToDecimal('XX') === 20);
    console.log(romanToDecimal('XL') === 40);
    console.log(romanToDecimal('LX') === 60);
    console.log(romanToDecimal('XC') === 90);
    console.log(romanToDecimal('CX') === 110);
    console.log(romanToDecimal('CD') === 400);
    console.log(romanToDecimal('DC') === 600);
    console.log(romanToDecimal('CM') === 900);
    console.log(romanToDecimal('MC') === 1100);
    console.log(romanToDecimal('MCMXCIX') === 1999);
}

main()