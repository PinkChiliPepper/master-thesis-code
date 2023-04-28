// Check that all parenthesis are closed in the string and the same order as they were opened
function checkAllParenthesisAreClosedAndInOrder(input) {
    let stack = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            stack.push('(')
        } else if (input[i] === ')') {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0
}

// Check that all tags are closed with a slash in the string and in order
function checkThatAllTagsAreClosed(input) {
    let stack = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '<' && input[i + 1] !== '/') {
            stack.push('<')
        } else if (input[i] === '/' && input[i + 1] === '>') {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0
}

// Check that all square brackets are closed in the string and in order
function checkThatAllSquareBracketsAreClosed(input) {
    let stack = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '[') {
            stack.push('[')
        } else if (input[i] === ']') {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0
}

// Use all three functions above to check that all parenthesis, square brackets and HTML tags are closed in the string
function checkAllParenthesisSquareBracketsAndHtmlTagsAreClosed(input) {
    return checkAllParenthesisAreClosedAndInOrder(input) && checkThatAllTagsAreClosed(input) && checkThatAllSquareBracketsAreClosed(input)
}

// Check that all kinds of open parenthesis, tags, and square brackets are closed in the string in the correct order
function validateString(input) {
    let stack = []
    let lastClosed = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '<' && input[i + 1] !== '/') {
            stack.push('<')
            lastClosed = i
        } else if (input[i] === '(') {
            stack.push('(')
            lastClosed = i
        } else if (input[i] === '[') {
            stack.push('[')
            lastClosed = i
        } else if (input[i] === '/' && input[i + 1] === '>') {
            if (stack.length === 0 || stack[stack.length - 1] !== '<') {
                return false
            }
            stack.pop()
            lastClosed = i + 1
        } else if (input[i] === ')') {
            if (stack.length === 0 || stack[stack.length - 1] !== '(') {
                return false
            }
            stack.pop()
            lastClosed = i
        } else if (input[i] === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== '[') {
                return false
            }
            stack.pop()
            lastClosed = i
        }
    }
    return stack.length === 0 && lastClosed === input.length - 1
}


function main() {
    console.log('Answer task B:')
    // Test validateString function with several examples
    console.log(validateString('()')) // true
    console.log(validateString('())')) // false
    console.log(validateString('([()])')) // true
    console.log(validateString('([()])(')) // false
    console.log(validateString('([()])<')) // false
    console.log(validateString('([()])<')) // false
    console.log(validateString('([()])</>')) // true
    console.log(validateString('([()])<><')) // false
}

main()