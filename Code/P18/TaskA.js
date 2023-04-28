function main() {
    console.log('Answer task A:')
}

function convertRomantoInteger(roman){
    let romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IIX':8,
    }

    let numbers = roman.split('').map((x) => romanNumbers[x])
    let result = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[i + 1]) {
            result -= numbers[i]
        } else {
            result += numbers[i]
        }
    }
    return result
}
console.log(convertRomantoInteger("IIX"));
main()