
// Check if the parentheses are balanced in the string
// Types of parantheses: (), [], <>
function checkParentheses(str) {
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '<') {
            stack.push(str[i])
        } else if (str[i] === ')') {
            if (stack.length === 0 || stack[stack.length - 1] !== '(') {
                return false
            }
            stack.pop()
        } else if (str[i] === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== '[') {
                return false
            }
            stack.pop()
        } else if (str[i] === '>') {
            if (stack.length === 0 || stack[stack.length - 1] !== '<') {
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0
}


function main() {
    console.log('Answer task A:')
}

main()