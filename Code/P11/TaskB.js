function main() {
    console.log('Answer task B:')
    // test for function isBalanced
    console.log(isBalanced('</>') === true)

}

// check if string of brackets is balanced
// the brackets are: (), [], </>
function isBalanced(str) {
    const brackets = {
        '(': ')',
        '<': '/>',
        '[': ']'
    }
    const stack = []
    for (let i = 0; i < str.length; i++) {
        if (brackets[str[i]]) {
            stack.push(brackets[str[i]])
            console.log(stack)
        }
        } else if (str[i] === stack[stack.length - 1]) {
            stack.pop()
            console.log("pop")
            console.log(stack)
        } else {
            return false
        }
    }
    return stack.length === 0
}

main()