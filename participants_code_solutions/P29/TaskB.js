// Function that converts traditional roman numerals to integers
// with the exception that 8 is written as IIX in stead of VIII.
function roman2integer(str) {
    var romanNums = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    var total = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'I' && (str[i + 1] == 'V' || str[i + 1] == 'X') || (str[i + 1] == 'I' && str[i + 2] == 'X')) {
            total = total - romanNums['I'];
        }
        else if (str[i] == 'X' && (str[i + 1] == 'L' || str[i + 1] == 'C')) {
            total = total - romanNums['X'];
        }
        else if (str[i] == 'C' && (str[i + 1] == 'D' || str[i + 1] == 'M')) {
            total = total - romanNums['C'];
        }
        else {
            total = total + romanNums[str[i]]
        }
    }
    return total;
}

function main() {
    console.log(roman2integer('V'));
    console.log(roman2integer('IX'));
    console.log(roman2integer('IIX'));
    console.log(roman2integer('XL'));
    console.log('Answer task B:')
}

main()