function main(string) {
    console.log('Answer task B:' + checkParentheseBalance(string))
}

// This function checks the checkParentheseBalance function
// Based on 10 use cases (see below)
function testCheckParentheseBalance() {
    const testCases = [
        // Returns true
        { input: '()', expected: true },
        { input: '[]', expected: true },
        { input: '</>', expected: true },
        { input: '()[]</>', expected: true },
        { input: '(())[]</>', expected: true },
        { input: '()[]</>()', expected: true },
        { input: '()[]</>()[]', expected: true },
        { input: '()[]</>()[]</>', expected: true },
        { input: '()[]</>()[]</>()', expected: true },
        { input: '()[]</>()[]</>()[]', expected: true },
        { input: '([]</>()[</>()[]])', expected: true },
        { input: '([])', expected: true },
        { input: '<()/>', expected: true },
        // Returns false
        { input: ')', expected: false },
        { input: ']', expected: false },
        { input: '/>', expected: false },
        { input: '())', expected: false },
        { input: '[]]', expected: false },
        { input: '/></>', expected: false },
        { input: '())[]</>', expected: false },
        { input: '())[]</>()[]</>()[]</>', expected: false },
    ]

    testCases.forEach((testCase, index) => {
        const output = checkParentheseBalance(testCase.input)
        console.log(`Test case ${index + 1}: ${output === testCase.expected} | ${output}`)
    })
}


// This functions checks if the parentheses are balanced
// There are three parentheses: (), [], </>
function checkParentheseBalance(string) {
    const openParentheses = ['(', '[', '<']
    const closeParentheses = [')', ']', '>']
    const stack = []

    string = string.replace('/>', '>')

    for (const c of string) {
        if (openParentheses.includes(c)) {
            stack.push(c)
        } else if (closeParentheses.includes(c)) {
            const openParenthese = stack.pop()
            if (openParenthese === undefined) {
                return false
            }
            const openIndex = openParentheses.indexOf(openParenthese)
            const closeIndex = closeParentheses.indexOf(c)
            if (openIndex !== closeIndex) {
                return false
            }
        }
    }

    return stack.length === 0
}

main()