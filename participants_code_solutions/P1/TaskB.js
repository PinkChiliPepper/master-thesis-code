function main() {
    console.log('Answer task B:')
    const testInput = ['','()', '[]', '</>', '(', ')', '[', ']', '<', '/>', '(</></>)[]</>()', '(((())', '(/>)']
    testInput.forEach(item => { console.log(parseParentheses(item)) })
}

// Parses a string of parentheses and returns true if they are valid
// and false if they are not valid.
// The following combinations are accepted: (), [], </>
// Parentheses are allowed to be nested and chainged, for example: ([]) or ()()
const parseParentheses = (input) => {
    const stack = []
    const openParentheses = ['(', '[', '<']
    const closeParentheses = [')', ']', '/>']
    const pairs = {
        '(': ')',
        '[': ']',
        '<': '/>'
    }

    // Iterate over each character in the input string
    for (let i = 0; i < input.length; i++) {
        // This does not work with '/>' because it is two characters long
        // We fix this by checking if the current character is a '/' and the next
        // character is a '>'. If that is the case, we set the character to '/>'
        // and increment the index by one.
        let character = input[i]
        if (input[i] === '/' && input[i+1] === '>') {
            character = '/>'
            i++
        }

        // If we find an open parentheses, push it to the stack
        if (openParentheses.includes(character)) {
            stack.push(character)
        }

        // If we find a close parentheses, pop the last element from the stack
        // and check if it matches the current character
        if (closeParentheses.includes(character)) {
            const lastElement = stack.pop()

            if (pairs[lastElement] !== character) {
                return false
            }
        }
    }

    // If the stack is empty, all parentheses are valid
    if (stack.length === 0) {
        return true
    }

    // If we reach this point, the parentheses are not valid
    return false
}


main()