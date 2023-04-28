function main(romanNumber) {
    let values = [{i: 1}, {x: 10}, {c: 100}, {l: 50}, {d:500}, {m: 1000}]
    console.log(number)
    let getkey = ""
    let convertedNumber = ""
    for(let i = 0; i < romanNumber.lenght; i++){
        if (romanNumber.lenght == 1) {
            // console.log(romanNumber[i])
            // convertedNumber = values[romanNumber[i]]
            getkey = Object.keys(values[romanNumber[i]])
            console.log(getkey)
        }
        // if (romanNumber.lenght == 2) {
        //     if (values[romanNumber[i]] < values[romanNumber[i+1]]) {
        //         convertedNumber = values[romanNumber[i+1]] - values[romanNumber[i]]
        //     }
        //     if (values[romanNumber[i]] > values[romanNumber[i+1]]) {
        //         convertedNumber = values[romanNumber[i]] + values[romanNumber[i+1]]
        //     }
        // }
    // console.log(convertedNumber)   

    }
    return convertedNumber
}
let number = "x";
main(number)



// Write a convert that writes roman numerals to integers. 
