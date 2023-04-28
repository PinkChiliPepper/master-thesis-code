const ROMAN_DICT = {
    'I': 1,
    'IV': 4,
    'V': 5, 
    'IIX': 8, 
    'IX': 9,
    'X': 10, 
    'XV': 40,
    'L': 50,
    'LC': 90,
    'C': 100, 
    'CD': 400,
    'D': 500, 
    'DM': 900,
    'M': 1000
}

const convert = (input) => {
    const numbers_array = []
    const input_array = input.split('')
    while (input_array.length > 0) {
        if (input_array[0] + input_array[1] in ROMAN_DICT) {
            numbers_array.push(String(input_array[0] + input_array[1]))
            input_array.pop(2)
        } else {
            numbers_array.push(input_array[0])
            input_array.pop()
        }
    }
    console.log(input_array)
    console.log(numbers_array)
}

function main() {
    convert('IV')
}

main()