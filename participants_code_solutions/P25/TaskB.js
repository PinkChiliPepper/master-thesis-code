function main() {
    console.log('Answer task B:')
    console.log('1. ', '()[]{}', validateParentheses('()[]{}'))
    console.log('2. ', '([)]', validateParentheses('([)]'))
    console.log('3. ', ')(', validateParentheses(')('))
    console.log('4. ', '(', validateParentheses(')'))
    console.log('5. ', '(<aaa_bbb>)', validateParentheses('(</>)'))
} 

// Validates if a string has a valid arrangement of parentheses
// To be valid, an open bracket always has to be closed by the same type of bracket and in the correct order
function validateParentheses(str) {
    let stack = []
    let open = ['(', '[', '{']
    let close = [')', ']', '}']
    for (let i = 0; i < str.length; i++) {
        if (open.includes(str[i])) {
            stack.push(str[i])
        } else if (close.includes(str[i])) {
            let last = stack.pop()
            if (open.indexOf(last) !== close.indexOf(str[i])) {
                return false
            }
        }
    }

    return stack.length === 0
}


main()