function main() {
    console.log(romanToInt('IIX')) // 8
    console.log(romanToInt('XLIIX')) // 48
    console.log(romanToInt('XCIV')) // 94
    console.log(romanToInt('MCMXCIIX')) // 1998
}
main()

// 1a. Check exceptions, then base characters
// Answer by P2.
function romanToInt(str) {
    var result = 0;

    function romanToIntConverter(char) {
        switch (char) {
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
            default:
                return 0
        }
    }

    for (var i = 0; i <= str.length; i++) {
        if (str[i+1]) {
            if (str[i] === 'I' && str[i+1] === 'V') {
                result += 4
                i++
                continue
            }

            if (str[i] === 'I' && str[i+1] === 'X') {
                result += 9
                i++
                continue
            }

            if (str[i+2]) {
                if (str[i] === 'I' && str[i+1] === 'I' && str[i+2] === 'X') {
                    result += 8
                    i++
                    i++
                    continue
                }
            }

            if (str[i] === 'X' && str[i+1] === 'L') {
                result += 40
                i++
                continue
            }

            if (str[i] === 'X' && str[i+1] === 'C') {
                result += 90
                i++
                continue
            }
            if (str[i] === 'C' && str[i+1] === 'D') {
                result += 500
                i++
                continue
            }
            if (str[i] === 'C' && str[i+1] === 'M') {
                result += 900
                i++
                continue
            }
        }
        result += romanToIntConverter(str[i]);
    }
    return result
}