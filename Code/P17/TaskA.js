const mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function test() {
    const testStrings = {
        CV: 105,
        IX: 9,
        IIX: 8,
        IV: 4,
        DCC: 700
    }

    Object.keys(testStrings).forEach(element => {
        const output = convert(element)
        console.log(`${element}: ${testStrings[element]} = ${output} | ${output === testStrings[element]}`)
    })
}

function convert(roman) {
    let result = 0
    let previousCharacter = ''
    let secondPreviousCharacter = ''
    for (const c of roman.split("").reverse()) {
        if (previousCharacter === 'I' && c === 'I' && secondPreviousCharacter === 'X') {
            result -= mapping[c]
        }
        else if (mapping[previousCharacter] > mapping[c]) {
            result -= mapping[c]
        } else {
            result += mapping[c]
        }

        secondPreviousCharacter = previousCharacter
        previousCharacter = c
    }
    return result
}

function main(key) {

    console.log('Answer task A: ' + convert(key))
}

main()