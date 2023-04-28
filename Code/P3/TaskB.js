function main() {
    console.log(isValid("([])"))
}

function isValid(code) {
    let stack = []

    for (let i = 0; i < code.length; i++) {
        if (stack[stack.length - 1] == code[i]) {
            stack.pop()
        } else {
            stack.push(code[i])
        }
    }

    return stack.length == 0
}

main()