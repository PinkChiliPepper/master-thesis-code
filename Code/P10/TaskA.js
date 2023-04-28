function main() {
    console.log('Answer task A:')
    var number = convert('XIV')
    var case8 = convert('IIX')
    console.log(number)
    console.log(case8)
}

main()

// Convert roman numbers to integers
function convert(n){
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0

    for (let i = 0; i < n.length; i++){
        if(n[i] == 'I' && n[i+1] == 'I' && n[i+2] == 'X'){
            result += 8
            i += 2
        }
        else if (roman[n[i]] < roman[n[i+1]]){
            result += roman[n[i+1]] - roman[n[i]]
            i++
        } else {
            result += roman[n[i]]
        }
    }

    return result
}