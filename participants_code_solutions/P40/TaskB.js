function main() {
    console.log('Answer task B:')
    //Get parentheses
    const parentheses = ['(', ')', '[', ']', '{', '}']
    //Have a function that checks if there is a valid arrangement of parentheses when a string is inputted
    //Make sure parentheses are closed in the correct order
    function validateParentheses (string) {
        let stack = []
        for (let i = 0; i < string.length; i++) {
            let current = string[i]
            if (current === '(' || current === '[' || current === '{') {
                stack.push(current)
            } else if (current === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                } else {
                    return false
                }
            } else if (current === ']') {
                if (stack[stack.length - 1] === '[') {
                    stack.pop()
                } else {
                    return false
                }
            } else if (current === '}') {
                if (stack[stack.length - 1] === '{') {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
        return stack.length === 0
    }
       

    console.log(validateParentheses('{[()]}'))

}

main()