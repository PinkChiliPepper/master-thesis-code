function main() {
    console.log('Answer task A:')
}


function parseNumCharToRomanNumber(num, depth) {
    switch (depth) {
        case 0:
            return 'I'.repeat(num);
        case 1:
            return 'X'.repeat(num);
        case 2:
            return 'C'.repeat(num);
        case 3:
            return 'M'.repeat(num);
        default:
            break;
    }
}

function convertNumberToRomanNumber(num) {
    const numberStr = String(num);

    let romanNumber = '';

    const revertedString = numberStr.split("").reverse().join("");
    let depth = 0;

    for (var i = 0; i < revertedString.length; i++) {
        switch (revertedString[i]) {
            case '1':
                romanNumber += 'I'
                break;
            case '2':
                romanNumber += 'II'
                break;
            case '3':
                romanNumber += 'III'
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
        }
    }

    

    

    return romanNumber;
}

main()