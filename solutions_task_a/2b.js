function main() {
    console.log(romanToInt('IIX')) // 8
    console.log(romanToInt('XLIIX')) // 48
    console.log(romanToInt('XCIV')) // 94
    console.log(romanToInt('MCMXCIIX')) // 1998
}
main()

// 2b. Add or subtract, hardcoded.
// Answer by P4.
function romanToInt(string) {
    let total = 0
    const number = string.split("").reverse();
    for (let i = 0; i < number.length; i++) {
        switch (number[i]) {
            case 'M':
                total += 1000;
                break;

            case 'D':
                total += 500;
                break;
            case 'C' :
                if (number[i-1] && (number[i-1] == 'D' || number[i-1] == 'M')) {
                    total -= 100
                } else {
                    total += 100
                }
                break;
            case 'L' :
                total += 50;
                break;
            case 'X' :
                if (number[i-1] && (number[i-1] == 'L' || number[i-1] == 'C')) {
                    total -= 10
                } else {
                    total += 10
                }
                break;
            case 'V' :
                total += 5;
                break;
            case 'I' :
                if (number[i-2] && (number[i-1] == 'I' && number[i-2] == 'X')) {
                    total -= 1
                } else if (number[i-1] && (number[i-1] == 'V' || number[i-1] == 'X')){
                    total -= 1
                } else {
                    total +=1
                }
                break;
            default: break;

        }
    }
    return total
}
