function main() {
    console.log('Answer task A:')

    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    const inputs = ['VI', 'III', 'IX', 'XII', 'LXI', 'IIX', 'XIIX']
    //              6       3      9    12      61     8      18

    const numeralToInt = (input) => {
        let biggest = ''
        let val = 0

        for (let i = 0; i <input.length; i++) {
            let element = input[i]
            if (!biggest) { biggest = element }

            if (values[element] <= values[biggest]) {
                val += values[element]
            } else {
                val = values[element] - numeralToInt(input.slice(0,i))
                break
            }
        }

        return val
    }

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i]
        console.log(input + ': ' + numeralToInt(input))
    }
}

main()