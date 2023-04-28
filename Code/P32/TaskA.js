function main(roman_number) {
    console.log('Answer task A:')
    var number = 0
    let I = 1
    let V = 5
    let X = 10
    let L = 50
    let C = 100
    let D = 500
    let M = 1000
    var roman_array = roman_number.split('')

    if(roman_number == "IIX")
        return "8"
    console.log(roman_number[1])
    for(var i = 0; i < roman_array.length; i++){
        if(roman_array[i] == 'I' && roman_array[i+1]) {
            number = roman_array[i+1] - roman_array[i]
        }

    }
}

var roman_number = "XI"
main(roman_number)