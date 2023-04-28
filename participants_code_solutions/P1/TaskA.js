function main() {
    console.log('Answer task A:')
    const input = "X"

}
const ones = {
one: {roman: "I", decimal: 1},
four: {roman: "IV", decimal: 4},
five: {roman: "V", decimal: 5},
eight: {roman: "IIX", decimal: 8},
nine: {roman: "IX", decimal: 9},
ten: {roman: "X", decimal: 10},
}
const tens = {
forty: {roman: "XL", decimal: 40},
fifty: {roman: "L", decimal: 50},
ninety: {roman: "XC", decimal: 90},
hundred: {roman: "C", decimal: 100},
}
const hundreds = {
fourhundred: {roman: "CD", decimal: 400},
fivehundred: {roman: "D", decimal: 500},
ninehundred: {roman: "CM", decimal: 900},
thousand: {roman: "M", decimal: 1000},
}


const parseThousand = (input) => {
    let modifiedInput = input
    let parsedDecimal = undefined

    Object.keys(hundreds).forEach(item => {
        if(input.startsWith(item.roman)){ 
            parsedDecimal = item.decimal
            modifiedInput = input.split(item.roman).pop()
        }
    })

    return modifiedInput, parsedDecimal
}

const parseHundred = (input) => {

}

const parseTen = (input) => {
    return 0
}

main()